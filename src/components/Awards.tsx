import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Crown, Users, Award } from "lucide-react";

const Awards = () => {
    const grandPrizes = [
    {
      position: "1st Place",
      title: "Hackathon Winners",
      prize: "$1,000",
      description: "Top-performing team showcasing exceptional innovation, measurable impact and effective implementation in cybersecurity, data privacy, compliance, and emerging technologies.",
      icon: <Crown className="w-8 h-8" />,
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      position: "2nd Place", 
      title: "1st Runner-Up",
      prize: "$500",
      description: "Honouring the team that demonstrates strong performance across all judging criteria and notable contributions to cybersecurity, data privacy, compliance, and emerging technologies.",
      icon: <Trophy className="w-8 h-8" />,
      gradient: "from-gray-400 to-gray-600",
      bgGradient: "from-gray-50 to-slate-50"
    },
    {
      position: "3rd Place",
      title: "2nd Runner-Up", 
      prize: "$250",
      description: "Acknowledging outstanding contributions to cybersecurity, data privacy, compliance, and emerging technologie innovation with creative and impactful solutions.",
      icon: <Medal className="w-8 h-8" />,
      gradient: "from-amber-600 to-yellow-700",
      bgGradient: "from-amber-50 to-yellow-50"
    }
  ];


  return (
    <section id="awards" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Win Exciting Awards
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           The HackAgentAIx challenge honors outstanding achievements in intelligent systems innovation through distinguished awards and exciting cash prizes.
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

        {/* Additional Recognition */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Additional Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                  <Trophy className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Certificates of Achievement</h4>
                <p className="text-sm text-muted-foreground">For all participating teams</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Networking Opportunities</h4>
                <p className="text-sm text-muted-foreground">With industry experts</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Best Innovation Award</h4>
                <p className="text-sm text-muted-foreground">Special category recognition</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white">
                  <Medal className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Best Technical Implementation</h4>
                <p className="text-sm text-muted-foreground">Special category recognition</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;