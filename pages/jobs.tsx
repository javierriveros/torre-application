import { Button } from "@/components/Button";
import { ConditionalWrap } from "@/components/ConditionalWrap";
import { Error } from "@/components/Error";
import { LoadingIcon } from "@/components/Icons/LoadingIcon";
import { JobCard, JobsSkeleton } from "@/components/Jobs";
import { Layout } from "@/components/Layout";
import { Sidebar } from "@/components/Sidebar";
import { useOpportunities } from "@/hooks/queries";
import { Opportunity } from "@/services/api";
import * as React from "react";
import "twin.macro";

export default function Home() {
  const [jobCount, setJobCount] = React.useState(20);
  const { data, isLoading, isError, error, isFetching } = useOpportunities({
    size: jobCount,
  });

  return (
    <Layout>
      <section tw="w-full bg-gray-50 dark:bg-dark-600 grid grid-cols-1 md:grid-cols-12">
        <Sidebar />

        <section tw="col-span-1 md:col-span-9 px-4 pt-8">
          <h2 tw="text-2xl font-bold dark:text-white">
            Showing {data?.results?.length} jobs
          </h2>
          <div tw="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-8 my-4">
            <Error show={isError || data?.message}>
              <p>
                {isError && error.message}
                {data?.message && data.message}
              </p>
            </Error>
            {isLoading && <JobsSkeleton />}
            {data?.results?.map((opportunity: Opportunity) => (
              <JobCard opportunity={opportunity} />
            ))}
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
