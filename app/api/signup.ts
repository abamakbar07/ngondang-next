import { NextResponse } from 'next/server';
import User from '../../models/User';
import dbConnect from '../../lib/mongodb';

export async function POST(request: Request) {
  await dbConnect();

  const { email, name, picture, password } = await request.json();

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Create a new user
    const newUser = new User({ email, name, picture, password });
    await newUser.save();

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
