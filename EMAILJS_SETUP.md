# EmailJS Setup Instructions

To complete the contact form email functionality, you need to set up EmailJS:

## 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Note down your **Service ID** (e.g., 'service_ecoglow')

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission - {{subject}}

**Body:**
```
Hello,

You have received a new message from your EcoGlow website contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the EcoGlow contact form.
```

4. Save the template and note down your **Template ID** (e.g., 'template_contact')

## 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** in the API Keys section

## 5. Update Contact.jsx
Replace the placeholder values in `src/pages/Contact.jsx`:

```javascript
const serviceId = 'your_actual_service_id';
const templateId = 'your_actual_template_id';
const publicKey = 'your_actual_public_key';
```

## 6. Test the Form
1. Fill out the contact form on your website
2. Check your email (adee481g@gmail.com) for the message
3. Verify all form fields are included in the email

## Free Tier Limits
- 200 emails per month
- No credit card required
- Perfect for small to medium websites

## Troubleshooting
- Make sure your email service is properly configured
- Check the browser console for any error messages
- Verify your API keys are correct
- Ensure your email template variables match the form data