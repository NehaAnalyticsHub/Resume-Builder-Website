 const mongoose=require("mongoose");
//import mongoose from "mongoose";

const notesSchema= mongoose.Schema({
   name: String,  
   title: String ,  
   about: String,  
   phoneNumber: Number,
    email: String,
    school: String,
    college: String,
    university: String,
    skill1: String,
    skill2: String,
    skill3: String,
    job1: String,
    job2: String,
    job3: String,
    project1: String,
    project2: String,
    project3: String,
    achievement1: String,
    achievement2: String,
    achievement3: String,
    interest1: String,
    interest2: String,
    interest3: String,
    certification1: String,
    certification2: String,
    certification3: String,
    language1: String,
    language2: String
  });
  

var Note=mongoose.model("Note",notesSchema);

//export default Note;
 module.exports=Note;