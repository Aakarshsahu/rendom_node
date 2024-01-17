const express = require("express");

const {homepage , alldata , insertpart , insertcat , partcode , allcat , allparts} = require("../controllers/indexContriller");

const router = express.Router();

const userModel = require("../models/part");

router.get("/",homepage);

router.get("/alldata",alldata);

router.post("/insertpart",insertpart)

router.post("/insertcetegory",insertcat)

router.post("/partcode",partcode)

router.get("/allcategories",allcat)

router.get("/allparts",allparts)

module.exports = router;