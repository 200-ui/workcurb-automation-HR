
import { useState } from "react";
import { 
  Home, 
  Users, 
  Clock, 
  Calendar, 
  FileText, 
  BarChart3,
  UserCheck,
  Briefcase,
  Ticket,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { NavLink, useLocation } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Overview", path: "/" },
  { icon: BarChart3, label: "Dashboard", path: "/dashboard" },
  { icon: Calendar, label: "Calendar", path: "/calendar" },
  { icon: UserCheck, label: "Attendance", path: "/attendance" },
  { icon: FileText, label: "Leave", path: "/leave" },
  { icon: Clock, label: "Timesheet", path: "/timesheet" },
  { icon: BarChart3, label: "Performance", path: "/performance" },
  { icon: Briefcase, label: "LMS", path: "/lms" },
  { icon: Ticket, label: "Kira Ticket", path: "/kira-ticket" },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { toast } = useToast();
  const location = useLocation();

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
              <NavLink
                to={item.path}
                className={({ isActive }) => cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left",
                  isActive
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
