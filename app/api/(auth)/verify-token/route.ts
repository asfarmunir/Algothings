import { NextApiRequest, NextApiResponse } from "next";
import speakeasy from "speakeasy";

export default function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { token, secret } = req.body;

    if (!token || !secret) {
      return res.status(400).json({ message: "Token and secret are required." });
    }

    const verified = speakeasy.totp.verify({
      secret,
      encoding: "base32",
      token,
      window: 1, // Allows some leeway for time sync issues
    });

    return res.status(200).json({ isVerified: verified });
  }

  res.setHeader("Allow", ["POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
