/* find all of the words that start with the letter 't' and return total.
find all of the words that end with the letter 'e' and return total.
find all of the words that start and end with the letter 't' and 'e'.
*/

var preamble = 'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.';

function firstLast() {
  var t = 0; // initialize t total
  var e = 0; // initialize e total
  var both = 0; // initialize both total

  // arg1 split to array of substrings and set to lowercase
  var splitStr = preamble.toLowerCase().split(" ");

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
   var total = "T = " + t + " E = " + e + " T & E = " + both;

   // get element on page to print to page
   var print = document.getElementById('finalCount');

  return print.innerHTML = total;

}// END
