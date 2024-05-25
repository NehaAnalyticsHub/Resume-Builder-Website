//import Note from "../models/noteModel.js";
 const Note = require("../models/noteModel")

const formSubmit = async (req, res) => {
    const {
        name,
        title,
        about,
        phoneNumber,
        email,
        school,
        college,
        university,
        skill1,
        skill2,
        skill3,
        job1,
        job2,
        job3,
        project1,
        project2,
        project3,
        achievement1,
        achievement2,
        achievement3,
        interest1,
        interest2,
        interest3,
        certification1,
        certification2,
        certification3,
        language1,
        language2,
      } = req.body;
      const formData = new Note({
        name,
        title,
        about,
        phoneNumber,
        email,
        school,
        college,
        university,
        skill1,
        skill2,
        skill3,
        job1,
        job2,
        job3,
        project1,
        project2,
        project3,
        achievement1,
        achievement2,
        achievement3,
        interest1,
        interest2,
        interest3,
        certification1,
        certification2,
        certification3,
        language1,
        language2,
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

 module.exports = {formSubmit};