//write node js scrpit to take 5 single digit Element seprated by white space in .txt file print sorted array of these 5 Elements in terms integer a node js server
var fs=require("fs")
fs.writeFileSync("task1.txt","4 9 3 7 2")
var data=fs.readFileSync("task1.txt","utf-8")
data=data.split(" ").sort()
console.log(data)
for (i=0;i<data.length;i++){
    data[i]=parseInt(data[i])
}
console.log(data.sort());