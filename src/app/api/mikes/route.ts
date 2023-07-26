import { NextResponse } from 'next/server';

import {
  mikestonesMockData,
  questMockData,
  trackMockData,
} from '@/__mocks__/mikestones';

export async function GET() {
  return NextResponse.json({
    data: { mikestonesMockData, trackMockData, questMockData },
  });
}
