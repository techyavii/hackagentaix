import Timeline from "@/components/Timeline";
import Themes from "@/components/Themes";
import Eligibility from "@/components/Eligibility";
import JudgingCriteria from "@/components/JudgingCriteria";
import SubmissionGuidelines from "@/components/SubmissionGuidelines";
import Awards from "@/components/Awards";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ResourcesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Timeline />
      <Themes />
      <Eligibility />
      <JudgingCriteria />
      <SubmissionGuidelines />
      <Awards />
      <Footer />
    </div>
  );
};

export default ResourcesPage;