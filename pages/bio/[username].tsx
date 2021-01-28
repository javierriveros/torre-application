import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import "twin.macro";

import { Error } from "@/components/Error";
import { Layout } from "@/components/Layout";
import { fetchBio, useBio } from "@/hooks/queries";
import { Genome, GenomeSkeleton } from "@/components/Genome";
import { ConditionalWrap } from "@/components/ConditionalWrap";

export default function UserGenome() {
  const {
    query: { username },
  } = useRouter();
  const { data, isLoading, isError, error } = useBio(username as string);

  return (
    <Layout title={`${data ? data?.person?.name : username}'s professional genome`}>
      <section tw="w-full bg-gray-50 dark:bg-dark-600 grid grid-cols-1 md:grid-cols-3 px-8 py-8 gap-8 dark:bg-gray-900">
        <ConditionalWrap condition={isLoading}>
          <GenomeSkeleton />
        </ConditionalWrap>
        <Error show={isError || data?.message}>
          <p>
            {isError && error.message}
            {data?.message && data.message}
          </p>
        </Error>
        <ConditionalWrap condition={data && data.person && !isError}>
          <Genome data={data} />
        </ConditionalWrap>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const { username } = context.query;

  await queryClient.prefetchQuery(["bio", username], () => fetchBio(username as string));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
