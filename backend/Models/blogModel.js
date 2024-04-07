const { Schema, model } = require('../connection');

const mySchema = new Schema({
    username : {type : String, required : true},
    email:String,
    password:String,
});

module.exports = model('blog', mySchema);