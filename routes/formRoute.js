 const express = require("express")
 const { formSubmit } = require("../Controller/formController")
//import express from 'express'
//import { formSubmit } from "../Controller/formController.js";
// import { createnewpost, findpost, getpostsforhomepage } from "../Controllers/PostController.js";

const router = express.Router();

router.post("/submit", formSubmit);
// router.get('/:id', findpost)
// router.get('/:id/homepage', getpostsforhomepage)

 module.exports = router;

//export default router;
