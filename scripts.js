"use strict";
/* find all of the words that start with the letter 't' and return total.
find all of the words that end with the letter 'e' and return total.
find all of the words that start and end with the letter 't' and 'e' return total.
*/

var preamble = 'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.';

function firstLast() {
  var t = 0; // initialize t total
  var e = 0; // initialize e total
  var both = 0; // initialize both total

  // split to array of substrings and set to lowercase
  var splitStr = preamble.split(" ");

  for(var i = 0; i < splitStr.length; i++){
    // find words that starts with 't'
    if(splitStr[i].startsWith("t") && splitStr[i].endsWith("e")){
      both++;
    }
    // find words that end with 'e'
    if(splitStr[i].endsWith("e")){
      e++;
    }
    // find words that starts with 't'
    if(splitStr[i].startsWith("t")){
      t++;
    }
   }


   // total up all forms of the counts
   var total = "<div class='total-containers'><span class='letters'>T : </span>" + t + "</div>" + "<div class='total-containers'><span class='letters'> E : </span>" + e + "</div>" + "<div class='total-containers'><span class='letters'>T & E : </span>" + both + "</div>";

   // get element on page to print to page
   var print = document.getElementById('finalCount');

   // RETURN STATEMENT
   return print.innerHTML = total;

}// END

firstLast();


/////////// ONCLICK EVENT TO SHOW MODAL DATA ////////////////

var getModal = document.getElementById('modal');

var showModal = function(){
    getModal.style.transform = "translateY(0)";
}

var closeModal = function(){
    getModal.style.transition = "all .7s ease";
    getModal.style.transform = "translateY(-200vh)";
}
