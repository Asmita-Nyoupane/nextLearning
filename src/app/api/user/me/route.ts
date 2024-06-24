import getData from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/UserModel";
import { connect } from "@/db/dbConfig";

connect();
export async function GET(request: NextRequest) {
  try {
    const userId = await getData(request);
    const user = await User.findById({ _id: userId }).select(
      "-password -isAdmin"
    );
    return NextResponse.json({ message: "User found", user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
