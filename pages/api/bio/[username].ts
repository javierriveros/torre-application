import { bios } from "@/services/api/people";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { username },
  } = req;
  try {
    const result = await bios.get(username);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
}
