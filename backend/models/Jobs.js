import mongoose  from "mongoose";

const Job =new mongoose.Schema({
    title : {type : String,required :true},
    company : {type :String ,required:true},
    location:String,
    skills : [String],
    description : String,
    salary : String
},
{timestamp :true}
)
export default mongoose.model('Job',Job);