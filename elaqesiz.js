function name2() {
    console.log("here");
}

const name3 = function () {
    console.log("here2");
}

const name6 = () => {
    console.log("here2");
} // arrow

(function () {
    console.log("here4");
})() // anonymous

console.log(btoa("salam")); // encode
console.log(atob("c2FsYW0=")); // decode

console.log(String.fromCharCode(114)); // from ascii code to letter
console.log("salam".charCodeAt(0)); // ascii code at index
// -----

const var2 = "necesen"
// Template literals
const text = `salam
${var2}
salam`; // string interpolation 
console.log(text.split("\n"));
const arr = [];
arr.push("1");
arr.push(1);
console.log(arr);
// arr = [2,3] // error
// eval("console.log(25+63)")
console.log(new URLSearchParams("http://site.co?a=1"));

// Array
//     atob / btoa
//     eval
//     decodeURI, URLSearchParams
//     length, split, replace

// DOM Basics

//    What is DOM?
//     Relationship between HTML, CSS, and JavaScript
//     DOM tree structure (parent, child, siblings)

//         window.open
//     window.location
//         Navigating with location.href
//         Reloading with location.reload()

//     Functions
//         Function declaration and expression
//         Arrow functions
//         Anonymous functions
//         Function hoisting
//         setTimeout / setInterval

//     cookie
//     localStorage
//     sessionStorage
