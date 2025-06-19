
import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Bell, Settings, Users, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Onboarding = () => {
  const { toast } = useToast();

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "Opening notification panel...",
    });
  };

  const handleSettingsClick = () => {
    toast({
      title: "Settings",
      description: "Opening user settings...",
    });
  };

  const handleProfileClick = () => {
    toast({
      title: "Profile",
      description: "Opening user profile...",
    });
  };

  const onboardingTasks = [
    { id: 1, task: "Complete personal information", status: "completed", employee: "John Doe" },
    { id: 2, task: "Sign employment contract", status: "pending", employee: "John Doe" },
    { id: 3, task: "IT setup and equipment", status: "in-progress", employee: "John Doe" },
    { id: 4, task: "Department orientation", status: "pending", employee: "John Doe" },
    { id: 5, task: "HR policy briefing", status: "completed", employee: "Sarah Smith" },
    { id: 6, task: "Team introduction", status: "completed", employee: "Sarah Smith" },
  ];

  const newEmployees = [
    { name: "John Doe", position: "Software Developer", startDate: "2024-06-20", progress: 50 },
    { name: "Sarah Smith", position: "Marketing Specialist", startDate: "2024-06-18", progress: 85 },
    { name: "Mike Johnson", position: "Data Analyst", startDate: "2024-06-22", progress: 25 },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-gray-50">
        <Sidebar />
        
        <main className="flex-1 overflow-hidden">
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Onboarding</h1>
                <p className="text-gray-600">Manage new employee onboarding process</p>
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

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    New Employees
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {newEmployees.map((employee, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">{employee.name}</h3>
                            <p className="text-sm text-gray-600">{employee.position}</p>
                            <p className="text-xs text-gray-500">Start Date: {employee.startDate}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-600">{employee.progress}%</div>
                            <div className="text-xs text-gray-500">Complete</div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${employee.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Onboarding Checklist
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {onboardingTasks.map((task) => (
                      <div key={task.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                          task.status === 'completed' ? 'bg-green-500' :
                          task.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                        }`}>
                          {task.status === 'completed' && <CheckCircle className="w-3 h-3 text-white" />}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm ${task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                            {task.task}
                          </p>
                          <p className="text-xs text-gray-500">{task.employee}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          task.status === 'completed' ? 'bg-green-100 text-green-800' :
                          task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {task.status.replace('-', ' ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Onboarding Statistics</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">3</div>
                    <div className="text-sm text-gray-600">Active Onboarding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">12</div>
                    <div className="text-sm text-gray-600">Completed This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600">5</div>
                    <div className="text-sm text-gray-600">Pending Tasks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Onboarding;
