const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: record id is not a part of the schema 

const  studentSchema = new mongoose.Schema(
  {
    firstName:  { type: String,   required: true },
    lastName:  { type: String,  required: true},
    email:  { type: String, required: true},
    phoneNumber:  { type: String,  required: true},
    major:  { type: String, required: true},
    creditEarned: { type: Number, required: false},
    interest:  { type: String, required: false},
    selfIntro:  { type: String, required: false}
  }
  );

//use the blueprint to create the model 
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Student', studentSchema,'Students');
//note capital S in the collection name
