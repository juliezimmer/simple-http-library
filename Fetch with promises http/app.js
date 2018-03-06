const http = new EasyHTTP;

// 'GET' users Request
http.get('https://jsonplaceholder.typicode.com/users')
   .then(data => console.log(data))
   .catch(err => console.log(err));

// HTTP 'POST' request
