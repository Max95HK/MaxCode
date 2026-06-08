/**
 * Types
 */
import type { Command } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "comandi",
    description: "Elenco dei comandi disponibili",
    output: "text",
  },
  {
    name: "profilo",
    description: "Informazioni personali e background",
    output: "panel",
  },
  {
    name: "abilità",
    description: "Competenze e ciò che so fare",
    output: "panel",
  },
  {
    name: "lavori",
    description: "Progetti e portfolio",
    output: "panel",
  },
  {
    name: "contatti",
    description: "Come mettersi in contatto con me",
    output: "panel",
  },
  {
    name: "reset",
    description: "Ripristina il terminale",
    action: (ctx) => ctx.clear(),
  },
];
