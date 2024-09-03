import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface IUser extends Document {
  email: string;
  name: string;
  picture: string;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  picture: { type: String, required: true },
});

const User = models.User || model<IUser>('User', UserSchema);

export default User;
