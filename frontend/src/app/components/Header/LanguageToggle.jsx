"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "bn" : "en")}
      className="flex items-center gap-1 text-primary-foreground hover:bg-white/20"
    >
      <Globe size={16} />
      <span className="text-sm font-medium">
        {language === "en" ? "বাং" : "EN"}
      </span>
    </Button>
  );
};

export default LanguageToggle;
