// Year is leap year is not 
var url = require("url")
var addr="http://localhost:8080/default.html?year=2024&Month=Feb"
var q=url.parse(addr,true)
console.log(q);
var year=q.query.year
console.log(year);
if (year%4==0 & year%100!=0 | year%400==0){
    console.log("It Is An Leap Year")
}
else{
    console.log("It Is Not an Leap Year");
}