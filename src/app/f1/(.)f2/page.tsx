import React from "react";
import Link from "next/link";
const page = () => {
  {
    console.log("Intercept");
  }
  return (
    <div>
      <h2>Hello Intercept Route (.)</h2>
      <Link href="/f1"> Go to F1</Link>
    </div>
  );
};

export default page;
