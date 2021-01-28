import * as React from "react";
import "twin.macro";
import { Error } from "@/components/Error";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/Button";
import { Search } from "@/components/Search";
import { Opportunity } from "@/services/api";
import { Sidebar } from "@/components/Sidebar";
import { LoadingIcon } from "@/components/Icons";
import { useOpportunities } from "@/hooks/queries";
import { JobCard, JobsSkeleton } from "@/components/Jobs";
import { ConditionalWrap } from "@/components/ConditionalWrap";
import { useFilters, useFiltersForQuery } from "@/hooks/useFilters";
import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter();
  const { getFilters } = useFilters();
  const { and, setAnd } = useFiltersForQuery();

  React.useEffect(() => {
    if (query?.term?.length) {
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
            setAnd([
              ...value,
              {
                "skill/role": {
                  text: query?.term,
                  experience: "potential-to-develop",
                },
              },
            ]);
          }}
        />

        <section tw="col-span-1 md:col-span-9 px-4 pt-8">
          <h2 tw="text-2xl font-bold dark:text-white flex items-center">
            Showing {data?.results?.length} jobs
            {isFetching && <LoadingIcon tw="text-blue-500 ml-2" />}
          </h2>
          <div tw="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-8 my-4">
            <Error show={isError || data?.message}>
              <p>
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
