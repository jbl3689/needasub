"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcnui/card";
import { Badge } from "@/src/components/shadcnui/badge";
import { Button } from "@/src/components/shadcnui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/shadcnui/avatar";
import { PlayerDialog } from "./PlayerDialog";

// Mock data - would come from Supabase in a real app
const MOCK_PLAYERS = [
  {
    id: 1,
    name: "Alex Johnson",
    age: 24,
    position: "Striker",
    level: "Intermediate",
    location: "Manchester",
    availability: "Weekends",
    bio: "Pacey striker with good finishing. Looking for a competitive 5-a-side team.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    age: 28,
    position: "Midfielder",
    level: "Advanced",
    location: "London",
    availability: "Evenings",
    bio: "Central midfielder with 10+ years experience. Strong passing and vision.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Mohammed Ali",
    age: 22,
    position: "Defender",
    level: "Intermediate",
    location: "Birmingham",
    availability: "Weekends, Monday evenings",
    bio: "Solid defender looking for a regular team. Good in the air and comfortable on the ball.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Emma Chen",
    age: 26,
    position: "Goalkeeper",
    level: "Beginner",
    location: "Liverpool",
    availability: "Saturday mornings",
    bio: "New to football but enthusiastic goalkeeper. Looking for a friendly team to improve with.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 3.9,
  },
  {
    id: 5,
    name: "James Wilson",
    age: 31,
    position: "Winger",
    level: "Advanced",
    location: "Leeds",
    availability: "Weekday evenings",
    bio: "Fast winger with good crossing ability. Previously played semi-professionally.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Olivia Taylor",
    age: 25,
    position: "Midfielder",
    level: "Intermediate",
    location: "Bristol",
    availability: "Sundays",
    bio: "Box-to-box midfielder with good stamina. Looking for a women's team or mixed 5-a-side.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.4,
  },
];

export function PlayersList() {
  const [players, setPlayers] = useState<typeof MOCK_PLAYERS>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<
    (typeof MOCK_PLAYERS)[0] | null
  >(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    // Simulate fetching data from Supabase
    const fetchPlayers = async () => {
      // In a real app, this would be a Supabase query
      setPlayers(MOCK_PLAYERS);
    };

    fetchPlayers();
  }, []);

  const handlePlayerClick = (player: (typeof MOCK_PLAYERS)[0]) => {
    setSelectedPlayer(player);
    setDialogOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {players.map((player) => (
          <Card key={player.id} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={player.image} alt={player.name} />
                <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{player.name}</CardTitle>
                <CardDescription>
                  {player.age} years old • {player.location}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>{player.position}</Badge>
                <Badge variant="outline">{player.level}</Badge>
                <Badge variant="secondary">{player.availability}</Badge>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {player.bio}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center">
                <span className="text-sm font-medium">
                  Rating: {player.rating}/5
                </span>
              </div>
              <Button size="sm" onClick={() => handlePlayerClick(player)}>
                View Profile
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedPlayer && (
        <PlayerDialog
          player={selectedPlayer}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      )}
    </>
  );
}
