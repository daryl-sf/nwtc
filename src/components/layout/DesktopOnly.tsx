import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useIsDesktop } from "../../hooks/useIsDesktop";

export default function DesktopOnly({
  redirectTo,
  children,
}: {
  redirectTo: string;
  children?: ReactNode;
}) {
  const isDesktop = useIsDesktop();

  if (!isDesktop) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ?? null;
}
