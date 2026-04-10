/**
 * Global Type Definitions
 *
 * This file defines common interfaces and types used throughout the PrepWise application,
 * including user models, interview models, feedback models, form props, and action parameter structures.
 *
 * These types ensure consistency across client-side and server-side logic.
 */

// Represents structured feedback for an interview
interface Feedback {
  id: string;
  interviewId: string;
  totalScore: number;
  categoryScores: Array<{
    name: string;
    score: number;
    comment: string;
  }>;
  strengths: string[];
  areasForImprovement: string[];
  finalAssessment: string;
  createdAt: string;
}

// Represents an interview record
interface Interview {
  id: string;
  role: string;
  level: string;
  questions: string[];
  techstack: string[];
  createdAt: string;
  userId: string;
  type: string;
  finalized: boolean;
}

// Parameters required to create interview feedback
interface CreateFeedbackParams {
  interviewId: string;
  userId: string;
  transcript: { role: string; content: string }[];
  feedbackId?: string;
}

// Represents a user in the system
interface User {
  name: string;
  email: string;
  id: string;
}

// Props passed to the InterviewCard component
interface InterviewCardProps {
  id?: string;
  userId?: string;
  role: string;
  type: string;
  techstack: string[];
  createdAt?: string;
}

// Props passed to the Agent component
interface AgentProps {
  userName: string;
  userId?: string;
  interviewId?: string;
  feedbackId?: string;
  type: "generate" | "interview";
  questions?: string[];
}

// Expected route parameters for Next.js dynamic routes
interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

// Parameters for fetching feedback by interview ID
interface GetFeedbackByInterviewIdParams {
  interviewId: string;
  userId: string;
}

// Parameters for fetching latest interviews
interface GetLatestInterviewsParams {
  userId: string;
  limit?: number;
}

// Parameters for user sign-in
interface SignInParams {
  email: string;
  idToken: string;
}

// Parameters for user sign-up
interface SignUpParams {
  uid: string;
  name: string;
  email: string;
  password: string;
}

// Type representing the auth form mode
type FormType = "sign-in" | "sign-up";

// Props used for submitting an interview creation form
interface InterviewFormProps {
  interviewId: string;
  role: string;
  level: string;
  type: string;
  techstack: string[];
  amount: number;
}

// Props for displaying technology icons
interface TechIconProps {
  techStack: string[];
}
