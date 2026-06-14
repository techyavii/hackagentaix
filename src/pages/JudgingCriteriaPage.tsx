import Navigation from "@/components/Navigation";
import JudgingCriteria from "@/components/JudgingCriteria";
import Footer from "@/components/Footer";

const JudgingCriteriaPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <JudgingCriteria />
      <Footer />
    </div>
  );
};

export default JudgingCriteriaPage;