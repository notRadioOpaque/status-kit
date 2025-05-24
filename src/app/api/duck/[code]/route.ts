import {NextResponse} from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.pathname.split("/").pop();

  try {
    const res = await fetch(`https://httpducks.com/${code}.json`);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({error: "Failed to fetch duck data"}, {status: 500});
  }
}
