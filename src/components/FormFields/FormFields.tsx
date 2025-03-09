"use client";

import { ReactNode } from "react";
import { Mail, Check, ChevronDown, Edit } from "lucide-react";
import { Input } from "@components/shadcnui/input";
import { Button } from "@components/shadcnui/button";

interface FormSectionProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export function FormSection({
  label,
  children,
  className = "",
}: FormSectionProps) {
  return (
    <div className={`${className}`}>
      <p className="mb-2 text-sm">{label}</p>
      {children}
    </div>
  );
}

interface NameFieldsProps {
  firstName: string;
  lastName: string;
  readOnly?: boolean;
  onChange?: (field: "firstName" | "lastName", value: string) => void;
}

export function NameFields({
  firstName,
  lastName,
  readOnly = true,
  onChange,
}: NameFieldsProps) {
  return (
    <FormSection label="Name">
      <div className="grid grid-cols-2 gap-2">
        <Input
          value={firstName}
          className="text-white bg-zinc-900 border-zinc-700"
          readOnly={readOnly}
          onChange={(e) => onChange?.("firstName", e.target.value)}
        />
        <Input
          value={lastName}
          className="text-white bg-zinc-900 border-zinc-700"
          readOnly={readOnly}
          onChange={(e) => onChange?.("lastName", e.target.value)}
        />
      </div>
    </FormSection>
  );
}

interface EmailFieldProps {
  email: string;
  readOnly?: boolean;
  isVerified?: boolean;
  verificationDate?: string;
  onChange?: (value: string) => void;
}

export function EmailField({
  email,
  readOnly = true,
  isVerified,
  verificationDate,
  onChange,
}: EmailFieldProps) {
  return (
    <FormSection label="Email address">
      <div className="relative">
        <div className="absolute left-3 top-2.5 text-zinc-400">
          <Mail className="w-4 h-4" />
        </div>
        <Input
          value={email}
          className="pl-10 text-white bg-zinc-900 border-zinc-700"
          readOnly={readOnly}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
      {isVerified && (
        <div className="flex items-center gap-1 mt-2 text-xs text-zinc-400">
          <div className="bg-blue-500 rounded-full p-0.5">
            <Check className="w-3 h-3 text-white" />
          </div>
          <span>VERIFIED {verificationDate}</span>
        </div>
      )}
    </FormSection>
  );
}

interface CountryFieldProps {
  country: string;
  countryCode?: string;
  readOnly?: boolean;
  onChange?: (country: string) => void;
}

export function CountryField({
  country,
  countryCode,
  readOnly = true,
  onChange,
}: CountryFieldProps) {
  const flagEmoji = countryCode ? getFlagEmoji(countryCode) : "🌐";

  return (
    <FormSection label="Country">
      <div className="relative">
        <div className="flex items-center justify-between px-3 py-2 border rounded-md cursor-pointer bg-zinc-900 border-zinc-700">
          <div className="flex items-center gap-2">
            <span className="text-sm">{flagEmoji}</span>
            <span>{country}</span>
          </div>
          {!readOnly && <ChevronDown className="w-4 h-4 text-zinc-400" />}
        </div>
      </div>
    </FormSection>
  );
}

interface UsernameFieldProps {
  username: string;
  prefix: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

export function UsernameField({
  username,
  prefix,
  readOnly = true,
  onChange,
}: UsernameFieldProps) {
  return (
    <FormSection label="Username">
      <div className="flex items-center">
        <div className="px-3 py-2 border bg-zinc-900 border-zinc-700 rounded-l-md text-zinc-400">
          {prefix}
        </div>
        <div className="relative flex-1">
          <Input
            value={username}
            className="text-white rounded-l-none bg-zinc-900 border-zinc-700"
            readOnly={readOnly}
            onChange={(e) => onChange?.(e.target.value)}
          />
          {!readOnly && (
            <Button className="absolute right-3 top-2.5 text-zinc-400">
              <Edit className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </FormSection>
  );
}

// Helper function to convert country code to flag emoji
function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
