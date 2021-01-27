import { Card } from "@/components/Genoma/styles";
import { Flex } from "@/components/utils";
import { default as ReactSkeleton } from "react-loading-skeleton";
import "twin.macro";

export const GenomaSkeleton = () => (
  <>
    <div tw="col-span-1">
      <Flex centerH>
        <ReactSkeleton circle width={150} height={150} />
      </Flex>

      <Card>
        <Flex centerH>
          <ReactSkeleton height={10} width={150} />
        </Flex>
        <ReactSkeleton count={4} />

        <ReactSkeleton height={40} />
      </Card>
    </div>
    <div tw="col-span-2">
      <Card>
        <ReactSkeleton width={150} />

        <ReactSkeleton count={4} />
      </Card>
      <Card>
        <ReactSkeleton width={150} />
        <Flex col tw="divide-y divide-gray-200">
          {[1, 2, 3, 4, 5].map((id) => (
            <Flex spaceBetween tw="py-4" key={id}>
              <ReactSkeleton circle width={50} height={50} />
              <div tw="w-full ml-2 flex-col flex">
                <ReactSkeleton width={150} />

                <ReactSkeleton height={8} />
                <ReactSkeleton height={8} />
                <ReactSkeleton height={8} />
                <ReactSkeleton height={8} />

                <ReactSkeleton width={80} height={30} />
              </div>
            </Flex>
          ))}
        </Flex>
      </Card>
    </div>
  </>
);
