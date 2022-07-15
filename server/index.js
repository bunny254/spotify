require('dotenv').config();
require('express-async-errors');
const express=require('express');
const cors=require('cors');
const multer = require('multer');
const db=require('./db/db');
const uploadSong= require('./models/uploadSong');
const userRoutes=require('./routes/users');
const authRoutes=require('./routes/auth');
const songRoutes=require('./routes/songs');
const playlistRoutes=require('./routes/playlist');
const searchRoutes=require('./routes/search');
const displaySongsRoute=require('./routes/displaySongs');
const { assert } = require('joi');
const app=express()
const port=3500;


const start=async()=>{
    try {
        await db()
        app.listen(port, ()=>{
            console.log(`App is listening on ${port}...`);
        })
    } catch (error) {
        console.log(error);  
    }
}
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.json("Welcome to the home page")
})

//Register new user route
app.use('/api/auth/users', userRoutes);

//Existing user login route
app.use('/api/auth/login', authRoutes);

//Display songs
app.use('/api/songs',      songRoutes);

//Display playlist
app.use('/api/playlists',  playlistRoutes);

//Search function
app.use('/api/search',     searchRoutes);

//Get All Uploaded Songs
app.use('/songs', displaySongsRoute);


//upload storage
const Storage=multer.diskStorage({
    destination:'uploadSong',
    filename:(req,file,cb)=>{
        cb(null, Date.now+file.originalname)
    }
});

const upload=multer({
    storage:Storage
}).single('audio1')

app.post('/api/upload-song',async(req,res)=>{
    upload(req,res,(err)=>{
        try {
            const newSong= new uploadSong({
                name:req.body.name,
                audio:{
                    data:req.file.filename,
                    contentType:'audio/mp3'
                }
            })
            newSong.save()
            .then(()=>{
                res.status(201).send("Successfully Uploaded Song!")
            })
            
        } catch (error) {
            console.log(error);
            
        }
        
    }) 
})


start()
