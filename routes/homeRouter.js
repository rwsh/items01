const express = require("express");
const homeController = require("../controllers/home.js"); // подключаем контроллер
const homeRouter = express.Router(); // создаем роутер 
 
homeRouter.use("/about", homeController.about); // используем контроллер для "/about/"
homeRouter.use("/", homeController.index); // используем контроллер для "/"

module.exports = homeRouter; // экспортируем роутер