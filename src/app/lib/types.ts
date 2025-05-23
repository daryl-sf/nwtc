export type HallOfFameEntry = {
  pk: string;         // e.g., "HOF"
  sk: string;         // e.g., "jane-doe"
  name: string;
  description: string;
  imageUrl?: string;
  publishedAt?: string; // ISON date string
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
};
