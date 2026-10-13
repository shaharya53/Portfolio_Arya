import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;
const DIST_DIR = path.join(__dirname, 'dist');

const emailUser = process.env.EMAIL_USER || 'aryaaryashah@gmail.com';
const emailPass = process.env.EMAIL_APP_PASSWORD || 'rolc epks nvly xmut';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }

  // Handle contact API
  if (req.url === '/api/contact' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const { name, email, service, message } = data;

        if (!name || !email || !message) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({ error: 'Please provide name, email, and message.' }));
        }

        const mailOptions = {
          from: `"${name}" <${emailUser}>`,
          replyTo: email,
          to: emailUser,
          subject: `Portfolio Inquiry from ${name}: ${service || 'General Inquiry'}`,
          text: `Name: ${name}\nEmail: ${email}\nService: ${service || 'General Inquiry'}\n\nMessage:\n${message}\n`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; background-color: #141415; color: #ffffff; border-radius: 16px;">
              <h2 style="color: #d0ff71;">New Portfolio Inquiry</h2>
              <p><strong>From:</strong> ${name} (<a href="mailto:${email}" style="color: #d0ff71;">${email}</a>)</p>
              <p><strong>Service:</strong> ${service || 'General Inquiry'}</p>
              <div style="background-color: #1f1f22; padding: 16px; border-radius: 8px; border-left: 4px solid #d0ff71; margin: 20px 0;">
                <p style="white-space: pre-wrap; color: #e4e4e7; margin: 0;">${message}</p>
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ success: true, message: 'Message sent successfully!' }));
      } catch (err) {
        console.error('Server email error:', err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ error: err.message || 'Failed to send email.' }));
      }
    });
    return;
  }

  // Serve static files from dist
  let filePath = path.join(DIST_DIR, req.url.split('?')[0]);
  if (req.url === '/' || !path.extname(filePath)) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      filePath = path.join(DIST_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.statusCode = 500;
        return res.end('Server Error');
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
