import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-hackathon.jpeg";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate=useNavigate()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-earth-lime rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-earth-emerald rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-earth-teal rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 text-center text-white">
        <div className="absolute top-8 -right-12 z-30">
        <div className="bg-gradient-to-tr from-violet-400 via-indigo-300 to-violet-500 text-black font-bold px-5 py-2 rounded-full shadow-lg text-sm md:text-base animate-bounce border-2 border-white/50 pointer-events-auto select-none">
          Free Registration!
        </div>
      </div>
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent leading-tight">
            HackAgentAIx
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90">
            The Autonomous AI Challenge 2026
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90">
            "Build. Deploy. Unleash. The World's Premier Agentic AI Hackathon."
          </p>
        </div>

        {/* Event Details */}
        <div className="relative z-10 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
            <div className="flex items-center gap-2 bg-earth-green/20 px-3 py-2 rounded-lg border border-earth-green/30">
              <Calendar className="w-5 h-5 text-blue-300" />
              <span className="font-medium text-blue-300">30-31st July 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-earth-blue/20 px-3 py-2 rounded-lg border border-earth-blue/30">
              <MapPin className="w-5 h-5 text-blue-200" />
              <span className="font-medium text-blue-200">Online at UK</span>
            </div>
            <div className="flex items-center gap-2 bg-earth-teal/20 px-3 py-2 rounded-lg border border-earth-teal/30">
              <Users className="w-5 h-5 text-teal-200" />
              <span className="font-medium text-teal-200">48-Hour Innovation</span>
            </div>
            <div className="flex items-center gap-2 bg-yellow-500/20 px-3 py-2 rounded-lg border border-yellow-400/30">
              <Trophy className="w-5 h-5 text-yellow-300" />
              <span className="font-medium text-yellow-300">£1750 Prize Pool</span>
            </div>
          </div>
        </div>

        {/* Main Description */}
        <div className="relative z-10 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Shape the Future of Autonomous Intelligence
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Join developers, AI engineers, researchers, and innovators in a 48-hour 
            sprint to build autonomous AI agents that think, plan, and act. 
            HackAgentAIx is where the next generation of agentic systems gets built — 
            from multi-agent pipelines to real-world autonomous workflows.
          </p>
        </div>

       {/* Organized By */}
        <div
          className="relative z-10 mb-12 animate-fade-in"
          style={{ animationDelay: "0.75s" }}
        >
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
          Organized By
        </h3>

        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 max-w-md">
            <img
              src="/collaborators/essex-logo.png"
              alt="University of Essex"
              className="h-16 md:h-20 object-contain mb-4 bg-white rounded-lg p-2"
            />

            <h4 className="text-lg md:text-xl font-semibold text-white text-center">
              University of Essex
            </h4>

            <p className="text-white/80 text-sm md:text-base text-center mt-1">
              England, United Kingdom
            </p>
          </div>
        </div>
      </div>

        {/* CTA Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="relative">
            <Button 
              variant="hero" 
              size="xl" 
              disabled
              // className="min-w-48 opacity-60 cursor-not-allowed"
              onClick={() => {window.open('https://forms.gle/PAFktjYsSXd4CJP2A', '_blank')}}
            >
              Register Now
            </Button>
            {/* <div className="absolute -top-3 -right-3 bg-red-500 text-white font-bold px-3 py-1 rounded-full shadow-lg text-xs animate-pulse">
              Registration Closed
            </div> */}
          </div>
          <Link to="/themes">
            <Button variant="outline" size="xl" className="min-w-48 border-white text-white bg-white/20 hover:bg-white hover:text-primary backdrop-blur-md">
              View Themes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;