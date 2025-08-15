import React from "react";
import { CheckCircle, XCircle, ClipboardList, Clock } from "lucide-react";

const TaskListNumbers = ({ data }) => {
  const tasks = data?.tasks || [];

const stats = [
  {
    label: "New Task",
    count: tasks.filter((t) => t.new_task).length,
    color: "from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600",
    icon: ClipboardList,
  },
  {
    label: "Completed Task",
    count: tasks.filter((t) => t.completed).length,
    color: "from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600",
    icon: CheckCircle,
  },
  {
    label: "Accepted Task",
    count: tasks.filter((t) => t.active && !t.completed && !t.failed).length,
    color: "from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600",
    icon: Clock,
  },
  {
    label: "Failed Task",
    count: tasks.filter((t) => t.failed).length,
    color: "from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600",
    icon: XCircle,
  },
];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={`rounded-xl py-6 px-6 bg-gradient-to-br ${stat.color} text-white shadow-md hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Icon className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">{stat.count}</h2>
            </div>
            <p className="text-lg font-medium mt-3">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TaskListNumbers;
