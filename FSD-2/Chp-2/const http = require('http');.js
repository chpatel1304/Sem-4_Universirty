const http = require('http');
const fs = require('fs');
const url = require('url');

const inputUrl = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";
var parse=new URL(inputUrl)
const c1=parse.searchParams.get("c1")
console.log(c1);
// const parsedUrl = new URL(inputUrl);

// const c1 = parsedUrl.searchParams.get('c1');
// const c2 = parsedUrl.searchParams.get('c2').replace(/\+/g, ' ');
// const c3 = parsedUrl.searchParams.get('c3').replace(/\+/g, ' ');
// const fragment = parsedUrl.hash;

// // Create the output string
// const output = `${c1}!\n${c3} ${c2}\n${fragment}`;

// console.log(c1);
// console.log(c2);
// console.log(c3);
// console.log(fragment);