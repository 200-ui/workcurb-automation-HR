
import { User } from "lucide-react";

export const ReportingSection = () => {
  const reportees = [
    { id: "ZY204", name: "Randall Gladstone", status: "Present" },
    { id: "ZY237", name: "Mary Hansley", status: "Yet to check-in" }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Reportees</h3>
      <div className="space-y-4">
        {reportees.map((reportee) => (
          <div key={reportee.id} className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-5 w-5 text-gray-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">{reportee.id}</span>
                <span className="font-medium text-gray-900">{reportee.name}</span>
              </div>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                reportee.status === "Present" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-orange-100 text-orange-800"
              }`}>
                {reportee.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
