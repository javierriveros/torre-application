import tw, { styled } from "twin.macro";
import { default as ReactSkeleton, SkeletonTheme } from "react-loading-skeleton";

import { ButtonsContainer } from "./styles";
import { Card } from "@/components/Genome/styles";

const StyledSkeleton = styled(ReactSkeleton)`
  ${tw`dark:bg-gray-600`}
`;

export const JobsSkeleton = () => (
  <>
    {Array(9)
      .fill(0)
      .map((_, i) => (
        <SkeletonTheme color="#9CA3AF" highlightColor="#D1D5DB" key={`skeleton-${i}`}>
          <Card tw="flex flex-col justify-between">
            <StyledSkeleton width={64} height={64} />
            <StyledSkeleton />

            <StyledSkeleton width={80} />

            <StyledSkeleton width={150} height={5} />
            <StyledSkeleton width={50} height={5} />

            <StyledSkeleton width={30} height={5} />

            <ButtonsContainer>
              <StyledSkeleton height={40} />
              <StyledSkeleton height={40} />
            </ButtonsContainer>
          </Card>
        </SkeletonTheme>
      ))}
  </>
);
