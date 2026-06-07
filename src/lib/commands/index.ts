/**
 * Types
 */
import type { Command } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "help",
    description: "List of all the command",
    output: 'text'
  },
  {
    name: "about",
    description: "Personal info about me",
    output: 'panel'
  },
  {
    name: "skills",
    description: "What I can do",
    output: 'panel'
  },
  {
    name: "projects",
    description: "My portfolio",
    output: 'panel'
  },
  {
    name: "contact",
    description: "My contacts",
    output: 'panel'
  },
  {
    name: "clear",
    description: "Clear the terminal",
    action: (ctx) => {
      ctx.clear();
    },
  },
];
