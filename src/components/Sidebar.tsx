
import { useState } from "react";
import { 
  Home, 
  Users, 
  Clock, 
  Calendar, 
  FileText, 
  Settings, 
  BarChart3,
  UserCheck,
  Briefcase,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const menuItems = [
  { icon: Home, label: "Overview", active: true },
  { icon: BarChart3, label: "Dashboard", active: false },
  { icon: Calendar, label: "Calendar", active: false },
  { icon: UserCheck, label: "Attendance", active: false },
  { icon: Users, label: "Onboarding", active: false },
  { icon: FileText, label: "Leave", active: false },
  { icon: Clock, label: "Timesheet", active: false },
  { icon: BarChart3, label: "Performance", active: false },
  { icon: Briefcase, label: "LMS", active: false },
  { icon: MoreHorizontal, label: "More", active: false },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Overview");
  const { toast } = useToast();

  const handleMenuClick = (item: typeof menuItems[0]) => {
    setActiveItem(item.label);
    toast({
      title: `Navigating to ${item.label}`,
      description: `Opening ${item.label} section...`,
    });
    console.log(`Navigating to: ${item.label}`);
  };

  const handleSettingsClick = () => {
    toast({
      title: "Settings",
      description: "Opening settings panel...",
    });
    console.log("Opening settings");
  };

  return (
    <div className={cn(
      "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white transition-all duration-300 flex flex-col",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-slate-600">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-semibold text-lg">Workcurb</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-lg hover:bg-slate-600 transition-colors"
          >
            {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleMenuClick(item)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left",
                  activeItem === item.label
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Settings */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-600">
          <button 
            onClick={handleSettingsClick}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
          >
            <Settings className="h-5 w-5" />
            <span className="font-medium">Settings</span>
          </button>
        </div>
      )}
    </div>
  );
};
