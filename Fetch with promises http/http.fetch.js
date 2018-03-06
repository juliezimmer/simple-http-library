/* 
Simple HTTP Library using Fetch API
   Using ES6 classes with Promises
@version 2.0.0
@author Julie Zimmer
@license MIT
*/

class EasyHTTP {
   // make HTTP 'GET' request
   // synchronous approach without promises
   get(url) {
      fetch(url)
         // this is mapped to the json using an arrow function
         .then(res => res.json()) 
         .then(data => console.log(data))
         .catch(err => console.log(err));
   }
}