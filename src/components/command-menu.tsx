/**
 * Node modules
 */
import { motion } from "motion/react";
import { useState } from "react";

/**
 * Components
 */
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

/**
 * Utils
 */
import { cn } from "@/lib/utils";

/**
 * Types
 */
import type { Command } from "@/lib/commands/types";

type CommandMenuProps = {
  commands: Command[];
  selectedIndex: number;
};

const containerVariants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0, 0, 1] as const,
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
  exit: { clipPath: "inset(100% 0 0 0)" },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const CommandMenu = ({ commands, selectedIndex }: CommandMenuProps) => {
  //States

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-primary-foreground/95"
    >
      {commands.map((cmd, index) => (
        <motion.div key={cmd.name} variants={itemVariants}>
          <Item
            className={cn(
              "hover:bg-accent hover:text-background transition-colors",
              selectedIndex === index && "bg-accent text-background",
            )}
          >
            <ItemContent>
              <ItemTitle className="text-lg">/{cmd.name}</ItemTitle>
            </ItemContent>
          </Item>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CommandMenu;
