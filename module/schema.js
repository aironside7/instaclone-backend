const mongoose= require("mongoose")

// mongoose.connect("")
mongoose.connect("mongodb+srv://ani7:ani7@cluster0.zvzfjof.mongodb.net/instagitdata?retryWrites=true&w=majority")
.then(()=>{
    console.log("Sucessfully connected with Database")
})
.catch((error)=>{
    console.log("error")
})

const schema = mongoose.Schema
const userSchema= new schema({
    image:{type:String},
    name:{type:String,required:true},
    location:{type:String,required:true},
    description:{type:String}
})
let InstaUser=mongoose.model("instaUser",userSchema)

module.exports=InstaUser