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
    age:Number,
    poistion:String,
    salary:Number
},{versionKey:false})

const emp=new mg.model("emp",myschema)
const createDoc=async () => {
    try {
        // const personData=new person({name:"Zeni",Surname:"Chakli",age:0.5})
        // const personData1=new person({name:"Tanvi",Surname:"Dhadho",age:4})
        const result=await emp.insertMany([{name:"Chirag",age:21,poistion:"Software Developer",salary:200000},{name:"Yasvi",age:2,poistion:"Receptionist",salary:2000},{name:"Tanvi",age:4,poistion:"Salesperson",salary:400},{name:"Ekal",age:22,poistion:"Backend Expert",salary:100000},{name:"Zeni",age:0.5,poistion:"Office Girl",salary:150}])
        console.log(result);
    } catch (error) {
        console.log("There Is Error");   
    }
}
createDoc()
