import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Hourglass,
  Eye,
} from "lucide-react";

const dummyJobs = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Google",
    appliedDate: "12 Jan 2026",
    location: "Remote",
    type: "Full Time",
    status: "pending",
  },

  {
    id: 4,
    role: "Software Engineer",
    company: "Microsoft",
    appliedDate: "01 Jan 2026",
    location: "Hyderabad",
    type: "Full Time",
    status: "selected",
  },
];

const statusConfig = {
  pending: {
    label: "Pending",
    color: "bg-yellow-100 text-yellow-700",
    icon: <Hourglass size={14} />,
  },
  interview: {
    label: "Interview",
    color: "bg-blue-100 text-blue-700",
    icon: <Clock size={14} />,
  },
  rejected: {
    label: "Rejected",
    color: "bg-red-100 text-red-700",
    icon: <XCircle size={14} />,
  },
  selected: {
    label: "Selected",
    color: "bg-green-100 text-green-700",
    icon: <CheckCircle size={14} />,
  },
};

function Appliedjobs() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Briefcase className="text-indigo-600" />
          Applied Jobs
        </h2>
        <span className="text-sm text-gray-500">Total: {dummyJobs.length}</span>
      </div>

      {dummyJobs.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <Briefcase className="mx-auto mb-2" />
          <p className="font-medium">No jobs applied yet</p>
          <p className="text-sm">Your applied jobs will appear here</p>
        </div>
      )}

      {dummyJobs.map((job) => {
        const status = statusConfig[job.status] || statusConfig.pending;

        return (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-md border p-5 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Briefcase size={18} />
                  {job.role}
                </h3>
                <p className="text-gray-600 flex items-center gap-1 mt-1">
                  <Building2 size={14} />
                  {job.company}
                </p>
              </div>

              <span
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${status.color}`}
              >
                {status.icon}
                {status.label}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-1 cursor-pointer">
                <Calendar size={14} />
                Applied: {job.appliedDate}
              </div>

              <div className="flex items-center gap-1">
                <MapPin size={14} />
                {job.location}
              </div>

              <div className="flex items-center gap-1">
                <Clock size={14} />
                {job.type}
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button className="flex items-center gap-1 text-indigo-600 cursor-pointer text-sm hover:underline">
                <Eye size={14} />
                View Job
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Appliedjobs;
