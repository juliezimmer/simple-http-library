// instantitate the eastHTTP object
const http = new easyHTTP;

// Get posts
// use get prototype function
http.get('http://jsonplaceholder.typicode.com/posts', function(err, posts){
   if (err) {
      console.log(err);
   } else {
      console.log(posts);
   }
});
