const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
        // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
        .then(() => {
            console.log("connection Open!")
        })
        .catch(err => {
            console.log("error")
            console.log(err)
        })

}

const movieSchema = mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model("Movie", movieSchema);
const matrix = new Movie({ title: "Matrix", year: 1999, score: 90, rating: "PG13" })