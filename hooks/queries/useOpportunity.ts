import { URL } from "@/utils/config";
import { useQuery } from "react-query";

const fetchOportunity = async (id: string) => {
  const res = await fetch(`${URL}/api/opportunities/${id}`);
  const result = await res.json();

  return result;
};

const useOpportunity = (id: string) => {
  return useQuery(["opportunity", id], () => fetchOportunity(id));
};

export { useOpportunity, fetchOportunity };
