import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChevronDownIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "@/lib/navLinks";
import { Separator } from "../ui/separator";

export function MobileNav() {
  const links = navLinks;
  const location = useLocation();
  const [openIndexes, setOpenIndexes] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // control sheet state

  // Open parent if any child is active
  useEffect(() => {
    const activeIndexes = links
      .map((link, idx) => {
        if (
          link.child &&
          link.child.some((child) => child.path === location.pathname)
        ) {
          return idx;
        }
        return null;
      })
      .filter((i) => i !== null);
    setOpenIndexes(activeIndexes);
  }, [location.pathname]);

  const toggleChild = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false); // close sheet when clicking a link
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} className="xl:hidden">
      <SheetTrigger asChild>
        <CiMenuFries className="text-[30px] text-accent cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle></SheetTitle>
        <ScrollArea className="h-[80vh] my-8 ">
          <nav className="flex flex-col gap-2">
            {links.map((link, idx) => (
              <div key={idx} className="flex flex-col px-2">
                {link.child ? (
                  <>
                    <button
                      onClick={() => toggleChild(idx)}
                      className={`flex justify-between items-center w-full px-4 py-2 text-left font-medium transition 
                        ${
                          openIndexes.includes(idx)
                            ? "border-b-2 border-accent "
                            : "hover:border-b-2 border-accent"
                        }`}
                    >
                      {link.name}
                      <ChevronDownIcon
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                          openIndexes.includes(idx) ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {isActive(link.path) ? "" : <Separator />}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndexes.includes(idx)
                          ? "max-h-auto opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col ml-4 mt-1 gap-1">
                        {link.child.map((child, cidx) => (
                          <>
                            <Link
                              key={cidx}
                              to={child.path}
                              onClick={handleLinkClick}
                              className={`px-4 py-2 transition ${
                                isActive(child.path)
                                  ? "border-b-2 border-accent"
                                  : "hover:border-b-2 border-accent"
                              } `}
                            >
                              {child.name}
                            </Link>
                            {isActive(child.path) ? "" : <Separator />}
                          </>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      to={link.path}
                      onClick={handleLinkClick} // close on click
                      className={`px-4 py-2 transition
                      ${
                        isActive(link.path)
                          ? "border-b-2 border-accent"
                          : "hover:border-b-2 border-accent"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {isActive(link.path) ? "" : <Separator />}
                  </>
                )}
              </div>
            ))}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
