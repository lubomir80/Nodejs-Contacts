const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contackScehma = new Schema({
   name: {
      type: String,
      require: [true, 'Set name for contact'],
   },
   email: {
      type: String,
   },
   phone: {
      type: String,
   },
   favorite: {
      type: Boolean,
      default: false,
   }
})


const Contact = mongoose.model('Contact', contackScehma)

module.exports = {
   Contact
}