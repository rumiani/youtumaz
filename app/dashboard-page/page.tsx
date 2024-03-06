"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import AuthAlert from "../components/authAlert/authAlert";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>
          You are logged in and this is the Dashboard
          <button
            onClick={() => signOut()}
            title="Log in with Google"
            className="my-16 cursor-pointer text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-105 shadow-lg shadow-gray-300 rounded-lg flex flex-row w-60 h-10 mx-auto text-center"
          >
            Sign out
          </button>
        </div>
      ) : (
        <AuthAlert />
      )}
    </div>
  );
}
