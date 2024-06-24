"use client";
import React from "react";
import { Button } from "../ui/button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const handleLogOut = async () => {
    try {
      const response = await axios.delete("/api/user/logout");
      console.log("🚀 ~ handleLogOut ~ response:", response);
      toast.success("Logout successfully");
      router.push("/login");
    } catch (error) {
      console.log("🚀 ~ handleLogOut ~ error:", error);
      toast.error("Please try again later");
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <Toaster position="top-right" reverseOrder={false} />
      <Button variant="destructive" onClick={handleLogOut}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
