import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Advisory = () => {
  const advisors = [
    {
      name: "Prof. Martin Reed",
      affiliation: "University of Essex",
      location: "UK",
      image: "/advisory/Martin.jpg",
      expertise: "AI & Research"
    },
    {
      name: "Dr. Vishal Krishna Singh",
      affiliation: "University of Essex",
      location: "UK",
      image: "/advisory/Vishal.jpg",
      expertise: "Computer Science"
    },
    {
      name: "Dr. Rajkumar Singh Rathore",
      affiliation: "Cardiff Metropolitan University",
      location: "UK",
      image: "/advisory/Rajkumar.jpeg",
      expertise: "Computer Science"
    },
    {
      name: "Dr. Ginu Rajan",
      affiliation: "Cardiff Metropolitan University",
      location: "UK",
      image: "/advisory/Ginu.jpeg",
      expertise: "Sensor Technologies"
    }
  ];

  return (
    <section id="advisory" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Esteemed Advisory Member(s)
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our distinguished advisory panel of experts who guide and mentor 
            our hackathon participants. Our advisors bring decades of experience in 
            artificial intelligence, agentic systems design, large language models, 
            multi-agent orchestration, and applied AI research across industry and academia.
          </p>
        </div>

        {/* Advisory Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((advisor, index) => (
            <Card 
              key={index} 
              className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Advisor Photo */}
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={advisor.image} 
                    alt={`£{advisor.name} - Advisory Member`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Advisor Info */}
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {advisor.expertise}
                  </Badge>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-earth-green transition-colors duration-300">
                    {advisor.name}
                  </h3>
                  <p className="text-sm font-medium text-earth-green mb-1">
                    {advisor.affiliation}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {advisor.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisory;