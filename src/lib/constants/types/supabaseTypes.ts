export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      listing_applications: {
        Row: {
          created_at: string | null
          id: string
          listing_id: string | null
          message: string | null
          player_id: string | null
          position_applying: string | null
          responded_at: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          listing_id?: string | null
          message?: string | null
          player_id?: string | null
          position_applying?: string | null
          responded_at?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          listing_id?: string | null
          message?: string | null
          player_id?: string | null
          position_applying?: string | null
          responded_at?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "listing_applications_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "team_listings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listing_applications_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      player_profiles: {
        Row: {
          age: number | null
          availability: string[] | null
          created_at: string | null
          id: string
          looking_for_team: boolean | null
          position: string[] | null
          preferred_location: string[] | null
          preferred_team_type: string[] | null
          primary_position: string | null
          skill_level: string | null
          updated_at: string | null
          years_experience: number | null
        }
        Insert: {
          age?: number | null
          availability?: string[] | null
          created_at?: string | null
          id: string
          looking_for_team?: boolean | null
          position?: string[] | null
          preferred_location?: string[] | null
          preferred_team_type?: string[] | null
          primary_position?: string | null
          skill_level?: string | null
          updated_at?: string | null
          years_experience?: number | null
        }
        Update: {
          age?: number | null
          availability?: string[] | null
          created_at?: string | null
          id?: string
          looking_for_team?: boolean | null
          position?: string[] | null
          preferred_location?: string[] | null
          preferred_team_type?: string[] | null
          primary_position?: string | null
          skill_level?: string | null
          updated_at?: string | null
          years_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "player_profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      player_ratings: {
        Row: {
          comment: string | null
          created_at: string | null
          id: string
          player_id: string | null
          rated_by: string | null
          rating: number | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          id?: string
          player_id?: string | null
          rated_by?: string | null
          rating?: number | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          id?: string
          player_id?: string | null
          rated_by?: string | null
          rating?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "player_ratings_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "player_ratings_rated_by_fkey"
            columns: ["rated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          account_type: string | null
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          full_name: string | null
          id: string
          is_verified: boolean | null
          last_active_at: string | null
          location: string | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          account_type?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          is_verified?: boolean | null
          last_active_at?: string | null
          location?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          account_type?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          is_verified?: boolean | null
          last_active_at?: string | null
          location?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      team_listings: {
        Row: {
          application_process: string | null
          created_at: string | null
          description: string
          expires_at: string | null
          id: string
          is_recurring: boolean | null
          location: string | null
          match_date: string | null
          match_type: string | null
          min_skill_level: string | null
          positions_needed: string[] | null
          status: string | null
          team_id: string | null
          title: string
          updated_at: string | null
          urgency: string | null
        }
        Insert: {
          application_process?: string | null
          created_at?: string | null
          description: string
          expires_at?: string | null
          id?: string
          is_recurring?: boolean | null
          location?: string | null
          match_date?: string | null
          match_type?: string | null
          min_skill_level?: string | null
          positions_needed?: string[] | null
          status?: string | null
          team_id?: string | null
          title: string
          updated_at?: string | null
          urgency?: string | null
        }
        Update: {
          application_process?: string | null
          created_at?: string | null
          description?: string
          expires_at?: string | null
          id?: string
          is_recurring?: boolean | null
          location?: string | null
          match_date?: string | null
          match_type?: string | null
          min_skill_level?: string | null
          positions_needed?: string[] | null
          status?: string | null
          team_id?: string | null
          title?: string
          updated_at?: string | null
          urgency?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_listings_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          id: string
          joined_at: string | null
          player_id: string | null
          position: string | null
          role: string | null
          status: string | null
          team_id: string | null
        }
        Insert: {
          id?: string
          joined_at?: string | null
          player_id?: string | null
          position?: string | null
          role?: string | null
          status?: string | null
          team_id?: string | null
        }
        Update: {
          id?: string
          joined_at?: string | null
          player_id?: string | null
          position?: string | null
          role?: string | null
          status?: string | null
          team_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_members_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      team_ratings: {
        Row: {
          comment: string | null
          created_at: string | null
          id: string
          rated_by: string | null
          rating: number | null
          team_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          id?: string
          rated_by?: string | null
          rating?: number | null
          team_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          id?: string
          rated_by?: string | null
          rating?: number | null
          team_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_ratings_rated_by_fkey"
            columns: ["rated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_ratings_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          active: boolean | null
          age_group: string | null
          banner_url: string | null
          created_at: string | null
          description: string | null
          division: string | null
          established_date: string | null
          gender_category: string | null
          home_location: string | null
          id: string
          league: string | null
          logo_url: string | null
          manager_id: string
          name: string
          team_type: string | null
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          age_group?: string | null
          banner_url?: string | null
          created_at?: string | null
          description?: string | null
          division?: string | null
          established_date?: string | null
          gender_category?: string | null
          home_location?: string | null
          id?: string
          league?: string | null
          logo_url?: string | null
          manager_id: string
          name: string
          team_type?: string | null
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          age_group?: string | null
          banner_url?: string | null
          created_at?: string | null
          description?: string | null
          division?: string | null
          established_date?: string | null
          gender_category?: string | null
          home_location?: string | null
          id?: string
          league?: string | null
          logo_url?: string | null
          manager_id?: string
          name?: string
          team_type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teams_manager_id_fkey"
            columns: ["manager_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
