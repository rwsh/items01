const Item = require("../models/item.js");

exports.addItem = function (request, response){
    response.render("add.hbs");
};

exports.getItems = async function(request, response){
    const allItems = await Item.find({}); // получаем все элементы из БД в массив
    response.render("items.hbs", { items: allItems }); // отправляем в шаблон массив с данными
};

exports.postItem= async function(request, response){
    if(!request.body) return response.sendStatus(400); // проверяем, что запрос не пустой

    const itemName = request.body.name; // копируем значения из формы
    const itemCost = request.body.cost;

    const item = new Item({name: itemName, cost: itemCost}); // создаем объект согласно схеме
      
    await item.save(); // сохраняем в базе данных
    response.redirect("/items"); // переходим на список вещей
};