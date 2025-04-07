import { Button } from "@/components/ui/button";
import FloralLogo from "./icon";

export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-8 bg-white shadow">
        <FloralLogo />
        <Button
          variant="outline"
          className="bg-orange-100 text-maroon font-bold text-xs px-2 py-1 rounded-lg border border-maroon"
        >
          Add a Note
        </Button>
      </nav>
    );
}