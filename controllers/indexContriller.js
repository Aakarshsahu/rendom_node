const partModel = require("../models/part.js");
const catModel = require("../models/category.js");

exports.homepage = async(req, res, next) => {
    res.status(200).json({ message: "It's the homepage" });
}

exports.alldata = (req, res) => {
    try {
        partModel.find().then(function (alldata) {
            res.status(200).json(alldata);
        })
    } catch (error) {
        console.log(error)
        res.status(401).json(error);
    }
}

exports.insertpart = async(req, res) => {
    try {

        const categoryId  = await catModel.findOne({id : req.body.unique_id})

        partModel.create({
            unique_id: req.body.unique_id,
            part_code: req.body.part_code,
            name: req.body.name,
            categoryId : categoryId
            
        }).then(function(createdPart){
            res.status(200).json(createdPart);
        })

    } catch (error) {
        console.log(error)
        res.status(401).json(error)
    }
}

exports.insertcat = (req,res) => {
    try {
        catModel.create({
            catname : req.body.name,
            id : req.body.id
        }).then( function(createdPart){
            res.status(200).json(createdPart);
        })

        
    } catch (error) {
        console.log(error)
        res.status(401).json(error)
    }
}

exports.partcode = (req,res)=>{
    try {
        partModel.findOne({part_code : req.body.part_code}).then(function(partcode){
            res.status(200).json(partcode);
        })


        
    } catch (error) {
        console.log(error)
        res.status(401).json(error)
    }
}

exports.allcat = (req,res)=>{
    try {
        catModel.find().then(function(allcat){
            res.status(200).json(allcat)
        })
    } catch (error) {
        console.log(error)
        res.status(401).json(error)
    }
}

exports.allparts = (req,res)=>{
    try {
        partModel.find().then(function(allpart){
            res.status(200).json(allpart);
        })
    } catch (error) {
        console.log(error)
        res.status(401).json(error)
    }
}





