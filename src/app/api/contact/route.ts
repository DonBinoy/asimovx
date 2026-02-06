import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, message, subject, organization } = body;

        // Basic validation
        if (!name || !email) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check for environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Configure transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const emailSubject = subject || `New Contact Form Submission from ${name}`;
        const extraInfo = organization ? `<p><strong>Organization:</strong> ${organization}</p>` : '';
        const extraInfoText = organization ? `Organization: ${organization}\n` : '';

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'asimovxdev@gmail.com',
            replyTo: email,
            subject: emailSubject,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
${extraInfoText}
Message:
${message || 'No message provided'}
            `,
            html: `
<h3>${emailSubject}</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
${extraInfo}
<br/>
<p><strong>Message:</strong></p>
<p>${(message || 'No message provided').replace(/\n/g, '<br>')}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
