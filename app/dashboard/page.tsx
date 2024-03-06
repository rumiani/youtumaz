"use client"
import React from "react";
import { signIn, signOut, useSession } from 'next-auth/react';
import AuthAlert from "../components/authAlert/authAlert";

export default function Dashboard() {
    const { data: session } = useSession();

  return <div>{session ? <div>You are logged in and this is the Dashboard</div> : <AuthAlert/>}</div>;
}
