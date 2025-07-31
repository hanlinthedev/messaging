"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const googleCallback = async (idToken: string) => {
  const res = await fetch("http://localhost:8080/api/auth/google/callback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idToken,
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to authenticate with Google");
  }
  const data = await res.json();
  console.log("Google authentication successful:", data);
  await setCookie("access_token", data.access_token, 24 * 60 * 60 * 1000); // 24 hours
  await setCookie("refresh_token", data.refresh_token, 7 * 24 * 60 * 60 * 1000); // 7 days
  return redirect("/");
};

export const setCookie = async (
  name: string,
  value: string,
  maxAge: number
) => {
  const cookieStore = await cookies();

  cookieStore.set(name, value, {
    maxAge,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
};

export const getCookie = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value ? true : false;
};
