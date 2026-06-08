/**
 * Node modules
 */
import { motion, type Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";

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
  visibleItems: number;
};

const containerVariants: Variants = {
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

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ITEM_HIGHT = 75;

const CommandMenu = ({
  commands,
  selectedIndex,
  visibleItems,
}: CommandMenuProps) => {
  //Refs
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    itemRefs.current[selectedIndex]?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  }, [selectedIndex]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-primary-foreground/95 overflow-y-auto custom-scrollbar"
      style={{ maxHeight: visibleItems * ITEM_HIGHT }}
    >
      {commands.map((cmd, index) => (
        <motion.div
          key={cmd.name}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          variants={itemVariants}
          style={{ height: ITEM_HIGHT }}
        >
          <Item
            className={cn(
              "hover:bg-accent hover:text-background transition-colors",
              selectedIndex === index && "bg-accent text-background",
            )}
          >
            <ItemContent>
              <ItemTitle className="text-lg">/{cmd.name}</ItemTitle>
              <ItemDescription>{cmd.description}</ItemDescription>
            </ItemContent>
          </Item>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CommandMenu;
