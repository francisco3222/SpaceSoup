const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    image:{
        type: String,
        required: false,
        unique:false,
    },
    image: {
        type: String,
        required: false,
        unique: false,
    },
});

userSchema.plugin(passportLocalMongoose); //Vai adicionar username e senha
//Vamos criar um modelo chamado "User" a partir do esquema e
//vamos exportá-lo
module.exports = mongoose.model("User", userSchema);