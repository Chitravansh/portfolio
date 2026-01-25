import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req:Request){
    try{
        const {name, email, phone, message} = await req.json();

        if(!name || !email || !message){
            return NextResponse.json(
                {error: "Missing required fields" },
                {status: 400}
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject:`New Message from ${name}`,
            html:`
            <h3>New Contact Message</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone || "Not Provided"}</p>
            <p><b>Message:</b></p>
            <p> ${message}</p>
            
            `,
        });
        return NextResponse.json({success:true},{status: 200});
    } catch(e){
        console.error(e);
        return NextResponse.json(
            {error:"Failed to send message"},
            {status: 500});
    }
}

