import { useState } from "react";
import QRCode from "qrcode";

export default function useGoogleAuth() {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [secret, setSecret] = useState<string | null>(null);
  const [otp, setOtp] = useState<string>("");
  const [verificationResult, setVerificationResult] = useState<string | null>(null);

  const generateQrCode = async () => {
    try {
      const response = await fetch("/api/generate-secret", {
        method: "POST",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const text = await response.text();
      if (!text) throw new Error("Empty response from server");
  
      const data = JSON.parse(text);
      setSecret(data.secret);
      const qrCodeDataURL = await QRCode.toDataURL(data.otpauth_url);
      setQrCode(qrCodeDataURL);
    } catch (error) {
      console.error("Error generating QR Code:", error);
    }
  };
  
  

  const verifyOtp = async () => {
    try {
      const response = await fetch("/api/verify-totp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: otp, secret }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const text = await response.text();
      if (!text) throw new Error("Empty response from server");
  
      const data = JSON.parse(text);
      setVerificationResult(data.isVerified ? "Code is valid!" : "Invalid code.");
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };
  

  return {
    qrCode,
    secret,
    otp,
    verificationResult,
    setOtp,
    generateQrCode,
    verifyOtp,
  };
}
