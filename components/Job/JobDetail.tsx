import "twin.macro";
import ReactMarkdown from "react-markdown";

import { Section } from "./Section";

export const JobDetail = ({ detail }: { detail: any }) => {
  let title;
  switch (detail.code) {
    case "reason":
      title = "Why this opportunity exists";
      break;
    case "responsibilities":
      title = "Responsibilities";
      break;
    case "challenges":
      title = "Challenges";
      break;
    case "career-path":
      title = "Career path";
      break;
    case "organizations":
      title = "About the organization(s)";
      break;
    case "team-culture":
      title = "Team culture";
      break;
    case "team-structure":
      title = "Team structure";
      break;
    case "additional":
      title = "Additional details";
      break;

    default:
      return null;
  }

  return (
    <Section title={title}>
      <ReactMarkdown tw="prose dark:text-gray-300 text-gray-700 whitespace-pre-line">
        {detail.content}
      </ReactMarkdown>
    </Section>
  );
};
