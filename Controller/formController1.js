//import Note from "../models/noteModel.js";
const Note1 = require("../models/noteModel1")

const formSubmit1 = async (req, res) => {
    const {
        name,
        email,
        pass
      } = req.body;
      const formData = new Note1({
         name,
         email,
         pass
      });
    
      try {
        // Create a new FormData object and save it to the database
        await formData.save();
        res.status(200).json(formData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}







 module.exports = {formSubmit1};