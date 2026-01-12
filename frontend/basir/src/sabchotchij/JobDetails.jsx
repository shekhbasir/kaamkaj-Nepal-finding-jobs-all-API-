import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  MapPinned,
  Briefcase,
  IndianRupee,
  Clock,
  Users,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function JobDetails() {
  const { id } = useParams();

  const [applied, setApplied] = useState(false);

  const job = {
    title: "Frontend Developer",
    company: "TechNova Pvt Ltd",
    location: "Bangalore, India",
    salary: "24 LPA",
    jobType: "Full Time",
    experience: "2+ Years",
    positions: 12,
    posted: "2 days ago",
    description:
      "We are looking for a passionate Frontend Developer to build modern, scalable user interfaces using React.",
    requirements: [
      "Strong knowledge of React & JavaScript",
      "Experience with Tailwind / CSS",
      "API integration experience",
      "Good problem-solving skills",
      "Team collaboration ability",
    ],
    responsibilities: [
      "Build reusable UI components",
      "Optimize application performance",
      "Collaborate with backend developers",
      "Write clean & maintainable code",
    ],
    perks: [
      "Work From Home",
      "Health Insurance",
      "Flexible Hours",
      "Learning Budget",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 p-6">
      <Card className="max-w-5xl mx-auto shadow-xl rounded-2xl">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
              <p className="text-gray-600 mt-1">{job.company}</p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPinned size={16} /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase size={16} /> {job.jobType}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} /> {job.experience}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={16} /> {job.positions} Positions
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {applied ? (
                <Button disabled className="bg-green-600 hover:bg-green-600">
                  <CheckCircle className="mr-2" /> Already Applied
                </Button>
              ) : (
                <Button
                  onClick={() => setApplied(true)}
                  className="bg-violet-600 hover:bg-violet-700"
                >
                  Apply Now
                </Button>
              )}
              <Button variant="outline">Save Job</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mt-8">
        {/* LEFT */}
        <div className="md:col-span-2 space-y-6">
          <Card className="rounded-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Job Description</h2>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
              <ul className="list-disc ml-5 space-y-2 text-gray-600">
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Requirements</h2>
              <ul className="list-disc ml-5 space-y-2 text-gray-600">
                {job.requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="rounded-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <IndianRupee size={16} /> Salary: {job.salary}
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={16} /> Posted: {job.posted}
                </p>
                <p className="flex items-center gap-2">
                  <Briefcase size={16} /> Job Type: {job.jobType}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Perks & Benefits</h2>
              <div className="flex flex-wrap gap-2">
                {job.perks.map((perk, i) => (
                  <Badge key={i} className="bg-indigo-100 text-indigo-700">
                    {perk}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 text-center">
        {applied ? (
          <p className="text-green-600 font-semibold">
            You have already applied for this job
          </p>
        ) : (
          <Button
            size="lg"
            onClick={() => setApplied(true)}
            className="bg-violet-600 hover:bg-violet-700"
          >
            Apply for this Job
          </Button>
        )}
      </div>
    </div>
  );
}
