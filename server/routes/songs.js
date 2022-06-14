const router= require('express').Router();
const {User}=require('../models/users');
const {Song,validate}=require('../models/song');
const auth = require('../middleware/auth');
const admin=require('../middleware/admin');
const validObjectid = require('../middleware/validObjectid');

//create a song
router.post('/',admin, async (req,res)=>{
    const {error}=validate(req.body);
    if(error) return res.status(400).send({message:error.details[0].message});

    const song = await Song(req.body).save();
    res.status(201).send({data:song, message:"Song successfully added!"});

})

//get all songs
router.get('/',admin, async (req,res)=>{
    try {
        const songs= await Song.find();
        res.status(200).send({data:songs, message:"All songs!"})
    } catch (error) {
        res.status(400).send({message:error.details[0].message})        
    }
})

router.patch('/:id', admin, async (req,res)=>{
    const song= await Song.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.status(200).send({data:song, message:"Song updated sucessfully!"})
})

router.delete('/id:', [validObjectid,admin],async(req,res)=>{
    try {
        const song= await Song.findByIdAndDelete(req.params.id)
        res.status(200).send({message:"Song successfully deleted!"})
        
    } catch (error) {
        res.status(400).send({message:error.details[0].message})        
    }
})

//like song
router.put('/like/:id',[validObjectid,auth], async (req,res)=>{
    let resMessage="";
    const song= await Song.findById(req.params.id);
    if(!song) return res.status(400).send({message:"Song does not exist!"})

    const user= await User.findById(req.user._id);
    const index=user.likedSongs.indexOf(song._id);
    if(index===-1){
        user.likedSongs.push(song._id)
        resMessage="Added to liked songs!"
    }else{
        user.likedSongs.splice(index, 1);
        resMessage="Removed from your liked songs"
    }
    res.status(200).send({message:resMessage})
})

//get all liked Songs
router.get('/like', auth, async(req,res)=>{
    const user= await User.findById(req.user._id)
    const songs= await Song.find({_id:user.likedSongs})
    res.status(200).send({data:songs});
})

module.exports = router