const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id:String,
    fullName: String,
    email:String,
    password: String
},
 {
    timestamps: true
});


module.exports = mongoose.model('User', UserSchema);