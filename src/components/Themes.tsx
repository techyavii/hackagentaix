import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Cog,
  Handshake,
  Globe,
  Shield,
  Brain
} from "lucide-react";

const Themes = () => {
  const themes = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Track 1 — Autonomous Workflow Agents",
      color: "from-blue-500 to-cyan-600",
      description: "Build AI agents that autonomously manage end-to-end business, operational, or research workflows without human intervention. Your agent must independently plan, execute multi-step tasks, handle errors, and deliver outcomes.",
      exampleAreas: "HR automation, supply chain agents, financial reporting agents, research assistants, software development pipelines.",
      keyChallenge: "Build an agent that completes a full real-world workflow from goal input to final output — with zero human prompting mid-task."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Track 2 — Multi-Agent Collaboration Systems",
      color: "from-yellow-500 to-orange-600",
      description: "Design orchestrated networks of specialized agents that communicate, delegate, and self-coordinate to solve problems no single agent could handle alone. Think human teams — but AI.",
      exampleAreas: "Multi-agent debate systems, agent swarms for data analysis, collaborative code review agents, distributed research agents.",
      keyChallenge: "Build a system where at least 3 agents with distinct roles collaborate and produce a unified, verifiable outcome."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Track 3 — Agent + Real World Integration",
      color: "from-purple-500 to-pink-600",
      description: "Build agents that interact with real-world tools, live APIs, databases, and external environments. Your agent must connect to and act upon real systems — not just simulate actions.",
      exampleAreas: "Healthcare appointment agents, legal document filing agents, e-commerce order management agents, smart city monitoring agents.",
      keyChallenge: "Build an agent that interacts with at least 2 live external systems or APIs and produces a real, verifiable output."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Track 4 — Responsible & Trustworthy Agents",
      color: "from-indigo-500 to-purple-600",
      description: "Create agentic systems that are autonomous AND safe. Build agents with built-in guardrails, explainability, bias detection, and human oversight mechanisms — agents that act autonomously but responsibly.",
      exampleAreas: "AI governance tools, bias auditing agents, privacy-preserving workflow agents, explainable decision agents.",
      keyChallenge: "Build an autonomous agent that can justify every decision it makes and halt itself when it detects an unsafe or out-of-scope action."
    }
  ];

  return (
    <section id="themes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            HackAgentAIx 2026 — Hackathon Themes
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            HackAgentAIx 2026 challenges you to build the next generation of autonomous 
            AI agents. Choose from four high-impact tracks and build agent solutions 
            that reason, plan, and execute in the real world — with minimal human input.
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {themes.map((theme, index) => (
            <Card 
              key={index}
              className="group hover:shadow-earth transition-all duration-300 border-0 shadow-card overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r £{theme.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {theme.icon}
                  </div>
                  <Badge variant="secondary" className="bg-earth-green/10 text-earth-green font-medium">
                    {theme.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {theme.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {theme.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Example areas:</h4>
                  <p className="text-sm text-muted-foreground">{theme.exampleAreas}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Challenge:</h4>
                  <p className="text-sm text-muted-foreground">{theme.keyChallenge}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-earth p-8 md:p-12 rounded-3xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-earth-green" />
            <span className="text-xl font-semibold text-foreground">
              Ready to Build, Deploy, and Dominate?
            </span>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether your expertise lies in autonomous AI, systems design, or human-centered automation, 
            your innovative solutions can help shape the future of intelligent agent ecosystems.
          </p>
          <Button variant="accent" size="lg" className="min-w-48">
            Choose Your Theme
          </Button>
        </div>

        {/* Notice Box */}
        <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            💡 Note
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Teams may choose any one track for their submission. Cross-track 
            innovation is encouraged — if your project spans multiple themes, 
            select the one that best represents your primary focus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Themes;