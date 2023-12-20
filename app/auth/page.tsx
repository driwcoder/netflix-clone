"use client";

import Input from "@/components/input";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);
  console.log(variant);


  return (
    <div className="relative h-screen w-full bg-[url('/hero.jpg')] no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <div className="w-full flex justify-center md:justify-start">
            <Image
              src={"/logo.png"}
              width={"500"}
              height={"500"}
              alt={"aii"}
              className="h-12 w-auto"
            />
          </div>
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 justify-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold text-start w-full">
                {variant === "login" ? "Logar" : "Cadastrar"}
              </h2>
              <div className="flex flex-col gap-4 align-center w-full">
                {variant === "register" && (
                  <Input
                    id="username"
                    label="Usuário"
                    onChange={(event: any) => setName(event.target.value)}
                    value={name}
                    type="name"
                  />
                )}
                <Input
                  id="email"
                  label="Email"
                  onChange={(event: any) => setEmail(event.target.value)}
                  value={email}
                  type="email"
                />
                <Input
                  id="password"
                  label="Senha"
                  onChange={(event: any) => setPassword(event.target.value)}
                  value={password}
                  type="password"
                />
              </div>
              <button className="bg-red-600 text-white py-3 rounded-md w-full mt-10 hover:bg-red-700 transition">
                {variant === "login" ? "Entrar" : "Concluir"}
              </button>
              {variant === "login" ? (
                <p className="text-neutral-500 mt-12 text-center">
                  Primeira vez no Netflix?{" "}
                  <span
                    onClick={toggleVariant}
                    className="text-white block hover:underline cursor-pointer"
                  >
                    Crie sua conta!
                  </span>
                </p>
              ) : (
                <p className="text-neutral-500 mt-12 text-center">
                  Já tem uma conta no Netflix?{" "}
                  <span
                    onClick={toggleVariant}
                    className="text-white block hover:underline cursor-pointer"
                  >
                    Faça o Login!
                  </span>
                </p>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
