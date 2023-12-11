import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(null);
  useEffect(() => {
    setInterval(() => {
      fetchRandomNumber();
    }, 1000);
  }, []);

  const fetchRandomNumber = async () => {
    try {
      const response = await fetch(
        "https://random-number-generator-63fh.vercel.app/api/random",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setNumber(data.data);
      } else {
        console.error("Failed to fetch random number");
      }
    } catch (error) {
      console.error("Error fetching random number:", error);
    }
  };

  return (
    <div className="bg-[#001974] h-screen  flex justify-center items-center px-6">
      <div className="text-white bg-gradient-to-r from-indigo-700 w-[470px] h-[550px] flex justify-center items-center rounded-3xl text-6xl">
        {number < -1 ? 0 : number}
      </div>
    </div>
  );
}
export default App;
