"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { governingBody } from "@/data/mockData";
import { Mail, Phone } from "lucide-react";

const GoverningBody = () => {
  const { t, language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {language === "en" ? " Governing Body" : " পরিচালনা পর্ষদ"}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {language === "en"
            ? "Meet the members of our governing body who guide the institution"
            : "আমাদের পরিচালনা পর্ষদের সদস্যদের সাথে পরিচিত হন যারা প্রতিষ্ঠানকে পরিচালনা করেন"}
        </p>
      </div>

      {/* Governing Body Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {governingBody.map((member) => (
          <Card
            key={member.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto"
                />
              </div>
              <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
              <Badge variant="secondary" className="mb-2 justify-center">
                {member.position}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              {member.email && (
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="truncate">{member.email}</span>
                </div>
              )}
              {member.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>{member.phone}</span>
                </div>
              )}
              {member.bio && (
                <div className="pt-3 border-t">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GoverningBody;
