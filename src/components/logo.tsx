import { Clapperboard } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Clapperboard />
      <h1 className="text-xl font-bold">Movies</h1>
    </div>
  );
}
