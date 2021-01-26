import * as React from "react";
import { Checkbox, Label, LabelText } from "./styles";
import "twin.macro";

export const FilterItem = ({
  label,
  ...rest
}: {
  label: string;
} & React.InputHTMLAttributes<any>) => {
  return (
    <div>
      <Label>
        <Checkbox type="checkbox" {...rest} />
        <LabelText>{label}</LabelText>
      </Label>
    </div>
  );
};
