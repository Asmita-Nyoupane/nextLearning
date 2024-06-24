"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const VerifyEmailPage = () => {
  const [token, setToken] = useState("");
  const [verifed, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyEmail = async () => {
    try {
      const response = await axios.post("/api/user/verifyemail", { token });

      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log("🚀 ~ verifyEmail ~ error:", error);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyEmail();
    }
  }, [token]);
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl "> Veify Email</h1>
      <h2 className=" py-2 px-4 bg-teal-100 font-semibold">
        {token ? `${token}` : "No Token"}
      </h2>

      {verifed && (
        <div>
          <h2 className=" text-2xl">Email Verified</h2>
          <Link href={"/login"} className=" py-4 text-lg text-purple-500">
            Login
          </Link>
        </div>
      )}
      {error && (
        <div>
          <h2 className=" text-2xl text-red-600">Error</h2>
        </div>
      )}
    </div>
  );
};

export default VerifyEmailPage;
