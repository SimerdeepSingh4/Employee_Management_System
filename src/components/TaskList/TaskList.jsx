import React from "react";

const TaskList = () => {
    const tasks = [
        {
            priority: "High",
            priorityColor: "bg-red-600",
            cardColor: "from-red-400 to-red-500",
            date: "12 Jun 2025",
            title: "Launch Product Landing Page",
            description:
                "Design and publish the new landing page for our SaaS product with optimized SEO and mobile-first responsiveness.",
        },
        {
            priority: "Medium",
            priorityColor: "bg-green-600",
            cardColor: "from-green-400 to-green-500",
            date: "05 Jul 2025",
            title: "Prepare Q3 Marketing Plan",
            description:
                "Collaborate with the marketing team to finalize campaigns, budgets, and key performance goals for the next quarter.",
        },
        {
            priority: "Low",
            priorityColor: "bg-blue-600",
            cardColor: "from-blue-400 to-blue-500",
            date: "18 Jul 2025",
            title: "Team Training Workshop",
            description:
                "Organize a workshop on new AI-powered tools for content creation, scheduled for the second week of July.",
        },
        {
            priority: "Medium",
            priorityColor: "bg-yellow-600",
            cardColor: "from-yellow-400 to-yellow-500",
            date: "02 Aug 2025",
            title: "Backend API Upgrade",
            description:
                "Migrate all API endpoints to the latest framework version for better performance and improved security.",
        },
        {
            priority: "High",
            priorityColor: "bg-pink-600",
            cardColor: "from-pink-400 to-pink-500",
            date: "15 Aug 2025",
            title: "Customer Feedback Analysis",
            description:
                "Analyze feedback from the last three months and prepare a report with recommendations for product improvements.",
        },
    ];

    return (
        <div
            id="tasklist"
            className="h-[55%] overflow-x-auto flex items-center justify-start w-full gap-6  flex-nowrap scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
        >
            {tasks.map((task, index) => (
                <div
                    key={index}
                    className={`flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-br ${task.cardColor} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                    <div className="flex justify-between items-center">
                        <span
                            className={`${task.priorityColor} text-white text-xs font-semibold px-3 py-1 rounded-full shadow`}
                        >
                            {task.priority}
                        </span>
                        <span className="text-sm text-gray-100">{task.date}</span>
                    </div>
                    <h2 className="mt-5 text-xl font-bold text-white leading-snug">
                        {task.title}
                    </h2>
                    <p className="text-sm mt-3 text-white/90">
                        {task.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
