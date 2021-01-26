import tw, { styled } from "twin.macro";

export const Card = tw.article`bg-white rounded p-6 col-span-1 border border-gray-100 dark:border-0 dark:bg-dark-500`;

export const JobImage = tw.img`w-16 h-16 rounded shadow mb-4`;

export const JobTitle = tw.h3`font-semibold text-base mb-2 dark:text-white`;

export const JobDescription = tw.p`text-gray-500 font-light dark:text-gray-500`;

export const JobSlider = styled.div`
  ${tw`flex items-center gap-4 mt-4 overflow-x-scroll overflow-y-hidden whitespace-nowrap`}

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const JobSliderItem = tw.div`px-3 py-1 text-sm text-torre-700 bg-torre-500 rounded dark:bg-gray-800 dark:text-gray-300`;

export const ButtonsContainer = tw.div`grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2`;
