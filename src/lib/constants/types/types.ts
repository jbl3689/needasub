import { Tables } from "./supabaseTypes";

export type Team = Tables<"teams">;
export type Profiles = Tables<"profiles">;
export type PlayerProfiles = Tables<"player_profiles">;
export type PlayerRatings = Tables<"player_ratings">;
export type TeamMembers = Tables<"team_members">;
export type TeamRatings = Tables<"team_ratings">;
export type TeamListings = Tables<"team_listings">;
export type ListingApplications = Tables<"listing_applications">;
