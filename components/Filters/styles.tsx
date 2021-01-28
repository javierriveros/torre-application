import tw, { styled } from "twin.macro";

// Individual Filter
export const Label = tw.label`flex items-center`;
export const LabelText = tw.span`text-gray-700 dark:text-gray-300 text-base ml-3`;
export const Input = styled.input(({ type }) => [
  tw`w-5 h-5 border-gray-300 focus:ring-torre-500 text-torre-500 dark:border-gray-500 dark:bg-gray-800 focus:dark:ring-offset-gray-800 checked:bg-torre-500`,
  type === "checkbox" ? tw`rounded` : "rounded-full",
]);

// Filter Group
export const ExpandButton = styled.button<{ expanded?: boolean }>`
  ${tw`text-gray-500 transition-all transform outline-none focus:outline-none hover:text-gray-800 dark:text-gray-200`}
  ${({ expanded = false }) => expanded && tw`rotate-180`}
`;

export const GroupTitle = tw.h3`font-semibold dark:text-gray-200`;

export const Collapse = styled.div<{ collapsed: boolean }>(({ collapsed = true }) => [
  tw`flex flex-col gap-2 mt-4`,
  collapsed ? tw`hidden` : tw`flex`,
]);
