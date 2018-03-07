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

// Create user - POST request
http.post('https://jsonplaceholder.typicode.com/users', data)
   .then(data => console.log(data))
   .catch(err => console.log(err));
   
// update user - PUT Request
// requires an id in the url
http.put('https://jsonplaceholder.typicode.com/users/2', data)
   .then(data => console.log(data))
   .catch(err => console.log(err));



// DELETE request
http.delete('https://jsonplaceholder.typicode.com/users/2')
   .then(data => console.log(data))
   .catch(err => console.log(err));




