import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users } from "lucide-react";

const judgeAwards = [
  { title: "HackAgentAIx Distinguished Judge Award", description: "For outstanding contributions in evaluating and mentoring autonomous AI teams." },
  { title: "AI Expert Evaluator Award", description: "For providing deep, insightful evaluations of autonomous AI systems." },
  { title: "Autonomous Systems Champion", description: "For expertise in assessing autonomous agent architectures and capabilities." },
  { title: "Ethics & Safety Advocate", description: "For promoting responsible AI development and safety considerations." },
  { title: "Innovation Catalyst Award", description: "For inspiring creativity and breakthrough thinking in autonomous AI." },
  { title: "Technical Depth Award", description: "For deep technical analysis of AI algorithms and autonomous systems." },
  { title: "Mentor Judge of the Year", description: "For exceptional guidance and support to autonomous AI developers." },
  { title: "Impact Assessment Excellence", description: "For evaluating real-world impact and scalability of autonomous agents." },
  { title: "Feedback Excellence Award", description: "For delivering high-quality, actionable feedback on AI projects." },
  { title: "AI Visionary Judge", description: "For forward-thinking evaluation of emerging autonomous AI technologies." },
  { title: "Domain Excellence Award", description: "For exceptional insights in specific autonomous AI domains." },
  { title: "Safety & Reliability Award", description: "For emphasizing safety and reliability in autonomous systems." },
  { title: "Scalability Strategist Award", description: "For evaluating long-term viability and scaling potential of AI agents." },
  { title: "Best Question-Asker Award", description: "For asking thought-provoking questions about autonomous AI development." },
  { title: "Most Supportive Judge Award", description: "For being a consistent source of motivation and guidance." },
  { title: "HackAgentAIx Spirit Award", description: "For embodying the values and mission of autonomous AI innovation." },
  { title: "Marathon Judge Award", description: "For evaluating the highest number of projects with thoroughness and care." },
  { title: "AI Ethics Champion", description: "For championing ethical considerations in autonomous AI development." },
  { title: "People's Favorite Judge", description: "Voted by participants as the most engaging and helpful judge." },
  { title: "Innovation Insight Award", description: "For sharp judgment in identifying breakthrough autonomous AI innovations." }
];

const JudgeRecognitionAwards = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tl from-blue-50 via-white to-green-50 pb-20">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl py-8 pt-24">
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-earth-dark-green tracking-tight drop-shadow-lg">
            HackAgentAIx 2026 — Judge Recognition Awards
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            To acknowledge the expertise and dedication of our judges, the following awards will be presented to recognize their invaluable contributions to the HackAgentAIx autonomous AI hackathon.
          </p>
        </div>
      </section>

      {/* Judge Awards Grid */}
      <section className="container mx-auto px-3 sm:px-6 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {judgeAwards.map((award, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-blue-50 via-white to-green-100 border border-slate-200 shadow-[0_4px_24px_0_rgba(0,80,220,0.07)] hover:scale-[1.03] hover:shadow-2xl transition-transform transition-shadow duration-300 group rounded-2xl"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-7 h-7 text-green-600 mt-1 flex-shrink-0 drop-shadow" />
                  <div>
                    <h4 className="font-semibold text-lg md:text-xl text-earth-navy mb-2 group-hover:text-emerald-700 transition-colors duration-300 drop-shadow-sm">
                      {award.title}
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* AI Leadership Certificate */}
      <section className="container mx-auto px-3 sm:px-6 md:px-8 max-w-4xl mt-16">
        <div className="bg-gradient-to-br from-green-100 via-white to-emerald-100 p-8 md:p-12 rounded-3xl border-0 shadow-lg">
          <div className="text-center">
            <Users className="w-12 h-12 text-emerald-600 mx-auto mb-5 drop-shadow" />
            <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4">AI Leadership Certificate</h4>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              In recognition of their exceptional contributions to autonomous AI innovation, each judge will be awarded an AI Leadership Certificate. These awards acknowledge the judges' expertise and commitment to advancing the field of autonomous AI through the HackAgentAIx hackathon.
            </p>
          </div>
        </div>
      </section>

      {/* Award Ceremony Banner */}
      <section className="container mx-auto px-3 sm:px-6 md:px-8 max-w-4xl mt-12">
        <div className="text-center bg-gradient-to-r from-emerald-500 to-blue-500 p-8 md:p-12 rounded-3xl text-white shadow-xl">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">Award Ceremony</h4>
          <p className="text-lg md:text-xl opacity-90 mb-3 max-w-2xl mx-auto">
            The Judges Recognition Awards will be presented during the closing ceremony of HackAgentAIx 2026 on 31st July 2026.
            We encourage all participants to join us in celebrating the valuable contributions of our esteemed autonomous AI experts.
          </p>
        </div>
      </section>
    </div>
  );
};

// Optionally add extra colors to your tailwind.config.js (e.g. earth-dark-green, earth-navy) for custom brand colors.

export default JudgeRecognitionAwards;
