import { NextResponse } from 'next/server';
 
export async function GET() {
  console.log('Inside Planes Route');
  const res = await fetch('https://opensky-network.org/api/states/all?lomin=-78&lamin=38&lomax=-76&lamax=40', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${process.env.OPEN_SKY_NETWORK_USERNAME}:${process.env.OPEN_SKY_NETWORK_PASSWORD}`)
    },
  });
  const data = await res.json();
 
  return NextResponse.json( data );
}