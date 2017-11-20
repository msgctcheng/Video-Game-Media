const  mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    }
    summary: {
        type: String,
        required: true
    },
    img-url: {
        type: String,
        required: true
    }
})
const Game = mongoose.model("Games", gameSchema);

module.exports = Game;