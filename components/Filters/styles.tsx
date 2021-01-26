import tw from "twin.macro";

// Individual Filter
export const Label = tw.label`flex items-center`;
export const LabelText = tw.span`text-gray-700 dark:text-gray-300 text-base ml-3`;
export const Checkbox = tw.input`focus:ring-torre-500 h-5 w-5 text-torre-500 border-gray-300 dark:border-gray-500 dark:bg-gray-800  rounded focus:dark:ring-offset-gray-800 checked:bg-torre-500`;

// Filter Group
export const ExpandButton = tw.button`focus:outline-none text-gray-500 hover:text-gray-800 dark:text-gray-200`;
export const GroupTitle = tw.h3`font-semibold dark:text-gray-200`;
