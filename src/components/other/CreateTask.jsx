import React, { useState } from "react";
import { PlusCircle, Calendar, User, Folder, FileText } from "lucide-react";

const CreateTask = ({ onCreate }) => {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        assignedTo: "",
        category: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.date || !formData.assignedTo) {
            alert("Please fill in all required fields.");
            return;
        }
        if (onCreate) onCreate(formData);
        setFormData({
            title: "",
            date: "",
            assignedTo: "",
            category: "",
            description: "",
        });
    };

    const inputWrapper = "relative flex items-center";
    const inputClass =
        "pl-10 pr-3 py-2 w-full rounded-lg outline-none bg-[#2a2a2a] border border-gray-600 text-gray-200 placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500 transition-all duration-200";

    return (
        <div className="p-0 mt-7 rounded-xl backdrop-blur-lg bg-[#1c1c1c]/80 shadow-lg border border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 px-5 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white">
                <PlusCircle size={22} />
                <h2 className="text-lg font-semibold">Create New Task</h2>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="flex flex-wrap w-full items-start justify-between gap-6 p-6"
            >
                {/* Left Section */}
                <div className="w-full md:w-1/2 space-y-4">
                    {/* Title */}
                    <div className={inputWrapper}>
                        <FileText className="absolute left-3 text-gray-400" size={18} />
                        <input
                            className={inputClass}
                            type="text"
                            name="title"
                            placeholder="Task Title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Date */}
                    <div className={inputWrapper}>
                        <Calendar className="absolute left-3 text-gray-400" size={18} />
                        <input
                            className={inputClass}
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Assign to */}
                    <div className={inputWrapper}>
                        <User className="absolute left-3 text-gray-400" size={18} />
                        <input
                            className={inputClass}
                            type="text"
                            name="assignedTo"
                            placeholder="Assign to (Employee Name)"
                            value={formData.assignedTo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Category */}
                    <div className={inputWrapper}>
                        <Folder className="absolute left-3 text-gray-400" size={18} />
                        <input
                            list="category-options"
                            className={inputClass}
                            name="category"
                            placeholder="Select or type category"
                            value={formData.category}
                            onChange={handleChange}
                        />
                        <datalist id="category-options">
                            <option value="Design" />
                            <option value="Development" />
                            <option value="Testing" />
                            <option value="Management" />
                        </datalist>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-2/5 flex flex-col items-start space-y-4">
                    {/* Description */}
                    <div className="relative w-full">
                        <textarea
                            className={`${inputClass} h-44 resize-none pl-4`}
                            name="description"
                            placeholder="Write task description..."
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 py-3 px-5 rounded-lg w-full text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                    >
                        <PlusCircle size={18} />
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
