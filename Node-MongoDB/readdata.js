const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/usermanagement'; // Replace with your connection string
mongoose.connect(mongoURI)
.then(() => {
    console.log('MongoDB connected successfully.');    
    const Schema = mongoose.Schema;
    const userSchema = new Schema({
        name: String,
        city: String,
        department: String
    });
    const User = mongoose.model('users', userSchema);
    User.find()
        .then(users => {
            console.log("Here's is the users data")
            console.log('Users:', users);
        })
        .catch(err => {
            console.error('Error fetching users:', err);
        });

})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});
