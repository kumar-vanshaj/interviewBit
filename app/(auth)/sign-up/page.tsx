/**
 * Page: Sign-Up
 * Renders the authentication form specifically in 'sign-up' mode.
 * This page is used at the route /auth/sign-up
 */

import AuthForm from "@/components/AuthForm";

const page = () => {
  // Render the AuthForm component with 'sign-up' mode
  return <AuthForm type="sign-up" />;
};

export default page;
