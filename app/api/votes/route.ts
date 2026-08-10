import { NextRequest, NextResponse } from "next/server";

type VoteCounts = {
  djMaphorisa: number;
  blackCoffee: number;
  uncleWaffles: number;
};

const defaultVotes: VoteCounts = {
  djMaphorisa: 0,
  blackCoffee: 0,
  uncleWaffles: 0,
};

const globalWithVotes = globalThis as typeof globalThis & {
  __afrohouseAwardsVotes?: VoteCounts;
};

const votes = globalWithVotes.__afrohouseAwardsVotes ??= { ...defaultVotes };
const validIds = new Set(Object.keys(votes));

export async function GET() {
  return NextResponse.json({ votes });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const dj = body?.dj;

  if (typeof dj !== "string" || !validIds.has(dj)) {
    return NextResponse.json({ error: "Invalid vote target." }, { status: 400 });
  }

  votes[dj as keyof VoteCounts] += 1;
  return NextResponse.json({ votes });
}
