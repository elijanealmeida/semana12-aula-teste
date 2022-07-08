<<<<<<< HEAD
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Elijane:gui250714@cluster0.6a3tyc2.mongodb.net/reprograma");
=======
const mongoose = require ("mongoose");

mongoose.connect('mongodb+srv://username:<password>@cluster0.1vuycki.mongodb.net/?retryWrites=true&w=majority');
>>>>>>> 8afa62411e07a4ee3a7afafc6e32fc4382b68d1b

let db = mongoose.connection;

module.exports = db;