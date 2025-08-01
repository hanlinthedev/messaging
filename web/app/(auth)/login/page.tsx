import LoginButton from "@/components/shared/LoginButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getCookie } from "../action";

export default async function LoginForm() {
  const isAuth = await getCookie("access_token");
  if (isAuth) {
    return redirect("/"); // Redirect to home if already authenticated
  }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">ChatApp</h1>
          <p className="text-gray-600 text-sm">Connect and chat with ease</p>
        </div>
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl font-normal text-gray-900">
              Welcome
            </CardTitle>
            <CardDescription className="text-gray-500">
              Sign in to start your conversations
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <Button
              asChild
              className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-sm h-11"
              variant="outline"
            >
              <LoginButton />
            </Button>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By continuing, you agree to our{" "}
                <a href="#" className="underline hover:text-gray-700">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline hover:text-gray-700">
                  Privacy Policy
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
