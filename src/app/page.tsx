"use client";

/**
 * Node modules
 */
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

/**
 * Components
 */
import CommandMenu from "@/components/command-menu";
import { Textarea } from "@/components/ui/textarea";

/**
 * Constants
 */
import { COMMANDS } from "@/lib/commands";

const Home = () => {
  // States
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container">
      <div className="flex flex-col gap-3 items-center ">
        <h1 className="text-7xl">MaxCode</h1>

        <div className="relative input-width group">
          <AnimatePresence>
            {showMenu && (
              <div className="absolute bottom-full left-0 w-full z-10">
                <CommandMenu
                  commands={COMMANDS}
                  selectedIndex={selectedIndex}
                />
              </div>
            )}
          </AnimatePresence>

          <Textarea
            className="pl-8 resize-none w-full placeholder:text-lg text-lg selection:bg-accent selection:text-background caret-foreground"
            placeholder="Vuoi sapere qualcosa su di me? Chiedi pure..."
            value={search}
            onChange={(event) => {
              const value = event.target.value;
              setSearch(value);
              if (value === "") setShowMenu(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "/") {
                setShowMenu(true);
              }

              if (event.key === "ArrowUp") {
                event.preventDefault();
                setSelectedIndex(
                  (prevIndex) => (prevIndex + 1) % COMMANDS.length,
                );
              }

              if (event.key === "ArrowDown") {
                event.preventDefault();
                setSelectedIndex(
                  (prevIndex) =>
                    (prevIndex - 1 + COMMANDS.length) % COMMANDS.length,
                );
              }
            }}
          />
          <div className="absolute bottom-0 left-0 w-0.75 bg-white pointer-events-none h-0 group-focus-within:h-full transition-all duration-300 bar-glow opacity-0 group-focus-within:opacity-100" />
        </div>
      </div>
    </div>
  );
};

export default Home;
