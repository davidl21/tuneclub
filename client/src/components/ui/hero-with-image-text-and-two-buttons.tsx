import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Hero() {
  return (
    <div className="w-full py-20 lg:py-40 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div className="flex justify-start w-full">
              <Badge
                variant="outline"
                className="border-zinc-700 text-zinc-300"
                asChild
              >
                <a
                  href="https://github.com/davidl21/tuneclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-100"
                >
                  Check out the GitHub
                </a>
              </Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular text-white">
                Listen, rate, and sing along with friends
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-zinc-400 max-w-md text-left">
                Just connect with Spotify to join a room, listen to your
                favorite songs, and rate along with your friends.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button
                size="lg"
                variant="default"
                className="hover:bg-[#1DB954]"
              >
                Sign in with Spotify <MoveRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Check out features
              </Button>
            </div>
          </div>
          <div className="bg-zinc-800 rounded-md aspect-square"></div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
