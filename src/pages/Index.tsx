import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LabOverview from "@/components/LabOverview";
import ScanResults from "@/components/ScanResults";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <LabOverview />
      <ScanResults />
    </div>
  );
};

export default Index;
