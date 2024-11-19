import mongoose, { Schema, Document, model, models } from 'mongoose';
import bcrypt from 'bcryptjs';
import dbConnect from '../lib/mongodb';

export interface IUser extends Document {
  email: string;
  name: string;
  picture: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  picture: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Initialize database connection and model
export const initializeUser = async () => {
  await dbConnect();
  return models.User || model<IUser>('User', UserSchema);
};
