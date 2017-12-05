const router = require("express").Router();
const db = require("../models");
const request = require("request-promise");
const cheerio = require('cheerio');
const igdb = require('igdb-api-node').default;
const client = igdb("fa8bc67db1518b344b54f3cb76bc4e66")
const passport = require("../config/passportRoutes");
const User = require("../models/User");
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const bCrypt = require('bcrypt-nodejs'); 
const mongoose = require("mongoose");
// router.post("/register", [
//         check("email", "Enter a Valid Email Address").isEmail()],
//          (req, res)=>{
//         check("password", "Enter a Valid Password").isLength({
//             min: 4
//         }).equals(req.body.confirmpassword);
//         let errors = req.validationResult;

//         if (errors) {
//             console.error(errors);
//         } else {
//             var newUser = new User(req.body);

//             newUser.password = newUser.generateHash(req.body.password);

//             newUser.save((err, doc) => {
//                 if (err) {
//                     console.error(err);
//                 } else {
//                     console.log(doc);
//                 }
//             })
//         }
// });
router.post('/register', [
    check('email').isEmail().withMessage('Enter a valid email')
    .trim()
    .normalizeEmail(),

    check('password', 'Enter a valid password').isLength({min:6})
    ], (req, res) => {
        var newUser = new User(req.body);

        // Added
        var generateHash = function(password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        }

        newUser.password = generateHash(req.body.password);

        console.log(newUser, "Hello") // the password does get hashed here. Need to fix how it gets saved to the db

        // This doesn't work just yet. the Save mongoose function, I believe, is for the client side. I think .create was the function for the server side
        newUser.save(function(err, doc) {
            if (err) {
                console.log(err)
            } else {
                console.log(doc);
            } 
        })
    }
)
router.route("/homePopularGames")
    .get((req, res) => {
        client.games({
            fields: ["name", "cover", "popularity"],
            order: "popularity:desc",
            limit: 10
        }).then(response => {
            res.send(JSON.stringify(response.body, null));
            console.log(response.body);
        }).catch(error => {
            throw error;
        });
        
    });

router.route("/homeIgdbNewsFeed")
    .get((req, res) => {
        client.feed({
            fields: "*",
            limit: 10
        }).then(response => {
            res.send(JSON.stringify(response.body, null));
            console.log(response.body);
        }).catch(error => {
            console.log("error", error);
            throw error;
        });
        
    });

router.route("/login")
    .post(passport.authenticate("local"), function (req, res) {
         console.log(req.user);
          res.redirect("/");
});

router.route("/retailScrape/:searchString")
    .get((req, res, next) => {

        let spaceless = req.params.searchString.replace(/\s/g, '+');

        let gamestopResults = {};
       
        request("https://www.gamestop.com/browse?nav=16k-" + spaceless, function (err, resp, html) {
            var $ = cheerio.load(html);

            $("div.products").map(function (i, element) {

                //Product Image

                gamestopResults.usedImg = "https://www.gamestop.com" + $(element).children("div.preowned_product").first().children("div.alpha").children("a").children("img").attr("src");

                //product price
                gamestopResults.usedPrice = $(element).children("div.preowned_product").first().children("div.purchase_info").children("p.pricing.ats-product-price").text();

                gamestopResults.usedTitle = $(element).children("div.preowned_product").first().children("div.product_info.grid_12").children("h3.ats-product-title").text();
            });

            $("div.products").map(function (i, element) {

                //Product Image
                gamestopResults.newImg = "https://www.gamestop.com" + $(element).children("div.new_product").first().children("div.alpha").children("a").children("img").attr("src");

                //product price
                gamestopResults.newPrice = $(element).children("div.new_product").first().children("div.purchase_info").children("p.pricing.ats-product-price").text();

                gamestopResults.newTitle = $(element).children("div.new_product").first().children("div.product_info.grid_12").children("h3.ats-product-title").text();
            });


        }).then(() => {
            let gamestopArray = [gamestopResults];
            res.json(gamestopArray);
        });
    });
    
router.route("/articleScrape")
    .get((req, res) => {
        
        let articleResults = {};
        let articleArray = [];

        request("https://www.gamespot.com", function (err, resp, html) {
            var $ = cheerio.load(html)
            
            //Popular article feed on gamespot.com

            $("article").each(function (i, element) {
                
                //Popular article titles
                articleResults[i] = 
                
                {
                    title: $(element).children("a").children("div.media-body").children("h3.media-title").text(), 
                    summary: $(element).children("a").children("div.media-body").children("p.media-deck").text(),
                    url: $(element).children("a").attr("href"),
                    img: $(element).children("a").children("figure").children("div").children("img").attr("src")
                };

                articleArray.push(articleResults[i]);
                // console.log(articleResults[i]);
          
            });
        }).then(() => {  
        res.json(articleArray);
    });
});

router.route("/savedValues/:searchString")
    .get((req, res) => {
        client.games({
            search: req.params.searchString,
            fields: ["name", "cover", "release_dates.human", "summary", "websites"],
            limit: 1
        }).then(response => {
            res.send(JSON.stringify(response.body, null));

        }).catch(error => {
            throw error;
        });
        
    });

router.route("/saveArticle")
    .post((req, res) => {
        console.log("We hit saved Article route-----------------------", req.body)
        var articleData = {
            source: req.body.url,
            title: req.body.title,
            articleText: req.body.summary
        }
        db.Article
            .create(articleData)
            .then(results => {
                console.log("DB Results!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", results)
                res.json(results)
            })
            .catch(err => {
                console.log("Error?????????????????????????", err)
                res.status(500)
                .json(err)
            });
    });

router.route("/saveGame")
    .post((req, res) => {
        db.Game
            .create(req.body)
            .then(results => res.json(results))
            .catch(err => res.status(500)
                .json(err));
    });

router.route("/retreiveArticles")
    .get((req, res) => {
        db.Article
            .find({})
            .then(results => res.json(results))
            .catch(err => res.status(500)
                .json(err));
    });

router.route("/retreiveGames")
    .get((req, res) => {
        db.Games
            .find({})
            .then(results => res.json(results))
            .catch(err => res, status(500)
                .json(err));
    });

router.route('/deleteArticle/:id')
    .delete((req, res) => {
        db.Article
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    });
router.route('/deleteGame/:id')
    .delete((req, res) => {
        db.Game
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    });

module.exports = router;