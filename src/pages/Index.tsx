
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { EmployeeCard } from "@/components/EmployeeCard";
import { ActivityTimeline } from "@/components/ActivityTimeline";
import { StatsCard } from "@/components/StatsCard";
import { ReportingSection } from "@/components/ReportingSection";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Users, Clock, Calendar, TrendingUp, Bell, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const { toast } = useToast();

  const employees = [
    {
      id: "ZY198",
      name: "Christine Spalding",
      role: "HR Manager",
      status: "Present",
      checkInTime: "08:17",
      avatar: "/placeholder-avatar.jpg",
      location: "Dubai"
    },
    {
      id: "ZY190",
      name: "Jones Terri",
      role: "Software Developer",
      status: "Present",
      checkInTime: "09:15",
      avatar: "/placeholder-avatar.jpg",
      location: "California"
    },
    {
      id: "ZY204",
      name: "Randall Gladstone",
      role: "Project Manager",
      status: "Present",
      checkInTime: "08:45",
      avatar: "/placeholder-avatar.jpg",
      location: "New York"
    },
    {
      id: "ZY237",
      name: "Mary Hansley",
      role: "Designer",
      status: "Yet to check-in",
      checkInTime: null,
      avatar: "/placeholder-avatar.jpg",
      location: "California"
    }
  ];

  const activities = [
    {
      date: "19 December",
      type: "location",
      title: "Location: Dubai",
      message: "Your Location has been updated",
      icon: "location"
    },
    {
      date: "17 May",
      type: "designation",
      title: "Designation: HR Head",
      message: "Your Designation has been updated",
      icon: "briefcase"
    },
    {
      date: "05 March",
      type: "department",
      title: "Department: Human Resources",
      subtitle: "Location: California",
      message: "Your Department, Location have been updated",
      icon: "building"
    }
  ];

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "Opening notification panel...",
    });
    console.log("Opening notifications");
  };

  const handleSettingsClick = () => {
    toast({
      title: "Settings",
      description: "Opening user settings...",
    });
    console.log("Opening user settings");
  };

  const handleProfileClick = () => {
    toast({
      title: "Profile",
      description: "Opening user profile...",
    });
    console.log("Opening user profile");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-gray-50">
        <Sidebar />
        
        <main className="flex-1 overflow-hidden">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleNotificationClick}
                  className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors"
                >
                  <Bell className="h-6 w-6" />
                </button>
                <button
                  onClick={handleSettingsClick}
                  className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors"
                >
                  <Settings className="h-6 w-6" />
                </button>
                <button
                  onClick={handleProfileClick}
                  className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  A
                </button>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Employees"
                value="156"
                change="+12%"
                icon={Users}
                trend="up"
              />
              <StatsCard
                title="Present Today"
                value="142"
                change="+5%"
                icon={Clock}
                trend="up"
              />
              <StatsCard
                title="On Leave"
                value="8"
                change="-2%"
                icon={Calendar}
                trend="down"
              />
              <StatsCard
                title="Performance"
                value="94%"
                change="+3%"
                icon={TrendingUp}
                trend="up"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Employee Cards */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Employee Overview</h2>
                  <div className="grid gap-4">
                    {employees.map((employee) => (
                      <EmployeeCard
                        key={employee.id}
                        employee={employee}
                        onSelect={setSelectedEmployee}
                      />
                    ))}
                  </div>
                </div>

                <ReportingSection />
              </div>

              {/* Activity Timeline */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
                <ActivityTimeline activities={activities} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
