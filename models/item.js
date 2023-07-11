const mongoose = require("mongoose"); // подключаем модуль "mongoose"
 
const Schema = mongoose.Schema;
// установка схемы
const itemScheme = new Schema({
    name: String,
    cost: Number
});

module.exports = mongoose.model("Item", itemScheme); // экспортируем схему