
import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Bell, Settings, BookOpen, Users, Award, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LMS = () => {
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

  const courses = [
    { id: 1, title: "Employee Handbook 2024", category: "Onboarding", enrolled: 45, completed: 32, duration: "2 hours" },
    { id: 2, title: "Workplace Safety Training", category: "Safety", enrolled: 38, completed: 35, duration: "1.5 hours" },
    { id: 3, title: "Leadership Development", category: "Management", enrolled: 12, completed: 8, duration: "4 hours" },
    { id: 4, title: "Data Security Awareness", category: "Security", enrolled: 50, completed: 42, duration: "1 hour" },
    { id: 5, title: "Communication Skills", category: "Soft Skills", enrolled: 28, completed: 20, duration: "3 hours" },
  ];

  const recentActivity = [
    { employee: "John Doe", course: "Employee Handbook 2024", action: "Completed", time: "2 hours ago" },
    { employee: "Sarah Smith", course: "Workplace Safety Training", action: "Started", time: "4 hours ago" },
    { employee: "Mike Johnson", course: "Data Security Awareness", action: "Completed", time: "6 hours ago" },
    { employee: "Emily Davis", course: "Leadership Development", action: "In Progress", time: "1 day ago" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-gray-50">
        <Sidebar />
        
        <main className="flex-1 overflow-hidden">
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Learning Management System</h1>
                <p className="text-gray-600">Manage training courses and employee development</p>
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Total Courses</h3>
                    <p className="text-3xl font-bold text-blue-600">25</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Active Learners</h3>
                    <p className="text-3xl font-bold text-green-600">173</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Completions</h3>
                    <p className="text-3xl font-bold text-purple-600">137</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Avg. Completion</h3>
                    <p className="text-3xl font-bold text-yellow-600">79%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Course Overview</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {courses.map((course) => (
                      <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{course.title}</h3>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {course.category}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                          <span>{course.duration}</span>
                          <span>{course.completed}/{course.enrolled} completed</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${(course.completed / course.enrolled) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-600">
                            {activity.employee.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {activity.employee} {activity.action.toLowerCase()} "{activity.course}"
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          activity.action === 'Completed' ? 'bg-green-100 text-green-800' :
                          activity.action === 'Started' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {activity.action}
                        </span>
                      </div>
                    ))}
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

export default LMS;
