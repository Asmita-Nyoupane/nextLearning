import React from "react";
import { notFound } from "next/navigation";
const generateRandom = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ReviewPage = ({ params }: any) => {
  // console.log("Params in review", params);
  const { reviewId, productId } = params;

  if (parseInt(reviewId) > 100) {
    notFound();
  }
  const random = generateRandom(2);
  if (random === 1) {
    throw new Error("Error in loading reviews");
  }

  return (
    <div className=" flex justify-center items-center">
      <h2 className="text-2xl  font-semibold mt-16">
        {`Hello from review having Id ${reviewId} of product ${productId}`}{" "}
      </h2>
    </div>
  );
};

export default ReviewPage;
