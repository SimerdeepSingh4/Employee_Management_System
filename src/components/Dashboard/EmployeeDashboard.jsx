import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white">
      <div className="p-4 sm:p-10 max-w-7xl mx-auto">
        {/* Header */}
        <Header data={data}/>

        {/* Stats Section */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-300">Task Overview</h2>
          <TaskListNumbers />
        </section>

        {/* Task List Section */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold mb-4 text-gray-300">Your Tasks</h2>
          <TaskList />
        </section>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
