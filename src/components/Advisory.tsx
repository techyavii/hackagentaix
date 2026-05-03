import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Advisory = () => {
  const advisors = [
    // {
    //   name: "Dr Ginu Rajan",
    //   affiliation: "Reader in Sensor Technologies, Cardiff School of Technologies",
    //   location: "Cardiff Metropolitan University, UK",
    //   image: "/lovable-uploads/Ginu.jpeg",
    //   expertise: "Sensor Technologies"
    // },
    // {
    //   name: "Dr Rajkumar Rathore",
    //   affiliation: "Senior Lecturer in Computer Science & Programme Director MSc Computing and IT, Cardiff School of Technologies",
    //   location: "Cardiff Metropolitan University, UK", 
    //   image: "/lovable-uploads/Rajkumar.jpeg",
    //   expertise: "Computer Science"
    // },
    // {
    //   name: "Prof. Ali Kashif Bashir",
    //   affiliation: "Computer Networks and Cybersecurity",
    //   location: "Manchester Metropolitan University, UK",
    //   image: "/lovable-uploads/AliKashif.jpeg",
    //   expertise: "Computer Networks & Cybersecurity"
    // },
    // {
    //   name: "Yu-Dong Zhang",
    //   affiliation: "University of Leicester",
    //   location: "LE1 7RH, UK",
    //   image: "/lovable-uploads/ca5987e5-40a3-42c4-a206-e7f605ba6782.png",
    //   expertise: "AI & Machine Learning"
    // },
    {
      name: "Md Fashiar Rahman",
      affiliation: "THE UNIVERSITY OF TEXAS AT EL PASO",
      location: "Texas, USA",
      image: "/lovable-uploads/fashiar.jpg",
      expertise: "Computer Science"
    },
    {
      name: "S.M. Atikur Rahman",
      affiliation: "THE UNIVERSITY OF TEXAS AT EL PASO",
      location: "Texas, USA",
      image: "/lovable-uploads/atikur.jpeg",
      expertise: "Computer Science"
    },
    {
      name: "George A. Tsihrintzis",
      affiliation: "University of Piraeus",
      location: "Greece",
      image: "/lovable-uploads/86a7cbc4-bc91-4f1e-9dd3-f845b1e0a297.png",
      expertise: "Computer Science"
    },
    {
      name: "Bhuvan Unhelkar",
      affiliation: "College of Business, University of South Florida",
      location: "USA",
      image: "/lovable-uploads/Bhuvan_Unhelkar.jpeg",
      expertise: "Business & Technology"
    },
    {
      name: "Zahid Akhtar, PhD",
      affiliation: "Department of Electrical and Computer Engineering, State University of New York Polytechnic Institute",
      location: "USA",
      image: "/lovable-uploads/Zahid.png",
      expertise: "Electrical & Computer Engineering"
    },
    {
      name: "Dr. Deepak Gupta",
      affiliation: "Department of Computer Science and Engineering, Maharaja Agrasen institute of Technology (GGSIPU)",
      location: "India",
      image: "/lovable-uploads/DeepakSir.jpg",
      expertise: "Computer Science & Engineering"
    },
    {
      name: "Dr. Utku Kose",
      affiliation: "Suleyman Demirel University",
      location: "Turkey",
      image: "/lovable-uploads/Utku_Kose.jpeg",
      expertise: "Artificial Intelligence & Cybersecurity"
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
                    alt={`${advisor.name} - Advisory Member`}
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