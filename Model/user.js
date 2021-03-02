const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
    username: String,
    pwd: String
}, { timestamps: true });
module.exports = mongoose.model("User", usersSchema);