
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetch = (queryKey: string[], searchQuery?: string) => {
  const baseUrl = "https://api.pexels.com/v1/curated?page=2&per_page=20";
  const url = searchQuery
    ? `${baseUrl}&query=${encodeURIComponent(searchQuery)}`
    : baseUrl;
  const options = {
    method: "GET",
    url: `${url}`,

    headers: {
      accept: "application/json",
      Authorization: "kTgAq5K4zTrl6vSAsG0goP5OcNsWH2cvBHPZBAGKDKukBb7KRKxd15Es",
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios(options);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, isLoading, error } = useQuery(queryKey, fetchData);

  return { data, isLoading, error };
};
