import { NextResponse } from 'next/server';
import User from '../../../models/User';
import dbConnect from '../../../lib/mongodb';

export async function POST(req: Request) {
  await dbConnect();
  const { email, name, picture, password } = await req.json();

  try {
    const user = new (await User())({ email, name, picture, password });
    await user.save();
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
