import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/convex/clerk", "/clerk", "/api/webhook/clerk"], // An array of public routes that don't require authentication.

  // An array of routes to be ignored by the authentication middleware.
  ignoredRoutes: ["/api/webhook/clerk", "/convex/clerk", "/clerk"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
