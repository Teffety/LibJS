'use strict';


//when u use this code, u must write xhr.onload()in ur code
export default class Ajax {
constructor(method, url, type){
  this.method = method;
  this.url = url;
  this.type = type;
  this.data = data;
}
  ajaxPost() {
    let xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(  this.method, this.url, this.type);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(  this.method, this.url);
    } else {
      // CORS not supported.
      xhr = null;
    }


xhr.send(this.data);

    return xhr;

  }

  ajaxGet(){
    let xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(  this.method, this.url, this.type);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(  this.method, this.url);
    } else {
      // CORS not supported.
      xhr = null;
    }

    xhr.send();
    return xhr;

  }
}
