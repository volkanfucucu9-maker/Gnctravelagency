import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-d52997fc/health", (c) => {
  return c.json({ status: "ok" });
});

// Email endpoint using Resend API
app.post("/make-server-d52997fc/send-email", async (c) => {
  try {
    const body = await c.req.json();
    const { formType, formData } = body;

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.log('Error: RESEND_API_KEY environment variable not found');
      return c.json({ error: 'Server configuration error: API key not found' }, 500);
    }

    // Build email content based on form type
    let subject = '';
    let htmlContent = '';

    if (formType === 'contact') {
      subject = `İletişim Formu - ${formData.subject}`;
      htmlContent = `
        <h2>İletişim Formu - Yeni Mesaj</h2>
        <p><strong>Ad Soyad:</strong> ${formData.name}</p>
        <p><strong>E-posta:</strong> ${formData.email}</p>
        <p><strong>Telefon:</strong> ${formData.phone || 'Belirtilmedi'}</p>
        <p><strong>Konu:</strong> ${formData.subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `;
    } else if (formType === 'visa') {
      subject = `Vize Destek Talebi - ${formData.country}`;
      htmlContent = `
        <h2>Vize Destek Talebi</h2>
        <p><strong>Ad Soyad:</strong> ${formData.name}</p>
        <p><strong>E-posta:</strong> ${formData.email}</p>
        <p><strong>Telefon:</strong> ${formData.phone}</p>
        <p><strong>Ülke:</strong> ${formData.country}</p>
        <p><strong>Seyahat Tarihi:</strong> ${formData.travelDate}</p>
        <p><strong>Ek Notlar:</strong></p>
        <p>${formData.notes ? formData.notes.replace(/\n/g, '<br>') : 'Yok'}</p>
      `;
    } else if (formType === 'dubai-visa') {
      subject = `BAE Vize Başvurusu - ${formData.name}`;
      htmlContent = `
        <h2>Birleşik Arap Emirlikleri Vize Başvurusu</h2>
        <p><strong>Ad Soyad:</strong> ${formData.name}</p>
        <p><strong>E-posta:</strong> ${formData.email}</p>
        <p><strong>Telefon:</strong> ${formData.phone}</p>
        <p><strong>Vize Türü:</strong> ${formData.visaType}</p>
        <p><strong>Giriş Tarihi:</strong> ${formData.entryDate}</p>
        <p><strong>Yolcu Sayısı:</strong> ${formData.passengers}</p>
        <p><strong>Ek Notlar:</strong></p>
        <p>${formData.notes ? formData.notes.replace(/\n/g, '<br>') : 'Yok'}</p>
      `;
    } else {
      return c.json({ error: 'Invalid form type' }, 400);
    }

    // Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'GNC Travel <onboarding@resend.dev>', // Resend'in varsayılan gönderici adresi
        to: ['gncaslan07@gmail.com'], // Resend'de doğrulanmış email adresi
        subject: subject,
        html: htmlContent
      })
    });

    const result = await response.json();

    if (!response.ok) {
      console.log('Resend API error:', result);
      return c.json({ 
        error: 'Failed to send email',
        details: result
      }, response.status);
    }

    console.log('Email sent successfully:', result);
    return c.json({ 
      success: true, 
      message: 'Email sent successfully',
      emailId: result.id 
    });

  } catch (error) {
    console.log('Error in send-email endpoint:', error);
    return c.json({ 
      error: 'Internal server error while sending email',
      details: error.message 
    }, 500);
  }
});

Deno.serve(app.fetch);