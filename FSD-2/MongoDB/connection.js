const mg=require("mongoose")

mg.connect("mongodb://127.0.0.1:27017/mydbs")
    .then(()=>{
         console.log('Success');
    })
    .catch((err)=>{
        console.log(err);   
    })

mg.pluralize(null)

const myschema=new mg.Schema({
    name:{type:String,required:true},
    Surname:String,
    age:Number,
    Date:{type:Date,default:new Date()},
},{versionKey:false})

const person=new mg.model("person",myschema)

// const personData1= new person({name:"Ekal",Surname:"Sorathiya",age:22})
// const personData2= new person({name:"Vraj",Surname:"Shah",age:20})
// personData1.save()
// personData2.save()

const createDoc=async () => {
    try {
        // const personData=new person({name:"Zeni",Surname:"Chakli",age:0.5})
        // const personData1=new person({name:"Tanvi",Surname:"Dhadho",age:4})
        const result=await person.updateMany({},{$set:{Date:new Date("2020-11-09")}})
        console.log(result);
    } catch (error) {
        console.log("There Is Error");   
    }
}
createDoc()
