import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <h2>Hello F4</h2>
      <Link href="/profile"> Go to Profile</Link>
      <Link href="/f1/f3"> Go to F3</Link>
    </div>
  );
};

export default page;
