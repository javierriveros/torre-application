import tw from "twin.macro";

export const SearchContainer = tw.div`col-span-1 md:col-span-12 px-8 pt-4`;

export const SearchBar = tw.div`mt-1 flex rounded-md shadow-lg w-full p-2 rounded-full bg-white dark:bg-gray-700`;

export const SearchInput = tw.input`focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-full sm:text-sm border-0 focus:ring-0 px-8 placeholder-gray-400 focus:placeholder-gray-600 dark:bg-gray-700 dark:focus:placeholder-gray-200 dark:text-white`;
