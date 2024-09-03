import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req: NextRequest) {
    await dbConnect();
  
    try {
      const { user } = await req.json();
  
      if (!user || !user.email || !user.name) {
        return NextResponse.json({ error: 'User information is required' }, { status: 400 });
      }
  
      // Check if the user already exists
      let existingUser = await User.findOne({ email: user.email });
  
      if (existingUser) {
        return NextResponse.json({ message: 'User already exists' }, { status: 200 });
      }
  
      // Create a new user if they don't exist
      const newUser = await User.create({
        email: user.email,
        name: user.name,
        picture: user.picture
      });
  
      return NextResponse.json({ message: 'User added', user: newUser }, { status: 201 });
    } catch (error) {
      console.error('Error validating user:', error);
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
  }