"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function BirthdayCelebration({ name }: { name: string }) {
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center relative">
      <p className="text-6xl mb-8">🎂🎈🎉</p>
      <p className="text-4xl">Wishing you a fantastic birthday, {name}!</p>
      <p className="text-2xl mt-4">May all your dreams come true!</p>
      <div className="balloons">
        <img src="/ballon1.svg" alt="Balloon 1" className="balloon balloon1" />
        <img src="/ballon2.svg" alt="Balloon 2" className="balloon balloon2" />
        <img src="/ballon3.svg" alt="Balloon 3" className="balloon balloon3" />
      </div>
    </div>
  );
}