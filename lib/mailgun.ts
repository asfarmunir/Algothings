import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const client = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY!,
});


export async function sendPasswordResetEmail(
  userEmail: string,
  resetLink: string
) {

     try {

    const response = await client.messages.create(process.env.MAILGUN_DOMAIN!, {
      from: `Your App <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: userEmail,
        subject: "Password Reset Request",
        text: `You requested a password reset. Click here to reset your password: ${resetLink}`,
        html: `<p>You requested a password reset. Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    });

     return response;

    } catch (error) {
        console.error("Mailgun Error:", error);
        throw error;
    }
}