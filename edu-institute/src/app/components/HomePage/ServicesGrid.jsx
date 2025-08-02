"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function ServicesGrid({ services }) {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Services
            <span className="block text-lg text-primary">আমাদের সেবাসমূহ</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            আমরা শিক্ষার্থীদের সর্বোচ্চ মানের সেবা প্রদানে প্রতিশ্রুতিবদ্ধ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(
            (
              { icon: Icon, title, titleBn, description, descriptionBn, link },
              i
            ) => (
              <Card key={i} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 mb-2">
                    {title}
                    <span className="block text-sm text-primary font-normal">
                      {titleBn}
                    </span>
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{description}</p>
                  <p className="text-gray-500 text-xs mb-4">{descriptionBn}</p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link
                      href={link}
                      className="flex items-center justify-center"
                    >
                      Learn More <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
}
