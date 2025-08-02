"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { instituteDetails as ins } from "@/data/mockData";
import {
  Clock,
  Facebook,
  Globe,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={ins.logo} alt="logo" className="h-14 w-14" />
              <div>
                <h3 className="text-lg font-bold">{t("site.name")}</h3>
                <p className="text-sm opacity-90">{t("site.slogan")}</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              {language === "en" ? ins.bio : ins.bioBn}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-primary-light pb-2">
              {t("quick_links")}
            </h3>
            <nav className="space-y-2">
              <Link
                href="/about"
                className="block text-sm hover:text-primary-light transition-colors"
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/notices"
                className="block text-sm hover:text-primary-light transition-colors"
              >
                {t("nav.notices")}
              </Link>
              <Link
                href="/results"
                className="block text-sm hover:text-primary-light transition-colors"
              >
                {t("nav.results")}
              </Link>
              <Link
                href="/gallery"
                className="block text-sm hover:text-primary-light transition-colors"
              >
                {t("nav.gallery")}
              </Link>
              <Link
                href="/apply"
                className="block text-sm hover:text-primary-light transition-colors"
              >
                {t("nav.apply")}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-primary-light pb-2">
              {t("nav.contact")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>{ins.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-sm">{ins.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-sm">{ins.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <div className="text-sm">
                  <p>{language === "en" ? ins.officeTime : ins.officeTimeBn}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Updates */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-primary-light pb-2">
              {t("follow_us")}
            </h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/YourPage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 bg-primary-light rounded-full hover:bg-primary-dark transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com/YourChannel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className="p-2 bg-primary-light rounded-full hover:bg-primary-dark transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://yourcollege.edu.bd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="p-2 bg-primary-light rounded-full hover:bg-primary-dark transition-colors"
              >
                <Globe size={20} />
              </a>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">{t("latest_updates")}</h4>
              <div className="space-y-1 text-sm opacity-90">
                <p>• Admission open for 2024-25</p>
                <p>• ২০২৪-২৫ শিক্ষাবর্ষে ভর্তি চলছে</p>
                <p>• HSC Result Published</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-dark">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="opacity-90">
              © 2025 Dhaka Adarsha Degree College. All rights reserved.
            </p>
            <p className="opacity-90">
              Developed by{" "}
              <Link
                href="https://moniruzzaman-mahdi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors"
              >
                Moniruzzaman Mahdi
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
