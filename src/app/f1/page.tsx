import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <h2>Hello from F1</h2>
      <Link href="/f1/f2">Go to F2</Link>
    </div>
  );
};

export default page;
