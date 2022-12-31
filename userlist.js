const mongoose = require('mongoose');
const usersSchema = mongoose.Schema;

const User = mongoose.model('User', {
    username: String,
    password: String
  });
  
module.exports = mongoose.model('userlist',usersSchema);