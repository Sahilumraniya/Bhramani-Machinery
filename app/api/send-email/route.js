import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

export async function POST(request) {
    const { name, email, phone, message } = await request.json();
    console.log('Received email:', { name, email, phone, message });
    const mailOptions = {
        from: email,
        to: process.env.GMAIL_USER,
        subject: `Contact Form Submission from ${name}`,
        text: `Message: ${message}\n\nFrom: ${name} (${email})\nPhone: ${phone}`,
    };

    try {
        await transporter.sendMail(mailOptions).then((res) => {
            console.log('Email sent:', res);
        }).catch((error) => {
            console.error('Error sending email:', error);
            throw new Error('Error sending email');
        });
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}