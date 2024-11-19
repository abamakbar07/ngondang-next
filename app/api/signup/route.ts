import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import User from '../../../models/User';
import dbConnect from '../../../lib/mongodb';

export async function POST(request: Request) {
  await dbConnect();

  const { email, name, picture, password } = await request.json();

  try {
    const user = new User({ email, name, picture, password });
    await user.save();
    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
