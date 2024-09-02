const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://Harshit:Harshit@alemeno.1ey7m.mongodb.net/Alemeno?retryWrites=true&w=majority&appName=Alemeno")

module.exports = connection;