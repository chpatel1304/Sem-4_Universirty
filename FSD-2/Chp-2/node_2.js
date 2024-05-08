var a = require("fs")
a.appendFile("abc.txt","Hello Auranghutan",function (err){
    if (err){
        console.log(err)
    }
    else{
        console.log("Written Completed");
    }
})