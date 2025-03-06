// src/lib/constants/playerMappings.ts

/**
 * Mappings for player_profiles table values to human-readable strings.
 * These mappings help ensure consistent terminology throughout the UI
 * and make technical database values more understandable to users.
 */

// Skill level mappings
export const skillLevelMap: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  semi_pro: "Semi-Professional",
};

export function getReadableSkillLevel(
  level: string | null | undefined
): string {
  if (!level) return "Not specified";

  return skillLevelMap[level] || level;
}

// Playing position mappings
export const positionMap: Record<string, string> = {
  goalkeeper: "Goalkeeper",
  defender: "Defender",
  left_back: "Left Back",
  right_back: "Right Back",
  center_back: "Center Back",
  midfielder: "Midfielder",
  defensive_mid: "Defensive Midfielder",
  central_mid: "Central Midfielder",
  attacking_mid: "Attacking Midfielder",
  left_wing: "Left Wing",
  right_wing: "Right Wing",
  forward: "Forward",
  striker: "Striker",
  winger: "Winger",
  any: "Any Position",
};

export function getReadablePosition(
  positions: string[] | null | undefined
): string {
  if (!positions) return "Not specified";

  return positions
    .map((position) => positionMap[position] || position)
    .join(" + ");
}

// Days of the week mappings (for availability)
export const daysOfWeekMap: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
  weekdays: "Weekdays",
  weekends: "Weekends",
};

/**
 * Converts array of availability codes to human-readable strings
 * Example: ["mon_evening", "wed_evening", "sun_morning"] →
 * ["Monday Evening", "Wednesday Evening", "Sunday Morning"]
 */
export function getReadableAvailability(
  availability: string[] | null | undefined
): string {
  if (!availability || !availability.length) return "Not specified";

  return availability.map((time) => daysOfWeekMap[time] || time).join(" + ");
}

// Team type preferences mappings
export const teamTypeMap: Record<string, string> = {
  "5-a-side": "5-a-side",
  "7-a-side": "7-a-side",
  "11-a-side": "11-a-side",
  futsal: "Futsal",
  beach: "Beach Soccer",
  any: "Any Format",
};

export function getReadableTeamType(type: string | null | undefined): string {
  if (!type) return "Not specified";

  return teamTypeMap[type] || type;
}

/**
 * Converts an array of team types to readable format
 */
export function getReadableTeamTypes(
  types: string[] | null | undefined
): string[] {
  if (!types || !types.length) return ["Not specified"];

  return types.map((type) => teamTypeMap[type] || type);
}

// Location preferences mappings
export const locationMap: Record<string, string> = {
  // Add your locations here, e.g.:
  auckland_central: "Auckland Central",
  auckland_north: "North Auckland",
  auckland_east: "East Auckland",
  auckland_south: "South Auckland",
  auckland_west: "West Auckland",
  // Add more as needed
};

export function getReadableLocation(
  location: string | null | undefined
): string {
  if (!location) return "Not specified";

  return locationMap[location] || location;
}

/**
 * Converts an array of location codes to readable strings
 */
export function getReadableLocations(
  locations: string[] | null | undefined
): string[] {
  if (!locations || !locations.length) return ["Not specified"];

  return locations.map((location) => locationMap[location] || location);
}

// Experience level to descriptive text
export function getExperienceDescription(
  years: number | null | undefined
): string {
  if (years === null || years === undefined) return "Experience not specified";

  if (years === 0) return "New to football";
  if (years < 2) return "Beginner (less than 2 years)";
  if (years < 5) return "Some experience (2-5 years)";
  if (years < 10) return "Experienced (5-10 years)";
  if (years < 20) return "Very experienced (10-20 years)";
  return "Veteran (20+ years)";
}

// Utility function to get color class based on skill level (for UI styling)
export function getSkillLevelColorClass(
  level: string | null | undefined
): string {
  if (!level)
    return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";

  switch (level) {
    case "beginner":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    case "intermediate":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
    case "advanced":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
    case "semi_pro":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
  }
}

// Utility function to get color class based on position (for UI styling)
export function getPositionColorClass(
  position: string | null | undefined
): string {
  if (!position)
    return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";

  if (position === "goalkeeper") {
    return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
  }

  if (position.includes("defender") || position.includes("back")) {
    return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
  }

  if (position.includes("mid")) {
    return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
  }

  if (
    position.includes("forward") ||
    position.includes("striker") ||
    position.includes("wing")
  ) {
    return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
  }

  return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
}

// Searching utilities - for typeahead search functionality
export const positionKeywords: Record<string, string[]> = {
  goalkeeper: ["gk", "keeper", "goalie"],
  defender: ["def", "defence", "defense", "back"],
  midfielder: ["mid", "midfield", "centre", "center"],
  forward: ["fwd", "attack", "attacker", "striker"],
  // Add more as needed
};

// Function to search position by keyword
export function findPositionByKeyword(keyword: string): string[] {
  keyword = keyword.toLowerCase().trim();

  // Exact match in keys
  if (positionMap[keyword]) return [keyword];

  // Exact match in values (case insensitive)
  const exactValueMatch = Object.entries(positionMap).find(
    ([_, value]) => value.toLowerCase() === keyword
  );
  if (exactValueMatch) return [exactValueMatch[0]];

  // Search in keywords
  const keywordMatches = Object.entries(positionKeywords)
    .filter(([_, keywords]) =>
      keywords.some((k) => k.includes(keyword) || keyword.includes(k))
    )
    .map(([key]) => key);
  if (keywordMatches.length) return keywordMatches;

  // Partial match in keys or values
  const partialMatches = Object.entries(positionMap)
    .filter(
      ([key, value]) =>
        key.includes(keyword) || value.toLowerCase().includes(keyword)
    )
    .map(([key]) => key);

  return partialMatches;
}
