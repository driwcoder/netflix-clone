"use client";

import Input from "@/components/input";
import Image from "next/image";
import { useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative h-screen w-full bg-[url('/hero.jpg')] no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src={"/logo.png"}
            width={"500"}
            height={"500"}
            alt={"aii"}
            className="h-12 w-auto"
          />
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                Sign in
              </h2>
              <div className="flex flex-col gap-4">
                <Input
                  id="username"
                  label="Username"
                  onChange={(event: any) => setName(event.target.value)}
                  value={name}
                  type="name"
                />
                <Input
                  id="email"
                  label="Email"
                  onChange={(event: any) => setEmail(event.target.value)}
                  value={email}
                  type="email"
                />
                <Input
                  id="password"
                  label="Password"
                  onChange={(event: any) => setPassword(event.target.value)}
                  value={password}
                  type="password"
                />
              </div>
              <button className="bg-red-600 text-white py-3 rounded-md w-full mt-10 hover:bg-red-700 transition">
                Login
              </button>
              <p className="text-neutral-500 mt-12 text-center">
                Fisrst time using Netflix?{" "}
                <span className="text-white block hover:underline cursor-pointer">
                  Create an account
                </span>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
