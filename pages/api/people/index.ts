import { NextApiRequest, NextApiResponse } from "next";

// TODO: try to find the issue with the people endpoint
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: `This route doesn't support ${req.method} method` });
  }

  const {
    query: {
      currency = "USD$",
      page = 0,
      periodicity = "hourly",
      lang = "en",
      size = 10,
      aggregate = true,
      offset = 0,
    },
  } = req;

  try {
    const result = await (
      await fetch(
        `https://search.torre.co/people/_search/?${
          // @ts-ignore
          new URLSearchParams({
            currency,
            page,
            periodicity,
            lang,
            size,
            aggregate,
            offset,
          })
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req.body),
        }
      )
    ).json();
    res.json(result);
  } catch (error) {
    res.status(error.status).json(error);
  }
}
