import { useQuery } from "react-query";

interface QueryProps {
  page?: number;
  lang?: string;
  size?: number;
  offset?: number;
  currency?: string;
  aggregate?: boolean;
  periodicity?: string;
}

const fetchOpportunities = async ({
  currency = "USD$",
  page = 1,
  periodicity = "hourly",
  lang = "en",
  size = 20,
  aggregate = true,
  offset = 0,
}: QueryProps) => {
  const res = await fetch(
    //@ts-ignore
    `/api/opportunities/?${new URLSearchParams({
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
        and: [
          { bestfor: { username: "javierriveros" } },
          {
            "skill/role": {
              text: "junior",
              experience: "potential-to-develop",
            },
          },
        ],
        location: {
          term: "Colombia",
        },
      }),
    },
  );
  const result = await res.json();

  return result;
};

const useOpportunities = (options: QueryProps) => {
  return useQuery(
    ["opportunities", options.size],
    () => fetchOpportunities(options),
    {
      keepPreviousData: true,
    },
  );
};

export { useOpportunities, fetchOpportunities };
