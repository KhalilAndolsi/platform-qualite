"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutBtn = () => {
  return (
    <button
      type="button"
      className="fixed top-1 right-1 p-2 bg-white text-foreground font-medium hover:shadow-md"
      onClick={() => signOut({ redirect: true, callbackUrl: "/login" })}>
      <LogOut strokeWidth={3} />
    </button>
  );
};

export default SignOutBtn;
