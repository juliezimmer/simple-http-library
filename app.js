// instantitate the eastHTTP object
const http = new easyHTTP;

// GET request (all)
// use get prototype function
http.get('http://jsonplaceholder.typicode.com/posts', function(err, posts){
   if (err) {
      console.log(err);
   } else {
      console.log(posts);
   }
});

// GET request (single post)
http.get('http://jsonplaceholder.typicode.com/posts/1', function(err, post){
   if (err) {
      console.log(err);
   } else {
      console.log(post);
   }
});

// POST request
// create data
const data = {
   title: 'Custom Post',
   body: 'This is a custom post'
};

// Create post
// 1st parameter: API url
// 2nd parameter: data to send
// 3rd parameter: callback function
http.post('http://jsonplaceholder.typicode.com/posts', data, function(err, post){
   if (err) {
      console.log(err);
   } else {
      console.log(post);
   }
});

// PUT request - update post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err,post){
   if (err) {
      console.log(err);
   } else {
      console.log(post);
   }
});

// DELETE request
http.delete('http://jsonplaceholder.typicode.com/posts/1', function(err, response){
   if (err) {
      console.log(err);
   } else {
      console.log(response);
   }
});

