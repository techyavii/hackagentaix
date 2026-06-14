import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JudgeRecognitionAwards from "@/components/JudgeRecognitionAwards";
const JudgeRecognitionAwardsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <JudgeRecognitionAwards />
      <Footer />
    </div>
  );
};

export default JudgeRecognitionAwardsPage;