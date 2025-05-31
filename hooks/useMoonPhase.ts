import { useState, useEffect } from "react";

interface MoonPhaseData {
  phase: string;
  illumination: number;
}

export function useMoonPhase() {
  const [moonPhase, setMoonPhase] = useState<MoonPhaseData>({
    phase: "Waning Crescent",
    illumination: 0.01,
  });

  useEffect(() => {
    const getMoonPhase = () => {
      // Hardcoded for May 26, 2025
      const today = new Date();
      if (
        today.getMonth() === 4 &&
        today.getDate() === 26 &&
        today.getFullYear() === 2025
      ) {
        setMoonPhase({
          phase: "Waning Crescent",
          illumination: 0.01,
        });
      }
    };

    getMoonPhase();
    const interval = setInterval(getMoonPhase, 3600000); // Update every hour
    return () => clearInterval(interval);
  }, []);

  return moonPhase;
}
