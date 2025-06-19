
import { Clock, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Employee {
  id: string;
  name: string;
  role: string;
  status: string;
  checkInTime: string | null;
  avatar: string;
  location: string;
}

interface EmployeeCardProps {
  employee: Employee;
  onSelect: (employee: Employee) => void;
}

export const EmployeeCard = ({ employee, onSelect }: EmployeeCardProps) => {
  const isPresent = employee.status === "Present";

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 hover:border-blue-300">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <User className="h-6 w-6 text-gray-500" />
          </div>
          <div className={cn(
            "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white",
            isPresent ? "bg-green-500" : "bg-orange-500"
          )} />
        </div>
        
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">{employee.id}</span>
            <span className="font-semibold text-gray-900">{employee.name}</span>
          </div>
          <p className="text-sm text-gray-600">{employee.role}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className={cn(
              "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
              isPresent 
                ? "bg-green-100 text-green-800" 
                : "bg-orange-100 text-orange-800"
            )}>
              {employee.status}
            </span>
            {employee.location && (
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <MapPin className="h-3 w-3" />
                {employee.location}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {employee.checkInTime && (
          <div className="text-right">
            <div className="flex items-center gap-1 text-2xl font-bold text-gray-900">
              <Clock className="h-5 w-5" />
              {employee.checkInTime}
            </div>
            <p className="text-xs text-gray-500">Check-in time</p>
          </div>
        )}
        
        <Button
          variant={isPresent ? "destructive" : "default"}
          size="sm"
          className="min-w-[100px]"
        >
          {isPresent ? "Check-out" : "Check-in"}
        </Button>
      </div>
    </div>
  );
};
