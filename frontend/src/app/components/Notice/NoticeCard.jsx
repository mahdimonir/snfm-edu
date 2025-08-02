"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Download, Eye } from "lucide-react";
import Link from "next/link";

export default function NoticeCard({ notice }) {
  const getTypeColor = (type) => {
    switch (type) {
      case "admission":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "result":
        return "bg-green-100 text-green-800 border-green-200";
      case "event":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "scholarship":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "academic":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card
      className={`hover:shadow-md transition-shadow duration-200 ${
        notice.important ? "border-destructive/50" : ""
      }`}
    >
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          {/* Left Content */}
          <div className="flex-1">
            {/* Badges */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-3">
              {notice.important && (
                <Badge variant="destructive" className="w-fit">
                  Important
                </Badge>
              )}
              <Badge
                variant="outline"
                className={`w-fit ${getTypeColor(notice.type)}`}
              >
                {notice.type}
              </Badge>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900">{notice.title}</h3>
            <h4 className="text-lg text-primary mb-2">{notice.titleBn}</h4>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <Calendar className="h-4 w-4" />
              <span>{new Date(notice.date).toLocaleDateString("en-GB")}</span>
            </div>

            {/* Description */}
            <div className="space-y-2 mb-4">
              <p className="text-gray-700 leading-relaxed">
                {notice.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {notice.descriptionBn}
              </p>
            </div>

            {/* Attachments */}
            {notice.attachments.length > 0 && (
              <div className="space-y-1 mt-3">
                <h5 className="font-medium text-gray-900">Attachments:</h5>
                <div className="flex flex-wrap gap-2">
                  {notice.attachments.map((file, idx) => (
                    <a
                      key={idx}
                      href={file.url || "#"}
                      download
                      className="inline-block"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs px-3"
                      >
                        <Download className="h-3 w-3 mr-1" />
                        {file.name || `Attachment ${idx + 1}`}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Buttons */}
          <div className="flex gap-2 lg:flex-col lg:justify-start lg:items-end sm:items-center">
            <Link href={`/notices/${notice.id}`} className="w-fit">
              <Button variant="default" size="sm" className="w-full">
                <Eye className="h-4 w-4 mr-1" />
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
