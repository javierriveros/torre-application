import tw from "twin.macro";
import { createGlobalStyle } from "styled-components";

const BaseStyles = createGlobalStyle`
  body {
    ${tw`font-sans transition duration-500`}
  }
`;

export default BaseStyles;
