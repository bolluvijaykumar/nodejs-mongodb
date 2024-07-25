const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/usermanagement").then(()=>{
    console.log("connected");
});
// Define a schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    city: String,
    department:String
});
// Create a model
const userModel = mongoose.model('users', userSchema);
// Use the model to create a document
const newUser = new userModel({
    name: 'Ramu',
    city: "Hyd",
    department:"ECE"
});
// Save the document to the database
newUser.save()
.then(doc => {
    console.log('Document saved:', doc);
})
.catch(err => {
    console.error('Error saving document:', err);
});