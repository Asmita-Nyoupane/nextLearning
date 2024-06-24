const nodemailer = require("nodemailer");
import User from "@/models/UserModel";
const bcrypt = require("bcrypt");

export const senEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create hsahed token
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(
        userId,
        {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(
        userId,
        {
          forgetPasswordToken: hashedToken,
          forgetPasswordTokenExpiry: Date.now() + 3600000,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.NEXT_MAIL_USER,
        pass: process.env.NEXT_MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "asmita@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",

      html: `<p> Click <a href="${process.env
        .NEXT_DOMAIN!}/verifyemail?token=${hashedToken}"> here </a> to ${
        emailType == "VERIFY" ? "verify your email" : "reset your password"
      }
      or copy and paste the link below in your browser. <br> ${process.env
        .NEXT_DOMAIN!}/verifyemail?token=${hashedToken}
      
      </p>`,
    };
    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
