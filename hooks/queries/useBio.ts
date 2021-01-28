import { URL } from "@/utils/config";
import { useQuery } from "react-query";

const fetchBio = async (username: string) => {
  const res = await fetch(`${URL}/api/bio/${username}`);
  const result = await res.json();

  return result;
};

const useBio = (username: string) => {
  return useQuery(["bio", username], () => fetchBio(username));
};

export { useBio, fetchBio };
