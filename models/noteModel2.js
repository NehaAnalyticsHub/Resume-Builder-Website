const mongoose=require("mongoose");
//import mongoose from "mongoose";

const notesSchema2= mongoose.Schema({ 
   email: String,
   pass: String
  });
  

var Note2=mongoose.model("Note2",notesSchema2);

//export default Note;
 module.exports=Note2;