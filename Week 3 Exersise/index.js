"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "";
axios_1["default"].get('http://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
    var data = response.data;
    for (var i = 0; i < data.length; i++) {
        var _id = data[i].id;
        var _title = data[i].title;
        console.log(_id);
        console.log(_title);
    }
});
