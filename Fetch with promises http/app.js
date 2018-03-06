const http = new EasyHTTP;

// 'GET' users Request
http.get('https://jsonplaceholder.typicode.com/users')
   .then(data => console.log(data))
   .catch(err => console.log(err));

// User Data
const data = {
   name: 'John Smith',
   username: 'johnnyD',
   email: 'johnnyd@me.com'
}

// Create post - POST request
http.post('https://jsonplaceholder.typicode.com/users', data)
   .then(data => console.log(data))
   .catch(err => console.log(err));
   
/* logged to the console
   {name: "John Smith", username: "johnnyD", email: "johnnyd@me.com", id: 11}
      email:"johnnyd@me.com"
      id:11
      name:"John Smith"
      username:"johnnyD"
      __proto__:Object
*/

// update post - PUT Request
// requires an id in the url
http.put('https://jsonplaceholder.typicode.com/users/2', data)
   .then(data => console.log(data))
   .catch(err => console.log(err));

/* logged to the console: now the data has id:2, instead of 11
   {name: "John Smith", username: "johnnyD", email: "johnnyd@me.com", id: 2}
      email:"johnnyd@me.com"
      id:2
      name:"John Smith"
      username:"johnnyD"
      __proto__:Object
*/


