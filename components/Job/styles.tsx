import tw from "twin.macro";

export const JobTitle = tw.h1`font-medium text-xl dark:text-white mt-2`;

export const JobOwner = tw.aside`col-span-3 md:col-span-1 order-last md:order-first relative`;

export const JobInfo = tw.section`col-span-3 bg-white rounded dark:bg-gray-800`;
export const JobImageCard = tw.div`-mt-16 ml-8 border-4 border-white inline-block rounded-lg bg-white dark:bg-gray-800 dark:border-gray-800`;
export const JobLocation = tw.span`dark:text-gray-300 text-gray-600 text-sm flex mt-2`;

export const Gradient = tw.div`bg-gradient-to-r from-red-500 to-red-700 w-full h-48 rounded-t-lg bg-cover`;

export const SectionTitle = tw.h4`font-medium text-torre-600 dark:text-gray-200`;
