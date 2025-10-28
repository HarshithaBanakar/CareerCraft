import React from "react";
import Sidebar from "../components/Sidebar";
import {
  FileText,
  TrendingUp,
  Briefcase,
  Users,
  Download,
} from "lucide-react";

export default function Dashboard() {
  const cards = [
    {
      title: "Create Resume",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      desc: "Build a stunning resume in minutes.",
      path: "/resume-builder",
    },
    {
      title: "Career Insights",
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      desc: "See trends and improve your job strategy.",
      path: "#",
    },
    {
      title: "Job Match",
      icon: <Briefcase className="w-6 h-6 text-green-600" />,
      desc: "Get AI-based job recommendations.",
      path: "#",
    },
    {
      title: "Community",
      icon: <Users className="w-6 h-6 text-orange-600" />,
      desc: "Connect with other professionals.",
      path: "#",
    },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to Your Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 rounded-xl">{card.icon}</div>
                <Download className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {card.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4">{card.desc}</p>

              <button
                onClick={() => (window.location.href = card.path)}
                className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-all shadow-sm"
              >
                Open
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
