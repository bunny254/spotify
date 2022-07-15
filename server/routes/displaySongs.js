const router = require('express').Router();
const uploadSong=require('../models/uploadSong');


router.get('/api/songs', async(req, res)=>{
    try {
        const songs= await uploadSong.find();
        res.json("All Songs should be here")
        //res.send({data:songs, message:"All songs!"})
        
    } catch (error) {
        res.status(400).send({message:error.details[0].message})        
    }
})

module.exports=router;