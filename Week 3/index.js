"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "http://jsonplaceholder.typicode.com/users";
// ----- Loop through
axios_1["default"]({
    method: 'get',
    url: url,
    responseType: 'json'
})
    .then(function (response) {
    var data = response.data;
    var UserArr = [];
    for (var i = 0; i < data.length; i++) {
        // console.log(data[i]);
        //let user1:User = new User(data[i].id, data[i].username);
        var _id = data[i].id;
        var _username = data[i].username;
        UserArr.push({ id: _id, username: _username });
    }
    for (var i = 0; i < UserArr.length; i++) {
        console.log(UserArr[i].id);
    }
});
/* SHORTENED VERSION
axios.get(url).then(function(response){
    console.log(response);
})  */
var User = /** @class */ (function () {
    function User(id, username) {
        this.id = id;
        this.username = username;
    }
    return User;
}());
var user1 = new User(100, "yeet");
