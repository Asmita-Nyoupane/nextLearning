"use client";
import React, { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupSchema } from "@/schemas/signupSchema";
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";
import axios from "axios";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
const FormValue = {
  name: "",
  email: "",
  password: "",
};
const SignupForm = () => {
  //  Define your form.
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: FormValue,
  });

  const router = useRouter();

  //  submit handler.
  const onSubmit = async (values: z.infer<typeof signupSchema>) => {
    try {
      const response = await axios.post("/api/user/signup", values);
      // console.log("🚀 ~ onSubmit ~  response:", response.data);

      toast.success("SignUp Successfully");
      router.push("/verifyemail");
    } catch (error) {
      toast.error("Please try again later!");
      console.log("🚀 ~ onSubmit ~ error:", error);
    } finally {
      form.reset();
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center gap-4">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-3xl font-semibold">SignUp Form</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-4   w-[80%] md:w-[60%] lg:w-[40%] mx-auto border-2 shadow-lg bg-slate-50 p-4 rounded-md"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-fit">Sign Up</Button>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
