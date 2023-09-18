import React, { useState } from "react";

export const usePosts = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (requestConfig, applyData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
  };
  return {
    isLoading,
    error,
    sendRequest,
  };
};
