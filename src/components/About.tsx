import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "48-Hour Innovation",
      description: "Global hackathon focused on building production-ready agentic AI systems that act autonomously and solve real-world problems"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Agentic AI Focus",
      description: "Go beyond chatbots — build AI systems that plan, reason, use tools, and execute multi-step tasks without human intervention"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Mentorship",
      description: "Learn from industry leaders in LLMs, autonomous agents, multi-agent orchestration, and agentic system architecture"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Real-World Impact",
      description: "Create agent solutions that transform industries — from healthcare and finance to education and infrastructure"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          About HackAgentAIx 2026
        </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            HackAgentAIx 2026 is a 48-hour international innovation challenge bringing 
            together AI engineers, developers, researchers, and domain experts to build 
            the next generation of autonomous AI agent systems. Participants will design, 
            develop, and deploy agentic solutions that reason, plan, and execute complex 
            real-world tasks with minimal human input — pushing the boundary from reactive 
            AI to truly autonomous intelligence.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Join us to build, deploy, and unleash autonomous AI. Whether you're 
              passionate about multi-agent systems, LLM reasoning, agentic workflows, 
              or real-world automation — your solutions can help shape a future where 
              AI doesn't just answer questions, it gets things done. HackAgentAIx 
              exists to accelerate the shift from reactive AI tools to truly 
              autonomous, goal-driven intelligence.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => window.open('https://forms.gle/mQWWXv86sdCb1bMF6', '_blank')} variant="hero" size="lg">
              Start Your Journey
            </Button>
            <Link to="/themes">
              <Button variant="default" size="lg">
                View Themes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;