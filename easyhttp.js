function easyHTTP(){
   this.http = new XMLHttpRequest();
}

// Prototype Methods for the XMLHttpRequest object
// HTTP GET Request
easyHTTP.prototype.get = function(url, callback){
   this.http.open('GET', url, true);

   // http.onload should be an arrow function to work properly. One way to get around using an arrow function (which introduces lexical 'this') is to introduce a new var: let self = this; It allows "this" to be captured in the onload function scope.
   let self = this;
   this.http.onload = function() {
      if(self.http.status === 200) {
         // the callback takes in null for an error if there is one. 
         callback(null, self.http.responseText)
      } else { // if the http.status is NOT 200
         callback(`Error: ${self.http.status}`);
      }
   }

   this.http.send();
}

// HTTP POST Request

// HTTP PUT Request

// HTTP DELETE Request