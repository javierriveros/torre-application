import * as React from "react";

interface ConditionalWrapProps {
  condition: boolean;

  children: JSX.Element;
}

export const ConditionalWrap = ({ condition, children }: ConditionalWrapProps) =>
  condition ? React.cloneElement(children) : null;
