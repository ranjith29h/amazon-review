import useSWR from "swr";
import fetcher from "./fetcher";

function useReviews(asin) {
  const { data, error } = useSWR(`/api/reviews/${asin}`, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useReviews;
