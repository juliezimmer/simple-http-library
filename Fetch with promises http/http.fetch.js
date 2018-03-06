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
   
   // make HTTP 'POST' request
   post(url, data) {
      // wrap the fetch in a promise
      return new Promise((resolve, reject) => {
         // the post request requires the addition of an object with some methods in the fetch parens
         fetch(url, {
            method: 'POST',
            headers: {
               'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
         })
         .then(res => res.json()) 
         .then(data => resolve(data))
         .catch(err => reject(err));
      });
   }

   // Make an HTTP PUT Request
   put(url, data) {
      // wrap the fetch in a promise
      return new Promise((resolve, reject) => {
         // the post request requires the addition of an object with some methods in the fetch parens
         fetch(url, {
            method: 'PUT',
            headers: {
               'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
         })
         .then(res => res.json()) 
         .then(data => resolve(data))
         .catch(err => reject(err));
      });
   }

   // Make a DELETE Request
   delete(url) {
      // wrap the fetch in a promise
      return new Promise((resolve, reject) => {
         // the post request requires the addition of an object with some methods in the fetch parens
         fetch(url, {
            method: 'DELETE',
            headers: {
               'Content-type': 'application/json'
            }
         })
         .then(res => res.json()) 
         .then(data => resolve('resource has been deleted'))
         .catch(err => reject(err));
      });
   }



}