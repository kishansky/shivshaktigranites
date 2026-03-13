import DesktopNav from "@/components/navigation/DesktopNav";
import { MobileNav } from "@/components/navigation/MobileNav";
import { Button } from "@/components/ui/button";
import React from "react";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border transition-all">

      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/shiv-shakti.png"
            alt="Shiv Shakti Granites"
            className="h-14 transition"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <DesktopNav />
        </div>

        {/* Call Button */}
        <div className="hidden xl:flex">
          <Link to="tel:+918058938451" className="">
            <Button
              size="sm"
              className="flex items-center gap-2 rounded-xl shadow-md cursor-pointer hover:bg-accent/90"
            >
              <MdCall className="text-lg" />
              +91-8058938451
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
}

export default Header;