require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./Models/book'); // adjust path if needed

// Connect to MongoDB
const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect:", err);
        process.exit(1);
    }
};

// Sample books data
const books = [
    {
        title: "Lord of the Mysteries",
        author: "Cuttlefish That Loves Diving",
        description: `Amid the waves of steam and whirring machinery, who could rise above the ordinary and achieve the extraordinary? In the fogs of history and shadows of the unknown, who whispered the secrets of fate? I awoke from the realm of mysteries and opened my eyes to a world brimming with danger and wonder.
                     Firearms, cannons, battleships, and airships clashed with mystical machines. Potions, divination, curses, hanged men, and sealed artifacts held secrets untold. The lights shone brilliantly, yet the hidden truths of the world were never far away. This is the legend of the “Fool.”`,
        image: "/images/1.jpg",
        genre: "Fantasy, Mystery",
        publicationYear: 2018,
        status: "Completed",
        pages: 1432,
        wiki:'  https://lordofthemysteries.fandom.com/wiki/Klein_Moretti',
        averageRating: 0,
        numberOfReviews: 0
    },
    {
        title: "Reverend Insanity",
        author: "Gu Zhen Ren",
        description: `Humans are clever in tens of thousands of ways, but Gu are the true, refined essences of Heaven and Earth.
                    The Three Temples are corrupt, and the demon is reborn.
                    The past exists only as a fading dream, yet a familiar name rises again.
                    This is the story of a time traveler who continues to be reborn, navigating a world where Gu grow, evolve, and shape destiny.
                    The Spring and Autumn Cicada, the Venomous Moonlight Gu, the Wine Insect, the All-Encompassing Golden Light Insect, the Slender Black Hair Gu, the Gu of Hope…
                    And amidst them all, a mighty demon moves according to his own desires, unconstrained and unstoppable.`,
        image: "/images/2.jpg",
        genre: "Dark Fantasy",
        publicationYear: 2015,
        status: "Completed",
        pages: 2234,
        wiki:'https://reverend-insanity.fandom.com/wiki/Fang_Yuan',
        averageRating: 4.4,
        numberOfReviews: 800
    },
    {
        title: "The Beginning After the End",
        author: "TurtleMe93",
        description: `King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability. However, solitude lingers closely behind those with great power. Beneath the glamorous exterior of a powerful king lurks the shell of man, devoid of purpose and will.
                Reincarnated into a new world filled with magic and monsters, the king has a second chance to relive his life. Correcting the mistakes of his past will not be his only challenge, however. Underneath the peace and prosperity of the new world is an undercurrent threatening to destroy everything he has worked for, questioning his role and reason for being born again.`,
        image: "/images/3.jpg",
        genre: "Fantasy, Adventure",
        publicationYear: 2017,
        status: "Ongoing",
        pages: 530,
        wiki:"https://tbate.fandom.com/wiki/Arthur_Leywin",
        averageRating:0,
        numberOfReviews:0
    }
    
];

// Seed function
const seedDB = async () => {
    await connectToDB();

    try {
        await Book.deleteMany({}); // optional: clear existing collection
        const inserted = await Book.insertMany(books);
        console.log(`Inserted ${inserted.length} books successfully.`);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();
