/**
 * Layout: AuthLayout
 * Purpose: Protects the authentication pages by redirecting authenticated users to the home page.
 * Used for all routes under /auth (sign-in, sign-up).
 */

import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  // Check if the user is already authenticated
  const isUserAuthenticated = await isAuthenticated();

  // Check if the user is already authenticated
  if (isUserAuthenticated) redirect("/");

  // Render the authentication layout for unauthenticated users
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
