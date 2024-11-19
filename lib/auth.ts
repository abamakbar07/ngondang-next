import dbConnect from './mongodb';
import User from '../models/User';
import bcrypt from 'bcryptjs';

export async function signup(email: string, name: string, picture: string, password: string) {
  await dbConnect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const user = new User({ email, name, picture, password });
  await user.save();

  return user;
}

export async function login(email: string, password: string) {
  await dbConnect();

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error('Invalid password');
  }

  return user;
}
