
import { MapPin, Briefcase, Building2 } from "lucide-react";

interface Activity {
  date: string;
  type: string;
  title: string;
  subtitle?: string;
  message: string;
  icon: string;
}

interface ActivityTimelineProps {
  activities: Activity[];
}

export const ActivityTimeline = ({ activities }: ActivityTimelineProps) => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "location":
        return <MapPin className="h-4 w-4" />;
      case "briefcase":
        return <Briefcase className="h-4 w-4" />;
      case "building":
        return <Building2 className="h-4 w-4" />;
      default:
        return <div className="h-4 w-4 rounded-full bg-blue-600" />;
    }
  };

  const getIconColor = (iconType: string) => {
    switch (iconType) {
      case "location":
        return "bg-orange-100 text-orange-600";
      case "briefcase":
        return "bg-green-100 text-green-600";
      case "building":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="text-3xl font-bold text-gray-900">2024</div>
      </div>
      
      {activities.map((activity, index) => (
        <div key={index} className="relative">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium text-gray-900 mb-1">
                {activity.date.split(' ')[0]}
              </div>
              <div className="text-xs text-gray-500">
                {activity.date.split(' ')[1]}
              </div>
            </div>
            
            <div className="flex-1 bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${getIconColor(activity.icon)}`}>
                  {getIcon(activity.icon)}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{activity.title}</div>
                  {activity.subtitle && (
                    <div className="text-sm text-gray-600 mt-1">{activity.subtitle}</div>
                  )}
                  <div className="text-sm text-gray-600 mt-2">{activity.message}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="text-center">
        <div className="text-3xl font-bold text-gray-900">2018</div>
      </div>
    </div>
  );
};
