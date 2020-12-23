const mongoose= require("mongoose");
const msgSchema= mongoose.Schema({
    roomName: String,
    host: String,
    people:Array
});

module.exports = mongoose.model('rooms', msgSchema);