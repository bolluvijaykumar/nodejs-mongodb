const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/usermanagement'; // Replace with your connection string
mongoose.connect(mongoURI)
.then(() => {
    console.log('MongoDB connected successfully.');    
   // Define a schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    city: String,
    department:String
},{versionKey:false});
// Create a model
const userModel = mongoose.model('users', userSchema);
// Use the model to create a document
const newUser = new userModel({
    name: 'Raju',
    city: "Hyd",
    department:"ECE"
});
// Save the document to the database
newUser.save()
.then(doc => {
    console.log('Document saved successfully:', doc);
})
.catch(err => {
    console.error('Error saving document:', err);
});

})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});
