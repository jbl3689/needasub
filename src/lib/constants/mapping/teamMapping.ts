// src/lib/constants/teamMappings.ts

// Team skill level mappings
export const skillLevelMap: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  competitive: "Competitive",
  semi_pro: "Semi-Professional",
  recreational: "Recreational",
  social: "Social",
};

// Function to get human-readable skill level
export function getReadableSkillLevel(
  level: string | null | undefined
): string {
  if (!level) return "Not specified";

  return skillLevelMap[level] || level;
}

// Team type mappings
export const teamTypeMap: Record<string, string> = {
  "5-a-side": "5-a-side",
  "7-a-side": "7-a-side",
  "11-a-side": "11-a-side",
  futsal: "Futsal",
  beach: "Beach Soccer",
};

// Function to get human-readable team type
export function getReadableTeamType(type: string | null | undefined): string {
  if (!type) return "Not specified";

  return teamTypeMap[type] || type;
}

// Age group mappings
export const ageGroupMap: Record<string, string> = {
  u10: "Under 10",
  u12: "Under 12",
  u14: "Under 14",
  u16: "Under 16",
  u18: "Under 18",
  u21: "Under 21",
  senior: "Senior",
  veterans: "Veterans (35+)",
  masters: "Masters (45+)",
  adult: "Senior",
};

export function getReadableAgeGroup(
  ageGroup: string | null | undefined
): string {
  if (!ageGroup) return "Not specified";

  return ageGroupMap[ageGroup] || ageGroup;
}

// Gender category mappings
export const genderCategoryMap: Record<string, string> = {
  mens: "Men's",
  womens: "Women's",
  mixed: "Mixed",
  coed: "Co-ed",
};

export function getReadableGenderCategory(
  category: string | null | undefined
): string {
  if (!category) return "Not specified";

  return genderCategoryMap[category] || category;
}

// Team status mappings (for active/inactive)
export function getReadableTeamStatus(
  active: boolean | null | undefined
): string {
  if (active === null || active === undefined) return "Unknown";
  return active ? "Active" : "Inactive";
}

// Match urgency mappings
export const urgencyMap: Record<string, string> = {
  urgent: "Urgent (24h)",
  soon: "Soon (2-3 days)",
  planned: "Planned (1+ week)",
};

export function getReadableUrgency(urgency: string | null | undefined): string {
  if (!urgency) return "Standard";

  return urgencyMap[urgency] || urgency;
}

// Get color class for urgency (for UI highlighting)
export function getUrgencyColorClass(
  urgency: string | null | undefined
): string {
  if (!urgency) return "bg-muted text-muted-foreground";

  switch (urgency) {
    case "urgent":
      return "bg-destructive/10 text-destructive";
    case "soon":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500";
    case "planned":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
}
