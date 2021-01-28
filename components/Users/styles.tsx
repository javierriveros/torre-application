import { default as NextImage } from "next/image";
import tw, { styled } from "twin.macro";

export const Card = tw.article`bg-white rounded p-6 col-span-1 border border-gray-100 dark:border-0 dark:bg-dark-500`;

export const Image = styled(NextImage)`
  ${tw`object-cover w-16 h-16 mb-4 rounded shadow`}
`;

export const UserName = tw.h4`font-semibold text-base mb-2 dark:text-white`;

export const UserHeadline = tw.p`text-gray-500 text-sm font-light dark:text-gray-500`;

export const JobSlider = styled.div`
  ${tw`flex items-center gap-4 mt-4 overflow-x-scroll overflow-y-hidden whitespace-nowrap`}

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const JobDetail = tw.span`dark:text-gray-300 text-gray-600 text-sm text-center capitalize`;

export const ButtonsContainer = tw.div`grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2`;
