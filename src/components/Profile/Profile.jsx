"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Button } from "../ui/button";

const Profile = () => {
  const [user, SetUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("/api/user/me");
        console.log("🚀 ~ getUser ~ response:", response.data.user);
        SetUser(response.data.user);
      } catch (error) {
        console.log("🚀 ~ getUser ~ error:", error);
      }
    };

    getUser();
  }, []);
  return (
    <div className="flex flex-col gap-16">
      <Toaster position="top-right" reverseOrder={false} />

      <div className=" flex flex-col gap-4  mt-10 mx-auto  items-center justify-center">
        {user ? (
          <Link href={`/profile/${user._id}`}>
            <Button className="text-2xl capitalize ">{user.name}</Button>
          </Link>
        ) : (
          <p className="text-8xl  font-bold text-black">Hello World</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
