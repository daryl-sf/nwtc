import { useEffect, useState } from "react";

export type SwimStep = {
  distance?: number;
  description: string;
  rest?: string;
  repeats?: number;
};

export type SwimSession = {
  title: string;
  description: string;
  difficulty: "easy" | "moderate" | "hard";
  focus: "endurance" | "speed" | "pace" | "mixed";
  totalDistance: number;
  poolLength: number;
  steps: SwimStep[];
};

export const swimSessionsPage = {
  title: "Swim sessions",
  intro:
    "These example pool sessions are something you can try on your own. They are written for a 25m pool, in the same spirit as our club nights at Foyle Arena and Templemore.",
  hint:
    "Distances, repeats, and rest are a starting point. Shorten or lengthen efforts to match your experience and how you feel that day. Skip or ease the hard reps if you need to. The listed total distance is a guide, not a target.",
  join:
    "Club members get structured, coached sessions at training. Join NWTC to work with experienced coaches and a full programme of swim, bike, and run.",
  joinCta: "Join the club",
  ctaFromTraining: "Example swim sessions",
};

export function useSwimSessions() {
  const [sessions, setSessions] = useState<SwimSession[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/training/swimming-session.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load sessions");
        return res.json() as Promise<SwimSession[]>;
      })
      .then((data) => {
        if (!cancelled) setSessions(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { sessions, error };
}
