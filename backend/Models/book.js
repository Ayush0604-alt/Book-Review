const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    description: { type: String },
    image: { type: String }, // URL or local path
    genre: { type: String },
    publicationYear: { type: Number },
    status: { type: String },
    pages: { type: Number },
    wiki: { type: String },
    averageRating: { type: Number, default: 0 }, // calculated from reviews
    numberOfReviews: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
