import { Suspense } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/shadcnui/tabs";
import { ModeToggle } from "@components/ModeToggle";
import { UserNav } from "@components/UserNav/UserNav";
import { MainNav } from "@components/MainNav/MainNav";
import { SearchInput } from "@components/SearchInput";
import { TeamsList } from "@components/TeamsList/TeamsList";
import { CreateListingButton } from "@components/CreateListingButton";
import { PlayersList } from "../components/PlayersList";
import { PlayerSkeleton, TeamSkeleton } from "@components/skeletons";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Marketplace</h1>
          <CreateListingButton />
        </div>
        <Tabs defaultValue="players" className="mt-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="players">Available Players</TabsTrigger>
              <TabsTrigger value="teams">Teams Looking for Players</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="players" className="mt-6">
            <Suspense fallback={<PlayerSkeleton />}>
              <PlayersList />
            </Suspense>
          </TabsContent>
          <TabsContent value="teams" className="mt-6">
            <Suspense fallback={<TeamSkeleton />}>
              <TeamsList />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
