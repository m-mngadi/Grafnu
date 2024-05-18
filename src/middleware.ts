import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { constants as c } from "@/constants";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/explore(.*)",
  "/rewards(.*)",
  "/c(.*)", // campaign page [create, view]
]);

const isPublicRoute = createRouteMatcher(["/pricing(.*)", "/blog(.*)"]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();

  if (isProtectedRoute(req)) auth().protect();

  if (userId && !isProtectedRoute(req) && !isPublicRoute(req)) {
    return NextResponse.redirect(new URL(c.DEFAULT_AFTER_SIGN_IN, req.nextUrl));
  }
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
