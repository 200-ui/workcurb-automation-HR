
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { EmployeeCard } from "@/components/EmployeeCard";
import { StatsCard } from "@/components/StatsCard";
import { ReportingSection } from "@/components/ReportingSection";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Users, Clock, Calendar, TrendingUp, Bell, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const { toast } = useToast();
  const navigate = useNavigate();

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

  const pendingApprovals = [
    {
      id: 1,
      type: "Leave Request",
      employee: "John Smith",
      details: "Annual Leave - 3 days",
      date: "Jun 25-27, 2024",
      priority: "Medium"
    },
    {
      id: 2,
      type: "Overtime Request",
      employee: "Sarah Johnson",
      details: "Weekend work - 8 hours",
      date: "Jun 22, 2024",
      priority: "High"
    },
    {
      id: 3,
      type: "Time Adjustment",
      employee: "Mike Wilson",
      details: "Clock-in correction",
      date: "Jun 19, 2024",
      priority: "Low"
    }
  ];

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleApprovalAction = (id: number, action: string) => {
    toast({
      title: `Request ${action}`,
      description: `Approval request has been ${action.toLowerCase()}`,
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-600 bg-red-50";
      case "Medium": return "text-yellow-600 bg-yellow-50";
      case "Low": return "text-green-600 bg-green-50";
      default: return "text-gray-600 bg-gray-50";
    }
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
                <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
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

              {/* Pending Approvals */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  <h2 className="text-lg font-semibold text-gray-900">Pending Approvals</h2>
                </div>
                <div className="space-y-4">
                  {pendingApprovals.map((approval) => (
                    <div key={approval.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-medium text-gray-900">{approval.type}</h3>
                          <p className="text-sm text-gray-600">{approval.employee}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(approval.priority)}`}>
                          {approval.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">{approval.details}</p>
                      <p className="text-xs text-gray-500 mb-3">{approval.date}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleApprovalAction(approval.id, "Approved")}
                          className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded text-xs hover:bg-green-200 transition-colors"
                        >
                          <CheckCircle className="h-3 w-3" />
                          Approve
                        </button>
                        <button
                          onClick={() => handleApprovalAction(approval.id, "Rejected")}
                          className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded text-xs hover:bg-red-200 transition-colors"
                        >
                          <XCircle className="h-3 w-3" />
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
