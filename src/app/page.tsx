/**
 * Components
 */
import { Textarea } from "@/components/ui/textarea";

const Home = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-7xl">MaxCode</h1>
        <div className="relative w-[min(95%,30em)] group">
          <Textarea
            className="resize-none w-full placeholder:text-lg text-lg selection:bg-accent selection:text-background caret-foreground"
            placeholder="Vuoi sapere qualcosa su di me? Chiedi pure..."
          />
          <div className="absolute bottom-0 left-0 w-0.75 bg-accent pointer-events-none h-0 group-focus-within:h-full transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Home;
