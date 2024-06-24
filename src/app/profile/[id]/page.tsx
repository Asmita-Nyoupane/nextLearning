import React from "react";

const CurrentUserProfilePage = ({ params }: any) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <h2 className="text-3xl text-blue-950 font-semibold flex justify-center items-center">
        Profile Page
      </h2>
      <p>{params.id}</p>
    </div>
  );
};

export default CurrentUserProfilePage;
