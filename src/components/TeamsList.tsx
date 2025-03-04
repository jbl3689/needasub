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
import { Users } from "lucide-react";
import { TeamDialog } from "./TeamDialog";

// Mock data - would come from Supabase in a real app
const MOCK_TEAMS = [
  {
    id: 1,
    name: "FC United",
    location: "Manchester",
    level: "Intermediate",
    matchType: "5-a-side",
    positionsNeeded: ["Striker", "Defender"],
    matchDate: "2023-06-15T19:00:00",
    description:
      "Regular 5-a-side team looking for a striker and defender for our match this Thursday. We play weekly at PowerLeague Manchester.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
  },
  {
    id: 2,
    name: "London Lions",
    location: "London",
    level: "Advanced",
    matchType: "11-a-side",
    positionsNeeded: ["Goalkeeper", "Left Back"],
    matchDate: "2023-06-17T10:00:00",
    description:
      "Competitive 11-a-side team in need of a goalkeeper and left back for our league match this Saturday morning.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Birmingham Ballers",
    location: "Birmingham",
    level: "Beginner",
    matchType: "7-a-side",
    positionsNeeded: ["Midfielder", "Winger"],
    matchDate: "2023-06-18T14:00:00",
    description:
      "Friendly 7-a-side team looking for a couple of players for our casual Sunday game. All skill levels welcome!",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Liverpool Legends",
    location: "Liverpool",
    level: "Intermediate",
    matchType: "5-a-side",
    positionsNeeded: ["Any position"],
    matchDate: "2023-06-14T20:30:00",
    description:
      "Need one more player for our 5-a-side game tomorrow night. Any position considered.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Leeds Ladies FC",
    location: "Leeds",
    level: "All levels",
    matchType: "7-a-side",
    positionsNeeded: ["Defender", "Midfielder"],
    matchDate: "2023-06-20T19:00:00",
    description:
      "Women's 7-a-side team looking for a couple of new players for our Tuesday evening matches. Friendly atmosphere, all abilities welcome.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Bristol City Casuals",
    location: "Bristol",
    level: "Intermediate",
    matchType: "11-a-side",
    positionsNeeded: ["Striker", "Center Back", "Right Wing"],
    matchDate: "2023-06-24T15:00:00",
    description:
      "11-a-side team with several positions to fill for our match next weekend. Regular fixtures throughout the season.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.3,
  },
];

export function TeamsList() {
  const [teams, setTeams] = useState<typeof MOCK_TEAMS>([]);
  const [selectedTeam, setSelectedTeam] = useState<
    (typeof MOCK_TEAMS)[0] | null
  >(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    // Simulate fetching data from Supabase
    const fetchTeams = async () => {
      // In a real app, this would be a Supabase query
      setTeams(MOCK_TEAMS);
    };

    fetchTeams();
  }, []);

  const handleTeamClick = (team: (typeof MOCK_TEAMS)[0]) => {
    setSelectedTeam(team);
    setDialogOpen(true);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <Card key={team.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{team.name}</CardTitle>
                <Users className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>
                {team.location} • {team.matchType}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>{team.level}</Badge>
                <Badge variant="outline">{formatDate(team.matchDate)}</Badge>
              </div>
              <div className="mb-2">
                <p className="text-sm font-medium">Positions needed:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {team.positionsNeeded.map((position) => (
                    <Badge
                      key={position}
                      variant="secondary"
                      className="text-xs"
                    >
                      {position}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                {team.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center">
                <span className="text-sm font-medium">
                  Rating: {team.rating}/5
                </span>
              </div>
              <Button size="sm" onClick={() => handleTeamClick(team)}>
                View Team
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedTeam && (
        <TeamDialog
          team={selectedTeam}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      )}
    </>
  );
}
