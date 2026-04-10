/**
 * Page: Sign-In
 * Renders the authentication form specifically in 'sign-in' mode.
 * This page is used at the route /auth/sign-in
 */

import AuthForm from "@/components/AuthForm";

const page = () => {
  // Render the AuthForm component with 'sign-in' mode
  return <AuthForm type="sign-in" />;
};

export default page;
