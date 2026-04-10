/**
 * Page: Interview Session
 * Purpose: Displays an interactive interview session for a specific interview ID.
 * It loads the interview's role, tech stack, and questions, and allows the user to participate via the Agent component.
 * Route: /interview/[id]
 */

import { Agent } from "@/components/Agent";
import DisplayTechIcons from "@/components/DisplayTechIcons";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewById } from "@/lib/actions/general.action";
import { getRandomInterviewCover } from "@/lib/utils";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = async ({ params }: RouteParams) => {
  const { id } = await params;

  // Get the currently logged-in user
  const user = await getCurrentUser();

  // Fetch the interview data by ID
  const interview = await getInterviewById(id);

  // If the interview is not found, redirect to home
  if (!interview) redirect("/");

  return (
    <>
      {/* Interview Header: Role, Tech Stack, and Type */}
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-[40px]"
            />
            <h3 className="capitalize">{interview.role} Interview</h3>
          </div>

          {/* Display the interview's tech stack icons */}
          <DisplayTechIcons techStack={interview.techstack} />
        </div>

        {/* Display the interview type */}
        <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize">
          {interview.type}
        </p>
      </div>

      {/* Render the Agent component to handle the interview interaction */}
      <Agent
        userName={user?.name!}
        userId={user?.id}
        interviewId={id}
        type="interview"
        questions={interview.questions}
      />
    </>
  );
};

export default page;
