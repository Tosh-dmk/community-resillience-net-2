import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="HopeBridge home">
      <img
        src={logoImg}
        alt=""
        className={`rounded-lg object-contain ${compact ? "size-6" : "size-8"}`}
      />
      <span
        className={`font-serif font-semibold tracking-tight text-foreground ${
          compact ? "text-base" : "text-xl"
        }`}
      >
        HopeBridge
      </span>
    </Link>
  );
}
