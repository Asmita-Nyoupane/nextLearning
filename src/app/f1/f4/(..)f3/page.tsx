import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <h2>Intercepting Routed F3 (..)</h2>
      <Link href="/f1/f4"> Go to F1</Link>
    </div>
  );
};

export default page;
