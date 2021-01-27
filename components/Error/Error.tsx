import * as React from "react";
import { ConditionalWrap } from "../ConditionalWrap";
import { ErrorIcon } from "../Icons";
import { Flex } from "../utils";

interface Props {
  show: boolean;
}
export const Error: React.FC<Props> = ({ show, children }) => (
  <ConditionalWrap condition={show}>
    <Flex tw="col-span-3" centerH>
      <div tw="bg-red-100 text-red-500 p-4 rounded shadow flex items-center w-full max-w-md">
        <ErrorIcon tw="text-red-500 w-6 h-6 dark:text-red-500" />
        {children}
      </div>
    </Flex>
  </ConditionalWrap>
);
