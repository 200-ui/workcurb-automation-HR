
import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Bell, Settings, Clock, User, AlertCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Notifications = () => {
  const { toast } = useToast();

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "Current page - Notifications",
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

  const notifications = [
    {
      id: 1,
      type: "info",
      title: "New Employee Onboarded",
      message: "John Doe has completed the onboarding process and joined the development team.",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      type: "warning",
      title: "Leave Request Pending",
      message: "Sarah Smith has submitted a leave request for July 1-5 that requires your approval.",
      time: "4 hours ago",
      read: false
    },
    {
      id: 3,
      type: "success",
      title: "Performance Review Completed",
      message: "Q2 performance reviews have been completed for the marketing department.",
      time: "6 hours ago",
      read: true
    },
    {
      id: 4,
      type: "info",
      title: "System Maintenance",
      message: "Scheduled system maintenance will occur tonight from 11 PM to 2 AM.",
      time: "8 hours ago",
      read: true
    },
    {
      id: 5,
      type: "warning",
      title: "Timesheet Reminder",
      message: "5 employees have not submitted their timesheets for this week.",
      time: "1 day ago",
      read: true
    }
  ];

  const markAsRead = (id: number) => {
    toast({
      title: "Notification Read",
      description: "Notification marked as read.",
    });
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return <Bell className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-gray-50">
        <Sidebar />
        
        <main className="flex-1 overflow-hidden">
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                <p className="text-gray-600">Stay updated with important alerts and messages</p>
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
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Notifications</h2>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Mark all as read
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-6 hover:bg-gray-50 transition-colors ${
                      !notification.read ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {getIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`text-sm font-medium ${
                            !notification.read ? 'text-gray-900' : 'text-gray-700'
                          }`}>
                            {notification.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {notification.time}
                            </span>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Mark as read
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Notifications;
