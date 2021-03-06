import tw, { styled } from "twin.macro";

interface ButtonProps {
  readonly secondary?: boolean;
  readonly small?: boolean;
}

export const Button = styled.a<ButtonProps>(({ secondary = false, small = false }) => [
  tw`inline-flex items-center justify-center px-6 py-3 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none`,

  secondary
    ? tw`text-gray-600 bg-gray-300 hover:bg-gray-400 hover:text-gray-700 focus:ring-gray-600`
    : tw`text-white bg-blue-600 hover:bg-blue-500 focus:ring-blue-600`,
  small ? tw`px-3 py-1` : tw`px-6 py-3`,
]);

export const TorreButton = tw.a`inline-flex text-gray-800 bg-torre-500 items-center justify-center px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-torre-500 focus:ring-offset-2 disabled:opacity-50 hover:opacity-90`;
