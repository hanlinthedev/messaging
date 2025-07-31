"use server";

import { cookies } from "next/headers";

const getCookie = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
};

export const getData = async (endpoint: string) => {
  const res = await fetch(`${process.env.API_URL}/${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getCookie("access_token")}`,
    },
  });

  if (!res.ok) {
    console.log(res);
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data?.data;
};
