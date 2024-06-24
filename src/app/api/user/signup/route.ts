import { connect } from "@/db/dbConfig";
import { senEmail } from "@/helpers/mailer";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require("bcrypt");
connect();

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already register" },
        { status: 400 }
      );
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    // send verification email
    await senEmail({ email, emailType: "VERIFY", userId: savedUser._id });
    return NextResponse.json(
      { message: "New usser register successffully", savedUser },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
