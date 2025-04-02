import { NextResponse,NextRequest } from "next/server";
import * as bcryptjs from "bcryptjs";
import User from "@/lib/database/user.modal";
import { connectToDatabase } from "@/lib/database";
import { registerationSuccess } from "@/lib/mailgun";

export async function POST(req:NextRequest, res:NextResponse ){
    try {
        await connectToDatabase();
        const {
        firstName,
        lastName,
        username,
        email,
        mobile,
        password,
         } = await req.json();


        const existingUser = await User.findOne({email});
        if(existingUser){
            return NextResponse.json({status: 400 , message: "User already exists"});
        }

        const salt = await bcryptjs.genSalt(12);
        const hashedPassword = await bcryptjs.hash(password, salt); 

        const newUser = new User({
            firstName,
            lastName,
            username,
            email,
            mobile,
            password: hashedPassword,
        });
        await newUser.save();
         await registerationSuccess(email, firstName);
        return NextResponse.json({status: 200 , message: "User created successfully"});


    } catch (error) {
            console.error("Signup failed", error);
            return NextResponse.json({status: 400 , message: "something went wrong"});
    }

}