import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, GitCompare } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"resources" | "judges" | null>(null);

  const mainNavItems = [
    { name: "Home", href: "/" },
    { name: "Schedule", href: "/schedule" }
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

  const toggleDropdown = (menu: "resources" | "judges") => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl shadow-soft">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
        <a href="/" className="group inline-flex items-center gap-3">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-accent p-3 shadow-glow transition-transform duration-300 group-hover:-translate-y-0.5">
            <GitCompare className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Hackathon</p>
            <p className="text-lg font-semibold text-foreground">HackAgentAIx</p>
          </div>
        </a>

        <div className="hidden xl:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {mainNavItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative transition text-slate-600 hover:text-slate-900"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("resources")}
              className="inline-flex items-center gap-1 text-slate-600 transition hover:text-slate-900"
              aria-expanded={openDropdown === "resources"}
            >
              Resources
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "resources" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "resources" && (
              <div className="absolute left-0 top-full mt-3 w-64 rounded-3xl border border-slate-200 bg-white p-3 shadow-soft">
                {resourcesItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("judges")}
              className="inline-flex items-center gap-1 text-slate-600 transition hover:text-slate-900"
              aria-expanded={openDropdown === "judges"}
            >
              Judges
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "judges" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "judges" && (
              <div className="absolute left-0 top-full mt-3 w-64 rounded-3xl border border-slate-200 bg-white p-3 shadow-soft">
                {judgesItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-3">
          <Button
            variant="earth"
            size="sm"
            onClick={() => window.open("https://forms.gle/mQWWXv86sdCb1bMF6", "_blank")}
          >
            Register Now
          </Button>
        </div>

        <div className="xl:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-xl">
          <div className="space-y-1 px-4 py-4">
            {mainNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-3xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Resources</p>
              <div className="mt-2 space-y-1">
                {resourcesItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-2xl px-3 py-2 text-sm text-slate-700 transition hover:bg-white hover:text-slate-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Judges</p>
              <div className="mt-2 space-y-1">
                {judgesItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-2xl px-3 py-2 text-sm text-slate-700 transition hover:bg-white hover:text-slate-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <Button
              variant="earth"
              size="sm"
              className="w-full"
              onClick={() => window.open("https://forms.gle/mQWWXv86sdCb1bMF6", "_blank")}
            >
              Register Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
