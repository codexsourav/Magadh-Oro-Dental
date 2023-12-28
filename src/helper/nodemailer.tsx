import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTPEMAIL,
        pass: process.env.SMTPPASS,
    },
});

export interface mailTypes {
    phone: string,
    name: string,
    message: string,
    email: string,
}

const mail = async (data: mailTypes) => {
    const info = await transporter.sendMail({
        from: data.email, // sender address
        to: "info@idealedesigns.com,aryamehtaa@gmail.com,codexsourav404@gmail.com", // list of receivers
        subject: "Ideal e Designs - Contact Us", // Subject line
        html: `
        <!DOCTYPE html>
        <html>
            <head>
            <title>Contact Information</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px;">
            <div class="container" style="max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h3 style="color: #333;">Contact Information</h3>
                <p style="margin-bottom: 10px;"><strong>Name:</strong> ${data.name}</p>
                <p style="margin-bottom: 10px;"><strong>Email:</strong> ${data.email}</p>
                <p style="margin-bottom: 10px;"><strong>Mobile:</strong> ${data.phone}</p>
                <p style="margin-bottom: 10px;"><strong>Message:</strong> ${data.message}</p>
            </div>
            </body>
        </html>

        `, // html body
    });
    return info.response;
}


export default mail;