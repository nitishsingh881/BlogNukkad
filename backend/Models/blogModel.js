const { Schema, model } = require('../connection');

const mySchema = new Schema({
    title:String,
    category:String,
    cover: String,
    distribution:String,
    tags:String,
    competition:String,
    contact:String,

});

module.exports = model('blog', mySchema);