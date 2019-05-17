// fetch('https://reqres.in/api/users?page=2')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });
// /////////////////////////////////////
// var misCabeceras = new Headers({'Content-Type': 'json/text'});

// var miInit = { method: 'GET',
//                headers: misCabeceras,
//             //    mode: 'cors',
//                cache: 'default' };

// fetch('https://reqres.in/api/users?page=2',miInit)
// .then(function(response) {
//   return response.json();
// })
// .then(function(json) {
//     console.log(json);

// });
///////////////////////////////////////
var url = 'https://reqres.in/api/users';
var data = {
    "name": "morpheus",
    "job": "leader"
};

fetch(url, {
  method: 'POST', 
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}).then((res) => {
    return res.json()
})
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));