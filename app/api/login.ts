import { NextResponse } from 'next/server';
import User from '../../models/User';
import dbConnect from '../../lib/mongodb';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  await dbConnect();

  const { email, password } = await request.json();

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid password' }, { status: 400 });
    }

    // Return user information (excluding password)
    const { password: _, ...userWithoutPassword } = user.toObject();

    return NextResponse.json({ message: 'Login successful', user: userWithoutPassword }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
