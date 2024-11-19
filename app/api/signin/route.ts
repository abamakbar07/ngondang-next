import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';

export async function POST(req: Request) {
  await dbConnect();
  const { email, password } = await req.json();

  try {
    const user = await (await User()).findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login successful', user: { email: user.email, name: user.name, picture: user.picture } }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error during login' }, { status: 500 });
  }
}
