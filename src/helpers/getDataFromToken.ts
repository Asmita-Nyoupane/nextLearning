import { NextRequest } from "next/server";
const jwt = require("jsonwebtoken");

const getData = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.NEXT_SECRET_KEY!);
    return decodedToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getData;
