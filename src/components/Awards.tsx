import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Award, Star, Crown, Gift, Users, CheckCircle } from "lucide-react";

const Awards = () => {
  const grandPrizes = [
    {
      position: "1st Place",
      title: "HackAgentAIx Champions",
      prize: "$[Prize Amount]",
      description: "The ultimate winners showcasing the most innovative, impactful, and technically superior autonomous AI agent that demonstrates exceptional problem-solving capabilities and real-world applicability.",
      icon: <Crown className="w-8 h-8" />,
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      position: "2nd Place", 
      title: "AI Innovation Runner-Up",
      prize: "$[Prize Amount]",
      description: "Outstanding autonomous AI agent demonstrating strong technical implementation, creative problem-solving, and significant potential for real-world impact.",
      icon: <Trophy className="w-8 h-8" />,
      gradient: "from-gray-400 to-gray-600",
      bgGradient: "from-gray-50 to-slate-50"
    },
    {
      position: "3rd Place",
      title: "Autonomous Agent Excellence",
      prize: "$[Prize Amount]",
      description: "Exceptional autonomous AI agent showcasing solid technical foundations, innovative approaches, and meaningful contributions to the field of autonomous AI.",
      icon: <Medal className="w-8 h-8" />,
      gradient: "from-amber-600 to-yellow-700",
      bgGradient: "from-amber-50 to-yellow-50"
    }
  ];

  const thematicAwards = [
    { theme: "Enterprise Automation", prize: "Certificate", icon: "🏢" },
    { theme: "Personal Assistant AI", prize: "Certificate", icon: "🤖" },
    { theme: "Creative AI Agents", prize: "Certificate", icon: "🎨" },
    { theme: "AI for Social Good", prize: "Certificate", icon: "🌍" }
  ];


  return (
    <section id="awards" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            HackAgentAIx 2026 — Awards & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Celebrate groundbreaking innovations in autonomous AI agents through prestigious awards, substantial prizes, and industry recognition.
          </p>
        </div>
          
            {/* Grand Prizes */}
            <div>
              <h3 className="text-3xl font-bold text-center text-foreground mb-8">
                Grand Prizes & Recognition
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {grandPrizes.map((prize, index) => (
                  <Card 
                    key={index}
                    className={`relative overflow-hidden border-0 shadow-card hover:shadow-earth transition-all duration-300 group bg-gradient-to-br ${prize.bgGradient}`}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${prize.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {prize.icon}
                      </div>
                      <Badge variant="secondary" className="w-fit mx-auto mb-2 bg-white/80">
                        {prize.position}
                      </Badge>
                      <CardTitle className="text-xl text-foreground mb-2">
                        {prize.title}
                      </CardTitle>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}>
                        {prize.prize}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed">
                        {prize.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Thematic Awards */}
            <div className="m-8">
              <h3 className="text-3xl font-bold text-center text-foreground mb-8 ">
                Track-Specific Awards
              </h3>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Outstanding projects in each hackathon track will receive special recognition for their innovative contributions and track-specific excellence.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {thematicAwards.map((award, index) => (
                  <Card 
                    key={index}
                    className="bg-gradient-earth border-0 shadow-card hover:shadow-earth transition-all duration-300 group"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{award.icon}</div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {award.theme}
                      </h4>
                      <div className="flex items-center justify-center gap-2">
                        {/* <Badge variant="secondary" className="bg-earth-green/10 text-earth-green font-medium">
                          {award.prize}
                        </Badge> */}
                        <span className="text-sm text-muted-foreground">Certificate</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Total Prize Pool */}
            <div className="text-center bg-gradient-hero p-8 md:p-12 rounded-3xl text-white">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Gift className="w-8 h-8" />
                <span className="text-2xl md:text-3xl font-bold">
                  Total Prize Pool
                </span>
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-4">
                £1750
              </div>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Plus certificates, industry recognition, networking opportunities, and potential for further development partnerships!
              </p>
              <Button variant="default" onClick={() => window.open('https://forms.gle/84wfCEsa9aGobC2d8', '_blank')} size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Star className="w-5 h-5 mr-2" />
                Join the Competition
              </Button>
            </div>

      </div>
    </section>
  );
};

export default Awards;