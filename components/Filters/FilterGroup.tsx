import * as React from "react";
import "twin.macro";
import { ExpandButton, GroupTitle, Collapse } from "./styles";

interface Props {
  title: string;
  active?: boolean;
}
export const FilterGroup: React.FC<Props> = ({ title, active = true, children }) => {
  const [open, setOpen] = React.useState(active);

  return (
    <div tw="p-2">
      <div tw="flex justify-between">
        <GroupTitle>{title}</GroupTitle>
        <ExpandButton onClick={() => setOpen(!open)} expanded={open}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            tw="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </ExpandButton>
      </div>
      <Collapse collapsed={!open}>{children}</Collapse>
    </div>
  );
};
