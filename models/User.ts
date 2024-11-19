import mongoose, { Schema, Document, Model } from 'mongoose';
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

UserSchema.pre<IUser>('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

let UserModel: Model<IUser> | null = null;

const User = async (): Promise<Model<IUser>> => {
  if (UserModel) {
    return UserModel;
  }
  await dbConnect();
  if (!mongoose.models.User) {
    UserModel = mongoose.model<IUser>('User', UserSchema, 'User');
  } else {
    UserModel = mongoose.models.User as Model<IUser>;
  }
  return UserModel;
};

export default User;
