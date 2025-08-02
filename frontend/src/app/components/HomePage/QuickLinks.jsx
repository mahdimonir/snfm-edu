"use client";

import Link from "next/link";

export default function QuickLinks({ links }) {
  return (
    <section className="py-8 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {links.map(({ icon: Icon, label, labelBn, href }, i) => (
            <Link
              key={i}
              href={href}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <p className="font-semibold text-gray-900">{label}</p>
                <p className="text-sm text-gray-600">{labelBn}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
