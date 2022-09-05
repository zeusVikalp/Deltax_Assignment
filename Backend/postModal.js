const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
    song_name:String,
    dor:String,
    image:String,
    artist_name:String
});

const PostModal= new mongoose.model("posts",PostSchema);
module.exports=PostModal;