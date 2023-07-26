import { NextResponse } from 'next/server';

import { radialProgressMockData } from '@/__mocks__/progress';

export async function GET() {
  return NextResponse.json({ data: radialProgressMockData });
}
