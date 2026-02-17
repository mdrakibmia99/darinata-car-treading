import nodemailer from 'nodemailer';
import config from '../../config';


const isProduction = process.env.NODE_ENV === 'production';

export const sendMail = async ({ email, subject, html }: any) => {

const transporter = nodemailer.createTransport({
  host: config.smtp.host, // sending SMTP server
  port: isProduction ? 465 : 587,             // SSL port
  secure: isProduction,           // true for port 465
  auth: {
    user: config.smtp.user,        // webmail email
    pass: config.smtp.pass   // SMTP/webmail password
  },
});

  

  try {
     console.log('mail send started');
    await transporter.sendMail({
      from: `"${config.smtp.fromName}" <${config.smtp.user}>`, // sender address
      to: email, // list of receivers
      subject,
      html, // html body
    });

    console.log('mail sended successfully');
    
  } catch (error) {
    console.log('send mail error:', error);
    
  }
  console.log('mail sended stopped');
};

// import nodemailer from 'nodemailer';
// import config from '../../config';

// type TEmailBody = {
//   email: string;
//   subject: string;
//   html: string;
// };

// const transporter = nodemailer.createTransport({
//   host: 'smtp.hostinger.com',
//   port: 465,
//   secure: false,
//   auth: {
//     user: config.smtp_username,
//     pass: config.smtp_password,
//   },
// });

// // async..await is not allowed in global scope, must use a wrapper
// const sendMail = async (emailBody: TEmailBody) => {

//   const transporter = nodemailer.createTransport({
//   host: 'smtp.hostinger.com',
//   port: 465,
//   secure: false,
//   auth: {
//     user: config.smtp_username,
//     pass: config.smtp_password,
//   },
// });

//   try {

//     console.log("sending mail =====>>>>>>> ")
//     const info = await transporter.sendMail({
//       from: config.smtp_username,
//       to: emailBody.email,
//       subject: emailBody.subject,
//       html: emailBody.html,
//     });

//     console.log("message sent successfully =====>>>>>> ")
//     console.log('Message sent: %s', info.messageId);
//   } catch (error) {
//     console.log("message sent failed =>>>>>>> ", error);
//     console.log(error, "errrrrrrrrror");
//   }

// };
// export default sendMail;



