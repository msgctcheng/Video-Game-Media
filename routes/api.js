const router = require("express").Router();
const db =require("../models");


const igdb = require('igdb-api-node').default;
const client = igdb("fa8bc67db1518b344b54f3cb76bc4e66")

router.route("/savedValues/:searchString")
    .get((req, res) => {
        console.log(res, "hi");
        client.games({
            search: req.params.searchString,
            fields: ["name", "cover", "release_dates.date", "summary", "websites"],
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
            .catch(err => res,status(500)
            .json(err));
    });

    router.route('/deleteArticle/:id')
    .delete((req, res) => {
        db.Article
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    });
    router.route('/deleteGame/:id')
    .delete((req, res) => {
        db.Game
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    });

    module.exports = router;