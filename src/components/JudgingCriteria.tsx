import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Cog, TrendingUp, Presentation, Users, Globe, Brain, Wrench, BarChart } from "lucide-react";

const JudgingCriteria = () => {
  const criteria = [
    {
      title: "Innovation & Creativity",
      percentage: "20%",
      icon: <Award className="w-6 h-6" />,
      description: "Originality of the idea, uniqueness of the solution, and innovative approach to solving the problem.",
      keyQuestion: "How original and creative is this solution?",
      points: [
        "Novelty and uniqueness of the concept",
        "Creative use of technology",
        "Out-of-the-box thinking",
        "Potential for breakthrough impact"
      ]
    },
    {
      title: "Technical Implementation",
      percentage: "20%",
      icon: <Cog className="w-6 h-6" />,
      description: "Effective use of technologies such as AI, IoT, data analytics, intelligent systems, or other advanced tools. Code quality, architecture, and technical complexity will be considered.",
      keyQuestion: "How well is the technology implemented?",
      points: [
        "Technical soundness and complexity",
        "Code quality and architecture",
        "Appropriate use of advanced technologies",
        "System performance and reliability"
      ]
    },
    {
      title: "Problem Relevance & Impact",
      percentage: "15%",
      icon: <Target className="w-6 h-6" />,
      description: "How well the solution addresses a real-world problem and its potential social, industrial, or economic impact.",
      keyQuestion: "Does this solve a real problem with impact?",
      points: [
        "Relevance to real-world challenges",
        "Potential for measurable impact",
        "Social, industrial, or economic benefits",
        "Scalability of the solution"
      ]
    },
    {
      title: "Functionality & Prototype Development",
      percentage: "15%",
      icon: <Wrench className="w-6 h-6" />,
      description: "Working prototype, usability, and functionality of the solution. Demonstration of key features and system performance.",
      keyQuestion: "Does the prototype work and demonstrate value?",
      points: [
        "Functionality of the prototype",
        "Usability and user experience",
        "Demonstration of key features",
        "System performance and stability"
      ]
    },
    {
      title: "Scalability & Feasibility",
      percentage: "10%",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Practical feasibility of implementing the solution in real environments and its ability to scale or expand in the future.",
      keyQuestion: "Can this solution scale in the real world?",
      points: [
        "Practical implementation feasibility",
        "Scalability potential",
        "Cost-effectiveness",
        "Long-term sustainability"
      ]
    },
    {
      title: "User Experience & Design",
      percentage: "10%",
      icon: <Users className="w-6 h-6" />,
      description: "Interface design, usability, accessibility, and overall user interaction quality.",
      keyQuestion: "Is the solution user-friendly and well-designed?",
      points: [
        "Interface design quality",
        "Usability and accessibility",
        "User interaction design",
        "Overall aesthetic and functionality"
      ]
    },
    {
      title: "Presentation & Communication",
      percentage: "10%",
      icon: <Presentation className="w-6 h-6" />,
      description: "Clarity of explanation, problem articulation, demo effectiveness, and ability to answer judges' questions.",
      keyQuestion: "How well is the solution presented?",
      points: [
        "Clarity of explanation",
        "Demo effectiveness",
        "Communication skills",
        "Ability to answer questions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Judging Criteria & Scoring Rubric
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            HackAgentAIx : The Autonomous AI Challenge 2026
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            All submitted projects will be evaluated by a panel of industry experts, academicians, and technology professionals. Each project will be assessed based on the following criteria. Total Score: 100 Marks
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
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {criterion.description}
                </p>
                <p className="text-sm font-semibold text-earth-green">
                  📌 Key Question: {criterion.keyQuestion}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">Judges will assess:</p>
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

        {/* Summary */}
        <div className="mt-16 text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            🧮 Evaluation Summary
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-muted-foreground/20">
                  <th className="pb-3 font-semibold text-foreground">Criteria</th>
                  <th className="pb-3 font-semibold text-foreground text-right">Weightage</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((criterion, index) => (
                  <tr key={index} className="border-b border-muted-foreground/10">
                    <td className="py-3 text-muted-foreground">{criterion.title}</td>
                    <td className="py-3 text-muted-foreground text-right font-semibold">{criterion.percentage}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-muted-foreground/20">
                  <td className="py-3 font-bold text-foreground">Total</td>
                  <td className="py-3 font-bold text-foreground text-right">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgingCriteria;