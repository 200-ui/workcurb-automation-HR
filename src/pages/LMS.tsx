
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Bell, BookOpen, Users, Award, Clock, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const LMS = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedFaculty, setSelectedFaculty] = useState("all");

  const faculties = [
    { id: "all", name: "All Faculties", count: 25 },
    { id: "technical", name: "Technical Skills", count: 8 },
    { id: "soft-skills", name: "Soft Skills", count: 6 },
    { id: "compliance", name: "Compliance & Safety", count: 5 },
    { id: "leadership", name: "Leadership", count: 4 },
    { id: "finance", name: "Finance & Accounting", count: 2 }
  ];

  const courses = [
    { id: 1, title: "Advanced JavaScript", faculty: "technical", description: "Master modern JavaScript concepts and frameworks" },
    { id: 2, title: "React Development", faculty: "technical", description: "Build modern web applications with React" },
    { id: 3, title: "Node.js Backend", faculty: "technical", description: "Server-side development with Node.js" },
    { id: 4, title: "Communication Skills", faculty: "soft-skills", description: "Effective workplace communication techniques" },
    { id: 5, title: "Time Management", faculty: "soft-skills", description: "Optimize productivity and manage time effectively" },
    { id: 6, title: "Team Collaboration", faculty: "soft-skills", description: "Work effectively in team environments" },
    { id: 7, title: "Workplace Safety", faculty: "compliance", description: "Essential safety protocols and procedures" },
    { id: 8, title: "Data Protection", faculty: "compliance", description: "GDPR compliance and data security" },
    { id: 9, title: "Leadership Fundamentals", faculty: "leadership", description: "Basic leadership principles and practices" },
    { id: 10, title: "Strategic Planning", faculty: "leadership", description: "Develop strategic thinking skills" }
  ];

  const filteredCourses = selectedFaculty === "all" 
    ? courses 
    : courses.filter(course => course.faculty === selectedFaculty);

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleShareCourse = (courseTitle: string) => {
    toast({
      title: "Course Shared",
      description: `"${courseTitle}" has been shared with employees`,
    });
  };

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

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Faculty Sidebar */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Faculties</h2>
                <div className="space-y-2">
                  {faculties.map((faculty) => (
                    <button
                      key={faculty.id}
                      onClick={() => setSelectedFaculty(faculty.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedFaculty === faculty.id
                          ? "bg-blue-100 text-blue-700 border border-blue-200"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{faculty.name}</span>
                        <span className="text-sm text-gray-500">{faculty.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Course Overview */}
              <div className="lg:col-span-3 bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {selectedFaculty === "all" 
                      ? "All Courses" 
                      : faculties.find(f => f.id === selectedFaculty)?.name + " Courses"
                    }
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {filteredCourses.map((course) => (
                      <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-gray-900">{course.title}</h3>
                          <button
                            onClick={() => handleShareCourse(course.title)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Share Course"
                          >
                            <Share2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {faculties.find(f => f.id === course.faculty)?.name}
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
