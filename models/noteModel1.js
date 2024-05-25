const mongoose=require("mongoose");
//import mongoose from "mongoose";

const notesSchema1= mongoose.Schema({
   name: String,  
   email: String,
   pass: String
  });
  

var Note1=mongoose.model("Note1",notesSchema1);

//export default Note;
 module.exports=Note1;