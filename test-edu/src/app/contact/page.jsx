"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/useToast";
import {
  Clock,
  Facebook,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  Youtube,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We will get back to you soon.",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      titleBn: "ঠিকানা",
      details: [
        "123 Education Road",
        "Dhaka - 1207, Bangladesh",
        "ঢাকা - ১২০৭, বাংলাদেশ",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      titleBn: "ফোন",
      details: [
        "+880 123 456 789",
        "+880 987 654 321",
        "Emergency: +880 111 222 333",
      ],
    },
    {
      icon: Mail,
      title: "Email",
      titleBn: "ইমেইল",
      details: [
        "info@college.edu.bd",
        "admission@college.edu.bd",
        "principal@college.edu.bd",
      ],
    },
    {
      icon: Clock,
      title: "Office Hours",
      titleBn: "অফিস সময়",
      details: [
        "Sunday - Thursday",
        "8:00 AM - 5:00 PM",
        "রবি - বৃহস্পতি: সকাল ৮টা - বিকাল ৫টা",
      ],
    },
  ];

  const departments = [
    { value: "general", label: "General Inquiry", labelBn: "সাধারণ জিজ্ঞাসা" },
    { value: "admission", label: "Admission", labelBn: "ভর্তি" },
    { value: "academic", label: "Academic", labelBn: "একাডেমিক" },
    { value: "results", label: "Results", labelBn: "ফলাফল" },
    { value: "library", label: "Library", labelBn: "লাইব্রেরি" },
    { value: "accounts", label: "Accounts", labelBn: "হিসাব" },
    {
      value: "technical",
      label: "Technical Support",
      labelBn: "কারিগরি সহায়তা",
    },
  ];

  const facultyContacts = [
    {
      name: "Dr. Mohammad Rahman",
      nameBn: "ড. মোহাম্মদ রহমান",
      position: "Principal",
      positionBn: "অধ্যক্ষ",
      email: "principal@college.edu.bd",
      phone: "+880 123 456 789",
      office: "Principal Office, 2nd Floor",
    },
    {
      name: "Prof. Fatima Begum",
      nameBn: "প্রফেসর ফাতিমা বেগম",
      position: "Vice Principal",
      positionBn: "উপাধ্যক্ষ",
      email: "vprincipal@college.edu.bd",
      phone: "+880 123 456 788",
      office: "Admin Building, 1st Floor",
    },
    {
      name: "Mr. Ahmed Ali",
      nameBn: "জনাব আহমেদ আলী",
      position: "Registrar",
      positionBn: "রেজিস্ট্রার",
      email: "registrar@college.edu.bd",
      phone: "+880 123 456 787",
      office: "Registration Office, Ground Floor",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className="h-8 w-8" />
              <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            </div>
            <p className="text-xl opacity-90">যোগাযোগ</p>
            <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
              Get in touch with us for any inquiries, admission information, or
              assistance. We're here to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {info.title}
                    <span className="block text-sm text-primary font-normal">
                      {info.titleBn}
                    </span>
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send us a Message
                  <span className="block text-base text-primary font-normal mt-1">
                    আমাদের একটি বার্তা পাঠান
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+880 1XX XXX XXXX" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept.value} value={dept.value}>
                            {dept.label} / {dept.labelBn}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Enter message subject"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <div className="text-center">
                      <Navigation className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Interactive Map</p>
                      <p className="text-sm text-gray-500">
                        Location: Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button variant="outline" className="w-full">
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-red-600 text-white hover:bg-red-700"
                    >
                      <Youtube className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-primary text-white hover:bg-primary-dark"
                    >
                      <Globe className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    Stay connected with us on social media for the latest
                    updates and news.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Emergency</p>
                      <p className="text-sm text-gray-600">+880 111 222 333</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Admission Inquiry</p>
                      <p className="text-sm text-gray-600">
                        admission@college.edu.bd
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm text-gray-600">+880 123 456 789</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Contacts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Key Contacts
            <span className="block text-lg text-primary mt-2">
              প্রধান যোগাযোগ
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facultyContacts.map((faculty, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {faculty.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {faculty.name}
                  </h3>
                  <p className="text-primary font-medium mb-1">
                    {faculty.nameBn}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {faculty.position} / {faculty.positionBn}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-gray-600">{faculty.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-gray-600">{faculty.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-gray-600 text-center">
                        {faculty.office}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
            <span className="block text-lg text-primary mt-2">
              প্রায়শই জিজ্ঞাসিত প্রশ্ন
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  What are the admission requirements?
                </h3>
                <p className="text-gray-600 text-sm">
                  Minimum HSC pass with required GPA. Specific requirements vary
                  by department.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  When is the application deadline?
                </h3>
                <p className="text-gray-600 text-sm">
                  Application deadline is August 15, 2024. Late applications may
                  not be accepted.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  How can I check my admission status?
                </h3>
                <p className="text-gray-600 text-sm">
                  You can check your status online using your application ID or
                  contact the admission office.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Are scholarships available?
                </h3>
                <p className="text-gray-600 text-sm">
                  Yes, merit-based and need-based scholarships are available for
                  eligible students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
