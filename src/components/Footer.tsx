import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Leaf, 
  Mail, 
  MapPin, 
  Calendar,
  Heart,
  ExternalLink,
  GitCompare
} from "lucide-react";

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
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Agent?
          </h3>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Showcase your autonomous AI solution to our distinguished panel of judges 
            and compete for the HackAgentAIx 2026 prize pool.
          </p>
          <Button 
            disabled
            variant="secondary" 
            size="lg"
            onClick={() => {window.open('https://forms.gle/PAFktjYsSXd4CJP2A', '_blank')}}
          >
            Register Your Team ↗
          </Button>
        </div>
      </div>

      <footer className="bg-gradient-to-br from-earth-green to-earth-teal text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <GitCompare className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">HackAgentAIx</h3>
                <p className="text-white/80 text-sm">Build. Deploy. Unleash. The Autonomous AI Challenge.</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed mb-6 max-w-md">
              Join the 48-hour global innovation sprint where developers, AI engineers, 
              and researchers build autonomous agent systems that reason, plan, and 
              execute real-world tasks — powered by the future of agentic AI.
            </p>
            <div className="relative inline-block">
              <Button 
                disabled
                variant="default" 
                // className="border-white/30 text-white hover:bg-white/10 opacity-60 cursor-not-allowed"
                onClick={() => {window.open('https://forms.gle/PAFktjYsSXd4CJP2A', '_blank')}}
              >
                Register Your Team
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              {/* <div className="absolute -top-2 -right-2 bg-red-500 text-white font-bold px-2 py-0.5 rounded-full shadow-lg text-xs animate-pulse">
                Closed
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Event Details</h4>
            <div className="space-y-4">
              {importantInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wide">
                      {info.label}
                    </p>
                    <p className="text-white text-sm font-medium">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <span>© HackAgentAIx — The Autonomous AI Challenge 2026</span>
          </div>
          
          <div className="text-white/60 text-sm text-center md:text-right">
            <p>Forging the future of autonomous intelligence, one agent at a time.</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </footer>
    </>
  );
};

export default Footer;