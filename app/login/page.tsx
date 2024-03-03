"use client"
import Image from "next/image";
import React from "react";
import loginPic from "@/public/assets/images/login/login.svg";
import ImgHoverZoom from "../components/imgHoverZoom/imgHoverZoom";
import googleLogo from "@/public/assets/images/login/googleLogo.png";
import {signIn} from 'next-auth/react'
export default function Login() {
  return (
    <section className="my-12 flex flex-col-reverse sm:flex-row ">
      <div className="my-8 h-auto w-full lg:w-1/2">
        <ImgHoverZoom src={loginPic} alt="Phone image" className="h-full" />
      </div>
      <div className="mx-auto my-8">
        <h2 className="font-bold text-center">Log in</h2>
        <button onClick={() => signIn('google')} title="Log in with Google" className="my-16 cursor-pointer text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-105 shadow-lg shadow-gray-300 rounded-lg flex flex-row w-60 h-10 mx-auto text-center">
          <Image alt="Google logo" src={googleLogo} width={32} className="mx-2"/>
          <h3 className="w-52  flex self-center justify-center font-bold ">Sigin in with Google</h3>
        </button>
      </div>
    </section>
  );
}
