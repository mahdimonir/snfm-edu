import { ChevronRight, Download } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function NoticeBoard({ notices, quickStats, upcomingEvents }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Notices */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Notice Board
                <span className="block text-lg text-primary">নোটিশ বোর্ড</span>
              </h2>
              <Button variant="outline" asChild>
                <Link href="/notices" className="flex items-center">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {notices.map((notice) => (
                <Card
                  key={notice.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {notice.important && (
                            <Badge variant="destructive" className="text-xs">
                              Important
                            </Badge>
                          )}
                          <Badge variant="secondary" className="text-xs">
                            {notice.type}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {notice.date}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {notice.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {notice.titleBn}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto text-primary"
                          asChild
                        >
                          <Link
                            href={`/notice/${notice.id}`}
                            className="flex items-center"
                          >
                            Read More <Download className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary to-primary-dark text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">
                  Quick Statistics
                  <span className="block text-sm opacity-90">
                    দ্রুত পরিসংখ্যান
                  </span>
                </h3>
                <div className="space-y-4">
                  {quickStats.map(({ label, value }, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span>{label}</span>
                      <span className="text-2xl font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900">
                  Upcoming Events
                  <span className="block text-sm text-gray-600">
                    আসন্ন অনুষ্ঠান
                  </span>
                </h3>
                <div className="space-y-3">
                  {upcomingEvents.map(({ month, day, title, titleBn }, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="bg-primary text-white rounded p-2 text-center min-w-[50px]">
                        <div className="text-xs font-semibold">{month}</div>
                        <div className="text-lg font-bold">{day}</div>
                      </div>
                      <div>
                        <p className="font-medium text-sm">{title}</p>
                        <p className="text-xs text-gray-600">{titleBn}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
