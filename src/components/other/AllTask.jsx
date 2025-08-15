import React from "react";
import {
  CheckCircle,
  AlertCircle,
  Clock,
  XCircle,
  User,
  ClipboardList,
} from "lucide-react";

const statusStyles = {
  new_task: {
    label: "New Task",
    bg: "bg-sky-600/90 hover:bg-sky-600", // Calm blue tone
    icon: Clock,
  },
  active: {
    label: "Active",
    bg: "bg-emerald-600/90 hover:bg-emerald-600", // Fresh green
    icon: ClipboardList,
  },
  completed: {
    label: "Completed",
    bg: "bg-indigo-600/90 hover:bg-indigo-600", // Professional indigo
    icon: CheckCircle,
  },
  failed: {
    label: "Failed",
    bg: "bg-rose-600/90 hover:bg-rose-600", // Elegant red
    icon: XCircle,
  },
};

const sampleTasks = [
  { task_title: "Design Landing Page", assignedTo: "Simerdeep", new_task: true },
  { task_title: "Develop Login API", assignedTo: "Aman", active: true },
  { task_title: "Fix UI Bugs", assignedTo: "Priya", completed: true },
  { task_title: "Database Migration", assignedTo: "Ravi", failed: true },
];

const AllTask = ({ data = sampleTasks }) => {
  return (
    <div className="bg-[#1c1c1c]/80 p-5 mt-5 rounded-xl border border-gray-700 shadow-lg backdrop-blur-lg">
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <ClipboardList size={20} className="text-emerald-400" /> All Tasks
      </h2>
      <div id="alltask" className="space-y-3 max-h-64 overflow-auto pr-1">
        {data && data.length > 0 ? (
          data.map((task, index) => {
            const statusKey = Object.keys(statusStyles).find(
              (key) => task[key] === true
            );
            const status = statusStyles[statusKey] || {
              label: "Unknown",
              bg: "bg-gray-500/90 hover:bg-gray-500",
              icon: AlertCircle,
            };
            const StatusIcon = status.icon;

            return (
              <div
                key={index}
                className={`${status.bg} text-white p-3 rounded-lg flex justify-between items-center shadow-md transition-all duration-200`}
              >
                {/* Left side */}
                <div>
                  <h3 className="font-semibold">{task.task_title}</h3>
                  <p className="opacity-90 text-sm flex items-center gap-1 mt-1">
                    <User size={14} /> {task.assignedTo}
                  </p>
                </div>

                {/* Right side */}
                <div className="bg-black/20 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <StatusIcon size={14} />
                  {status.label}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-400">No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default AllTask;
