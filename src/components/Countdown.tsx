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
    <div className="flex flex-col items-center bg-gray-800 text-gray-200 p-8 shadow-lg">
      <h1 className="text-2xl font-bold text-gray-100">
        Påmeldingen til NM 2025 i Mexican Train åpner om:
      </h1>
      <div className="flex space-x-8 mt-6 text-lg font-mono">
        <div className="flex flex-col items-center">
          <span className="text-5xl font-semibold text-yellow-400">
            {timeLeft.days}
          </span>
          <span className="mt-1">Dager</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-semibold text-yellow-400">
            {timeLeft.hours}
          </span>
          <span className="mt-1">Timer</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-semibold text-yellow-400">
            {timeLeft.minutes}
          </span>
          <span className="mt-1">Minutter</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-semibold text-yellow-400">
            {timeLeft.seconds}
          </span>
          <span className="mt-1">Sekunder</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
