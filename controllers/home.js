
exports.index = function (request, response) {
    response.render("index.hbs"); // ссылаемся на файл-шаблон
};

exports.about = function (request, response) {
    response.render("about.hbs"); // ссылаемся на файл-шаблон
};