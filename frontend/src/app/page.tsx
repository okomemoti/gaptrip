"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((res) => res.text()) // 文字列として受け取る
      .then((data) => setMessage(data))
      .catch((err) => setMessage("Error: APIに繋がりません"));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">GapTrip</h1>
      
      <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
        <p className="text-sm text-gray-500 mb-2">Backend</p>
        <p className="text-2xl font-bold text-indigo-600">{message}</p>
      </div>
    </div>
  );
}