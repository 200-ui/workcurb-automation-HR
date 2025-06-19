
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Bell, Plus, Search, Edit, Trash2, UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const departments = [
    { id: "all", name: "All Departments", count: 156 },
    { id: "engineering", name: "Engineering", count: 45 },
    { id: "marketing", name: "Marketing", count: 28 },
    { id: "hr", name: "Human Resources", count: 12 },
    { id: "finance", name: "Finance", count: 18 },
    { id: "sales", name: "Sales", count: 32 },
    { id: "design", name: "Design", count: 21 }
  ];

  const employees = [
    { id: "EMP001", name: "Christine Spalding", position: "HR Manager", department: "hr", email: "christine@workcurb.com", phone: "+1 234 567 8901", joinDate: "2023-01-15" },
    { id: "EMP002", name: "Jones Terri", position: "Software Developer", department: "engineering", email: "jones@workcurb.com", phone: "+1 234 567 8902", joinDate: "2023-02-20" },
    { id: "EMP003", name: "Randall Gladstone", position: "Project Manager", department: "engineering", email: "randall@workcurb.com", phone: "+1 234 567 8903", joinDate: "2023-03-10" },
    { id: "EMP004", name: "Mary Hansley", position: "UI/UX Designer", department: "design", email: "mary@workcurb.com", phone: "+1 234 567 8904", joinDate: "2023-04-05" },
    { id: "EMP005", name: "John Smith", position: "Marketing Manager", department: "marketing", email: "john@workcurb.com", phone: "+1 234 567 8905", joinDate: "2023-05-12" }
  ];

  const filteredEmployees = employees.filter(emp => {
    const matchesDepartment = selectedDepartment === "all" || emp.department === selectedDepartment;
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         emp.position.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleAddEmployee = () => {
    setShowAddModal(true);
  };

  const handleEditEmployee = (id: string) => {
    toast({
      title: "Edit Employee",
      description: `Opening edit form for employee ${id}`,
    });
  };

  const handleDeleteEmployee = (id: string) => {
    toast({
      title: "Delete Employee",
      description: `Employee ${id} has been removed`,
    });
  };

  const handleOnboardEmployee = (name: string) => {
    toast({
      title: "Onboard Employee",
      description: `Starting onboarding process for ${name}`,
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
                <h1 className="text-2xl font-bold text-gray-900">Employee Management</h1>
                <p className="text-gray-600">Manage your workforce and employee data</p>
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
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search employees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button
                onClick={handleAddEmployee}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Add Employee
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Departments Sidebar */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Departments</h2>
                <div className="space-y-2">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDepartment(dept.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedDepartment === dept.id
                          ? "bg-blue-100 text-blue-700 border border-blue-200"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{dept.name}</span>
                        <span className="text-sm text-gray-500">{dept.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Employee List */}
              <div className="lg:col-span-3 bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {selectedDepartment === "all" 
                      ? "All Employees" 
                      : departments.find(d => d.id === selectedDepartment)?.name + " Department"
                    }
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {filteredEmployees.map((employee) => (
                      <div key={employee.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-semibold">
                                {employee.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{employee.name}</h3>
                              <p className="text-gray-600">{employee.position}</p>
                              <p className="text-sm text-gray-500">{employee.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleOnboardEmployee(employee.name)}
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                              title="Onboard Employee"
                            >
                              <UserPlus className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleEditEmployee(employee.id)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Edit Employee"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteEmployee(employee.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete Employee"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
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

export default Employee;
