import { NextResponse } from 'next/server';
import { connectDB } from '../../../lib/db';
import Raffle from '../../../lib/models/Raffle'; // Giả định schema Raffle

export async function GET() {
  await connectDB();
  try {
    const raffles = await Raffle.find();
    return NextResponse.json(raffles, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching raffles' }, { status: 500 });
  }
}