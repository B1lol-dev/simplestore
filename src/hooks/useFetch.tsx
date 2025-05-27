import api from "@/api/api";
import { useState } from "react";

export const useFetch = (endpoint: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  api
    .get(endpoint)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });

  return { data, error, loading };
};
