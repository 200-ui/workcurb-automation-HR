
import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Bell, TrendingUp, Award, Target, BarChart3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Performance = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const performanceData = [
    { rank: 1, id: "EMP001", name: "Sarah Johnson", position: "Software Developer", score: 98, projects: 12, efficiency: 95, rating: "Excellent" },
    { rank: 2, id: "EMP002", name: "Michael Chen", position: "Project Manager", score: 95, projects: 8, efficiency: 92, rating: "Excellent" },
    { rank: 3, id: "EMP003", name: "Emily Davis", position: "UI/UX Designer", score: 92, projects: 10, efficiency: 89, rating: "Very Good" },
    { rank: 4, id: "EMP004", name: "David Wilson", position: "Backend Developer", score: 89, projects: 9, efficiency: 87, rating: "Very Good" },
    { rank: 5, id: "EMP005", name: "Lisa Anderson", position: "Marketing Manager", score: 87, projects: 7, efficiency: 85, rating: "Good" },
    { rank: 6, id: "EMP006", name: "John Smith", position: "Sales Representative", score: 85, projects: 6, efficiency: 82, rating: "Good" },
    { rank: 7, id: "EMP007", name: "Maria Garcia", position: "HR Specialist", score: 82, projects: 5, efficiency: 80, rating: "Good" },
    { rank: 8, id: "EMP008", name: "Robert Taylor", position: "Finance Analyst", score: 78, projects: 4, efficiency: 75, rating: "Satisfactory" }
  ];

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "Excellent": return "text-green-600 bg-green-100";
      case "Very Good": return "text-blue-600 bg-blue-100";
      case "Good": return "text-yellow-600 bg-yellow-100";
      case "Satisfactory": return "text-orange-600 bg-orange-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-gray-50">
        <Sidebar />
        
        <main className="flex-1 overflow-hidden">
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Performance</h1>
                <p className="text-gray-600">Employee performance metrics and rankings</p>
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

          <div className="p-6">
            {/* Performance Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Avg Performance</h3>
                    <p className="text-3xl font-bold text-green-600">87.5%</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Top Performers</h3>
                    <p className="text-3xl font-bold text-blue-600">3</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Projects Completed</h3>
                    <p className="text-3xl font-bold text-purple-600">71</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Avg Efficiency</h3>
                    <p className="text-3xl font-bold text-orange-600">84.3%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Rankings */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Employee Performance Rankings</h2>
                <p className="text-gray-600 mt-1">Employees ranked by overall performance score</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {performanceData.map((employee) => (
                    <div key={employee.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl font-bold text-gray-700 w-12 text-center">
                            {getRankBadge(employee.rank)}
                          </div>
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-semibold">
                              {employee.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{employee.name}</h3>
                            <p className="text-gray-600">{employee.position}</p>
                            <p className="text-sm text-gray-500">ID: {employee.id}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Performance Score</p>
                            <p className="text-2xl font-bold text-blue-600">{employee.score}%</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Projects</p>
                            <p className="text-lg font-semibold text-gray-700">{employee.projects}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Efficiency</p>
                            <p className="text-lg font-semibold text-gray-700">{employee.efficiency}%</p>
                          </div>
                          <div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRatingColor(employee.rating)}`}>
                              {employee.rating}
                            </span>
                          </div>
                        </div>
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

export default Performance;
