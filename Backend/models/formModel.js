import mongoose from 'mongoose';

const formSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: Number,
      required: true,
    },
    confirmPassword: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Form = mongoose.model('FromData', formSchema);