"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";
import axios from "axios";
const FormValue = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(FormValue);
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/login", formData);
      console.log("🚀 ~ handleSubmit ~ response:", response);
      toast.success("Login Successfully");
      router.push("/profile");
    } catch (error) {
      toast.error("Please try again");
    }
  };
  return (
    <div className=" flex flex-col justify-center items-center gap-4">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-3xl font-semibold">Login Form</h2>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-4   w-[80%] md:w-[60%] lg:w-[40%] mx-auto border-2 shadow-lg bg-slate-50 p-4 rounded-md"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            className="px-2 py-1 rounded-md border-2 bg-slate-100 outline-none "
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
            className="px-2 py-1 rounded-password border-2 bg-slate-100 outline-none "
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Button className="w-fit">Login</Button>
        <Link
          href={"/signup"}
          className=" flex justify-center text-base text-purple-800 font-semibold"
        >
          Register Now
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
