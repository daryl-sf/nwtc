"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateHOFEntry() {
  const [error, setError] = useState("dsdfs");
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const router = useRouter();

  const MAX_FILE_SIZE_MB = 2;
  const ACCEPTED_IMAGE_TYPES = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
  ];

  useEffect(() => {
    setLoading(false);
  }, [error]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (imageFile) {
      if (!ACCEPTED_IMAGE_TYPES.includes(imageFile.type)) {
        setError("Only PNG, JPEG, and WEBP files are allowed.");
        return;
      }

      const sizeMB = imageFile.size / 1024 / 1024;
      if (sizeMB > MAX_FILE_SIZE_MB) {
        setError("Image size must be under 2MB.");
        return;
      }
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/hall-of-fame", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      router.push("/hall-of-fame");
    } else {
      setError("Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <main className="container px-2 py-4 text-black md:px-4">
      <h1 className="text-3xl font-bold text-white">Add Hall of Fame Member</h1>

      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
        <div className="w-full">
          <label className="block w-full text-sm font-medium text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded border p-2"
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-white">
            Upload Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-600 file:mr-4 file:rounded file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <textarea
          required
          name="description"
          rows={8}
          className="w-full rounded border p-2 font-mono"
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          disabled={loading}
        >
          Induct{loading && "ing"}
        </button>

        {error && (
          <p className="mt-1 w-full rounded bg-red-100 px-4 py-2 text-sm text-red-500">
            {error}
          </p>
        )}
      </form>
    </main>
  );
}
