import "twin.macro";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { Job } from "@/components/Job";
import { Error } from "@/components/Error";
import { Layout } from "@/components/Layout";
import { GenomeSkeleton } from "@/components/Genome";
import { fetchOportunity, useOpportunity } from "@/hooks";
import { ConditionalWrap } from "@/components/ConditionalWrap";

export default function UserGenome() {
  const {
    query: { id },
  } = useRouter();
  const { data, isLoading, isError, error } = useOpportunity(id as string);

  return (
    <Layout>
      <section tw="w-full bg-gray-50 dark:bg-dark-600 grid grid-cols-1 md:grid-cols-4 px-8 py-8 gap-8 dark:bg-gray-900">
        <ConditionalWrap condition={isLoading}>
          <GenomeSkeleton />
        </ConditionalWrap>
        <Error show={isError || data?.message}>
          <p>
            {isError && error.message}
            {data?.message && data.message}
          </p>
        </Error>
        {data && <Job data={data} />}
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const { id } = context.query;

  await queryClient.prefetchQuery(["opportunity", id], () => fetchOportunity(id as string));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
