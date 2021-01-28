import * as React from "react";
import "twin.macro";

import { Button } from "@/components/Button";
import { useJobsFilters } from "@/hooks/useFilters";
import { FilterItem, FilterGroup } from "@/components/Filters";

export const Sidebar = ({ onSubmit }: { onSubmit: any }) => {
  const { getFilters } = useJobsFilters();

  return (
    <aside tw="col-span-1 md:col-span-3 p-8">
      <FilterGroup title="Filters">
        <div tw="flex flex-col gap-4">
          <FilterGroup title="Job type">
            <FilterItem label="Full time jobs" name="type" value="full-time-employment" />
            <FilterItem label="Part time jobs" name="type" value="part-time-employment" />
            <FilterItem label="Freelance gigs" name="type" value="freelance-gigs" />
            <FilterItem label="Internship jobs" name="type" value="internships" />
          </FilterGroup>

          <FilterGroup title="Seniority level">
            <FilterItem label="Senior level" name="role" value="senior" />
            <FilterItem label="Mid level" name="role" value="mid level" />
            <FilterItem label="Junior level" name="role" value="junior" />
          </FilterGroup>

          <FilterGroup title="Skill">
            <FilterItem label="Software development" name="skill" value="Software development" />
            <FilterItem label="Software engineering" name="skill" value="Software engineering" />
            <FilterItem label="Javascript" name="skill" value="Javascript" />
            <FilterItem label="Web development" name="skill" value="Web development" />
          </FilterGroup>

          <FilterGroup title="Status">
            <FilterItem label="Open" name="status" value="open" />
            <FilterItem label="Closed" name="status" value="closed" />
          </FilterGroup>

          <FilterGroup title="Organizations">
            <FilterItem label="Collage.com" name="organization" value="Collage.com" />
            <FilterItem label="Stripe" name="organization" value="Stripe" />
            <FilterItem label="Attlasian" name="organization" value="Attlasian" />
            <FilterItem label="BairesDev" name="BairesDev" value="BairesDev" />
          </FilterGroup>
        </div>
        <Button as="button" tw="flex md:sticky bottom-2" onClick={() => onSubmit(getFilters())}>
          Apply filters
        </Button>
      </FilterGroup>
    </aside>
  );
};
