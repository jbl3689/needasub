import Link from "next/link";
import { BusIcon as SoccerBall } from "lucide-react";

export function MainNav() {
  return (
    <div className="flex items-center space-x-2">
      <SoccerBall className="w-6 h-6 text-primary" />
      <Link href="/" className="text-xl font-bold">
        NeedASub
      </Link>
    </div>
  );
}
