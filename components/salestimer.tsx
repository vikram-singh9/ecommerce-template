'use client'
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  // Set the target date
  const targetDate = new Date("2024-12-10T00:00:00").getTime(); // Replace with your date

  // State for time units
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval); // Stop the timer when expired
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex justify-end items-end space-x-2  mx-20">
    
      {/** Time Unit Blocks */}
      {Object.entries(timeLeft).map(([label, value], index) => (
        <div key={index} className="text-black">
          <div className="text-sm text-gray-500">{label}</div>
          <div className="flex items-center space-x-1">
            <span className="text-3xl font-bold">{String(value).padStart(2, "0")}</span>
            {index < Object.entries(timeLeft).length - 1 && (
              <span className="text-red-500 text-2xl">:</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
