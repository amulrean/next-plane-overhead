import { getOSFormattedStates } from '@/lib/planes';
import { NextResponse } from 'next/server';

export async function GET() {

  const bounds = {
    lomin: -78,
    lamin: 38,
    lomax: -76,
    lamax: 40,
  }
  return NextResponse.json(await getOSFormattedStates(bounds, true));
}