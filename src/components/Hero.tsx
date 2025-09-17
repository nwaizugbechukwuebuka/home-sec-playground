import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Terminal, Search, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-dark opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 via-transparent to-cyber-green/10"></div>
      
      {/* Animated scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent animate-scan"></div>
        <div className="absolute top-3/4 right-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-green/30 to-transparent animate-scan" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <Badge variant="outline" className="mb-6 border-cyber-green text-cyber-green hover:bg-cyber-green/10">
          <Terminal className="w-3 h-3 mr-2" />
          Personal Vulnerability Assessment Lab
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          <span className="gradient-cyber bg-clip-text text-transparent">
            CyberSec
          </span>
          <br />
          Lab Portfolio
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Professional vulnerability assessment workflow using industry-standard tools like 
          <span className="text-cyber-green font-mono"> Nmap</span>, 
          <span className="text-cyber-green font-mono"> OpenVAS</span>, and 
          <span className="text-cyber-green font-mono"> Nessus</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="flex flex-col items-center p-4 rounded-lg bg-cyber-card/50 border border-cyber-border hover:shadow-cyber transition-cyber">
            <Search className="w-8 h-8 text-cyber-green mb-2" />
            <span className="text-sm font-mono text-muted-foreground">Network Scanning</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-cyber-card/50 border border-cyber-border hover:shadow-cyber transition-cyber">
            <Shield className="w-8 h-8 text-cyber-green mb-2" />
            <span className="text-sm font-mono text-muted-foreground">Vulnerability Detection</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-cyber-card/50 border border-cyber-border hover:shadow-cyber transition-cyber">
            <FileText className="w-8 h-8 text-cyber-green mb-2" />
            <span className="text-sm font-mono text-muted-foreground">Risk Assessment</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-cyber-card/50 border border-cyber-border hover:shadow-cyber transition-cyber">
            <Terminal className="w-8 h-8 text-cyber-green mb-2" />
            <span className="text-sm font-mono text-muted-foreground">Remediation</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="cyber" size="lg" className="animate-pulse-glow">
            Explore Lab Setup
            <Shield className="w-5 h-5" />
          </Button>
          <Button variant="cyber-outline" size="lg">
            View Scan Results
            <Search className="w-5 h-5" />
          </Button>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            {"> Ethical hacking & vulnerability assessment practice environment"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;