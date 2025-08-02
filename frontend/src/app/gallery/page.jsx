"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  MapPin,
} from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock gallery data
  const galleryItems = [
    {
      id: 1,
      title: "Annual Sports Day 2024",
      titleBn: "বার্ষিক ক্রীড়া দিবস ২০২ৄ",
      category: "sports",
      date: "2024-07-10",
      location: "College Ground",
      locationBn: "কলেজ মাঠ",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop",
      ],
      description:
        "Annual sports competition with various athletic events and student participation.",
      descriptionBn:
        "বিভিন্ন ক্রীড়া ইভেন্ট ও শিক্ষার্থী অংশগ্রহণসহ বার্ষিক ক্রীড়া প্রতিযোগিতা।",
    },
    {
      id: 2,
      title: "Cultural Program 2024",
      titleBn: "সাংস্কৃতিক অনুষ্ঠান ২০২ৄ",
      category: "cultural",
      date: "2024-06-15",
      location: "College Auditorium",
      locationBn: "কলেজ অডিটোরিয়াম",
      images: [
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop",
      ],
      description:
        "Students showcasing their talents in music, dance, and drama performances.",
      descriptionBn:
        "সঙ্গীত, নৃত্য ও নাট্য পরিবেশনায় শিক্ষার্থীদের প্রতিভা প্রদর্শন।",
    },
    {
      id: 3,
      title: "Science Fair 2024",
      titleBn: "বিজ্ঞান মেলা ২০২ৄ",
      category: "academic",
      date: "2024-05-20",
      location: "Science Building",
      locationBn: "বিজ্ঞান ভবন",
      images: [
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      ],
      description:
        "Student projects and experiments displayed in the annual science exhibition.",
      descriptionBn:
        "বার্ষিক বিজ্ঞান প্রদর্শনীতে শিক্ষার্থীদের প্রকল্প ও পরীক্ষা প্রদর্শনী।",
    },
    {
      id: 4,
      title: "Graduation Ceremony 2024",
      titleBn: "সমাবর্তন অনুষ্ঠান ২০২ৄ",
      category: "ceremony",
      date: "2024-04-25",
      location: "Main Auditorium",
      locationBn: "প্রধান অডিটোরিয়াম",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      ],
      description:
        "Celebrating the achievements of our graduating students in a memorable ceremony.",
      descriptionBn:
        "একটি স্মরণীয় অনুষ্ঠানে আমাদের স্নাতক শিক্ষার্থীদের অর্জন উদযাপন।",
    },
    {
      id: 5,
      title: "Campus Life",
      titleBn: "ক্যাম্পাস জীবন",
      category: "campus",
      date: "2024-03-10",
      location: "College Campus",
      locationBn: "কলেজ ক্যাম্পাস",
      images: [
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop",
      ],
      description:
        "Daily life and activities of students in our beautiful campus environment.",
      descriptionBn:
        "আমাদের সুন্দর ক্যাম্পাস পরিবেশে শিক্ষার্থীদের দৈনন্দিন জীবন ও কার্যক্রম।",
    },
    {
      id: 6,
      title: "Workshop & Seminars",
      titleBn: "কর্মশালা ও সেমিনার",
      category: "academic",
      date: "2024-02-15",
      location: "Conference Hall",
      locationBn: "সম্মেলন কক্ষ",
      images: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
      ],
      description:
        "Educational workshops and seminars conducted by experts and faculty members.",
      descriptionBn:
        "বিশেষজ্ঞ ও অনুষদ সদস্যদের দ্বারা পরিচালিত শিক্ষামূলক কর্মশালা ও সেমিনার।",
    },
  ];

  const categories = [
    { id: "all", label: "All Photos", labelBn: "সব ছবি" },
    { id: "sports", label: "Sports", labelBn: "ক্রীড়া" },
    { id: "cultural", label: "Cultural", labelBn: "সাংস্কৃতিক" },
    { id: "academic", label: "Academic", labelBn: "একাডেমিক" },
    { id: "ceremony", label: "Ceremonies", labelBn: "অনুষ্ঠান" },
    { id: "campus", label: "Campus Life", labelBn: "ক্যাম্পাস জীবন" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const featuredImages = galleryItems
    .flatMap((item) => item.images)
    .slice(0, 5);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredImages.length) % featuredImages.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="h-8 w-8" />
              <h1 className="text-4xl md:text-5xl font-bold">Photo Gallery</h1>
            </div>
            <p className="text-xl opacity-90">ছবির গ্যালারি</p>
            <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
              Explore memorable moments and events from our college life through
              this visual journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Slider */}
      <section className="py-8 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Featured Photos
            <span className="block text-sm text-primary mt-1">
              বিশেষ ছবিসমূহ
            </span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={featuredImages[currentSlide]}
                alt="Featured"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="flex justify-center gap-2 mt-4">
              {featuredImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className="flex flex-col items-center gap-1 h-auto py-3 px-4"
              >
                <span>{category.label}</span>
                <span className="text-xs opacity-75">{category.labelBn}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No photos found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors">
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant="secondary"
                          className="bg-white/90 text-gray-900"
                        >
                          {item.images.length} photos
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {item.titleBn}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(item.date).toLocaleDateString("en-GB")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>
                          {item.location} / {item.locationBn}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex gap-2">
                      <Button variant="default" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        View All
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Archive Gallery
            <span className="block text-lg text-primary mt-2">
              সংরক্ষণাগার গ্যালারি
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[2023, 2022, 2021, 2020, 2019, 2018].map((year) => (
              <Card
                key={year}
                className="text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {year}
                  </div>
                  <p className="text-sm text-gray-600">View Photos</p>
                  <p className="text-xs text-gray-500">ছবি দেখুন</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
