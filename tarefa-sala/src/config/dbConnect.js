const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://Elijane:gui250714@cluster0.6a3tyc2.mongodb.net/reprograma");

let db = mongoose.connection;

module.exports = db;