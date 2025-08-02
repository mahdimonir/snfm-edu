const notices = [
  {
    id: 1,
    title: "Admission Notice for 2024-25 Academic Year",
    titleBn: "২০২৪-২৫ শিক্ষাবর্ষে ভর্তির নোটিশ",
    date: "2024-07-20",
    type: "admission",
    description:
      "Online application for admission to all departments is now open. Last date for submission is August 15, 2025.",
    descriptionBn:
      "সকল বিভাগে ভর্তির জন্য অনলাইন আবেদন শুরু। আবেদনের শেষ তারিখ ১৫ আগস্ট, ২০২৪।",
    important: true,
    attachments: ["admission_form.pdf", "guidelines.pdf"],
  },
  {
    id: 2,
    title: "HSC Examination Result 2024",
    titleBn: "এইচএসসি পরীক্ষার ফলাফল ২০২৪",
    date: "2024-07-15",
    type: "result",
    description:
      "HSC examination results for all departments have been published. Students can collect their certificates from the office.",
    descriptionBn:
      "সকল বিভাগের এইচএসসি পরীক্ষার ফলাফল প্রকাশিত হয়েছে। শিক্ষার্থীরা অফিস থেকে সনদপত্র সংগ্রহ করতে পারবেন।",
    important: true,
    attachments: ["result_summary.pdf"],
  },
  {
    id: 3,
    title: "Annual Sports Competition Registration",
    titleBn: "বার্ষিক ক্রীড়া প্রতিযোগিতার নিবন্ধন",
    date: "2024-07-10",
    type: "event",
    description:
      "Registration for annual sports competition is now open. All students are encouraged to participate.",
    descriptionBn:
      "বার্ষিক ক্রীড়া প্রতিযোগিতার নিবন্ধন চলছে। সকল শিক্ষার্থীদের অংশগ্রহণের জন্য উৎসাহিত করা হচ্ছে।",
    important: false,
    attachments: ["sports_schedule.pdf"],
  },
  {
    id: 4,
    title: "Library Opening Hours Extended",
    titleBn: "লাইব্রেরি খোলার সময় বৃদ্ধি",
    date: "2024-07-05",
    type: "general",
    description:
      "Library will now remain open until 8:00 PM on weekdays to facilitate student study.",
    descriptionBn:
      "শিক্ষার্থীদের পড়াশোনার সুবিধার জন্য লাইব্রেরি এখন সপ্তাহের দিনগুলিতে রাত ৮টা পর্যন্ত খোলা থাকবে।",
    important: false,
    attachments: [],
  },
  {
    id: 5,
    title: "Scholarship Application Deadline Extended",
    titleBn: "বৃত্তি আবেদনের সময়সীমা বৃদ্ধি",
    date: "2024-06-30",
    type: "scholarship",
    description:
      "Deadline for scholarship applications has been extended to August 30, 2024.",
    descriptionBn:
      "বৃত্তি আবেদনের সময়সীমা ৩০ আগস্ট, ২০২৪ পর্যন্ত বৃদ্ধি করা হয়েছে।",
    important: true,
    attachments: ["scholarship_form.pdf"],
  },
  {
    id: 6,
    title: "Faculty Meeting Minutes",
    titleBn: "অনুষদ সভার কার্যবিবরণী",
    date: "2024-06-25",
    type: "academic",
    description:
      "Minutes from the monthly faculty meeting held on June 20, 2024.",
    descriptionBn: "২০ জুন, ২০২৪ তারিখে অনুষ্ঠিত মাসিক অনুষদ সভার কার্যবিবরণী।",
    important: false,
    attachments: ["meeting_minutes.pdf"],
  },
];

export default notices;
