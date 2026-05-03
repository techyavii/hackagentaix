import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, Upload, Calendar, Users, Lightbulb, Target, BarChart3, Rocket } from "lucide-react";

const SubmissionGuidelines = () => {
  const submissionComponents = [
    {
      number: 1,
      title: "Project Title & Description",
      description: "A clear title and a written summary (max 500 words) explaining what your agent does, the problem it solves, and how it works."
    },
    {
      number: 2,
      title: "GitHub Repository (Public)",
      description: "Your complete, working codebase must be submitted via a public GitHub repository. Include a detailed README with: • Setup and installation instructions • How to run the agent • Dependencies and tech stack used • Architecture overview or diagram"
    },
    {
      number: 3,
      title: "Demo Video (3–5 minutes)",
      description: "A screen-recorded video demonstrating your agent working end-to-end. The video must show: • The agent receiving a goal/task • The agent autonomously executing multi-step actions • The final output or result produced Upload to YouTube (unlisted or public) or Google Drive and submit the link."
    },
    {
      number: 4,
      title: "Presentation Slides",
      description: "Upload your slide deck (PDF or PowerPoint) covering: • Problem statement • Your agent solution and architecture • Demo highlights • Real-world impact and scalability • Tech stack used"
    },
    {
      number: 5,
      title: "Track Selection",
      description: "Clearly state which of the 4 hackathon tracks your submission belongs to."
    }
  ];

  const submissionRules = [
    "All work must be original and created during the hackathon period",
    "Pre-built projects or projects submitted to other hackathons simultaneously are not permitted",
    "All team members must be listed in the submission form",
    "Late submissions will not be accepted under any circumstances",
    "Submissions must be in English",
    "Teams retain full intellectual property rights over their work"
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            HackAgentAIx 2026 — Submission Guidelines
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            All teams must submit their projects before the deadline via the 
            official submission portal. Incomplete submissions will not be 
            considered for evaluation. Please read all guidelines carefully.
          </p>
        </div>

        {/* What to Submit */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            ✅ Required Submission Components
          </h2>
          <div className="space-y-6 max-w-6xl mx-auto">
            {submissionComponents.map((component, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="secondary" className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {component.number}
                    </Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {component.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Submission Rules */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            📋 Submission Rules
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {submissionRules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </Badge>
                      <span className="text-foreground leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Submission Portal Notice */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-hero/10 backdrop-blur-sm border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                <FileText className="w-8 h-8 text-earth-green" />
                Submission Portal Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  All submissions must be made through the official HackAgentAIx submission portal. The portal will open on [Submission Start Date] and close on [Submission Deadline]. Late submissions will not be accepted.
                </p>
                <div className="bg-white/50 rounded-lg p-4 border border-earth-green/20">
                  <p className="text-foreground font-medium mb-2">
                    🔗 Submission Portal Link
                  </p>
                  <p className="text-muted-foreground">
                    The submission portal will be available at: <code className="bg-earth-green/10 px-2 py-1 rounded text-sm">https://hackagentai.submission.com</code>
                  </p>
                </div>
                <div className="bg-earth-green/10 rounded-lg p-4">
                  <p className="text-foreground font-medium">
                    💡 Pro Tip: Test your submission early! The portal allows you to save drafts and preview your submission before final submission.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubmissionGuidelines;