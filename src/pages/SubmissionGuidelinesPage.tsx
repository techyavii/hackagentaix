import Navigation from "@/components/Navigation";
import SubmissionGuidelines from "@/components/SubmissionGuidelines";
import Footer from "@/components/Footer";

const SubmissionGuidelinesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <SubmissionGuidelines />
      <Footer />
    </div>
  );
};

export default SubmissionGuidelinesPage;