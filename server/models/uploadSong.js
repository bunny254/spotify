const mongoose = require ('mongoose');

const AddSongSchema=new mongoose.Schema({
    name:{
        type:String
    },
    audio:{
        data:Buffer,
        contentType:String
    }
})
const uploadSong=mongoose.model('uploadSong', AddSongSchema)
module.exports= uploadSong;