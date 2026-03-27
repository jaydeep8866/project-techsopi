import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, company, phone, service, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a transporter using gmail (you can configure other email services)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Compose the email to send to your static email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "jaydeepkevadiya20@gmail.com", // Static recipient email
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; border-bottom: 3px solid #ff6b35; padding-bottom: 10px;">New Contact Form Submission</h2>
              
              <div style="margin: 20px 0;">
                <p><strong style="color: #555;">Full Name:</strong> ${fullName}</p>
                <p><strong style="color: #555;">Email:</strong> <a href="mailto:${email}" style="color: #ff6b35;">${email}</a></p>
                ${company ? `<p><strong style="color: #555;">Company:</strong> ${company}</p>` : ""}
                ${phone ? `<p><strong style="color: #555;">Phone:</strong> ${phone}</p>` : ""}
                ${service ? `<p><strong style="color: #555;">Service Interested In:</strong> ${service}</p>` : ""}
              </div>

              <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ff6b35; margin: 20px 0; border-radius: 4px;">
                <h3 style="color: #333; margin-top: 0;">Message:</h3>
                <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>

              <div style="border-top: 1px solid #eee; padding-top: 15px; margin-top: 20px; text-align: center;">
                <p style="color: #999; font-size: 12px;">This is an automated email. Please do not reply directly to this email.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We Received Your Message - Prifabit",
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; border-bottom: 3px solid #ff6b35; padding-bottom: 10px;">Thank You for Contacting Us!</h2>
              
              <p style="color: #666; line-height: 1.6;">Hi ${fullName},</p>
              
              <p style="color: #666; line-height: 1.6;">
                Thank you for reaching out to Prifabit. We have received your message and will get back to you within 24 business hours.
              </p>

              <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ff6b35; margin: 20px 0; border-radius: 4px;">
                <h3 style="color: #333; margin-top: 0;">Your Message Summary:</h3>
                <p style="color: #666;"><strong>Service:</strong> ${service || "Not specified"}</p>
                <p style="color: #666;"><strong>Received at:</strong> ${new Date().toLocaleString()}</p>
              </div>

              <p style="color: #666; line-height: 1.6;">
                In the meantime, feel free to explore our website for more information about our services and products.
              </p>

              <p style="color: #666; line-height: 1.6;">
                Best regards,<br/>
                <strong>Prifabit Team</strong>
              </p>

              <div style="border-top: 1px solid #eee; padding-top: 15px; margin-top: 20px; text-align: center;">
                <p style="color: #999; font-size: 12px;">
                  Prifabit | <a href="mailto:info@prifabit.com" style="color: #ff6b35; text-decoration: none;">info@prifabit.com</a> | +91 78800 97779
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
