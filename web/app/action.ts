"use server";

import { getData } from "@/lib/auth";

export const getUserProfile = async () => {
  const res = await getData("auth/profile");
  return res;
};
