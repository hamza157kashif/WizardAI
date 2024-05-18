import {
  clerkMiddleware,
  createRouteMatcher
} from "@clerk/nextjs/server"

const isDashboardRoute = createRouteMatcher(["/dashboard(.*)"])

export default clerkMiddleware((auth, request) => {
  if (isDashboardRoute(request)) auth().protect()
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}