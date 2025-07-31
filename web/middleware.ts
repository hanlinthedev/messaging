import { NextRequest, NextResponse } from "next/server";
const publicRoutes = ["/login", "/signup", "/"];
const privateRoutes = ["/cart", "/order"];
const adminRoutes = ["/admin"];

export const middleware = async (request: NextRequest) => {
  const accessToken = request.cookies.get("access_token")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const response = NextResponse.next();

  if (accessToken) {
    response.headers.set("Authorization", `Bearer ${accessToken}`);
  }

  return response;
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|login).*)"],
};
