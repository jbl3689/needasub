import { Suspense } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { ModeToggle } from "@/src/components/mode-toggle";
import { UserNav } from "@/src/components/user-nav";
import { MainNav } from "@/src/components/main-nav";
import { SearchInput } from "@/src/components/search-input";
import { PlayersList } from "@/src/components/players-list";
import { TeamsList } from "@/src/components/teams-list";
import { PlayerSkeleton, TeamSkeleton } from "@/src/components/skeletons";
import { CreateListingButton } from "@/src/components/create-listing-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <SearchInput />
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="container py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">NeedASub</h1>
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
