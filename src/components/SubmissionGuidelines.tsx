import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, Upload, Calendar, Users, Lightbulb, Target, BarChart3, Rocket } from "lucide-react";

const SubmissionGuidelines = () => {
  const slideStructure = [
    {
      number: 1,
      title: "Team and Institutional Information",
      icon: <Users className="w-5 h-5" />,
      points: [
        "Name of the institution or university or organization",
        "Official institution/university/organization logo", 
        "Team name (if applicable)",
        "Names and designated roles of all team members",
        "Contact information (email and phone number of the team leader)"
      ]
    },
    {
      number: 2,
      title: "Environmental Problem Statement",
      icon: <Target className="w-5 h-5" />,
      points: [
        "Clearly articulate the environmental issue your team aims to address",
        "Explain the significance of the problem and its impact on local ecosystems or communities",
        "Include relevant data or examples to highlight the urgency and importance of the issue"
      ]
    },
    {
      number: 3,
      title: "Proposed Sustainable Solution",
      icon: <Lightbulb className="w-5 h-5" />,
      points: [
        "Describe your innovative solution to the identified challenge",
        "Detail how technology is integrated to achieve sustainable outcomes",
        "Emphasize the distinctive features of your approach, especially its suitability for the local context"
      ]
    },
    {
      number: 4,
      title: "Impact and Feasibility",
      icon: <BarChart3 className="w-5 h-5" />,
      points: [
        "Estimate the potential environmental benefits (e.g. CO₂ reduction, water conservation, etc.)",
        "Evaluate the solution's technical and financial viability",
        "Compare your approach to existing solutions, highlighting improvements in sustainability and efficiency"
      ]
    },
    {
      number: 5,
      title: "Implementation and Scalability",
      icon: <Rocket className="w-5 h-5" />,
      points: [
        "Present a realistic implementation plan, including major milestones",
        "Identify anticipated local challenges and proposed strategies for overcoming them",
        "Discuss how the solution can be scaled or adapted to other regions facing similar environmental issues"
      ]
    }
  ];

  const requirements = [
    {
      title: "File Format",
      icon: <FileText className="w-6 h-6" />,
      description: "Presentations must be submitted in PowerPoint format (.ppt or .pptx), with a maximum file size of 10MB. Please ensure all fonts are embedded to prevent formatting issues during evaluation."
    },
    {
      title: "Prototype Demonstration",
      icon: <Video className="w-6 h-6" />,
      description: "If a working prototype is available, participants are required to create a 2–3 minute video showcasing the solution's key functionalities and its environmental impact. The video should be uploaded to platforms such as YouTube or Vimeo and the link must be included during the registration process."
    },
    {
      title: "File Naming Convention",
      icon: <Upload className="w-6 h-6" />,
      description: "Please name your PowerPoint file using the following convention: TeamName_Institution_HackathonCategory.pptx",
      example: "Example: XYZ_UVWUniversity_CarbonTracking.pptx"
    },
    {
      title: "Submission Deadline",
      icon: <Calendar className="w-6 h-6" />,
      description: "All presentations must be submitted by 25th May, 2026, at 11:59 PM. Late submissions will not be accepted. To avoid last-minute technical issues, teams are advised to submit their entries well before the deadline."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Submission Guidelines
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Participants are required to submit a PowerPoint (PPT) presentation consisting of five slides 
            that clearly outline their proposed environmental solution.
          </p>
        </div>

        {/* Slide Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Suggested Structure for Presentation Slides
          </h2>
          <div className="grid gap-6 max-w-5xl mx-auto">
            {slideStructure.map((slide, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {slide.number}
                    </Badge>
                    <div className="w-10 h-10 rounded-lg bg-gradient-hero text-white flex items-center justify-center">
                      {slide.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground">{slide.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {slide.points.map((point, pointIndex) => (
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
        </div>

        {/* Additional Guidelines */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Additional Submission Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {requirements.map((req, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero text-white flex items-center justify-center">
                      {req.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground">{req.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {req.description}
                  </p>
                  {req.example && (
                    <div className="bg-earth-green/10 rounded-lg p-3 mt-3">
                      <p className="text-earth-green font-medium text-sm">{req.example}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Supporting Documentation */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                <FileText className="w-8 h-8 text-earth-green" />
                Supporting Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Participants may include up to three supplementary pages in an appendix to provide technical details, 
                data sources, calculations or diagrams supporting the proposed solution. These materials should be 
                clearly referenced within the main presentation.
              </p>
              <div className="bg-gradient-hero/10 rounded-lg p-4">
                <p className="text-foreground font-medium">
                  💡 Pro Tip: Use the appendix to include detailed technical specifications, 
                  research data implementation diagrams that support your main presentation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubmissionGuidelines;