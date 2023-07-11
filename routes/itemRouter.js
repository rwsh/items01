const express = require("express");

const itemController = require("../controllers/item.js"); // подключаем контроллер
const itemRouter = express.Router(); // создаем роутер 
 
itemRouter.use("/postitem", itemController.postItem); // используем контроллер для "/postitem"
itemRouter.use("/add", itemController.addItem); // используем контроллер для "/add"
itemRouter.use("/", itemController.getItems); // используем контроллер для "/"
 
module.exports = itemRouter; // экспортируем роутер