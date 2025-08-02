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
import { useLanguage } from "@/contexts/LanguageContext";
import { teachers } from "@/data/mockData";
import { Clock, GraduationCap, Mail, Phone, Search } from "lucide-react";
import { useState } from "react";

const Teachers = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  const departments = [
    ...new Set(teachers.map((teacher) => teacher.department)),
  ];

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch = teacher.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDepartment =
      departmentFilter === "all" || teacher.department === departmentFilter;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {language === "en" ? "Teachers & Staff" : "শিক্ষক ও কর্মচারী"}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {language === "en"
            ? "Meet our dedicated teachers and staff"
            : "আমাদের নিবেদিত শিক্ষক ও কর্মচারীদের সাথে পরিচিত হন"}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder={t("common.search")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder={t("common.filter")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              {language === "en" ? "All Departments" : "সমস্ত বিভাগ"}
            </SelectItem>
            {departments.map((dept) => (
              <SelectItem key={dept} value={dept}>
                {dept}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <Card
            key={teacher.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4">
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto"
                />
              </div>
              <CardTitle className="text-xl mb-2">{teacher.name}</CardTitle>
              <Badge variant="secondary" className="mb-2 justify-center">
                {teacher.position}
              </Badge>
              <p className="text-sm text-muted-foreground">
                {teacher.department}
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>{teacher.qualification}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>
                  {teacher.experience
                    ? `${teacher.experience} ${"years experience"}`
                    : "N/A"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="truncate">{teacher.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>{teacher.phone}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                {teacher.bio}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredTeachers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {language === "en"
              ? "No teachers found"
              : "কোন শিক্ষক পাওয়া যায়নি"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Teachers;
