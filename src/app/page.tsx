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
 * Utils
 */
import { getFilteresCommands } from "@/lib/utils";

/**
 * Constants
 */
import { COMMANDS } from "@/lib/commands";

const Home = () => {
  // States
  const [showMenu, setShowMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = getFilteresCommands(query, COMMANDS);

  return (
    <>
      <div className="container">
        <h1 className="text-7xl">MaxCode</h1>
      </div>
      <div className="container flex-1 flex flex-col justify-end items-center mb-12">
        <div className="relative input-width group">
          <AnimatePresence>
            {showMenu && (
              <div className="absolute bottom-full left-0 w-full z-10">
                <CommandMenu
                  commands={filteredCommands}
                  selectedIndex={selectedIndex}
                  visibleItems={4}
                />
              </div>
            )}
          </AnimatePresence>

          <Textarea
            className="pl-8 resize-none w-full placeholder:text-lg text-lg selection:bg-accent selection:text-background caret-foreground"
            placeholder="Vuoi sapere qualcosa su di me? Chiedi pure... O utilizza i comandi digitando /"
            name="input-query"
            value={query}
            onChange={(event) => {
              const value = event.target.value;
              setQuery(value);
              if (value === "") setShowMenu(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "/") {
                setShowMenu(true);
              }

              if (event.key === "ArrowUp") {
                event.preventDefault();
                setSelectedIndex(
                  (prev) => (prev - 1 + COMMANDS.length) % COMMANDS.length,
                );
              }

              if (event.key === "ArrowDown") {
                event.preventDefault();
                setSelectedIndex((prev) => (prev + 1) % COMMANDS.length);
              }
            }}
          />
          <div className="absolute bottom-0 left-0 w-0.75 bg-white pointer-events-none h-0 group-focus-within:h-full transition-all duration-300 bar-glow opacity-0 group-focus-within:opacity-100" />
        </div>
      </div>
    </>
  );
};

export default Home;
