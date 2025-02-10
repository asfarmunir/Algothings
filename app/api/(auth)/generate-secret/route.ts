import { NextRequest, NextResponse } from "next/server";
import speakeasy from "speakeasy";

export async function POST(req: NextRequest) {
  const secret = speakeasy.generateSecret({
    name: "MyApp", // Replace with your app name
  });

  return NextResponse.json(
    {
      secret: secret.base32,
      otpauth_url: secret.otpauth_url,
    },
    { status: 200 }
  );
}
