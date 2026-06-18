import { Link } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { reliefUpdatesQuery } from "@/lib/data";

export function EmergencyBanner() {
  const { data: updates } = useQuery(reliefUpdatesQuery());
  
  // Find the most recent high-severity update
  const latestAlert = updates?.find((u) => u.severity === "high");

  if (!latestAlert) return null;

  return (
    <div className="bg-emergency px-4 py-2 text-center text-xs font-semibold tracking-wide text-emergency-foreground">
      <span className="inline-flex items-center gap-1.5">
        <AlertTriangle className="size-3.5" aria-hidden="true" />
        LIVE ALERT: {latestAlert.title.toUpperCase()} —{" "}
        <Link to="/map" className="underline underline-offset-2">
          View assistance map
        </Link>
      </span>
    </div>
  );
}
