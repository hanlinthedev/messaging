"use client";
import { googleCallback } from "@/app/(auth)/action";
import { GoogleLogin } from "@react-oauth/google";

type Props = {};

const LoginButton = (props: Props) => {
  return (
    <GoogleLogin onSuccess={(c) => googleCallback(c.credential as string)} />
  );
};

export default LoginButton;
