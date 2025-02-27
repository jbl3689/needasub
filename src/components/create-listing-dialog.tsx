"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@src/components/ui/dialog";
import { Button } from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { Label } from "@src/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@src/components/ui/tabs";
import { Textarea } from "@src/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@src/components/ui/radio-group";
import { Calendar } from "@src/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@src/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@src/lib/utils";

interface CreateListingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateListingDialog({
  open,
  onOpenChange,
}: CreateListingDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState<Date>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <Tabs defaultValue="player" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="player">Player Listing</TabsTrigger>
            <TabsTrigger value="team">Team Listing</TabsTrigger>
          </TabsList>
          <TabsContent value="player">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>Create Player Listing</DialogTitle>
                <DialogDescription>
                  Create a profile to let teams know you're available to play
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="position">Position</Label>
                    <select
                      title="position"
                      id="position"
                      className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select position</option>
                      <option value="goalkeeper">Goalkeeper</option>
                      <option value="defender">Defender</option>
                      <option value="midfielder">Midfielder</option>
                      <option value="striker">Striker</option>
                      <option value="winger">Winger</option>
                      <option value="any">Any position</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="level">Skill Level</Label>
                    <select
                      title="level"
                      id="level"
                      className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Input
                    id="availability"
                    placeholder="e.g. Weekends, Monday evenings"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g. Manchester" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="bio">About You</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell teams about your playing style, experience, etc."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Creating..." : "Create Listing"}
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>
          <TabsContent value="team">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>Create Team Listing</DialogTitle>
                <DialogDescription>
                  Find players for your upcoming match
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="team-name">Team Name</Label>
                    <Input id="team-name" placeholder="e.g. FC United" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="e.g. Manchester" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="match-type">Match Type</Label>
                    <RadioGroup defaultValue="5-a-side" id="match-type">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5-a-side" id="5-a-side" />
                        <Label htmlFor="5-a-side">5-a-side</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="7-a-side" id="7-a-side" />
                        <Label htmlFor="7-a-side">7-a-side</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="11-a-side" id="11-a-side" />
                        <Label htmlFor="11-a-side">11-a-side</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="grid gap-2">
                    <Label>Match Date & Time</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="positions">Positions Needed</Label>
                  <Input id="positions" placeholder="e.g. Striker, Defender" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="level">Team Level</Label>
                  <select
                    id="level"
                    className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="all">All levels welcome</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Match Details</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide details about the match, venue, etc."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Creating..." : "Create Listing"}
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
