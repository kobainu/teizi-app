import React, { useEffect, useState } from "react";
import { execTest } from "./lib/api/test";

export const App = () => {
  const [message, setMessage] = useState("");

  const handleExecTest = async () => {
    const res = await execTest();

    if (res.status === 200) {
      setMessage(res.data.message);
    }
  };

  useEffect(() => {
    handleExecTest();
  }, []);

  return <h1>{message}</h1>;
};
