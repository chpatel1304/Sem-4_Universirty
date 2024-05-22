var ps=require("fs");
 var data=ps.readFileSync("C:\\Sem-4_Universirty\\FSD-2\\Chp-2\\pqr.txt");
 console.log(data);
 ps.readFile("C:\\Sem-4_Universirty\\FSD-2\\Chp-2\\pqr.txt",function(err,data){
 if(err){return console.error(err); }
 console.log(data.toString());});
 console.log("Program ended");
