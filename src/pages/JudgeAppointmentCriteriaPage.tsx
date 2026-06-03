import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Microscope, Rocket, Mail } from "lucide-react";

const JudgeAppointmentCriteriaPage = () => {
  const expertiseDomains = [
    {
      icon: Brain,
      title: "AI/ML Experts",
      description: "Leading researchers in artificial intelligence and machine learning. Experts who have pioneered advanced AI algorithms, autonomous decision-making systems, and cutting-edge machine learning techniques that power intelligent autonomous agents."
    },
    {
      icon: Zap,
      title: "Autonomous Systems Specialists",
      description: "Renowned specialists in autonomous systems and robotics. Leaders in developing self-directed AI systems, multi-agent coordination, and autonomous decision-making frameworks that operate independently in complex environments."
    },
    {
      icon: Microscope,
      title: "Ethics & Safety Researchers",
      description: "Distinguished researchers in AI ethics, safety, and responsible AI development. Pioneers in ensuring autonomous agents operate safely, fairly, and ethically while maintaining transparency and accountability in their decision-making processes."
    },
    {
      icon: Rocket,
      title: "Industry Practitioners",
      description: "Leading industry experts deploying autonomous AI in real-world applications. Practitioners with extensive experience in scaling autonomous systems, integrating AI agents into business processes, and managing the challenges of autonomous AI deployment."
    }
  ];

  const selectionCriteria = [
    {
      number: "01",
      title: "Technical Expertise",
      points: [
        "Deep expertise in AI/ML, autonomous systems, or related technical fields",
        "Proven experience with autonomous agent development and deployment",
        "Strong understanding of AI safety, ethics, and responsible AI practices"
      ]
    },
    {
      number: "02",
      title: "Innovation Assessment",
      points: [
        "Ability to evaluate novel autonomous AI approaches and architectures",
        "Experience assessing technical feasibility and scalability of AI agents",
        "Track record of identifying breakthrough innovations in autonomous systems"
      ]
    },
    {
      number: "03",
      title: "Ethical Evaluation",
      points: [
        "Expertise in AI ethics, bias detection, and fairness in autonomous systems",
        "Understanding of safety considerations for autonomous AI deployment",
        "Commitment to responsible AI development and deployment practices"
      ]
    },
    {
      number: "04",
      title: "Practical Implementation",
      points: [
        "Experience with real-world autonomous AI system deployment",
        "Understanding of integration challenges and operational considerations",
        "Ability to assess business value and practical applicability of AI agents"
      ]
    },
    {
      number: "05",
      title: "Mentorship & Feedback",
      points: [
        "Proven ability to provide constructive, actionable feedback on AI projects",
        "Commitment to supporting the next generation of AI innovators",
        "Experience mentoring teams in autonomous AI development"
      ]
    }
  ];

  const appointmentProcess = [
    {
      number: "01",
      title: "Expert Identification",
      description: "We identify and invite leading experts in autonomous AI from top universities, research institutions, and innovative tech companies pushing the boundaries of autonomous systems and AI agent development."
    },
    {
      number: "02",
      title: "Expertise Validation",
      description: "Comprehensive review of candidates' contributions to autonomous AI, machine learning innovation, and ethical AI development to ensure they possess the expertise required for evaluating autonomous agents."
    },
    {
      number: "03",
      title: "Diversity & Balance",
      description: "We carefully balance our panel across AI research, industry deployment, ethics, and autonomous systems domains, ensuring representation from academia, tech companies, and research institutions for comprehensive evaluation."
    },
    {
      number: "04",
      title: "Final Calibration",
      description: "Selected judges participate in calibration sessions to align on evaluation criteria, technical standards, and our vision for advancing the state of autonomous AI and intelligent agent development."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <nav className="text-sm mb-6 opacity-90">
                <span>Home</span>
                <span className="mx-2">&gt;</span>
                <span>Judge Appointment Criteria</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                HackAgentAIx 2026 — Judge Appointment Criteria
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                We assemble a world-class panel of autonomous AI experts through a rigorous selection process that ensures fair, expert evaluation of groundbreaking autonomous AI agents.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                HackAgentAIx 2026 brings together the brightest minds in autonomous AI. Our judging panel consists of leading researchers, industry practitioners, and ethics experts who understand the complexities of building safe, effective, and innovative autonomous agents.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each judge brings deep expertise in evaluating autonomous AI systems, from technical implementation to real-world deployment challenges. They assess not just the code, but the broader implications and potential impact of autonomous AI agents.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Domains
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Expertise Domains
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our judges represent the forefront of environmental AI across multiple specialized domains
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {expertiseDomains.map((domain, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <domain.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {domain.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {domain.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Selection Criteria */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Selection Criteria
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our rigorous standards ensure only the most qualified experts evaluate your innovations
              </p>
            </div>

            <div className="space-y-8">
              {selectionCriteria.map((criteria, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <Badge variant="secondary" className="text-2xl font-bold px-4 py-2">
                        {criteria.number}
                      </Badge>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {criteria.title}
                        </h3>
                        <ul className="space-y-2">
                          {criteria.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-earth-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Process */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Judge Appointment Process
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our systematic approach ensures we assemble the most qualified evaluation panel
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {appointmentProcess.map((step, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <Badge variant="outline" className="text-xl font-bold px-3 py-1 border-earth-green text-earth-green">
                        {step.number}
                      </Badge>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Judge Reveal */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Card className="bg-gradient-hero text-white border-0 shadow-earth max-w-4xl mx-auto">
                <CardContent className="p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Judge Reveal
                  </h2>
                  {/* <p className="text-xl mb-4 font-semibold">
                    October 24-25, 6
                  </p> */}
                  <p className="text-lg opacity-90 leading-relaxed mb-8">
                    Our distinguished panel of cybersecurity experts, legal technology pioneers, and AI ethics leaders will be unveiled in December 2026. These industry leaders will bring unparalleled expertise to evaluate your innovative solutions. Follow our channels for the exciting reveal of these visionaries in digital security and legal technology.
                  </p>
                  
                  <div className="border-t border-white/20 pt-8">
                    <h3 className="text-xl font-bold mb-4">
                      Judge Nominations & Technical Inquiries
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <a 
                        href="mailto:ai@hackagentaix.com" 
                        className="text-lg hover:underline"
                      >
                        ai@hackagentaix.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JudgeAppointmentCriteriaPage;