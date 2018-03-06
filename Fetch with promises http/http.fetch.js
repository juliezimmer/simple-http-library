/* 
Simple HTTP Library using Fetch API
   Using ES6 classes with Promises
@version 2.0.0
@author Julie Zimmer
@license MIT
*/

class EasyHTTP {
   // make HTTP 'GET' request
   get(url) {
      // wrap the fetch in a promise
      return new Promise((resolve, reject) => {
         fetch(url)
         .then(res => res.json()) 
         .then(data => resolve(data))
         .catch(err => reject(err));
      });
   }
}