import useSWR from "swr";
import { getAuthData } from "@/services/user";

const useProfile = () => {
  const { data, error, isLoading,  } = useSWR("/auth/profile", getAuthData);
  return { data, error, isLoading };
};

export default useProfile;
