import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY!,
  url:"https://api.eu.mailgun.net"
});


export async function sendPasswordResetEmail(
  userEmail: string,
  resetLink: string
) {
  try {
    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
      from: `The Algos Field <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: userEmail,
      subject: "Password Reset Request",
      text: `Hi,\n\nWe received a request to reset your password for The Algos Field account.\n\nClick this link to reset your password: ${resetLink}\n\nIf you didn't request this, please ignore this email.\n\nThe Algos Field Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <p>Hi,</p>
          
          <p>We received a request to reset your password for The Algos Field account.</p>
          
          <p>
            <a href="${resetLink}" 
              style="background: #45F175; color: black; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0;">
              Reset Password
            </a>
          </p>
          
          <p>This link will expire in 24 hours.</p>
          
          <p>If you didn't request this, please ignore this email or contact us at 
            <a href="mailto:support@thealgosfield.com">support@thealgosfield.com</a> to let us know.
          </p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          
          <p style="font-size: 12px; color: #777;">
            <strong>The Algos Field</strong><br>
            Trading on Robopilot
          </p>
        </div>
      `,
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

    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
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
    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
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


export async function registerationSuccess(  userEmail: string, firstName: string) {
 console.log("🚀 ~ registerationSuccess ~ firstName:", firstName)
 
  try {
    const data = await mg.messages.create("mg.thealgosfield.com", {
      from: `The Algos Field <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: userEmail,
      subject: "Welcome to the Algos Field!",
      template: "welcome email (post signup)",
      "h:X-Mailgun-Variables": JSON.stringify({
        first_name: firstName.charAt(0).toUpperCase() + firstName.slice(1),
      }),
    });
    console.log(data); // logs response data
  } catch (error) {
    console.log(error); // logs any error
  }
}

export async function passwordChanged(userEmail: string, firstName: string) {

  try {
    const data = await mg.messages.create("mg.thealgosfield.com", {
      from: `The Algos Field <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: userEmail,
      subject: "Password Change Confirmation",
      template: "password or email change confirmation",
      "h:X-Mailgun-Variables": JSON.stringify({
        First_Name: firstName.charAt(0).toUpperCase() + firstName.slice(1),
      }),
    });
    console.log(data); // logs response data
  } catch (error) {
    console.log(error); // logs any error
  }
}
export async function ProfileUpdated(userEmail: string, firstName: string,changesDescription: string) {

  try {
    const data = await mg.messages.create("mg.thealgosfield.com", {
      from: `The Algos Field <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: userEmail,
      subject: "Profile Update Confirmation",
      template: "profile update confirmation",
      "h:X-Mailgun-Variables": JSON.stringify({
        First_Name: firstName.charAt(0).toUpperCase() + firstName.slice(1),
        desc: changesDescription,
      }),
    });
    console.log(data); // logs response data
  } catch (error) {
    console.log(error); // logs any error
  }
}
export async function subscriptionConfirmation(userEmail: string, planName: string, firstName: string) {

  try {
    const data = await mg.messages.create("mg.thealgosfield.com", {
      from: `The Algos Field <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: userEmail,
      subject: "Subscription Confirmation",
      template: "subscription confirmation",
      "h:X-Mailgun-Variables": JSON.stringify({
        First_Name: firstName.charAt(0).toUpperCase() + firstName.slice(1),
        Plan_Name: planName,
        dash_link : process.env.APP_URL + "/dashboard",
      }),
    });
    console.log(data); // logs response data
  } catch (error) {
    console.log(error); // logs any error
  }
}
export async function subscriptionReciept(userEmail: string, planName: string, firstName: string,amount : number,date : string, invoice_id: string) {

  try {
    const data = await mg.messages.create("mg.thealgosfield.com", {
      from: `The Algos Field <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: userEmail,
      subject: "Payment Receipt",
      template: "payment receipt & invoice",
      "h:X-Mailgun-Variables": JSON.stringify({
        First_Name: firstName.charAt(0).toUpperCase() + firstName.slice(1),
        plan_name: planName,
        Amount: amount,
        date: date,
        invoice_id: invoice_id,
      }),
    });
    console.log(data); // logs response data
  } catch (error) {
    console.log(error); // logs any error
  }
}
export async function subscriptionCancelled(userEmail: string, planName: string, end_date: string) {

  try {
    const data = await mg.messages.create("mg.thealgosfield.com", {
      from: `The Algos Field <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: userEmail,
      subject: "Subscription Cancellation Confirmation",
      template: "subscription cancellation confirmation",
      "h:X-Mailgun-Variables": JSON.stringify({
        plan_name: planName,
        dash_link : process.env.APP_URL + "/dashboard",
        end_date: end_date.toString().slice(0, 10),
      }),
    });
    console.log(data); // logs response data
  } catch (error) {
    console.log(error); // logs any error
  }
}