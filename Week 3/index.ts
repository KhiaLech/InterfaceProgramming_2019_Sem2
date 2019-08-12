import axios from 'axios';

var url = "http://jsonplaceholder.typicode.com/users";


// ----- Loop through
axios({
    method: 'get',
    url: url,
    responseType: 'json'
})
    .then(function (response) {

        var data = response.data;

        var UserArr:UserInterface[]=[];

        for (var i = 0; i < data.length; i++) {
           // console.log(data[i]);
           //let user1:User = new User(data[i].id, data[i].username);

          let _id = data[i].id;
          let _username = data[i].username;

            UserArr.push({id:_id, username:_username});
        }

        for(var i=0; i<UserArr.length;i++){
            console.log(UserArr[i].id);
        }
    })

/* SHORTENED VERSION
axios.get(url).then(function(response){
    console.log(response);
})  */

class User {
    private id: number;
    private username: string;

    constructor(id: number, username: string) {
        this.id = id;
        this.username = username;
    }
}

let user1:User = new User(100,"yeet");

interface UserInterface {
    id: number;
    username: string;
}