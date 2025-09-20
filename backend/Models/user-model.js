const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required atleast 6 character long"],
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports= mongoose.model('Users',userSchema);

