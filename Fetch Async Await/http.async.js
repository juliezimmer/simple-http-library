/* 
Simple HTTP Library using Fetch API
   Using ES6 classes with Promises
@version 2.0.0
@author Julie Zimmer
@license MIT
*/

class EasyHTTP {
   // make HTTP 'GET' request
   async get(url) {
      const response = await fetch(url);
      const resData = await response.json();
      return resData;
   }
    
// make HTTP 'POST' request
   async post(url, data) {
      const response = await fetch (url, {
         method: 'POST',
         headers: {
            'Content-type': 'application/json'
            },
         body: JSON.stringify(data)
      });
      const resData = await response.json();
      return resData;
   }

// Make an HTTP PUT Request
   async put(url, data) {
      const response  = await fetch (url, {
            method: 'PUT',
            headers: {
               'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
         });
         const resData = await response.json();
         return resData;
   }

// Make a DELETE Request
   async delete(url) {
      const response = await fetch(url, {
         method: 'DELETE',
         headers: {
            'Content-type': 'application/json'
         }
      });
      const resData = await "Resource Deleted";  
      return resData;
   }
}

