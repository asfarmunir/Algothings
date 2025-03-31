import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const client = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY!,
  url:"https://api.eu.mailgun.net"
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


interface SupportRequest {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export async function sendSupportEmail(request: SupportRequest) {
  try {
    const supportEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Support Request</h2>
        <p><strong>From:</strong> ${request.firstName} ${request.lastName}</p>
        <p><strong>Email:</strong> ${request.email}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
          <h3 style="margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap;">${request.message}</p>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">
          This message was sent from the customer support form on your website.
        </p>
      </div>
    `;

    const response = await client.messages.create(process.env.MAILGUN_DOMAIN!, {
      from: `${request.firstName} ${request.lastName} <${request.email}>`,
      to: process.env.SUPPORT_EMAIL!, // Your support team's email
      'h:Reply-To': request.email, // Allows direct reply to customer
      subject: `New Support Request from ${request.firstName} ${request.lastName}`,
      text: `
        New Support Request\n
        Name: ${request.firstName} ${request.lastName}\n
        Email: ${request.email}\n
        Message:\n
        ${request.message}
      `,
      html: supportEmailHtml
    });

    return response;
  } catch (error) {
    console.error("Mailgun Error:", error);
    throw error;
  }
}
export async function sendSupportConfirmation(userEmail: string) {
  try {
    const response = await client.messages.create(process.env.MAILGUN_DOMAIN!, {
      from: `Support Team <support@${process.env.MAILGUN_DOMAIN}>`,
      to: userEmail,
      subject: "We've received your support request",
      text: `Thank you for contacting our support team. We've received your message and will get back to you soon.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for contacting us</h2>
          <p>We've received your support request and our team will get back to you as soon as possible.</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
            <p>If you need to add any additional information, please reply to this email.</p>
          </div>
          <p style="margin-top: 20px; font-size: 0.9em; color: #666;">
            This is an automated message. Please do not reply directly to this email.
          </p>
        </div>
      `
    });
    return response;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    // Don't throw error - the main support email was still sent
  }
}