const mongoose = require('mongoose');

const url = "mongodb+srv://sahilmayank3:Sahil12345@cluster0.ol6fjtt.mongodb.net/blognukkad?retryWrites=true&w=majority&appName=Cluster0"

// asynchronous functions - return Promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected successfully');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;