import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield, Terminal, Search, FileText, Settings, ChevronRight } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Overview", href: "#overview", icon: Shield },
    { label: "Lab Setup", href: "#lab-setup", icon: Settings },
    { label: "Scans", href: "#scans", icon: Search },
    { label: "Reports", href: "#reports", icon: FileText },
  ];

  const NavLink = ({ item, mobile = false }: { item: typeof navItems[0]; mobile?: boolean }) => {
    const Icon = item.icon;
    return (
      <a
        href={item.href}
        onClick={() => mobile && setIsOpen(false)}
        className="flex items-center gap-2 text-muted-foreground hover:text-cyber-green transition-colors font-mono text-sm"
      >
        <Icon className="w-4 h-4" />
        {item.label}
        {mobile && <ChevronRight className="w-4 h-4 ml-auto" />}
      </a>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg gradient-cyber">
              <Terminal className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">VulnLab</span>
              <Badge variant="outline" className="border-cyber-green text-cyber-green text-xs">
                Portfolio
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="cyber-outline" size="sm">
              <FileText className="w-4 h-4" />
              View Reports
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-cyber-card border-cyber-border">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3 pb-6 border-b border-cyber-border">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg gradient-cyber">
                    <Terminal className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">VulnLab</h3>
                    <p className="text-sm text-muted-foreground font-mono">Security Portfolio</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <NavLink key={item.label} item={item} mobile />
                  ))}
                </div>

                <div className="pt-6 border-t border-cyber-border">
                  <Button variant="cyber" className="w-full">
                    <FileText className="w-4 h-4" />
                    View Full Report
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;