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
  AlertCircle,
  Globe,
  Code,
  FileText,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Eligibility = () => {
  const generalEligibility = [
    "The hackathon is open to participants worldwide.",
    "Individuals must be 18 years or older at the time of registration.",
    "Participants must comply with all local laws and institutional policies."
  ];

  const whoCanParticipate = [
    "Undergraduate and postgraduate students",
    "Research scholars",
    "Developers and programmers",
    "Startups and technology enthusiasts",
    "Interdisciplinary teams interested in solving complex problems"
  ];

  const teamComposition = [
    "Each team must consist of 3–5 members.",
    "Teams may be interdisciplinary.",
    "Participants can be from the same or different institutions.",
    "Each team must appoint a Team Leader who will be the primary contact for communication."
  ];

  const technicalRequirements = [
    "Submissions must include an AI-based tool, model or platform.",
    "Solutions should leverage one or more AI techniques such as:",
    "Machine Learning / Deep Learning",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Predictive Analytics",
    "Reinforcement Learning"
  ];

  const originalityEthics = [
    "All submissions must be original work developed specifically for this hackathon.",
    "Use of open-source datasets, frameworks and APIs is permitted with proper attribution.",
    "Plagiarism, unethical AI practices or misuse of data will result in immediate disqualification.",
    "Solutions must adhere to responsible and ethical AI principles, including fairness, transparency and privacy."
  ];

  const submissionReadiness = [
    "A working prototype or proof-of-concept (PoC)",
    "A brief project description, including problem statement, AI approach",
    "Impact metrics or expected outcomes",
    "A demo video or live demonstration (if required)"
  ];

  const disqualificationClause = [
    "Verify participant eligibility at any stage",
    "Disqualify entries that violate the hackathon rules or ethical guidelines",
    "Make final decisions on eligibility-related matters"
  ];

  const commitment = [
    "Follow all hackathon rules and timelines",
    "Participate in evaluations, demos and presentations",
    "Support the spirit of innovation for sustainability and social good"
  ];

  return (
    <section id="eligibility" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who Can Participate
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            HackAgentAIx : The Autonomous AI Challenge 2026
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
           The hackathon is open to undergraduate and postgraduate students, research scholars, developers and programmers, startups and technology enthusiasts, and interdisciplinary teams interested in solving complex problems. Participants can form teams of 3–5 members.
          </p>
        </div>

        {/* General Eligibility */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8 flex items-center justify-center gap-3">
            <Globe className="w-8 h-8 text-earth-green" />
            General Eligibility
          </h3>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardContent className="p-8">
              <ul className="space-y-3">
                {generalEligibility.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-earth-green flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Who Can Participate */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8 flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-earth-teal" />
            Who Can Participate
          </h3>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-4">
                The hackathon welcomes participants from diverse backgrounds, including:
              </p>
              <ul className="space-y-3">
                {whoCanParticipate.map((participant, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-earth-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{participant}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Team Composition */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8 flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-earth-lime" />
            Team Composition
          </h3>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardContent className="p-8">
              <ul className="space-y-3">
                {teamComposition.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-earth-lime flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Technical Requirements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8 flex items-center justify-center gap-3">
            <Code className="w-8 h-8 text-purple-600" />
            Technical Requirements
          </h3>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardContent className="p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{technicalRequirements[0]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{technicalRequirements[1]}</span>
                </li>
                <ul className="ml-8 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-0.5">•</span>
                    <span className="text-muted-foreground text-sm">{technicalRequirements[2]}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-0.5">•</span>
                    <span className="text-muted-foreground text-sm">{technicalRequirements[3]}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-0.5">•</span>
                    <span className="text-muted-foreground text-sm">{technicalRequirements[4]}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-0.5">•</span>
                    <span className="text-muted-foreground text-sm">{technicalRequirements[5]}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-0.5">•</span>
                    <span className="text-muted-foreground text-sm">{technicalRequirements[6]}</span>
                  </li>
                </ul>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{technicalRequirements[7]}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Requirements Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Originality & Ethics */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Shield className="w-6 h-6 text-earth-green" />
                Originality & Ethics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {originalityEthics.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-earth-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Submission Readiness */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <FileText className="w-6 h-6 text-earth-teal" />
                Submission Readiness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Participants must be able to provide:
              </p>
              <ul className="space-y-3">
                {submissionReadiness.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-earth-teal flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Disqualification Clause */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8 flex items-center justify-center gap-3">
            <AlertCircle className="w-8 h-8 text-red-600" />
            Disqualification Clause
          </h3>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-4">
                The organizing committee reserves the right to:
              </p>
              <ul className="space-y-3">
                {disqualificationClause.map((clause, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{clause}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Commitment */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-yellow-600" />
            Commitment
          </h3>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-4">
                By registering, participants agree to:
              </p>
              <ul className="space-y-3">
                {commitment.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Questions About Eligibility?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our organizing team is here to help clarify any requirements or questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="earth" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Contact Team
            </Button>
            <Link to="mailto:ai@intellitechhack.com">
              <Button variant="secondary" className="text-sm">
                ai@intellitechhack.com
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;