console.log('User Schema defined');
console.log('Pre-save hook to hash the password is set');
console.log('Method to compare password is added');
console.log('User model created and exported');import { Schema, model } from 'mongoose';
import { hash, compare } from 'bcryptjs';

// Define User Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^\S+@\S+\.\S+$/.test(v); // Basic email validation
        },
        message: props => `${props.value} is not a valid email!`,
      },
    },
    mobileNumber: {
      type: String,
      validate: {
        validator: function (v) {
          return /\d{10}/.test(v); // Basic mobile number validation
        },
        message: props => `${props.value} is not a valid mobile number!`,
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 4,
      select: false, // Exclude password from query results
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
  },
  {
    timestamps: true, // createdAt and updatedAt fields
  }
);

// Pre-save hook to hash the password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await hash(this.password, 12);
  next();
});

// Method to compare password
userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await compare(candidatePassword, userPassword);
};

// Create and export User model
const User = model('User', userSchema);
export default User;
