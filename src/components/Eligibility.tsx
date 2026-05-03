import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Users, 
  Target, 
  Shield, 
  Mail,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Eligibility = () => {
  const eligibleParticipants = [
    {
      title: "Students",
      description: "Undergraduate, postgraduate, and PhD students from any accredited institution worldwide",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Early-Career Professionals", 
      description: "Working professionals with up to 3 years of industry experience in AI, software, or related fields",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Researchers",
      description: "Academic or independent researchers working in AI, machine learning, or autonomous systems",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Solo Participants",
      description: "Individuals may register and participate alone",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Teams",
      description: "Teams of 2 to 4 members are permitted. All members must register individually",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "International",
      description: "Open to participants from all countries worldwide",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const teamRules = [
    "Minimum team size: 1 (solo allowed)",
    "Maximum team size: 4 members",
    "All team members must register individually on the portal",
    "Cross-institution and cross-country teams are encouraged",
    "One team may submit only one project",
    "Team composition cannot be changed after the submission deadline"
  ];

  const disqualificationConditions = [
    "Submission of pre-built or previously existing projects",
    "Use of another team's code or intellectual property without attribution",
    "Violation of the Code of Conduct",
    "Failure to present on Day 1 without prior notice to organisers",
    "Providing false information during registration"
  ];

  return (
    <section id="eligibility" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            HackAgentAIx 2026 — Eligibility Criteria
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            HackAgentAIx 2026 is open to innovators, builders, and researchers 
            from around the world. Please review the eligibility requirements 
            carefully before registering.
          </p>
        </div>

        {/* Who Can Participate */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Who Can Participate
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {eligibleParticipants.map((participant, index) => (
              <Card 
                key={index}
                className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {participant.icon}
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      {participant.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {participant.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Rules */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            📋 Team Rules
          </h3>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {teamRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-earth-teal font-bold">•</span>
                    <span className="text-muted-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Disqualification Conditions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            ❌ Disqualification Conditions
          </h3>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                The following will result in immediate disqualification:
              </p>
              <ul className="space-y-3">
                {disqualificationConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span className="text-muted-foreground">{condition}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;