import * as React from "react";
import "twin.macro";

import { Button } from "@/components/Button";
import { FilterItem, FilterGroup } from "@/components/Filters";

export const Sidebar = () => {
  return (
    <aside tw="col-span-1 md:col-span-3 p-8">
      <FilterGroup title="Filters" active={true}>
        <div tw="flex flex-col gap-4">
          <FilterGroup title="Job type" active={true}>
            <FilterItem label="Full time jobs" />
            <FilterItem label="Part time jobs" />
            <FilterItem label="Remote jobs" />
            <FilterItem label="Internship jobs" />
          </FilterGroup>

          <FilterGroup title="Seniority level">
            <FilterItem label="Mid level" />
            <FilterItem label="Senior level" />
          </FilterGroup>

          <FilterGroup title="Salary range">
            <FilterItem label="$700 - $1000" />
            <FilterItem label="$1000 - $5000" />
          </FilterGroup>

          <FilterGroup title="Status">
            <FilterItem label="Open" />
            <FilterItem label="Closed" />
          </FilterGroup>
        </div>
        <Button as="button">Apply filters</Button>
      </FilterGroup>
    </aside>
  );
};
