import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Calendar } from "lucide-react";

const Timeline = () => {
 const events = [
  {
    phase: "📢",
    title: "Registration Opens",
    description: "Registration portal opens for students, developers, researchers, and innovators worldwide.",
    date: "10 June, 2026",
    status: "upcoming",
    icon: <Calendar className="w-5 h-5" />
  },
  {
    phase: "💡",
    title: "Idea Submission Deadline",
    description: "Last date to submit your innovative idea and team details for evaluation.",
    date: "20 July, 2026",
    status: "upcoming",
    icon: <Clock className="w-5 h-5" />
  },
  {
    phase: "📋",
    title: "Selection Round (Shortlisting of Teams)",
    description: "Submitted ideas are reviewed and shortlisted teams are selected for the final round.",
    date: "30 July, 2026",
    status: "upcoming",
    icon: <CheckCircle className="w-5 h-5" />
  },
  {
    phase: "📩",
    title: "Notification of Shortlisted Teams",
    description: "Selected teams receive official confirmation and participation details for the final hackathon round.",
    date: "30 July, 2026 (Midnight)",
    status: "upcoming",
    icon: <CheckCircle className="w-5 h-5" />
  },
  {
    phase: "🚀",
    title: "HackAgentAIx 2026 Hackathon",
    description: "The main event begins! Build, collaborate, innovate, and compete with the best minds from around the world.",
    date: "30–31 July, 2026",
    status: "main-event",
    icon: <Calendar className="w-5 h-5" />
  },
  {
    phase: "🏆",
    title: "Winners Announcement, Certificates & Prize Distribution",
    description: "Celebrating excellence with winner announcements, certificates, and prize distribution.",
    date: "31 July, 2026",
    status: "main-event",
    icon: <CheckCircle className="w-5 h-5" />
  }
];

  return (
    <section id="timeline" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            HackAgentAIx 2026 — Event Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mark your calendar. Here's everything you need to know about key dates, 
            deadlines, and milestones for HackAgentAIx 2026.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-earth-green to-earth-teal"></div>
            
            {/* Timeline Events */}
            <div className="space-y-8">
              {events.map((event, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                    event.status === 'main-event' 
                      ? 'bg-earth-green border-earth-green shadow-glow' 
                      : 'bg-white border-earth-teal'
                  }`}></div>
                  
                  {/* Event Card */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:pr-8' : 'md:pl-1/2 md:pl-8'}`}>
                    <Card className={`bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 ${
                      event.status === 'main-event' ? 'ring-2 ring-earth-green/30' : ''
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            event.status === 'main-event'
                              ? 'bg-gradient-hero text-white'
                              : 'bg-earth-teal/10 text-earth-teal'
                          }`}>
                            {event.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                              <h3 className={`font-semibold ${
                                event.status === 'main-event' ? 'text-earth-green text-lg' : 'text-foreground'
                              }`}>
                                {event.phase} {event.title}
                              </h3>
                              <div className="text-sm font-semibold text-black">
                                {event.date}
                              </div>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration Reminder */}
        <div className="mt-16 text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            📅 Important Notice
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            All dates are subject to change. Registered participants will receive 
            email notifications for any updates. Please check your email regularly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-earth-green font-medium">
              <Clock className="w-5 h-5" />
              Stay tuned for exact dates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;