const router = require("express").Router();
const db = require("../models");
const request = require("request-promise");
const cheerio = require('cheerio');

const igdb = require('igdb-api-node').default;
const client = igdb("fa8bc67db1518b344b54f3cb76bc4e66")


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
                console.log(articleResults[i]);
          
            });
        }).then(() => {  
        res.json(articleArray);
    });
});

router.route("/savedValues/:searchString")
    .get((req, res) => {
        client.games({
            search: req.params.searchString,
            fields: ["name", "cover", "release_dates.date-lt", "summary", "websites"],
            limit: 1
        }).then(response => {
            res.send(JSON.stringify(response.body, null));

        }).catch(error => {
            throw error;
        });
    });

router.route("/saveArticle")
    .post((req, res) => {
        db.Article
            .create(req.body)
            .then(results => res.json(results))
            .catch(err => res.status(500)
                .json(err));
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