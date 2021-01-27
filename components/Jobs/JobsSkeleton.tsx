import { Card } from "@/components/Genoma/styles";
import { ButtonsContainer } from "./styles";

import { default as ReactSkeleton } from "react-loading-skeleton";
import "twin.macro";

export const JobsSkeleton = () => (
  <>
    {Array(9)
      .fill(0)
      .map((_, i) => (
        <Card tw="flex flex-col justify-between" key={`skeleton-${i}`}>
          <ReactSkeleton width={64} height={64} />
          <ReactSkeleton />

          <ReactSkeleton width={80} />

          <ReactSkeleton width={150} height={5} />
          <ReactSkeleton width={50} height={5} />

          <ReactSkeleton width={30} height={5} count={2} />
          <ButtonsContainer>
            <ReactSkeleton height={40} />
            <ReactSkeleton height={40} />
          </ButtonsContainer>
        </Card>
      ))}
  </>
);
