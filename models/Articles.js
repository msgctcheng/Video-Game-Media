const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    source: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    // articleDate: {
    //     type: String,
    //     required: true
    // },
    articleText: {
        type: String,
        required: true
    }
});

const Article = mongoose.model("Articles", articleSchema); 

module.exports = Article;