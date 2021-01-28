import { URL } from "@/utils/config";
import { useQuery } from "react-query";

interface QueryProps {
  page?: number;
  lang?: string;
  size?: number;
  offset?: number;
  currency?: string;
  aggregate?: boolean;
  periodicity?: string;
  or?: any;
}

const fetchPeople = async ({
  currency = "USD$",
  page = 1,
  periodicity = "hourly",
  lang = "en",
  size = 20,
  aggregate = true,
  offset = 0,
  or = [],
}: QueryProps) => {
  const res = await fetch(
    //@ts-ignore
    `${URL}/api/people/?${new URLSearchParams({
      currency,
      page,
      periodicity,
      lang,
      size,
      aggregate,
      offset,
    })}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",

      body: JSON.stringify({
        or,
      }),
    }
  );
  const result = await res.json();

  return result;
};

const usePeople = (options: QueryProps) => {
  return useQuery(["people", options.size, options.or], () => fetchPeople(options), {
    keepPreviousData: true,
  });
};

export { usePeople, fetchPeople };
