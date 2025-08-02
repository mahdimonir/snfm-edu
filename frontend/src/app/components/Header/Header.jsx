"use client";

import LanguageToggle from "@/components/Header/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { instituteDetails as ins } from "@/data/mockData";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const { t, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { key: "nav.home", href: "/" },
    { key: "nav.about", href: "/about" },
    { key: "nav.notices", href: "/notices" },
    { key: "nav.gallery", href: "/gallery" },
    { key: "nav.contact", href: "/contact" },
  ];

  const academicDropdown = [
    { key: "nav.apply", href: "/apply" },
    { key: "nav.results", href: "/results" },
    { key: "nav.teachers", href: "/teachers" },
    { key: "nav.students", href: "/students" },
    { key: "governing_body", href: "/governing-body" },
  ];

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar for md+ */}
      <div className="bg-primary text-primary-foreground hidden md:flex">
        <div className="container mx-auto px-4 py-2 flex justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>{ins.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>{ins.email}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span>{language === "en" ? ins.slogan : ins.sloganBn}</span>
            <LanguageToggle />
          </div>
        </div>
      </div>

      {/* Logo and Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src={ins.logo} alt="logo" className="h-14 w-14" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                {language === "en" ? ins.name : ins.nameBn}
              </h1>
              <p className="text-sm text-muted-foreground">
                {language === "en" ? ins.tagline : ins.taglineBn}
              </p>
              <p className="text-xs text-muted-foreground">
                EIIN: {ins.eiin} | Code: {ins.schoolCode}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-700 hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}

            {/* Academic Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:bg-accent hover:text-accent-foreground rounded-md">
                {t("nav.academic")}
                <ChevronDown size={14} />
              </button>
              <div className="absolute left-0 top-full mt-2 min-w-[12rem] bg-white border shadow-lg rounded-md z-40 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200">
                <div className="py-2">
                  {academicDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-white border-t max-h-[80vh] overflow-y-auto px-4 py-4 space-y-2"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-primary text-primary-foreground"
                  : "text-gray-700 hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}

          <div className="pt-2 border-t">
            <span className="block text-sm font-semibold mb-2">
              {t("nav.academic")}
            </span>
            {academicDropdown.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-accent hover:text-accent-foreground"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          <div className="py-4 border-t bg-primary text-primary-foreground">
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
