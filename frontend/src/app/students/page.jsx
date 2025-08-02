"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { studentCabinet, students } from "@/data/mockData";
import { calculateGrade } from "@/lib/gradeUtils";
import { Search, Star, Trophy, Users } from "lucide-react";
import { useState } from "react";

const Students = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState("all");

  const classes = [...new Set(students.map((student) => student.class))];
  const bestStudents = students.filter(
    (student) => student.result && student.result.position <= 3
  );

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.roll.includes(searchTerm);
    const matchesClass = classFilter === "all" || student.class === classFilter;
    return matchesSearch && matchesClass;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {language === "en" ? "Students" : "শিক্ষার্থীরা"}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {language === "en"
            ? "Student information, achievements, and student cabinet"
            : "শিক্ষার্থীদের তথ্য, অর্জন এবং শিক্ষার্থী পরিষদ"}
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            {language === "en" ? "All Students" : "সকল শিক্ষার্থী"}
          </TabsTrigger>
          <TabsTrigger value="best" className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            {language === "en" ? "Best Students" : "সেরা শিক্ষার্থী"}
          </TabsTrigger>
          <TabsTrigger value="cabinet" className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            {language === "en" ? "Student Cabinet" : "শিক্ষার্থী পরিষদ"}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder={
                  language === "en"
                    ? "Search by name or roll"
                    : "নাম বা রোল দিয়ে খুঁজুন"
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={classFilter} onValueChange={setClassFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder={t("common.filter")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {language === "en" ? "All Classes" : "সমস্ত ক্লাস"}
                </SelectItem>
                {classes.map((cls) => (
                  <SelectItem key={cls} value={cls}>
                    {`Class ${cls}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Students Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredStudents.map((student) => (
              <Card
                key={student.id}
                className="overflow-hidden hover:shadow-md transition-shadow"
              >
                <CardHeader className="text-center pb-3">
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-2"
                  />
                  <CardTitle className="text-lg">{student.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <span>Roll: {student.roll}</span>
                    <span>•</span>
                    <span>
                      {student.class}-{student.section}
                    </span>
                  </div>
                </CardHeader>
                {student.result && (
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm">
                      <span>GPA: {student.result.gpa}</span>
                      <Badge
                        variant={
                          student.result.position <= 3 ? "default" : "secondary"
                        }
                      >
                        {`Position ${student.result.position}`}
                      </Badge>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="best" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestStudents.map((student) => (
              <Card
                key={student.id}
                className="overflow-hidden border-primary/20 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                    <Badge
                      variant="default"
                      className="absolute -top-2 -right-2 bg-yellow-500 text-yellow-50"
                    >
                      #{student.result?.position}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{student.name}</CardTitle>
                  <p className="text-muted-foreground">
                    {student.class}-{student.section}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">GPA</p>
                      <p className="text-2xl font-bold text-primary">
                        {student.result?.gpa}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Grade</p>
                      <p className="text-2xl font-bold text-primary">
                        {calculateGrade(student.result?.gpa)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cabinet" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentCabinet.map((member) => (
              <Card
                key={member.id}
                className="overflow-hidden border-blue-200 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="text-center pb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="outline" className="mb-2">
                    {member.position}
                  </Badge>
                  <p className="text-muted-foreground">
                    {member.class}-{member.section}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Responsibilities</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {member.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Students;
