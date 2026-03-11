import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "@/lib/navLinks";

export default function DesktopNav() {
  const location = useLocation();
  const links = navLinks;

  const isActive = (path) => location.pathname === path;

  // Check if any child is active
  const isChildActive = (children) =>
    children?.some((child) => location.pathname === child.path);

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex space-x-4 font-semibold text-base">
        {links.map((link) =>
          link.child ? (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuTrigger
                className={cn(
                  "transition",
                  isChildActive(link.child) && "border-b-2 border-accent "
                )}
              >
                {link.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="backdrop-blur-md shadow border-[0.5px] rounded-md z-10 p-0">
                {/* wrapper controls size of dropdown */}
                <div className="w-64 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full my-2 ">
                    <div className="flex flex-col space-y-1 p-4">
                      {link.child.map((child) => (
                        <NavigationMenuLink asChild key={child.name}>
                          <Link
                            to={child.path}
                            className={cn(
                              "block px-3 py-2  transition",
                              isActive(child.path) && "border-b-2 border-accent "
                            )}
                          >
                            {child.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuLink asChild>
                <Link
                  to={link.path}
                  className={cn(
                    "px-3 py-2  ",
                    isActive(link.path) &&
                      "border-b-2 border-accent hover:border-b-0 "
                  )}
                >
                  {link.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
