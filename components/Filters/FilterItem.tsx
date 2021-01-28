import * as React from "react";
import { Input, Label, LabelText } from "./styles";
import "twin.macro";
import { useJobsFilters } from "@/hooks";

export const FilterItem = ({
  label,
  type = "radio",
  ...rest
}: {
  label: string;
} & React.InputHTMLAttributes<any>) => {
  const { setFilters } = useJobsFilters();
  const onChange = React.useCallback(
    (e: any) => {
      setFilters(e.target.name, e.target.value);
    },
    [setFilters]
  );
  return (
    <div>
      <Label>
        <Input type={type} {...rest} onChange={onChange} />
        <LabelText>{label}</LabelText>
      </Label>
    </div>
  );
};
