//import Note from "../models/noteModel.js";
const Note2 = require("../models/noteModel2")
const Note1 = require("../models/noteModel1")

const formSubmit2 = async (req, res) => {
  const { email, pass } = req.body;

  // Perform the necessary validation or data retrieval from MongoDB based on the entered email and password

  try {
    // Add your validation or data retrieval logic here

    // Example:
    const user = await Note1.findOne({ email, pass }); // Assuming you have a Note1 model for user data

    if (user) {
      // Login successful
      res.status(200).json({ message: "Login successful" });
    } else {
      // Login failed
      res.status(401).json({ message: "Login failed. Please check your credentials." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }





}







 module.exports = {formSubmit2};