import * as React from "react";
import "twin.macro";
import { ExpandButton } from "./styles";
import ReactMarkdown from "react-markdown";

export const Collapsible: React.FC<{ text: string; limit?: number }> = ({ text, limit = 300 }) => {
  const [collapsed, setCollapsed] = React.useState(true);

  if (text.length <= limit) return <p tw="prose dark:text-gray-400 prose-lg">{text}</p>;

  return (
    <div tw="flex flex-col w-full">
      <p tw="prose dark:text-gray-400 prose-lg">
        <ReactMarkdown>{collapsed ? text.substring(0, limit).concat("...") : text}</ReactMarkdown>
      </p>
      {text.length > limit && (
        <ExpandButton onClick={() => setCollapsed(!collapsed)}>
          View {collapsed ? "more" : "less"}
        </ExpandButton>
      )}
    </div>
  );
};
