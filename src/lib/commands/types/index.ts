export type CommandContex = {
  clear: () => void;
};

export type OutputType = "text" | "panel";

export type Command = {
  name: string;
  description: string;
  output?: OutputType
  action?: (ctx: CommandContex) => void | Promise<void>;
};
