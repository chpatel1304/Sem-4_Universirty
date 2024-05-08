var a=require("fs")
a.writeFile("pqr.txt","Today Is Aungh Day !\n",()=>{
    a.appendFile("pqr.txt","is it ?",()=>{
        a.readFile("pqr.txt",(err,data)=>{
            if (err){
                console.log(err);
            }
            else{
                console.log(data.toString());
            }
        })
    })
})