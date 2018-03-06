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
easyHTTP.prototype.post = function (url, data, callback) {
   this.http.open('POST', url, true);

   // set the content type, which is in the HTTP header
   // 1st parameter: the option to set. In this case, the option is 'Content-type' 
   // 2nd parameter: what 'Content-type' is set to. In this case, content-type is set to a value of application/json, which is the data type that is being used. 
   this.http.setRequestHeader('Content-type', 'application/json');

   let self = this;
   this.http.onload = function() {
      // the callback takes in null for an error if there is one. 
      callback(null, self.http.responseText);
      // responseText should be the new POST that was added. It should have an id of 101 because the last item id in the GET request responseText was 100.
   }
   
   // This contains the data that is being posted 
   // 'data' is a JS object when it is passed into this.send(). It needs to be stringified, which converts it to JSON. 
   this.http.send(JSON.stringify(data));
}

// HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
   this.http.open('PUT', url, true);
   this.http.setRequestHeader('Content-type', 'application/json');

   let self = this;
   this.http.onload = function() {
      callback(null, self.http.responseText);
      
   }
   this.http.send(JSON.stringify(data));
}

// HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback){
   this.http.open('DELETE', url, true);

   let self = this;
   this.http.onload = function() {
      if(self.http.status === 200) { 
         callback(null, 'Post Deleted');
      } else { // if the http.status is NOT 200
         callback(`Error: ${self.http.status}`);
      }
   }
   this.http.send();
}