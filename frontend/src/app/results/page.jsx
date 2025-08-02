"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Download,
  Eye,
  GraduationCap,
  Search,
  Trophy,
} from "lucide-react";
import { useState } from "react";

const Results = () => {
  const [searchRoll, setSearchRoll] = useState("");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedExam, setSelectedExam] = useState("hsc");

  const examResults = [
    {
      id: 1,
      examType: "HSC",
      examTypeBn: "এইচএসসি",
      year: "2024",
      department: "Science",
      departmentBn: "বিজ্ঞান",
      publishDate: "2024-07-15",
      totalStudents: 450,
      passRate: 98.2,
      gpaAbove4: 280,
      featured: true,
    },
    {
      id: 2,
      examType: "HSC",
      examTypeBn: "এইচএসসি",
      year: "2024",
      department: "Arts",
      departmentBn: "কলা",
      publishDate: "2024-07-15",
      totalStudents: 320,
      passRate: 96.8,
      gpaAbove4: 185,
      featured: true,
    },
    {
      id: 3,
      examType: "HSC",
      examTypeBn: "এইচএসসি",
      year: "2024",
      department: "Commerce",
      departmentBn: "বাণিজ্য",
      publishDate: "2024-07-15",
      totalStudents: 280,
      passRate: 97.5,
      gpaAbove4: 165,
      featured: true,
    },
    {
      id: 4,
      examType: "Test Exam",
      examTypeBn: "টেস্ট পরীক্ষা",
      year: "2024",
      department: "All Departments",
      departmentBn: "সকল বিভাগ",
      publishDate: "2024-06-30",
      totalStudents: 1050,
      passRate: 89.5,
      gpaAbove4: 420,
      featured: false,
    },
  ];

  const toppers = [
    {
      name: "Ahmed Rahman",
      nameBn: "আহমেদ রহমান",
      roll: "101001",
      department: "Science",
      gpa: "5.00",
      position: 1,
    },
    {
      name: "Fatima Khatun",
      nameBn: "ফাতিমা খাতুন",
      roll: "102015",
      department: "Arts",
      gpa: "5.00",
      position: 2,
    },
    {
      name: "Mohammad Ali",
      nameBn: "মোহাম্মদ আলী",
      roll: "103028",
      department: "Commerce",
      gpa: "5.00",
      position: 3,
    },
  ];

  const getPositionIcon = (position) => {
    switch (position) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return "🏅";
    }
  };

  const filteredResults = examResults.filter((result) => {
    const matchesYear = selectedYear === "all" || result.year === selectedYear;
    const matchesExam =
      selectedExam === "all" || result.examType.toLowerCase() === selectedExam;
    return matchesYear && matchesExam;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="h-8 w-8" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Examination Results
              </h1>
            </div>
            <p className="text-xl opacity-90">পরীক্ষার ফলাফল</p>
            <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
              Access your examination results and check the academic performance
              of our students.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Result Search */}
      <section className="py-8 bg-accent">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">
                Search Individual Result
                <span className="block text-base text-primary font-normal mt-1">
                  ব্যক্তিগত ফলাফল খুঁজুন
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Enter your roll number"
                      value={searchRoll}
                      onChange={(e) => setSearchRoll(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="px-8">Search</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Result Statistics */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Latest Results Overview
            <span className="block text-lg text-primary mt-2">
              সর্বশেষ ফলাফলের সংক্ষিপ্ত বিবরণ
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center border-primary/20">
              <CardContent className="p-6">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  1,050
                </div>
                <p className="text-gray-600">Total Students</p>
                <p className="text-sm text-gray-500">মোট শিক্ষার্থী</p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200">
              <CardContent className="p-6">
                <Trophy className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-600 mb-2">
                  97.5%
                </div>
                <p className="text-gray-600">Average Pass Rate</p>
                <p className="text-sm text-gray-500">গড় পাসের হার</p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏆</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">630</div>
                <p className="text-gray-600">GPA 4.0+</p>
                <p className="text-sm text-gray-500">জিপিএ ৪.০+</p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🥇</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  15
                </div>
                <p className="text-gray-600">GPA 5.0</p>
                <p className="text-sm text-gray-500">জিপিএ ৫.০</p>
              </CardContent>
            </Card>
          </div>

          {/* Filter Options */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              <label className="font-medium text-gray-700">Filter by:</label>
              <Select value={selectedExam} onValueChange={setSelectedExam}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select exam type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Exams</SelectItem>
                  <SelectItem value="hsc">HSC</SelectItem>
                  <SelectItem value="test exam">Test Exam</SelectItem>
                  <SelectItem value="annual">Annual Exam</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredResults.map((result) => (
              <Card
                key={result.id}
                className={`hover:shadow-lg transition-shadow ${
                  result.featured ? "border-primary/50" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {result.examType} - {result.year}
                        {result.featured && (
                          <Badge variant="default" className="ml-2">
                            Latest
                          </Badge>
                        )}
                      </h3>
                      <p className="text-primary font-medium">
                        {result.examTypeBn} - {result.year}
                      </p>
                      <p className="text-sm text-gray-600">
                        {result.department} / {result.departmentBn}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {new Date(result.publishDate).toLocaleDateString(
                          "en-GB"
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {result.totalStudents}
                      </div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {result.passRate}%
                      </div>
                      <div className="text-xs text-gray-600">Pass Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {result.gpaAbove4}
                      </div>
                      <div className="text-xs text-gray-600">GPA 4.0+</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Performers */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Top Performers - HSC 2024
            <span className="block text-lg text-primary mt-2">
              শীর্ষ মেধাবী - এইচএসসি ২০২৪
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toppers.map((topper) => (
              <Card
                key={topper.roll}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">
                    {getPositionIcon(topper.position)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {topper.name}
                  </h3>
                  <p className="text-primary mb-2">{topper.nameBn}</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>
                      Roll: <span className="font-medium">{topper.roll}</span>
                    </p>
                    <p>
                      Department:{" "}
                      <span className="font-medium">{topper.department}</span>
                    </p>
                    <div className="text-2xl font-bold text-green-600 mt-3">
                      GPA {topper.gpa}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
