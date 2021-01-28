import tw from "twin.macro";
import { createGlobalStyle } from "styled-components";

const BaseStyles = createGlobalStyle`
  html {
    ${tw`h-full min-h-screen`}
  }
  body {
    ${tw`h-full min-h-screen font-sans transition duration-500`}
  }
`;

export default BaseStyles;
