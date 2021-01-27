import { Layout } from "@/components/Layout";
import { fetchBio, useBio } from "@/hooks/queries";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import "twin.macro";

import { Genoma } from "@/components/Genoma";
import { ConditionalWrap } from "@/components/ConditionalWrap";
import { GenomaSkeleton } from "@/components/Genoma";
import { ErrorIcon } from "@/components/Icons";
import { Flex } from "@/components/utils";

export default function UserGenoma() {
  const {
    query: { username },
  } = useRouter();
  const { data, isLoading, isError, error } = useBio(username as string);

  return (
    <Layout
      title={`${data ? data?.person?.name : username}'s professional genome`}
    >
      <section tw="w-full bg-gray-50 dark:bg-dark-600 grid grid-cols-1 md:grid-cols-3 px-8 py-8 gap-8 dark:bg-gray-900">
        <ConditionalWrap condition={isLoading}>
          <GenomaSkeleton />
        </ConditionalWrap>
        <ConditionalWrap condition={isError || data?.message}>
          <Flex tw="col-span-3" centerH>
            <div tw="bg-red-100 text-red-500 p-4 rounded shadow flex items-center w-full max-w-md">
              <ErrorIcon tw="text-red-500 w-6 h-6 dark:text-red-500" />
              <p>
                {isError && error.message}
                {data?.message && data.message}
              </p>
            </div>
          </Flex>
        </ConditionalWrap>
        <ConditionalWrap condition={data && data.person && !isError}>
          <Genoma data={data} />
        </ConditionalWrap>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const { username } = context.query;

  await queryClient.prefetchQuery(["bio", username], () =>
    fetchBio(username as string),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
