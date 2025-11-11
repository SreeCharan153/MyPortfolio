import { NextResponse } from "next/server";

export async function GET() {
  const repos = [
    "SreeCharan153/PillionPal-API",
    "SreeCharan153/File-organizer",
    "SreeCharan153/RupeeWave",
    "BhimaPavanTeja/e-summit-rec",
  ];

  try {
    const results = await Promise.all(
      repos.map(async (repo) => {
        const res = await fetch(`https://api.github.com/repos/${repo}`, {
          headers: {
            "Accept": "application/vnd.github+json",
            "User-Agent": "NextJS-App"
          }
        });
        const data = await res.json();

        return {
          repo,
          stars: data?.stargazers_count || 0,
        };
      })
    );

    return NextResponse.json(results);
  } catch {
    return NextResponse.json({ error: true }, { status: 500 });
  }
}
