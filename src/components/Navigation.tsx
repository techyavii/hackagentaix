import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, ChevronDown, GitCompare } from "lucide-react";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "resources" | "judges" | null

  const mainNavItems = [
    { name: "Home", href: "/" },
    { name: "Schedule", href: "/schedule" },
    // { name: "Results", href: "/results" }
  ];

  const resourcesItems = [
    { name: "Timeline", href: "/timeline" },
    { name: "Hackathon Themes", href: "/themes" },
    { name: "Eligibility Criteria", href: "/eligibility" },
    { name: "Judging Criteria", href: "/judging-criteria" },
    { name: "Submission Guidelines", href: "/submission-guidelines" },
    { name: "Awards", href: "/awards" }
  ];

  const judgesItems = [
    { name: "Judge Appointment Criteria", href: "/judge-appointment-criteria" },
    { name: "Judge Recognition Awards", href: "/judge-recognition-awards" }
  ];

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <GitCompare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              HackAgentAIx
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("resources")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group flex items-center gap-1"
              >
                Resources
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>

              {openDropdown === "resources" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-border rounded-lg shadow-lg z-50 py-2">
                  {resourcesItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-200"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Judges Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("judges")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group flex items-center gap-1"
              >
                Judges
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === "judges" ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>

              {openDropdown === "judges" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-border rounded-lg shadow-lg z-50 py-2">
                  {judgesItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-200"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <Button
              // disabled
                variant="earth"
                size="sm"
                // disabled
                // className="opacity-60 cursor-not-allowed"
                onClick={() => {window.open('https://forms.gle/mQWWXv86sdCb1bMF6', '_blank')}}
              >
                Register Now
              </Button>
              {/* <div className="absolute -top-2 -right-2 bg-red-500 text-white font-bold px-2 py-0.5 rounded-full shadow-lg text-xs animate-pulse">
                Closed
              </div> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              {mainNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Resources Section */}
              <div className="border-t border-border pt-2 mt-2">
                <div className="px-3 py-2 text-sm font-semibold text-foreground">
                  Resources
                </div>
                {resourcesItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile Judges Section */}
              <div className="border-t border-border pt-2 mt-2">
                <div className="px-3 py-2 text-sm font-semibold text-foreground">
                  Judges
                </div>
                {judgesItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="px-3 py-2 pt-4">
                <div className="relative inline-block w-full">
                  <Button
                    variant="earth"
                    size="sm"
                    // className="w-full opacity-60 cursor-not-allowed"
                    // disabled
                    onClick={() => {window.open('https://forms.gle/mQWWXv86sdCb1bMF6', '_blank')}}
                  >
                    Register Now
                  </Button>
                  {/* <div className="absolute -top-2 -right-2 bg-red-500 text-white font-bold px-2 py-0.5 rounded-full shadow-lg text-xs animate-pulse">
                    Closed
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
