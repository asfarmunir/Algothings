import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    mobile: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
        default: 'GB'
    },
    agreedToTerms: {
        type: Boolean,
        required: true,
        default: true
    },
  
},
{
  timestamps: true
}
);

const User = models.User || model("User", userSchema);

export default User;
