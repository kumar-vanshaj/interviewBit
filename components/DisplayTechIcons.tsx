/**
 * Component: DisplayTechIcons
 * Purpose: Fetches and displays a small group of technology logos representing a tech stack.
 * It shows up to three technology icons with tooltips and slight overlapping visual effect.
 */

import { cn, getTechLogos } from "@/lib/utils";
import Image from "next/image";

const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
  // Fetch tech logos corresponding to the provided tech stack
  const techIcons = await getTechLogos(techStack);

  return (
    <div className="flex flex-row">
      {/* Render up to 3 tech icons */}
      {techIcons.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className={cn(
            "relative group bg-dark-300 rounded-full p-2 flex-center",
            index >= 1 && "-ml-3"
          )}
        >
          {/* Tooltip showing tech name */}
          <span className="tech-tooltip">{tech}</span>

          {/* Tech icon image */}
          <Image
            src={url}
            alt={tech}
            width={100}
            height={100}
            className="size-5"
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayTechIcons;
