import {
  Bell,
  BookOpen,
  Calendar,
  Camera,
  FileText,
  GraduationCap,
  Trophy,
  UserPlus,
  Users,
} from "lucide-react";

export const notices = [
  {
    id: 1,
    title: "Admission Notice for 2024-25 Academic Year",
    titleBn: "২০২৪-২৫ শিক্ষাবর্ষে ভর্তির নোটিশ",
    date: "2024-07-20",
    type: "admission",
    important: true,
  },
  {
    id: 2,
    title: "HSC Examination Result 2024",
    titleBn: "এইচএসসি পরীক্ষার ফলাফল ২০২৪",
    date: "2024-07-15",
    type: "result",
    important: true,
  },
  {
    id: 3,
    title: "Annual Sports Competition Registration",
    titleBn: "বার্ষিক ক্রীড়া প্রতিযোগিতার নিবন্ধন",
    date: "2024-07-10",
    type: "event",
    important: false,
  },
  {
    id: 4,
    title: "Library Opening Hours Extended",
    titleBn: "লাইব্রেরি খোলার সময় বৃদ্ধি",
    date: "2024-07-05",
    type: "general",
    important: false,
  },
];

export const services = [
  {
    icon: BookOpen,
    title: "Academic Programs",
    titleBn: "একাডেমিক প্রোগ্রাম",
    description: "Comprehensive degree programs in Arts, Science & Commerce",
    descriptionBn: "কলা, বিজ্ঞান ও বাণিজ্য বিভাগে সম্পূর্ণ ডিগ্রি প্রোগ্রাম",
    link: "/programs",
  },
  {
    icon: Users,
    title: "Student Services",
    titleBn: "শিক্ষার্থী সেবা",
    description: "Counseling, career guidance and student support",
    descriptionBn: "কাউন্সেলিং, ক্যারিয়ার গাইডেন্স ও শিক্ষার্থী সহায়তা",
    link: "/services",
  },
  {
    icon: GraduationCap,
    title: "Faculty",
    titleBn: "অনুষদ",
    description: "Experienced and qualified teaching staff",
    descriptionBn: "অভিজ্ঞ ও যোগ্য শিক্ষকমণ্ডলী",
    link: "/faculty",
  },
  {
    icon: Trophy,
    title: "Achievements",
    titleBn: "অর্জন",
    description: "Awards and recognitions in academics and sports",
    descriptionBn: "শিক্ষা ও ক্রীড়ায় পুরস্কার ও স্বীকৃতি",
    link: "/achievements",
  },
  {
    icon: Calendar,
    title: "Events",
    titleBn: "অনুষ্ঠান",
    description: "Cultural programs and academic events",
    descriptionBn: "সাংস্কৃতিক অনুষ্ঠান ও একাডেমিক ইভেন্ট",
    link: "/events",
  },
  {
    icon: FileText,
    title: "Resources",
    titleBn: "সম্পদ",
    description: "Library, labs and digital resources",
    descriptionBn: "লাইব্রেরি, ল্যাব ও ডিজিটাল সম্পদ",
    link: "/resources",
  },
];

export const quickLinks = [
  { icon: Bell, label: "Notices", labelBn: "নোটিশ", href: "/notices" },
  { icon: FileText, label: "Results", labelBn: "ফলাফল", href: "/results" },
  { icon: Camera, label: "Gallery", labelBn: "গ্যালারি", href: "/gallery" },
  { icon: UserPlus, label: "Apply Now", labelBn: "আবেদন করুন", href: "/apply" },
];

export const quickStats = [
  { label: "Total Students", value: "3,500+" },
  { label: "Faculty Members", value: "120+" },
  { label: "Departments", value: "15" },
  { label: "Years of Excellence", value: "25+" },
];

export const upcomingEvents = [
  {
    month: "JUL",
    day: "25",
    title: "Admission Test",
    titleBn: "ভর্তি পরীক্ষা",
  },
  {
    month: "AUG",
    day: "01",
    title: "Orientation Program",
    titleBn: "অভিষেক অনুষ্ঠান",
  },
];
