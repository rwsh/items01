const express = require("express"); // подключаем Express
const mongoose = require("mongoose"); // подключаем Mongoose
const app = express(); // создаем приложение

const itemRouter = require("./routes/itemRouter.js"); // подключаем роутер 
const homeRouter = require("./routes/homeRouter.js"); // подключаем роутер 

app.set("view engine", "hbs"); // устанавливаем движок шаблонов
app.set("views", "pages"); // устанавливаем путь к страницам сайта (шаблонам)
app.use(express.static('./static')); // устанавливаем папку для статического контента
app.use(express.urlencoded({ extended: false }));

const PORT = 3000 // номер порта, на котором будет работать наше приложение
const DBName = "person" // имя нашей БД

app.use("/items", itemRouter); // устанавливаем роутер работы с данными
app.use("/", homeRouter); // устанавливаем роутер для главной страницы

// функция запуска нашего приложения
async function main() {
    try{
        // подключаемся к локальной базе данных MongoDB и нашей БД
        await mongoose.connect("mongodb://127.0.0.1:27017/" + DBName); 
        app.listen(PORT); // включаем прослушивание порта
        console.log("Сервер подключен...");
    }
    catch(err) {
        return console.log(err); // выводим ошибку
    }
}
main(); // запускаем приложение


// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", async() => {
    await mongoose.disconnect(); // отключаемся от БД
    console.log("Приложение завершило работу");
    process.exit(); // завершаем работу
});
