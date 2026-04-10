/**
 * Component: InterviewCard
 * Purpose: Displays a summary card for a single interview, showing role, type, tech stack, date,
 * feedback score, and navigation button to either view feedback or retake the interview.
 * Props:
 * - id: Interview ID
 * - userId: Current logged-in user ID
 * - role: Interview role (e.g., Frontend Developer)
 * - type: Interview type (technical, behavioral, or mixed)
 * - techstack: Array of technologies covered in the interview
 * - createdAt: Timestamp of interview creation
 */

import DisplayTechIcons from "@/components/DisplayTechIcons";
import { Button } from "@/components/ui/button";
import { getFeedbackByInterviewId } from "@/lib/actions/general.action";
import { getRandomInterviewCover } from "@/lib/utils";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

const InterviewCard = async ({
  id,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  // Fetch feedback document if available for this interview
  const feedback =
    userId && id
      ? await getFeedbackByInterviewId({ interviewId: id, userId })
      : null;

  // Normalize "mix" types to "Mixed" for display
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

  // Format createdAt or feedback creation date to readable format
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  return (
    <div className="card-border w-[360px] max=sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          {/* Interview Type Badge */}
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizedType}</p>
          </div>

          {/* Interview Cover Image */}
          <Image
            src={getRandomInterviewCover()}
            alt="cover image"
            width={90}
            height={90}
            className="rounded-full object-fit size-[90px]"
          />

          {/* Interview Role */}
          <h3 className="mt-5 capitalize">{role} Interview</h3>

          {/* Interview Metadata (Date and Score) */}
          <div className="flex flex-row gap-4 mt-3">
            <div className="flex flex-row gap-2">
              <Image
                src="/calendar.svg"
                alt="calendar"
                width={22}
                height={22}
              />
              <p>{formattedDate}</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" alt="star" width={22} height={22} />
              <p>{feedback?.totalScore || "---"} /100</p>
            </div>
          </div>

          {/* Short feedback or call-to-action text */}
          <p className="line-clamp-2 mt-5">
            {feedback?.finalAssessment ||
              "You haven't taken the interview yet. Take it now to improve your skills."}
          </p>
        </div>

        {/* Tech Stack and Navigation Button */}
        <div className="flex flex-row justify-between">
          <DisplayTechIcons techStack={techstack} />

          <Button className="btn-primary">
            <Link
              href={feedback ? `/interview/${id}/feedback` : `/interview/${id}`}
            >
              {feedback ? "Check Feedback" : "View Interview"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
