import React from "react";

const DocsPage = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  // console.log("slug", params.slug);
  return (
    <div className="flex justify-center items-center h-[100dvh] bg-teal-100 ">
      {params.slug?.length === 2 ? (
        <>
          <h1 className=" mt-20 text-3xl font-semibold">
            {`Welcome to the ${params.slug[1]} of ${params.slug[0]} `}
          </h1>
        </>
      ) : (
        <>
          {params.slug?.length === 1 ? (
            <>
              <h1 className=" mt-20 text-3xl font-semibold">
                {`Welcome to the  ${params.slug[0]} `}
              </h1>
            </>
          ) : (
            <>
              <h1 className=" mt-20 text-3xl font-semibold">
                Welcome to our documentation
              </h1>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DocsPage;
