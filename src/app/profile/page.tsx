import React from "react";
import Profile from "@/components/Profile/Profile";
import Logout from "@/components/Auth/Logout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-8 mt-10">
      <div className="flex justify-end w-[80%] mx-auto">
        <Logout />
      </div>
      <h2 className="flex   text-blue-500 justify-center items-center  font-bold text-5xl ">
        User Profile
      </h2>
      <Profile />
    </div>
  );
};

export default ProfilePage;
