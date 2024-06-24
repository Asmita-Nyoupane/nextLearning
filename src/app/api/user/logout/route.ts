import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function DELETE() {
  try {
    cookies().delete("token");
    return NextResponse.json(
      { message: "Cookies deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
