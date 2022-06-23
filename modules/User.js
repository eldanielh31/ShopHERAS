const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {type:String, require:true, unique: true},
        mail: {type:String, require:true, unique:true},
        phone: {type:Number, require:true, unique:true},
        password: {type:String, require: true},
        isAdmin: {
            type:Boolean,
            default: false
        },
        img:{type: String}
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);