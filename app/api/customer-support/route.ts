import { sendSupportConfirmation, sendSupportEmail } from '@/lib/mailgun';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const supportRequest = await request.json();

    if (!supportRequest.firstName || !supportRequest.lastName || 
        !supportRequest.email || !supportRequest.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send the support email
    await sendSupportEmail({
      firstName: supportRequest.firstName,
      lastName: supportRequest.lastName,
      email: supportRequest.email,
      message: supportRequest.message
    });

    // Send confirmation to user
    await sendSupportConfirmation(supportRequest.email);

    return NextResponse.json(
      { message: 'Support request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting support request:', error);
    return NextResponse.json(
      { error: 'Failed to submit support request' },
      { status: 500 }
    );
  }
}

