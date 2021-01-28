import { opportunities } from "@/services/api/";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;
  try {
    const result = await opportunities.get(id as string);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
}
