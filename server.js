 const express = require("express");
 const bodyParser = require("body-parser")
 const cors = require("cors");
 const mongoose = require("mongoose");
 const formroute = require("./routes/formRoute.js");
 const formroute1 = require("./routes/formRoute1.js");
 const formroute2 = require("./routes/formRoute2.js");

// const Note = require("./models/noteModel");
// const router = express.Router();
//import express from "express";
//import bodyParser from "body-parser";
//import mongoose from "mongoose";
//import cors from "cors";
//import formroute from "./routes/formRoute.js";

const app = express();

const uri = "mongodb://localhost:27017/resumedata";
// const port = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log(`Listening on port 5000`)))
  .catch((error) => console.log(error));

// const formroute = require("./routes/formRoute")

app.use("/form1", formroute1);

app.use("/form2", formroute2);

app.use("/form", formroute);



// router.post("/submit-form", async (req, res) => {
//   console.log("on");
//   const {
//     name,
//     title,
//     about,
//     phoneNumber,
//     email,
//     school,
//     college,
//     university,
//     skill1,
//     skill2,
//     skill3,
//     job1,
//     job2,
//     job3,
//     project1,
//     project2,
//     project3,
//     achievement1,
//     achievement2,
//     achievement3,
//     interest1,
//     interest2,
//     interest3,
//     certification1,
//     certification2,
//     certification3,
//     language1,
//     language2,
//   } = req.body;
//   const formData = new Note({
//     name,
//     title,
//     about,
//     phoneNumber,
//     email,
//     school,
//     college,
//     university,
//     skill1,
//     skill2,
//     skill3,
//     job1,
//     job2,
//     job3,
//     project1,
//     project2,
//     project3,
//     achievement1,
//     achievement2,
//     achievement3,
//     interest1,
//     interest2,
//     interest3,
//     certification1,
//     certification2,
//     certification3,
//     language1,
//     language2,
//   });

//   try {
//     // Create a new FormData object and save it to the database
//     await formData.save();
//     res.status(200).json(newUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
//   // const formData = req.body;
//   // const collection = client.db("resumedata").collection("formdatas");
//   // collection.insertOne(formData, (err, result) => {
//   //   if (err) {
//   //     console.log(err);
//   //     res.status(500).send({ error: 'An error occurred while saving the form data.' });
//   //   } else {
//   //     res.send({ success: true });
//   //   }
//   // });
// });

// router.post("/test-form", async (req, res) => {
//   console.log("on");
//   let newUser = {
//     name: "success"
//   }
//   res.status(200).json(newUser);

// const formData = req.body;
// const collection = client.db("resumedata").collection("formdatas");
// collection.insertOne(formData, (err, result) => {
//   if (err) {
//     console.log(err);
//     res.status(500).send({ error: 'An error occurred while saving the form data.' });
//   } else {
//     res.send({ success: true });
//   }
// });
// });
