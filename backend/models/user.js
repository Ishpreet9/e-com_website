import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', async function(next) { //middleware which shows what to be done before saving the data to database
    if(!this.isModified('password')) return next(); //if password not modified then no need to hash it again
    this.password = await bcrypt.hash(this.password,10); //hash and save the password
    next(); //next
})

const User = mongoose.model('User',userSchema);

export default User;