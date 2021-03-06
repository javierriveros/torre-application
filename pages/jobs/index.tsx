import * as React from "react";
import "twin.macro";
import { useRouter } from "next/router";

import { Opportunity } from "@/@types";
import { Error } from "@/components/Error";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/Button";
import { Search } from "@/components/Search";
import { Sidebar } from "@/components/Sidebar";
import { LoadingIcon } from "@/components/Icons";
import { useOpportunities } from "@/hooks/queries";
import { useJobsFilters, useFiltersForJobsQuery } from "@/hooks";
import { JobCard, JobsSkeleton } from "@/components/Jobs";
import { ConditionalWrap } from "@/components/ConditionalWrap";
import { PageTitle } from "@/components/utils";

export default function JobsPage() {
  const { query } = useRouter();
  const { getFilters } = useJobsFilters();
  const { and, setAnd } = useFiltersForJobsQuery();

  React.useEffect(() => {
    if (query?.term && query?.term?.length > 0) {
      // @ts-ignore
      setAnd([
        ...getFilters(),
        {
          "skill/role": {
            text: query?.term,
            experience: "potential-to-develop",
          },
        },
      ]);
    }
  }, [query, getFilters, setAnd]);

  const [jobCount, setJobCount] = React.useState(20);
  const { data, isLoading, isError, error, isFetching } = useOpportunities({
    size: jobCount,
    and,
  });

  return (
    <Layout>
      <section tw="w-full bg-gray-50 dark:bg-dark-600 grid grid-cols-1 md:grid-cols-12">
        <Search
          initialValue={query?.term as string}
          placeholder="Find a job that matches with you"
          onSubmit={(value: string) => {
            // @ts-ignore
            setAnd([
              ...getFilters(),
              {
                "skill/role": {
                  text: value,
                  experience: "potential-to-develop",
                },
              },
            ]);
          }}
        />
        <Sidebar
          onSubmit={(value: any) => {
            // @ts-ignore
            setAnd([...value]);
          }}
        />

        <section tw="col-span-1 md:col-span-9 px-4 pt-8">
          <PageTitle>
            Showing {data?.results?.length} jobs
            {isFetching && <LoadingIcon tw="text-blue-500 ml-2" />}
          </PageTitle>
          <div tw="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-8 my-4">
            <Error show={isError || data?.message}>
              <p>
                {/* @ts-ignore * */}
                {isError && error.message}
                {data?.message && data.message}
              </p>
            </Error>
            {isLoading && <JobsSkeleton />}
            <ConditionalWrap condition={data?.results?.length}>
              <>
                {data?.results?.map((opportunity: Opportunity) => (
                  <JobCard opportunity={opportunity} key={opportunity.id} />
                ))}
              </>
            </ConditionalWrap>
          </div>
          <ConditionalWrap condition={jobCount < 90}>
            <div tw="mb-8 mt-4 text-center">
              <Button
                as={"button"}
                onClick={() => {
                  setJobCount(jobCount + 10);
                }}
                disabled={isFetching}
              >
                {isFetching ? (
                  <>
                    <LoadingIcon /> Loading...
                  </>
                ) : (
                  "Load More"
                )}
              </Button>
            </div>
          </ConditionalWrap>
        </section>
      </section>
    </Layout>
  );
}
