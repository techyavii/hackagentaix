import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.12),transparent_24%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] pt-28 pb-20">
      <div className="pointer-events-none absolute left-10 top-12 hidden h-40 w-40 rounded-full bg-primary/10 blur-3xl md:block"></div>
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="pointer-events-none absolute left-1/4 bottom-0 h-48 w-48 rounded-full bg-blue-200/20 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid gap-12 xl:grid-cols-[1.2fr_0.9fr] items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
              Free Registration!
            </div>

            <div className="max-w-3xl space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                  HackAgentAIx
                </h1>
                <p className="text-lg text-slate-600 md:text-xl">
                  The Autonomous AI Challenge 2026
                </p>
                <p className="text-lg text-slate-600 md:text-xl">
                  "Build. Deploy. Unleash. The World's Premier Agentic AI Hackathon."
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
                    <Calendar className="h-5 w-5 text-slate-500" />
                    30-31st July 2026
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    48-hour global sprint for autonomous intelligence.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
                    <MapPin className="h-5 w-5 text-slate-500" />
                    Online at UK
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    Build and compete from anywhere with a global community.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
                    <Users className="h-5 w-5 text-slate-500" />
                    48-Hour Innovation
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    Focus on autonomous AI solutions that reason and act.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
                    <Trophy className="h-5 w-5 text-slate-500" />
                    £1750 Prize Pool
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    Compete for cash awards and recognition from AI leaders.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 max-w-3xl">
              <h2 className="text-3xl font-semibold text-slate-950 md:text-4xl">
                Shape the Future of Autonomous Intelligence
              </h2>
              <p className="text-base leading-8 text-slate-600">
                Join developers, AI engineers, researchers, and innovators in a 48-hour 
                sprint to build autonomous AI agents that think, plan, and act. 
                HackAgentAIx is where the next generation of agentic systems gets built — 
                from multi-agent pipelines to real-world autonomous workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="hero"
                size="xl"
                onClick={() => window.open("https://forms.gle/mQWWXv86sdCb1bMF6", "_blank")}
              >
                Register Now
              </Button>
              <Link to="/themes" className="inline-flex">
                <Button variant="outline" size="xl" className="border-slate-300 text-slate-900 bg-white hover:bg-slate-100">
                  View Themes
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel relative overflow-hidden rounded-[2.25rem] border border-slate-200/70 p-8 shadow-soft">
              <div className="absolute -right-16 top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
              <div className="absolute -left-16 bottom-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl"></div>
              <div className="relative space-y-8">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Organized By</p>
                  <div className="flex flex-col items-start gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <img
                      src="/collaborators/essex-logo.png"
                      alt="University of Essex"
                      className="h-16 w-auto object-contain rounded-2xl bg-slate-50 p-2"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">University of Essex</h3>
                      <p className="text-sm text-slate-600">England, United Kingdom</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950 mb-3">Why HackAgentAIx</h3>
                  <p className="text-sm leading-7 text-slate-600">
                    A premium, light-theme experience designed for ambitious teams who want to build agentic AI solutions with real-world impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
