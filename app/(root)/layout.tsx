/**
 * Layout: RootLayout
 * Purpose: Protects all application routes except for /auth pages by checking if the user is authenticated.
 * If the user is not authenticated, they are redirected to the /sign-in page.
 * Used across the main application routes (outside /auth).
 */

import { isAuthenticated } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  // Check if the user is authenticated
  const isUserAuthenticated = await isAuthenticated();

  // If not authenticated, redirect to the sign-in page
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      {/* Navigation bar with logo and home link */}
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">IntweviewBit </h2>
        </Link>
      </nav>

      {/* Render child pages inside the root layout */}
      {children}
    </div>
  );
};

export default RootLayout;
