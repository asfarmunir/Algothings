// pages/api/createContact.js
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const API_URL = 'https://thealgosfield.api-us1.com/api/3';
const API_TOKEN = '90e41be087b693bb748a6c234621ca02d3770e849e98a7307599d93c7136ba6a59ebf479';

export async function POST(req:NextRequest, res:NextResponse ){
 

  const { email, firstName, lastName } = await req.json();

  try {
     const res = await axios.post(
      `${API_URL}/contacts`,
      {
        contact: {
          email,
          firstName,
          lastName,
        },
      },
      {
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'Api-Token': API_TOKEN,
        },
      }
    );

    console.log('Contact added successfully:', res.data);
    
        return NextResponse.json({status: 200 , message: "Contact added successfully"});
  } catch (error) {
    console.error('Error creating contact:', error);
        return NextResponse.json({status: 400 , message: "something went wrong"});
  }
}