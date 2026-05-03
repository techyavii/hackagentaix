import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Cog, TrendingUp, Presentation, Users } from "lucide-react";

const JudgingCriteria = () => {
  const criteria = [
    {
      title: "Agent Autonomy — 25 points",
      icon: <Award className="w-6 h-6" />,
      description: "How autonomous is the agent? Does it independently plan, reason, and execute tasks from a single goal input — with minimal or zero human intervention mid-task? Does it handle errors and adapt on its own?",
      points: [
        "Goal-to-output completion without prompting",
        "Multi-step planning capability",
        "Error recovery and self-correction",
        "Degree of human involvement required"
      ]
    },
    {
      title: "Real-World Impact — 25 points",
      icon: <Target className="w-6 h-6" />,
      description: "Does the solution solve a genuine, meaningful problem? How applicable is it in a real-world environment? Could it be deployed and used by actual organisations or individuals today?",
      points: [
        "Clarity and significance of the problem being solved",
        "Practical deployability of the agent",
        "Target audience and use case relevance",
        "Measurable value delivered"
      ]
    },
    {
      title: "Technical Implementation — 20 points",
      icon: <Cog className="w-6 h-6" />,
      description: "How well is the agent built? Is the code clean, efficient, and well-architected? Does the team demonstrate strong engineering practices and effective use of agentic frameworks?",
      points: [
        "Code quality and architecture",
        "Use of appropriate agentic frameworks (LangChain, CrewAI, AutoGen, etc.)",
        "System reliability and robustness",
        "Documentation and reproducibility"
      ]
    },
    {
      title: "Innovation & Creativity — 20 points",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Is the approach novel? Does the solution go beyond standard LLM wrappers to introduce genuinely new ideas, architectures, or applications of agentic AI?",
      points: [
        "Originality of the concept",
        "Novel use of agentic patterns or multi-agent design",
        "Creative problem framing",
        "Differentiation from existing solutions"
      ]
    },
    {
      title: "Presentation & Communication — 10 points",
      icon: <Presentation className="w-6 h-6" />,
      description: "How clearly and confidently does the team explain their solution? Is the problem, approach, and impact communicated in a way that is accessible to both technical and non-technical judges?",
      points: [
        "Clarity and structure of the presentation",
        "Quality of the live demo",
        "Ability to answer questions under Q&A",
        "Visual quality of slides"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            HackAgentAIx 2026 — Judging Criteria
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            All submissions will be evaluated by our expert judging panel across 
            five core dimensions. Each criterion reflects what makes an agentic AI 
            solution truly impactful, robust, and ready for the real world.
          </p>
        </div>

        {/* Criteria Cards */}
        <div className="grid gap-8 max-w-6xl mx-auto">
          {criteria.map((criterion, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero text-white flex items-center justify-center">
                    {criterion.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground">{criterion.title}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="text-lg font-bold px-4 py-2">
                    {criterion.percentage}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {criterion.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {criterion.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-earth-green mt-2 flex-shrink-0"></div>
                      <span className="text-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Scoring Summary Box */}
        <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            📊 Scoring Breakdown
          </h3>
          <div className="text-left bg-muted/50 rounded-lg p-6 font-mono text-sm">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Agent Autonomy</span>
                <span>→ 25 points</span>
              </div>
              <div className="flex justify-between">
                <span>Real-World Impact</span>
                <span>→ 25 points</span>
              </div>
              <div className="flex justify-between">
                <span>Technical Implementation</span>
                <span>→ 20 points</span>
              </div>
              <div className="flex justify-between">
                <span>Innovation & Creativity</span>
                <span>→ 20 points</span>
              </div>
              <div className="flex justify-between">
                <span>Presentation</span>
                <span>→ 10 points</span>
              </div>
              <div className="border-t border-muted-foreground/30 pt-2 mt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>→ 100 points</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgingCriteria;