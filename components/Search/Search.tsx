import * as React from "react";
import "twin.macro";

import { Button } from "@/components/Button";
import { SearchContainer, SearchBar, SearchInput } from "./styles";

interface Props {
  onSubmit: any;
  initialValue: string;
}

export const Search = ({ onSubmit, initialValue = "" }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState(initialValue);

  return (
    <SearchContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!searchTerm.length) return;
          //@ts-ignore
          onSubmit(searchTerm);
        }}
      >
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="Find a job that matches with you"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button tw="rounded-full mt-0" as="button">
            Search
          </Button>
        </SearchBar>
      </form>
    </SearchContainer>
  );
};
