const mongoose = require('mongoose')

try {
    const url = "mongodb+srv://ritz:123@cluster0.ouoi1gl.mongodb.net/"
    mongoose.connect(url)
    console.log("conectado ao banco!")
} catch (error) {
    console.log(error)
}

mongoose.Promise = global.Promise
module.exports = mongoose
