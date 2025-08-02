"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroCarousel = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Excellence in Education",
      titleBn: "শিক্ষার উৎকর্ষতা",
      description:
        "Nurturing young minds for a brighter future with quality education and moral values.",
      descriptionBn:
        "গুণগত শিক্ষা এবং নৈতিক মূল্যবোধের সাথে উজ্জ্বল ভবিষ্যতের জন্য তরুণ মনের পরিচর্যা।",
      image: "/hero-campus-1.jpg",
    },
    {
      title: "Modern Facilities",
      titleBn: "আধুনিক সুবিধা",
      description:
        "State-of-the-art classrooms, laboratories, and digital learning environments.",
      descriptionBn:
        "অত্যাধুনিক শ্রেণীকক্ষ, গবেষণাগার এবং ডিজিটাল শিক্ষার পরিবেশ।",
      image: "/hero-campus-2.jpg",
    },
    {
      title: "Skilled Teachers",
      titleBn: "দক্ষ শিক্ষকগণ",
      description:
        "Experienced and dedicated teachers committed to student success.",
      descriptionBn:
        "শিক্ষার্থীদের সাফল্যের জন্য অভিজ্ঞ এবং নিবেদিতপ্রাণ শিক্ষকগণ।",
      image: "/hero-campus-3.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {language === "bn" ? slide.titleBn : slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  {language === "bn" ? slide.descriptionBn : slide.description}
                </p>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  {language === "bn" ? "আরও পড়ুন" : "Read More"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
