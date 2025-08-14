import React from "react";

const priorityColors = {
    High: { priorityColor: "bg-red-600", cardColor: "from-red-400 to-red-500" },
    Medium: { priorityColor: "bg-yellow-600", cardColor: "from-yellow-400 to-yellow-500" },
    Low: { priorityColor: "bg-green-600", cardColor: "from-green-400 to-green-500" },
};

const TaskList = ({ data }) => {
    const tasks = data?.tasks || [];

    return (
        <div
            id="tasklist"
            className="h-[55%] overflow-x-auto flex items-center justify-start w-full gap-6 flex-nowrap scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
        >
            {tasks.map((task, index) => {
                const { priorityColor, cardColor } =
                    priorityColors[task.priority] || priorityColors.Medium;

                return (
                    <div
                        key={index}
                        className={`flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-br ${cardColor} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}
                    >
                        <div className="flex justify-between items-center">
                            <span
                                className={`${priorityColor} text-white text-xs font-semibold px-3 py-1 rounded-full shadow`}
                            >
                                {task.priority}
                            </span>
                            <span className="text-sm text-gray-100">{task.task_date}</span>
                        </div>
                        <h2 className="mt-5 text-xl font-bold text-white leading-snug">
                            {task.task_title}
                        </h2>
                        <p className="text-sm mt-3 text-white/90">
                            {task.task_description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;
