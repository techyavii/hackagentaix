import Themes from "@/components/Themes";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ThemesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Themes />
      <Footer />
    </div>
  );
};

export default ThemesPage;