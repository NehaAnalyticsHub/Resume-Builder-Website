const express = require("express")
const { formSubmit1 } = require("../Controller/formController1")
//import express from 'express'
//import { formSubmit } from "../Controller/formController.js";
// import { createnewpost, findpost, getpostsforhomepage } from "../Controllers/PostController.js";

const router = express.Router();

router.post("/submit1", formSubmit1);
// router.get('/:id', findpost)
// router.get('/:id/homepage', getpostsforhomepage)

module.exports = router;

//export default router;
