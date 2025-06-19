
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Bell, Search, Send, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const employees = [
    { id: 1, name: "Christine Spalding", position: "HR Manager", lastMessage: "Thanks for the update!", time: "2 min ago", unread: 2, avatar: "C" },
    { id: 2, name: "Jones Terri", position: "Software Developer", lastMessage: "Can we schedule a meeting?", time: "5 min ago", unread: 0, avatar: "J" },
    { id: 3, name: "Randall Gladstone", position: "Project Manager", lastMessage: "Project deadline updated", time: "1 hour ago", unread: 1, avatar: "R" },
    { id: 4, name: "Mary Hansley", position: "UI/UX Designer", lastMessage: "Design review completed", time: "2 hours ago", unread: 0, avatar: "M" },
    { id: 5, name: "John Smith", position: "Marketing Manager", lastMessage: "Campaign results are ready", time: "3 hours ago", unread: 3, avatar: "J" }
  ];

  const messages = [
    { id: 1, sender: "Christine Spalding", message: "Hi! I wanted to discuss the new policy changes.", time: "10:30 AM", isMe: false },
    { id: 2, sender: "Me", message: "Sure! I'll review them and get back to you.", time: "10:32 AM", isMe: true },
    { id: 3, sender: "Christine Spalding", message: "Thanks for the update!", time: "10:35 AM", isMe: false }
  ];

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      toast({
        title: "Message Sent",
        description: "Your message has been delivered",
      });
      setMessageInput("");
    }
  };

  const handleBroadcastMessage = () => {
    toast({
      title: "Broadcast Message",
      description: "Opening broadcast message composer...",
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
                <h1 className="text-2xl font-bold text-gray-900">Chat</h1>
                <p className="text-gray-600">Communicate with employees privately and send broadcasts</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleBroadcastMessage}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  <Users className="h-4 w-4" />
                  Broadcast to All
                </button>
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

          <div className="flex h-[calc(100vh-80px)]">
            {/* Employee List */}
            <div className="w-1/3 bg-white border-r border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search employees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="overflow-y-auto h-full">
                {filteredEmployees.map((employee) => (
                  <div
                    key={employee.id}
                    onClick={() => setSelectedChat(employee)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedChat?.id === employee.id ? "bg-blue-50 border-blue-200" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">{employee.avatar}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-gray-900 truncate">{employee.name}</h3>
                          <span className="text-xs text-gray-500">{employee.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{employee.lastMessage}</p>
                      </div>
                      {employee.unread > 0 && (
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">{employee.unread}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedChat ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 bg-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">{selectedChat.avatar}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{selectedChat.name}</h3>
                        <p className="text-sm text-gray-600">{selectedChat.position}</p>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.isMe
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-900 border border-gray-200"
                            }`}
                          >
                            <p className="text-sm">{message.message}</p>
                            <p className={`text-xs mt-1 ${message.isMe ? "text-blue-100" : "text-gray-500"}`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="p-4 bg-white border-t border-gray-200">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      />
                      <button
                        onClick={handleSendMessage}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Select an employee to start chatting</h3>
                    <p className="text-gray-500">Choose from the list to send a private message</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Chat;
