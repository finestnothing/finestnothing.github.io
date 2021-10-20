/*
 * Starter file 
 */
(function() {
  "use strict";

  window.addEventListener("load", init);

  function init() {
    document.getElementById("encrypt-it").addEventListener("click", encryptItClick);
  }

  function encryptItClick() {
      var text = document.getElementById("input-text").value.toLowerCase();
      var result = "";
      for(var i = 0; i<text.length; i++){
          if(text[i] < 'a' || text[i] > 'z'){
              result += text[i];
          } else {
              //97 in value of 'a', 122 is value of 'z'
              result += String.fromCharCode((text.charCodeAt(i)-97+1)%26+97);
          } 
          console.log(text.charCodeAt(i));
      }
      document.getElementById("result").innerHTML = result;
  }

})();
