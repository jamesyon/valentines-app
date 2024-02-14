import React, { useState, useEffect } from "react";
import AskPage from "./AskPage";
import LoadingPage from "./LoadingPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5400); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return <div>{loading ? <LoadingPage /> : <AskPage />}</div>;
}

export default App;
