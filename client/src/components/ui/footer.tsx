import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="w-full py-6 border-t border-zinc-800">
      <div className="container mx-auto flex items-center justify-between px-4">
        <p className="text-sm text-zinc-400">built by david</p>

        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/davidl21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-zinc-400 hover:text-white transition-colors" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/davidl21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-zinc-400 hover:text-white transition-colors" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
