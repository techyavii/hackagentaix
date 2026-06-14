import Navigation from "@/components/Navigation";
import ProgramSchedule from "@/components/ProgramSchedule";
import Footer from "@/components/Footer";

const ProgramSchedulePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ProgramSchedule />
      <Footer />
    </div>
  );
};

export default ProgramSchedulePage;