"use client";

import { useState, useEffect } from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  addYears,
} from "date-fns";

export default function BirthdayCountdown({
  name,
  birthdate,
}: {
  name: string;
  birthdate: Date;
}) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      console.log(birthdate);
      if (!birthdate) {
        setTimeLeft("Invalid birthdate");
        return;
      }

      const nextBirthday = addYears(
        birthdate,
        now.getFullYear() - birthdate.getFullYear() + (now > birthdate ? 1 : 0)
      );

      const days = differenceInDays(nextBirthday, now);
      const hours = differenceInHours(nextBirthday, now) % 24;
      const minutes = differenceInMinutes(nextBirthday, now) % 60;
      const seconds = differenceInSeconds(nextBirthday, now) % 60;

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, [birthdate]);

  return (
    <div className="text-center">
      <p className="text-2xl mb-4">Countdown to {name}'s birthday:</p>
      <p className="text-6xl font-bold">{timeLeft}</p>
    </div>
  );
}
