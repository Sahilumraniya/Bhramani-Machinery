import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter for nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NEXT_PUBLIC_GMAIL_USER, 
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
    },
});

export async function POST(request) {
    try {
        // Parse the JSON request body
        const { name, email, phone, message } = await request.json();

        // Log the received data
        console.log('Received email:', { name, email, phone, message });

        // Set up email options
        const mailOptions = {
            from: email, // Sender's email
            to: process.env.GMAIL_USER, // Receiver's email (your Gmail)
            subject: `Contact Form Submission from ${name}`, // Email subject
            text: `Message: ${message}\n\nFrom: ${name} (${email})\nPhone: ${phone}`, // Email body
        };

        // Send the email
        const emailResponse = await transporter.sendMail(mailOptions);

        // Log the email response if needed
        console.log('Email sent:', emailResponse);

        // Return a successful response
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        // Log any errors that occur
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}
