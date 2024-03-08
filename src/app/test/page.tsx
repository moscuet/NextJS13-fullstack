"use client";
import { ChangeEvent, FC, useState } from "react";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";
import { CheckIcon } from "lucide-react";

const Page = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [similarity, setSimilarity] = useState<null | number>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/similarity/similarity", {
        text1,
        text2,
      });
      if (data.error) {
        setErrorMessage(data.error || "An unexpected error occurred");
        setSimilarity(null);
      } else {
        setSimilarity(Number((data.similarity * 100).toFixed(2)));
        setErrorMessage("");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setter(e.target.value);
      setErrorMessage("");
      setSimilarity(null);
    };

  return (
    <div className="p-2">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Text Similarity Analysis</h1>
        <p className="max-w-md text-center mb-5">
          Discover the degree of similarity between any two texts with our Text
          Similarity API
        </p>

        {errorMessage ? (
          <div className="my-2 mt-5 h-5 w-full max-w-2xl  text-red-500 text-center">
            {errorMessage}
          </div>
        ) : (
          <div
            className={`relative my-2 mt-5 h-4 w-full max-w-2xl rounded-full border-2 ${
              similarity !== null
                ? "border-gray-200 dark:border-gray-600"
                : "border-transparent"
            }`}
            style={{
              opacity: similarity !== null ? "1" : "0",
            }}
          >
            <div
              className="h-3 rounded-full bg-green-400 transition-opacity duration-500"
              style={{
                width: similarity !== null ? `${similarity}%` : "0%",
                opacity: similarity !== null ? "1" : "0",
              }}
            ></div>
            {similarity !== null && (
              <div className="absolute left-1/2 top-[7px] transform -translate-x-1/2 -translate-y-1/2 text-xs ">
                {similarity}%
              </div>
            )}
          </div>
        )}

        <div className="sm:flex gap-4 my-4 w-full max-w-2xl">
          <div className="flex-1 mb-4">
            <p className="font-bold text-md mb-2 pl-1">First Text</p>
            <textarea
              className="w-full p-2 rounded shadow border-none outline-none dark:bg-gray-700"
              rows={10}
              placeholder="Enter first text here"
              value={text1}
              onChange={handleInputChange(setText1)}
            />
          </div>
          <div className="flex-1 mb-4">
          <p className="font-bold text-md mb-2 pl-1">Second Text</p>
            <textarea
              className="w-full p-2 rounded shadow border-none outline-none dark:bg-gray-700"
              rows={10}
              placeholder="Enter second text here"
              value={text2}
              onChange={handleInputChange(setText2)}
            />
          </div>
        </div>

        <button
      disabled={!text1 || !text2 || loading}
      onClick={handleSubmit}
      className="px-6 my-2 py-2 rounded shadow bg-indigo-600 hover:bg-indigo-600 transition-colors flex items-center"
      style={{ color: "white", borderColor: "white" }}
    >
      {loading ? (
        <CircularProgress size={20} style={{ color: "#ffffff" }} />
      ) : (
        <CheckIcon className="h-5 w-5 mr-1" /> 
      )}
      {loading ? "Checking..." : "Check Similarity"}
    </button>
      </div>
    </div>
  );
};

export default Page;
