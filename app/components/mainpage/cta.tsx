import Link from "next/link";
import React from "react";

export default function Cta() {
  return (
    <div className="bg-black sm:px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
      <h2 className="text-white text-3xl md:text-5xl">Analyze your channel</h2>
      <p className="text-slate-500 mt-4 text-lg md:text-xl">
        Pull data from other channels and compare them with yours
      </p>
      <div className="flex mt-5">
        <Link href="/login" className="btn_secondary">
          Get Started
        </Link>
      </div>
    </div>
  );
}
