"use client";
import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string; // The date when the countdown ends
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">
        Påmeldingen til NM 2025 i Mexican Train åpner om:
      </h1>
      <div className="flex space-x-6 mt-4 text-lg font-mono">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-semibold">{timeLeft.days}</span>
          <span>Dager</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-semibold">{timeLeft.hours}</span>
          <span>Timer</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-semibold">{timeLeft.minutes}</span>
          <span>Minutter</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-semibold">{timeLeft.seconds}</span>
          <span>Sekunder</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
