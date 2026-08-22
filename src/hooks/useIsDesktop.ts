import { useEffect, useState } from "react";

const QUERY = "(min-width: 768px)";

export function getIsDesktop() {
  return window.matchMedia(QUERY).matches;
}

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(getIsDesktop);

  useEffect(() => {
    const media = window.matchMedia(QUERY);
    const onChange = () => setIsDesktop(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
}
