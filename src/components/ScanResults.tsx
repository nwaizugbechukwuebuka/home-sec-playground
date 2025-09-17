import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Shield, 
  AlertTriangle, 
  Activity,
  Download,
  Eye,
  Terminal,
  FileText
} from "lucide-react";

const ScanResults = () => {
  const scanTools = [
    {
      name: "Nmap",
      description: "Network discovery and port scanning",
      scansCompleted: 8,
      vulnerabilitiesFound: 12,
      lastScan: "2024-01-15",
      status: "completed",
    },
    {
      name: "OpenVAS",
      description: "Comprehensive vulnerability scanning",
      scansCompleted: 3,
      vulnerabilitiesFound: 28,
      lastScan: "2024-01-14",
      status: "completed",
    },
    {
      name: "Nessus",
      description: "Professional vulnerability assessment",
      scansCompleted: 2,
      vulnerabilitiesFound: 35,
      lastScan: "2024-01-13",
      status: "completed",
    },
  ];

  const vulnerabilityBreakdown = [
    { severity: "Critical", count: 3, percentage: 8, color: "bg-destructive" },
    { severity: "High", count: 8, percentage: 21, color: "bg-orange-500" },
    { severity: "Medium", count: 18, percentage: 47, color: "bg-yellow-500" },
    { severity: "Low", count: 9, percentage: 24, color: "bg-cyber-green" },
  ];

  const recentFindings = [
    {
      id: "CVE-2023-1234",
      title: "Remote Code Execution in Apache HTTP Server",
      severity: "Critical",
      cvss: "9.8",
      affected: "Ubuntu Server (192.168.1.101)",
      discovered: "OpenVAS",
    },
    {
      id: "CVE-2023-5678",
      title: "SMB Signing Not Required",
      severity: "Medium", 
      cvss: "5.3",
      affected: "Windows 10 VM (192.168.1.100)",
      discovered: "Nessus",
    },
    {
      id: "CVE-2023-9012",
      title: "Weak SSH Cipher Configuration",
      severity: "Low",
      cvss: "3.7",
      affected: "Ubuntu Server (192.168.1.101)",
      discovered: "Nmap",
    },
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical":
        return <Badge variant="destructive" className="text-xs">{severity}</Badge>;
      case "high":
        return <Badge variant="destructive" className="bg-orange-500 hover:bg-orange-600 text-xs">{severity}</Badge>;
      case "medium":
        return <Badge variant="secondary" className="bg-yellow-500 hover:bg-yellow-600 text-black text-xs">{severity}</Badge>;
      case "low":
        return <Badge variant="outline" className="border-cyber-green text-cyber-green text-xs">{severity}</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">{severity}</Badge>;
    }
  };

  return (
    <section id="scans" className="py-20 px-6 bg-cyber-darker/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-cyber-green text-cyber-green">
            <Search className="w-3 h-3 mr-2" />
            Vulnerability Scanning Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Scan <span className="gradient-cyber bg-clip-text text-transparent">Results</span> & Findings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive vulnerability assessment using industry-standard tools
            with detailed analysis and remediation guidance.
          </p>
        </div>

        {/* Scanning Tools Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {scanTools.map((tool) => (
            <Card key={tool.name} className="bg-cyber-card border-cyber-border hover:shadow-cyber transition-cyber">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-mono">{tool.name}</CardTitle>
                  <Terminal className="w-5 h-5 text-cyber-green" />
                </div>
                <CardDescription className="text-sm">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyber-green">{tool.scansCompleted}</div>
                    <div className="text-xs text-muted-foreground">Scans</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyber-green">{tool.vulnerabilitiesFound}</div>
                    <div className="text-xs text-muted-foreground">Findings</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mb-3 font-mono">
                  Last scan: {tool.lastScan}
                </div>
                <Button variant="cyber-outline" size="sm" className="w-full">
                  <Download className="w-4 h-4" />
                  Export Results
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Vulnerability Breakdown */}
          <Card className="bg-cyber-card border-cyber-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyber-green" />
                Vulnerability Breakdown
              </CardTitle>
              <CardDescription className="font-mono">
                Distribution by severity level
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vulnerabilityBreakdown.map((vuln) => (
                  <div key={vuln.severity} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{vuln.severity}</span>
                      <span className="text-sm text-muted-foreground">{vuln.count} findings</span>
                    </div>
                    <Progress value={vuln.percentage} className="h-2" />
                    <div className="text-xs text-muted-foreground text-right">
                      {vuln.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Findings */}
          <Card className="lg:col-span-2 bg-cyber-card border-cyber-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-cyber-green" />
                Recent Critical Findings
              </CardTitle>
              <CardDescription className="font-mono">
                High-priority vulnerabilities requiring immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentFindings.map((finding) => (
                  <div key={finding.id} className="p-4 rounded-lg bg-cyber-darker/50 border border-cyber-border/50 hover:border-cyber-green/30 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-sm text-cyber-green">{finding.id}</span>
                          {getSeverityBadge(finding.severity)}
                          <Badge variant="outline" className="text-xs">
                            CVSS {finding.cvss}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">{finding.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-mono">Affected: {finding.affected}</span>
                        </p>
                        <p className="text-xs text-muted-foreground font-mono">
                          Discovered by: {finding.discovered}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="cyber" className="w-full mt-6">
                <FileText className="w-4 h-4" />
                View Full Vulnerability Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScanResults;