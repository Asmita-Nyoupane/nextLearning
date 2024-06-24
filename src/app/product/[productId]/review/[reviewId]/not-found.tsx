import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center  mt-20">
      <h2 className="text-3xl font-bold">Page Not Found</h2>
      <p className="text-gray-500 text-lg">
        Couldn't find the requested review for the product
      </p>
      <Link href="/product">
        <Button> Visit Products</Button>
      </Link>
    </div>
  );
};

export default NotFound;
