import { connect } from "@/db/dbConfig";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
connect();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User  not found" },
        {
          status: 400,
        }
      );
    }
    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      return NextResponse.json(
        { error: "Password doesn't match" },
        { status: 400 }
      );
    }

    // create token data
    const tokenData = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    // create token
    const token = await jwt.sign(tokenData, process.env.NEXT_SECRET_KEY!, {
      expiresIn: "10m",
    });
    const response = NextResponse.json(
      { message: "Login successfull" },
      { status: 200 }
    );
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
