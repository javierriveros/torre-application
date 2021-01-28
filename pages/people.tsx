import { useRouter } from "next/router";
import * as React from "react";
import "twin.macro";
import { Error } from "@/components/Error";
import { Layout } from "@/components/Layout";
import { Search } from "@/components/Search";
import { Button } from "@/components/Button";
import { LoadingIcon } from "@/components/Icons";
import { JobsSkeleton } from "@/components/Jobs";
import { UserCard } from "@/components/Users/UserCard";
import { useFiltersForPeopleQuery, usePeople } from "@/hooks";
import { ConditionalWrap } from "@/components/ConditionalWrap";

export default function PeoplePage() {
  const { query } = useRouter();
  const { or, setOr } = useFiltersForPeopleQuery();

  React.useEffect(() => {
    if (query?.term?.length) {
      // @ts-ignore
      setOr(query?.term);
    }
  }, [query, setOr]);

  const [peopleCount, setPeopleCount] = React.useState(20);
  const { data, isLoading, isError, error, isFetching } = usePeople({
    size: peopleCount,
    or,
  });

  return (
    <Layout>
      <section tw="w-full bg-gray-50 dark:bg-dark-600 grid grid-cols-1">
        <Search
          initialValue={query?.term as string}
          placeholder="Find your colleagues here"
          onSubmit={(value: string) => {
            // @ts-ignore
            setOr(value);
          }}
        />

        <section tw="col-span-1 px-8 pt-8">
          <h2 tw="text-2xl font-bold dark:text-white flex items-center">
            Showing {data?.results?.length} users
            {isFetching && <LoadingIcon tw="text-blue-500 ml-2" />}
          </h2>
          <div tw="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 my-4">
            <Error show={isError || data?.message}>
              <p>
                {isError && error.message}
                {data?.message && data.message}
              </p>
            </Error>
            {isLoading && <JobsSkeleton />}
            <ConditionalWrap condition={data?.results?.length}>
              <>
                {data?.results?.map((user: any) => (
                  <UserCard user={user} key={user.subjectId} />
                ))}
              </>
            </ConditionalWrap>
          </div>
          <ConditionalWrap condition={peopleCount < 100}>
            <div tw="mb-8 mt-4 text-center">
              <Button
                as={"button"}
                onClick={() => {
                  setPeopleCount(peopleCount + 10);
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
