import React from "react";
type Props = {
  params: {
    productId: string;
  };
};
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

const SingleProjectPage = ({ params }: Props) => {
  const productId = params.productId;
  return (
    <div className="mt-10 flex justify-center items-center">
      <h2 className="text-2xl font-semibold">{`Product Details for ${productId}`}</h2>
    </div>
  );
};

export default SingleProjectPage;
