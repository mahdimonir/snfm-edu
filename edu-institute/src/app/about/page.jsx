import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Target, Users } from "lucide-react";

const About = () => {
  const achievements = [
    {
      year: "1999",
      milestone: "College Established",
      milestoneBn: "কলেজ প্রতিষ্ঠা",
    },
    {
      year: "2005",
      milestone: "First Graduation Ceremony",
      milestoneBn: "প্রথম সমাবর্তন",
    },
    {
      year: "2010",
      milestone: "Science Department Added",
      milestoneBn: "বিজ্ঞান বিভাগ যোগ",
    },
    {
      year: "2015",
      milestone: "Digital Campus Initiative",
      milestoneBn: "ডিজিটাল ক্যাম্পাস উদ্যোগ",
    },
    {
      year: "2020",
      milestone: "Online Learning Platform",
      milestoneBn: "অনলাইন শিক্ষা প্ল্যাটফর্ম",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Us
              <span className="block text-2xl mt-2 opacity-90">
                আমাদের সম্পর্কে
              </span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              ২৫ বছরের অভিজ্ঞতায় সমৃদ্ধ একটি প্রতিষ্ঠান যা মানসম্পন্ন শিক্ষার
              মাধ্যমে আগামীর নেতৃত্ব তৈরি করছে।
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Our Mission
                    <span className="block text-base text-primary">
                      আমাদের লক্ষ্য
                    </span>
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To provide quality education that empowers students with
                  knowledge, skills, and values necessary for success in their
                  personal and professional lives.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  মানসম্পন্ন শিক্ষা প্রদানের মাধ্যমে শিক্ষার্থীদের ব্যক্তিগত ও
                  পেশাগত জীবনে সফলতার জন্য প্রয়োজনীয় জ্ঞান, দক্ষতা ও মূল্যবোধে
                  সমৃদ্ধ করা।
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Our Vision
                    <span className="block text-base text-primary">
                      আমাদের স্বপ্ন
                    </span>
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To be a leading educational institution that contributes to
                  building a knowledge-based society through excellence in
                  teaching, learning, and research.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  শিক্ষা, শেখা ও গবেষণায় উৎকর্ষতার মাধ্যমে জ্ঞানভিত্তিক সমাজ
                  গড়তে অবদান রাখা একটি অগ্রণী শিক্ষা প্রতিষ্ঠান হয়ে ওঠা।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Impact
            <span className="block text-lg text-primary mt-2">
              আমাদের প্রভাব
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  3,500+
                </div>
                <p className="text-gray-600">Total Students</p>
                <p className="text-sm text-gray-500">মোট শিক্ষার্থী</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  120+
                </div>
                <p className="text-gray-600">Faculty Members</p>
                <p className="text-sm text-gray-500">শিক্ষকমণ্ডলী</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">15</div>
                <p className="text-gray-600">Departments</p>
                <p className="text-sm text-gray-500">বিভাগসমূহ</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                <p className="text-gray-600">Years of Excellence</p>
                <p className="text-sm text-gray-500">উৎকর্ষতার বছর</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Journey
            <span className="block text-lg text-primary mt-2">
              আমাদের যাত্রা
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <Badge
                      variant="outline"
                      className="text-lg px-4 py-2 bg-primary text-primary-foreground"
                    >
                      {item.year}
                    </Badge>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-1">
                        {item.milestone}
                      </h3>
                      <p className="text-gray-600">{item.milestoneBn}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
            <span className="block text-lg text-primary mt-2">
              আমাদের মূল মূল্যবোধ
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Excellence
                  <span className="block text-sm text-primary">উৎকর্ষতা</span>
                </h3>
                <p className="text-gray-600">
                  Striving for the highest standards in education and personal
                  development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Integrity
                  <span className="block text-sm text-primary">সততা</span>
                </h3>
                <p className="text-gray-600">
                  Maintaining honesty, transparency, and ethical behavior in all
                  our actions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Innovation
                  <span className="block text-sm text-primary">উদ্ভাবন</span>
                </h3>
                <p className="text-gray-600">
                  Embracing new ideas and technologies to enhance the learning
                  experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
