import tw, { styled } from "twin.macro";

export interface CommonProps {
  wrap?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
  justifyEnd?: boolean;
  justifyStart?: boolean;

  alignItemsStart?: boolean;
  center?: boolean;
  centerV?: boolean;
  centerH?: boolean;

  fullW?: boolean;
  col?: boolean;
}

export const Flex = styled.div<CommonProps>`
  ${tw`flex`}
  ${({ wrap }) => wrap && tw`flex-wrap`}
  ${({ spaceAround }) => spaceAround && tw`justify-around`}
  ${({ spaceBetween }) => spaceBetween && tw`justify-between`}
  ${({ justifyEnd }) => justifyEnd && tw`justify-end`}
  ${({ justifyStart }) => justifyStart && tw`justify-start`}
  ${({ alignItemsStart }) => alignItemsStart && tw`items-start`}
  ${({ center }) => center && tw`items-center justify-center`}
  ${({ centerH }) => centerH && tw`justify-center`}
  ${({ centerV }) => centerV && tw`items-center`}
  ${({ fullW }) => fullW && tw`w-full`}
  ${({ col }) => col && tw`flex-col`}
`;
