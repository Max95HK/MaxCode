/**
 * Node modules
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Types
 */
import type { Command } from "./commands/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFilteresCommands = (
  query: string,
  commands: Command[],
): Command[] => {
  const rawQuery = query.slice(1);
  if (rawQuery.length === 0) return commands;
  return commands.filter((cmd) =>
    cmd.name.toLowerCase().startsWith(rawQuery.toLowerCase()),
  );
};
