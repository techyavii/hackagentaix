import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Mail, ExternalLink, GitCompare } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "/" },
    { name: "Themes", href: "/themes" },
    { name: "Timeline", href: "/timeline" },
    { name: "Eligibility", href: "/eligibility" },
    { name: "Awards", href: "/awards" },
    { name: "Schedule", href: "/schedule" }
  ];

  const importantInfo = [
    {
      icon: <Calendar className="w-4 h-4" />,
      label: "EVENT DATE",
      value: "30-31st July 2026"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: "CONTACT",
      value: "ai@hackagentaix.com"
    }
  ];

  return (
    <>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl rounded-[2rem] bg-gradient-to-br from-primary/10 via-slate-50 to-accent/10 p-10 shadow-card ring-1 ring-slate-200 backdrop-blur-xl">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-950">
              Ready to Build Your Agent?
            </h3>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-slate-600 leading-8">
              Showcase your autonomous AI solution to our distinguished panel of judges 
              and compete for the HackAgentAIx 2026 prize pool.
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open("https://forms.gle/mQWWXv86sdCb1bMF6", "_blank")}
            >
              Register Your Team ↗
            </Button>
          </div>
        </div>
      </div>

      <footer className="bg-background text-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-accent shadow-glow text-white">
                  <GitCompare className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">HackAgentAIx</h3>
                  <p className="text-sm text-slate-600">Build. Deploy. Unleash. The Autonomous AI Challenge.</p>
                </div>
              </div>
              <p className="text-slate-600 leading-8 mb-8 max-w-lg">
                Join the 48-hour global innovation sprint where developers, AI engineers, 
                and researchers build autonomous agent systems that reason, plan, and 
                execute real-world tasks — powered by the future of agentic AI.
              </p>
              <Button
                variant="earth"
                size="lg"
                onClick={() => window.open("https://forms.gle/mQWWXv86sdCb1bMF6", "_blank")}
              >
                Register Your Team
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-950 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-600 transition hover:text-slate-950"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-950 mb-6">Event Details</h4>
              <div className="space-y-4">
                {importantInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{info.label}</p>
                      <p className="text-sm font-medium text-slate-900">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Separator className="my-10 bg-slate-200" />

          <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <span>© HackAgentAIx — The Autonomous AI Challenge 2026</span>
            <span>Forging the future of autonomous intelligence, one agent at a time.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
