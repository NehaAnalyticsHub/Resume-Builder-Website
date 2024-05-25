const express = require("express")
const { formSubmit2 } = require("../Controller/formController2")
//import express from 'express'
//import { formSubmit } from "../Controller/formController.js";
// import { createnewpost, findpost, getpostsforhomepage } from "../Controllers/PostController.js";

const router = express.Router();

router.post("/submit2", formSubmit2);
// router.get('/:id', findpost)
// router.get('/:id/homepage', getpostsforhomepage)

module.exports = router;

//export default router;
