import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Judges = () => {
  const judges = [
{
  name: "Lalith Chandra Bandaru",
  affiliation: "ITDS Architect, Sage Group Technologies INC",
  location: "USA",
  image: "/judges/LalithChandraBandaru.jpeg",
  expertise: "Salesforce, Analysis, Administration",
  linkedin: "https://www.linkedin.com/in/lalithbandaru/"
},
{
  name: "Mohammed Shakeer Bandrevu",
  affiliation: "Software Developer, Tata Consulting Services",
  location: "USA",
  image: "/judges/MohammedShakeerBandrevu.jpeg",
  expertise: "ServiceNow, Developer, Administration",
  linkedin: "https://www.linkedin.com/in/shakeer-b-857a101b6"
},
{
  name: "Janardhana Naidu Kola",
  affiliation: "Director, Business Intelligence, ADP",
  location: "USA",
  image: "/judges/JanardhanaNaiduKola.jpeg",
  expertise: "Decision Intelligence",
  linkedin: "https://www.linkedin.com/in/janardhana-kola/"
},
{
  name: "Sharath Chandra Macha",
  affiliation: "Principal Software Engineer, CBRE Inc",
  location: "USA",
  image: "/judges/SharathChandraMacha.jpeg",
  expertise: "AI/ML, Cloud Computing",
  linkedin: "https://www.linkedin.com/in/sharath-m-1b15a358"
},
{
  name: "Jai Shah",
  affiliation: "Software Engineer, Amazon Web Services",
  location: "USA",
  image: "/judges/JaiShah.jpeg",
  expertise: "ML, CV, AI Agents",
  linkedin: "https://www.linkedin.com/in/jai05041994/",
  email: "jai.s@somaiya.edu"
},
{
  name: "Mihira Kumar Patra",
  affiliation: "Sr Manager, PwC",
  location: "USA",
  image: "/judges/MihiraKumarPatra.jpeg",
  expertise: "Data Governance, Data Quality, SAP, ERP, Cloud, Gen AI, AI, ML",
  linkedin: "https://www.linkedin.com/in/mihirapatra/",
  email: "mihirakumarpatra8@gmail.com"
},
{
  name: "Ranjith Singhu Ganapathy",
  affiliation: "Software Engineer – Level III, Arch Insurance",
  location: "USA",
  image: "/judges/RanjithSinghuGanapathy.jpeg",
  expertise: "AI & Cloud Engineering",
  linkedin: "https://www.linkedin.com/in/ranjithsinghu",
  email: "ranjithsinghu@gmail.com"
},
{
  name: "Bhargava Chowdary Musunuru",
  affiliation: "Principal Android Developer, Fidelity Investments",
  location: "USA",
  image: "/judges/BhargavaChowdaryMusunuru.jpeg",
  expertise: "Mobile AI Systems",
  linkedin: "https://www.linkedin.com/in/bhargava-musunuru/",
  email: "bhargavachowdary.musunuru@gmail.com"
},
{
  name: "Maneesh Gupta",
  affiliation: "Salesforce Architect, Contractor at Eli Lilly & Co.",
  location: "USA",
  image: "/judges/ManeeshGupta.jpeg",
  expertise: "Salesforce, CRM, Agentic Automation",
  linkedin: "https://www.linkedin.com/in/maneesh6/",
  email: "maneesh6.gupta@gmail.com"
},
{
  name: "Shreyansh Sharma",
  affiliation: "Sr. Software Developer, London Stock Exchange",
  location: "USA",
  image: "/judges/ShreyanshSharma.jpeg",
  expertise: "Software, AI, Big Data",
  linkedin: "https://www.linkedin.com/in/shreyansh-sharma728168/",
  email: "shrey26.sharma@gmail.com"
},
{
  name: "Amul Cherukuri",
  affiliation: "Software Engineer, Amazon Robotics",
  location: "USA",
  image: "/judges/AmulCherukuri.jpeg",
  expertise: "Distributed Systems, AI, Agentic Systems",
  linkedin: "https://www.linkedin.com/in/amul-cherukuri?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  email: "praneetamul@gmail.com"
},
{
  name: "Hemanta Ghosh",
  affiliation: "Best Buy",
  location: "USA",
  image: "/judges/HemantaGhosh.jpeg",
  expertise: "Software Engineering",
  linkedin: "",
  email: "ghosh166@yahoo.com"
}
  ];
  return (
    <section id="judges" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Expert Judges Panel
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our distinguished panel of expert judges who will evaluate submissions 
            based on agent autonomy, real-world impact, technical depth, and scalability. 
            Our judges bring decades of experience in AI engineering, agentic system 
            architecture, LLM development, and enterprise AI deployment.
          </p>
        </div>

        {/* Judges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((judge, index) => {
            const JudgeCard = (
              <Card 
                key={index} 
                className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Judge Photo */}
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={judge.image} 
                      alt={`${judge.name} - Hackathon Judge`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Judge Info */}
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {judge.expertise}
                    </Badge>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-earth-green transition-colors duration-300">
                      {judge.name}
                    </h3>
                    <p className="text-sm font-medium text-earth-green mb-1">
                      {judge.affiliation}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {judge.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );

            return judge.linkedin ? (
              <a 
                key={index}
                href={judge.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                {JudgeCard}
              </a>
            ) : (
              JudgeCard
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Present to the Experts?
            </h3>
            <p className="text-muted-foreground mb-6">
              Showcase your AI-powered environmental solutions to our distinguished panel of judges 
              and compete for the £1750 prize pool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judges;