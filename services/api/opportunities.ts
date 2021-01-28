import { OpportunitiesResult } from "@/@types";

const opportunities = {
  async search(queryParams: string[], body: any): Promise<OpportunitiesResult> {
    const result = await (
      await fetch(
        `https://search.torre.co/opportunities/_search/?${
          // @ts-ignore
          new URLSearchParams({ ...queryParams })
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      )
    ).json();
    return result;
  },
  async get(id: string): Promise<any | null> {
    const result = await (
      await fetch(`https://torre.co/api/opportunities/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    return result;
  },
};

export { opportunities };
