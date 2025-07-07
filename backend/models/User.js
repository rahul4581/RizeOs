import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: String,
    collage:String,
    bio: String,
    linkedIn: String,
    skills: [String],
    walletAddress: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
