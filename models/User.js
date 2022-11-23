const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, "Silahkan isikan nama"],
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Silahkan isikan email validasi"]
    }
})

module.exports = mongoose.model("User", UserSchema)