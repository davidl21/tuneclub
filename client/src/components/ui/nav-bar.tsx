import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full py-2 px-6 border-b border-zinc-800">
      <div className="flex justify-between items-center px-4">
        <Link to="/" className="text-xl font-semibold text-white">
          TuneClub
        </Link>

        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link to="/features">Features</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export { NavBar };
