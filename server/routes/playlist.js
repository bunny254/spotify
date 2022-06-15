const router= require('express').Router();
const {Playlist, validate}= require('../models/playlist');
const {Song}= require('../models/song');
const {User}=require('../models/users');
const auth= require('../middleware/auth');
const validObjectId=require('../middleware/validObjectid');
const Joi=require('joi');


//create playlist

router.post('/', auth, async(req,res)=>{
    const {error}=validate(req.body);
    if(error) return res.status(400).send({message:error.details[0].message});

    const user= await User.findById(req.user._id);
    const playlist=await Playlist({...req.body,user:user._id}).save();
    user.playlists.push(playlist._id);
    await user.save();

    res.status(201).send({data:playlist})
})


//edit playlist or update
router.put('/edit/:id', auth, async(req,res)=>{
    const schema= Joi.object({
        name:Joi.string().required(),
        desc:Joi.string().allow(""),
        img:Joi.string().allow("")
    });
    const {error} =schema.validate(req.body);
    if(error) return res.status(400).send({error:error.details[0].message});

    const playlist = await Playlist.findById(req.params.id);
    if(!playlist) return res.status(404).send({message:"playlist does not exist!"})

    const user= await User.findById(req.user._id);
    if(!user._id.equals(playlist.user))
         return res.status(403).send({message:"Denied privillages to update playlist"})

    playlist.name=req.body.name;
    playlist.desc=req.body.desc,
    playlist.img=req.body.img;
    await playlist.save()

    res.status(201).send({message:"Playlist updated sucessfully!"})
})

//Add a song to playlist
router.put("/add-song",auth, async(req,res)=>{
    const schema=Joi.object({
        playlistId:Joi.string().required(),
        songId:Joi.string().required()
    })
    const {error}=schema.validate(req.body);
    if(error) return res.status(400).send({message:error.details[0].message});

    const user= await User.findById(req.user._id);
    const playlist = await Playlist.findById(req.body.playlistId);
    if(!user._id.equals(playlist.user))
         return res.status(403).send({message:"Denied privillages to add song"})
    if(playlist.songs.indexOf(req.body.songId)===-1){
        playlist.songs.push(req.body.songId)
    };
    await playlist.save()
    res.status(200).send({data:playlist, message:"Added to playlist successfully!"})
})

//remove song from playlist
router.put("/remove-song",auth,async(req,res)=>{
    const schema=Joi.object({
        playlistId:Joi.string().required(),
        songId:Joi.string().required()
    })
    const {error}=schema.validate(req.body);
    if(error) return res.status(400).send({message:error.details[0].message});
    const user= await User.findById(req.user._id);
    const playlist = await Playlist.findById(req.body.playlistId);
    if(!user._id.equals(playlist.user))
         return res.status(403).send({message:"Denied privillages"})
    const index = playlist.songs.indexOf(req.body.songId);
    playlist.songs.splice(index, 1);
    await playlist.save();
    res.status(200).send({data:{playlist, message:"Removed from playlist "}})
})

//Return user's playlists
router.get("/favourites",auth,async(res,req)=>{
    const user=await User.findById(req.user._id);
    const playlists=await playlist.find({_id:user.playlists})
    res.status(200).send({data:{playlists, message:"Favourite Libraries"}})
})


//get random playlist
router.get('/any', auth, async(req,res)=>{
    const playlist=await Playlist.aggregate([{$sample:{size:9}}]);
    res.status(200).send({data:playlist});

})

//get playlist by id
router.get('/:id',[validObjectId,auth],async(req,res)=>{
    const playlist=await Playlist.findById(req.params.id);
    if(!playlist) return res.status(404).send({message:"Not found!"})

    const songs= await Song.find({_id:playlist.songs});
    res.status(200).send({data:{playlist,songs}})
})

//All playlists
router.get('/',auth,async(req,res)=>{
    const playlists=await Playlist.find();
    res.status(200).send({data:playlists})
})

//Delete playlist by id
router.delete('/:id', [validObjectId, auth], async(req,res)=>{
    const user= await User.findById(req.user._id);
    const playlist= await Playlist.findByIdAndDelete(req.params.id);
    if(!user._id.equals(playlist.user))
        return res.status(403).send({message:"Denined access privillage to delete"})
    
    const index= user.playlists.indexOf(req.params.id);
    user.playlists.splice(index, 1);
    await user.save();
    await playlist.remove();
    res.status(200).send({message:"Removed from playlist"})
})




module.exports=router


