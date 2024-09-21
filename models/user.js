import db from '../infrastructure/db.js';

// Define the user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }
});

// Create a model based on the schema
const User = db.model('User', userSchema);

export default User;