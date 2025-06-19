
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { EmployeeCard } from "@/components/EmployeeCard";
import { StatsCard } from "@/components/StatsCard";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Users, Clock, Calendar, TrendingUp, Bell, Plus, X, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [todoList, setTodoList] = useState([
    { id: 1, task: "Review Q2 performance reports", completed: false },
    { id: 2, task: "Schedule team meeting for project update", completed: true },
    { id: 3, task: "Approve pending leave requests", completed: false }
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [notice, setNotice] = useState("");
  const [noticeCategory, setNoticeCategory] = useState("general");
  const [noticeDepartment, setNoticeDepartment] = useState("all");
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

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const newTask = {
        id: Date.now(),
        task: newTodo.trim(),
        completed: false
      };
      setTodoList([...todoList, newTask]);
      setNewTodo("");
      toast({
        title: "Task Added",
        description: "New task added to your to-do list",
      });
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
    toast({
      title: "Task Deleted",
      description: "Task removed from your to-do list",
    });
  };

  const handleToggleTodo = (id: number) => {
    setTodoList(todoList.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleSendNotice = () => {
    if (notice.trim()) {
      toast({
        title: "Notice Sent",
        description: `Notice has been sent to ${noticeDepartment === "all" ? "all employees" : noticeDepartment + " department"}`,
      });
      setNotice("");
      setNoticeCategory("general");
      setNoticeDepartment("all");
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

                {/* To-Do List */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Today's To-Do List</h2>
                    <span className="text-sm text-gray-500">{todoList.filter(t => !t.completed).length} remaining</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    {todoList.map((todo) => (
                      <div key={todo.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                        <button
                          onClick={() => handleToggleTodo(todo.id)}
                          className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${
                            todo.completed 
                              ? "bg-green-500 border-green-500 text-white" 
                              : "border-gray-300 hover:border-green-500"
                          }`}
                        >
                          {todo.completed && <CheckCircle className="h-3 w-3" />}
                        </button>
                        <span className={`flex-1 ${todo.completed ? "line-through text-gray-500" : "text-gray-900"}`}>
                          {todo.task}
                        </span>
                        <button
                          onClick={() => handleDeleteTodo(todo.id)}
                          className="text-red-500 hover:bg-red-50 p-1 rounded"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                      placeholder="Add a new task..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
                    />
                    <button
                      onClick={handleAddTodo}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Issue Notice Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Send className="h-5 w-5 text-blue-500" />
                  <h2 className="text-lg font-semibold text-gray-900">Issue Notice</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={noticeCategory}
                      onChange={(e) => setNoticeCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="general">General</option>
                      <option value="urgent">Urgent</option>
                      <option value="policy">Policy Update</option>
                      <option value="event">Event Announcement</option>
                      <option value="training">Training</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <select
                      value={noticeDepartment}
                      onChange={(e) => setNoticeDepartment(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">All Departments</option>
                      <option value="engineering">Engineering</option>
                      <option value="marketing">Marketing</option>
                      <option value="hr">Human Resources</option>
                      <option value="finance">Finance</option>
                      <option value="sales">Sales</option>
                      <option value="design">Design</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Notice Message</label>
                    <textarea
                      value={notice}
                      onChange={(e) => setNotice(e.target.value)}
                      placeholder="Type your notice here..."
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    onClick={handleSendNotice}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Notice
                  </button>
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
