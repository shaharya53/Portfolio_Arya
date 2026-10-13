import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const { name, email, service, message } = body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }

    const emailUser = process.env.EMAIL_USER || 'aryaaryashah@gmail.com';
    const emailPass = process.env.EMAIL_APP_PASSWORD || 'rolc epks nvly xmut';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${emailUser}>`,
      replyTo: email,
      to: emailUser,
      subject: `New Portfolio Inquiry from ${name}: ${service || 'General Inquiry'}`,
      text: `New contact submission from Arya Shah's Developer Portfolio:\n\nName: ${name}\nEmail: ${email}\nService: ${
        service || 'Not specified'
      }\n\nMessage:\n${message}\n`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; background-color: #141415; color: #ffffff; border-radius: 16px; border: 1px solid #2a2a2c;">
          <div style="border-bottom: 2px solid #d0ff71; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #d0ff71; margin: 0; font-size: 24px; text-transform: uppercase;">Portfolio Inquiry</h2>
          </div>
          <p style="margin: 8px 0; font-size: 15px;"><strong style="color: #d0ff71;">From:</strong> ${name}</p>
          <p style="margin: 8px 0; font-size: 15px;"><strong style="color: #d0ff71;">Email:</strong> <a href="mailto:${email}" style="color: #ffffff; text-decoration: underline;">${email}</a></p>
          <p style="margin: 8px 0; font-size: 15px;"><strong style="color: #d0ff71;">Service:</strong> ${
            service || 'General Inquiry'
          }</p>
          <div style="background-color: #1f1f22; padding: 18px; border-radius: 12px; border-left: 4px solid #d0ff71; margin: 24px 0;">
            <h4 style="margin: 0 0 8px 0; color: #d0ff71; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Message Content:</h4>
            <p style="white-space: pre-wrap; color: #d4d4d4; line-height: 1.6; margin: 0; font-size: 14px;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #767676; margin-top: 24px; border-top: 1px solid #222; padding-top: 12px;">
            Sent via Arya Shah Portfolio Website Contact Form (${new Date().toLocaleString()})
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Contact email error:', err);
    return res.status(500).json({ error: err.message || 'Failed to send email. Please try again.' });
  }
}
