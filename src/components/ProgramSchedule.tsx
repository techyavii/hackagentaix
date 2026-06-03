import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, Users, Award, AlertCircle } from "lucide-react";

const ProgramSchedule = () => {
  const scheduleInfo = [
    {
      title: "Virtual Platform",
      icon: <Video className="w-5 h-5" />,
      description: "All presentations will be conducted virtually using Zoom"
    },
    {
      title: "Two Rounds",
      icon: <Award className="w-5 h-5" />,
      description: "Selection Round on Day 1 and Final Round on Day 2"
    },
    {
      title: "Presentation Time",
      icon: <Clock className="w-5 h-5" />,
      description: "Each team will have 10 minutes to present, followed by 2 minutes for Q&A"
    },
    {
      title: "Team Selection",
      icon: <Users className="w-5 h-5" />,
      description: "Only teams selected from Day 1 will be invited to present during the Final Round"
    }
  ];

  const guidelines = [
    "All participants and presenters should join their sessions at least 5 minutes before the scheduled start time.",
    "Please keep your microphone and video turned off unless instructed otherwise.",
    "Presenters must be fully prepared with their slides and ensure their microphone and camera are functioning properly ahead of time.",
    "Session Judges will invite presenters one by one to deliver their presentations.",
    "Presentations may be prepared in any slide format.",
    "The Day 2 schedule will be published after the completion of the Selection Round."
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            HackAgentAIx 2026 Program Schedule
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            You are cordially invited to participate in the HackAgentAIx — 
            The Autonomous AI Challenge 2026, which will be conducted online via Zoom.
          </p>
        </div>

        {/* Schedule Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {scheduleInfo.map((info, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero text-white flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Event Days */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Day 1 */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <Badge variant="secondary" className="w-fit mx-auto mb-2">Day 1</Badge>
              <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-3">
                <Calendar className="w-6 h-6 text-earth-green" />
                30th July 2026 — Day 1
              </CardTitle>
              <p className="text-lg font-semibold text-earth-green">Selection Round</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-gradient-hero/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-foreground mb-2">Initial Presentation Round</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All registered teams will present their autonomous AI agent solutions 
                  to the judging panel. Teams will be evaluated based on agent autonomy, 
                  real-world applicability, technical depth, and innovation.
                </p>
              </div>
              <Button
                disabled
                className="w-full py-6 mb-4 font-bold text-lg"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/spreadsheets/d/1WLwjWGbQtz-LQtGVh1uRps1l3czf_bBDppU57dEWN_w/edit?usp=sharing",
                    "_blank"
                  )
                }
              >
                Day-1 Shortlisted Teams
              </Button> 
              <Button
                disabled
                className="w-full"
                onClick={() => window.open("https://us06web.zoom.us/j/86789472247?pwd=qZVtAXdarO46gUKsWBbCOJQTI1sMWH.1", "_blank")}
              >
                <Video className="w-4 h-4 mr-2" />
                Join Session
              </Button>
            </CardContent>
          </Card>

          {/* Day 2 */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 ring-2 ring-earth-green/30">
            <CardHeader className="text-center pb-4">
              <Badge variant="secondary" className="w-fit mx-auto mb-2 bg-earth-green text-white">Day 2</Badge>
              <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-3">
                <Calendar className="w-6 h-6 text-earth-green" />
                31st July 2026 — Day 2
              </CardTitle>
              <p className="text-lg font-semibold text-earth-green">Final Round & Awards</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-gradient-hero/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-foreground mb-2">Final Presentations & Awards</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Shortlisted teams from Day 1 will present their refined and fully 
                  deployed agentic solutions. Winners will be announced and prizes 
                  distributed at the conclusion of the Final Round.
                </p>
              </div>
              <Button
              disabled
                className="w-full py-6 mb-4 font-bold text-lg"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1MeHbbrr06lEEM6e8B88MW1yhFLHqb_a-/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Day-2 Shortlisted Teams
              </Button> 
              <Button
              disabled
                className="w-full"
                onClick={() => window.open("https://us06web.zoom.us/j/81925476598?pwd=nezR51Wi2Z5XH0VYGmelZNEWHnZJen.1", "_blank")}
              >
                <Video className="w-4 h-4 mr-2" />
                <Award className="w-4 h-4 mr-2" />
                Join Final Round (For Selected Teams Only)
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Instructions for Presenters */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-earth-green" />
                Instructions for Presenters
              </CardTitle>
              <p className="text-muted-foreground">
                To ensure a smooth experience, presenters are requested to review the following guidelines:
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Badge variant="outline" className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </Badge>
                    <p className="text-foreground leading-relaxed">{guideline}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notice */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-hero/10 border-earth-green/30 border-2">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                📅 Important Notice
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Detailed session timings and Zoom links will be shared with registered participants 
                closer to the event date. Make sure to check your email regularly for updates.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-earth-green font-medium">
                  <Clock className="w-5 h-5" />
                  Stay tuned for detailed schedule
                </div>
                <div className="flex items-center gap-2 text-earth-green font-medium">
                  <Video className="w-5 h-5" />
                  Zoom links coming soon
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProgramSchedule;