"use client";
import { signIn } from "next-auth/react";

export default async function Page() {
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <div className="max-w-xs w-full border rounded-md border-zinc-200 shadow shadow-sm flex flex-col gap-4 p-6">
        <p className="text-2xl font-medium">Sign in</p>
        <button className="px-4 py-2 bg-violet-600 rounded-md rounded"
          onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
