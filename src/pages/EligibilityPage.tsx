import Eligibility from "@/components/Eligibility";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const EligibilityPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Eligibility />
      <Footer />
    </div>
  );
};

export default EligibilityPage;