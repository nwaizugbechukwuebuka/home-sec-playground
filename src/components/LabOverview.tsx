import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Network, 
  Shield, 
  Target, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Monitor,
  Server,
  Smartphone
} from "lucide-react";

const LabOverview = () => {
  const objectives = [
    {
      title: "Network Discovery",
      description: "Map all devices and services in the lab environment",
      status: "completed",
      icon: Network,
    },
    {
      title: "Vulnerability Scanning",
      description: "Identify security weaknesses using professional tools",
      status: "completed", 
      icon: Shield,
    },
    {
      title: "Risk Assessment",
      description: "Prioritize findings based on CVSS scores and impact",
      status: "completed",
      icon: Target,
    },
    {
      title: "Remediation Planning",
      description: "Document mitigation strategies for identified vulnerabilities",
      status: "in-progress",
      icon: AlertTriangle,
    },
  ];

  const labStats = [
    { label: "Devices Scanned", value: "12", icon: Monitor },
    { label: "Vulnerabilities Found", value: "47", icon: AlertTriangle },
    { label: "Critical Issues", value: "3", icon: Shield },
    { label: "Remediated", value: "31", icon: CheckCircle },
  ];

  const networkTopology = [
    { device: "Windows 10 VM", ip: "192.168.1.100", services: "RDP, SMB, HTTP", risk: "Medium" },
    { device: "Ubuntu Server", ip: "192.168.1.101", services: "SSH, Apache, MySQL", risk: "High" },
    { device: "pfSense Firewall", ip: "192.168.1.1", services: "Web GUI, DHCP", risk: "Low" },
    { device: "IoT Device", ip: "192.168.1.150", services: "Telnet, HTTP", risk: "Critical" },
  ];

  const getRiskBadgeVariant = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "critical": return "destructive";
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "outline";
    }
  };

  return (
    <section id="overview" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-cyber-green text-cyber-green">
            <Target className="w-3 h-3 mr-2" />
            Project Overview
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Personal <span className="gradient-cyber bg-clip-text text-transparent">Vulnerability</span> Assessment Lab
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive home lab environment designed to practice ethical hacking, 
            vulnerability assessment, and security reporting using industry-standard tools.
          </p>
        </div>

        {/* Lab Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {labStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="bg-cyber-card/50 border-cyber-border hover:shadow-cyber transition-cyber">
                <CardContent className="p-6 text-center">
                  <Icon className="w-8 h-8 text-cyber-green mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Objectives */}
          <Card className="bg-cyber-card border-cyber-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-cyber-green" />
                Project Objectives
              </CardTitle>
              <CardDescription className="font-mono">
                Key goals and deliverables for the vulnerability assessment lab
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {objectives.map((objective) => {
                const Icon = objective.icon;
                return (
                  <div key={objective.title} className="flex items-start gap-3 p-4 rounded-lg bg-cyber-darker/50 border border-cyber-border/50">
                    <div className="flex items-center gap-2 flex-1">
                      <Icon className="w-4 h-4 text-cyber-green flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{objective.title}</h4>
                        <p className="text-sm text-muted-foreground">{objective.description}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={objective.status === "completed" ? "outline" : "secondary"}
                      className={objective.status === "completed" ? "border-cyber-green text-cyber-green" : ""}
                    >
                      {objective.status === "completed" ? (
                        <CheckCircle className="w-3 h-3 mr-1" />
                      ) : (
                        <Clock className="w-3 h-3 mr-1" />
                      )}
                      {objective.status}
                    </Badge>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Network Topology */}
          <Card className="bg-cyber-card border-cyber-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="w-5 h-5 text-cyber-green" />
                Lab Network Topology
              </CardTitle>
              <CardDescription className="font-mono">
                Scanned devices and their security posture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {networkTopology.map((device, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-cyber-darker/50 border border-cyber-border/50 hover:border-cyber-green/30 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {device.device.includes("VM") ? <Monitor className="w-4 h-4 text-cyber-green" /> :
                         device.device.includes("Server") ? <Server className="w-4 h-4 text-cyber-green" /> :
                         device.device.includes("IoT") ? <Smartphone className="w-4 h-4 text-cyber-green" /> :
                         <Network className="w-4 h-4 text-cyber-green" />}
                        <span className="font-semibold text-sm">{device.device}</span>
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        IP: {device.ip} | Services: {device.services}
                      </div>
                    </div>
                    <Badge variant={getRiskBadgeVariant(device.risk)} className="text-xs">
                      {device.risk}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="cyber-outline" className="w-full mt-4" size="sm">
                <Network className="w-4 h-4" />
                View Network Diagram
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LabOverview;