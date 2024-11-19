import { NextResponse } from 'next/server';
import User from '../../../models/User';
import dbConnect from '../../../lib/mongodb';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  await dbConnect();

  const { email, password } = await request.json();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // Here you would typically generate a JWT token and return it
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
