/**
 * Page: Interview Generation
 * Purpose: Displays the interface for generating a new interview using the Agent component.
 * This is a standalone page used to initiate the question generation flow.
 */

import { Agent } from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const page = async () => {
  // Fetch the currently logged-in user
  const user = await getCurrentUser();

  return (
    <>
      <h3>Interview Generation</h3>

      {/* Render the Agent component in generation mode */}
      <Agent userName={user?.name!} userId={user?.id} type="generate" />
    </>
  );
};

export default page;
