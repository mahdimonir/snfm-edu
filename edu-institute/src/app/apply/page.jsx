"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
  Calendar,
  CheckCircle,
  DollarSign,
  Download,
  FileText,
  Info,
  Upload,
  UserPlus,
} from "lucide-react";
import { useState } from "react";

const Apply = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: "",
      fullNameBn: "",
      fatherName: "",
      motherName: "",
      dateOfBirth: "",
      gender: "",
      religion: "",
      nationality: "Bangladeshi",
      email: "",
      phone: "",
      emergencyContact: "",
    },
    academicInfo: {
      sscBoard: "",
      sscYear: "",
      sscGpa: "",
      sscRoll: "",
      hscBoard: "",
      hscYear: "",
      hscGpa: "",
      hscRoll: "",
      desiredDepartment: "",
      subjects: [],
    },
    addressInfo: {
      presentAddress: "",
      permanentAddress: "",
      district: "",
      upazila: "",
      postCode: "",
    },
    documents: {
      photo: null,
      sscCertificate: null,
      hscCertificate: null,
      testimonial: null,
    },
  });

  const departments = [
    { value: "ba_bangla", label: "B.A. in Bangla", labelBn: "বাংলায় স্নাতক" },
    {
      value: "ba_english",
      label: "B.A. in English",
      labelBn: "ইংরেজিতে স্নাতক",
    },
    {
      value: "ba_history",
      label: "B.A. in History",
      labelBn: "ইতিহাসে স্নাতক",
    },
    {
      value: "ba_political_science",
      label: "B.A. in Political Science",
      labelBn: "রাষ্ট্রবিজ্ঞানে স্নাতক",
    },
    {
      value: "bsc_physics",
      label: "B.Sc. in Physics",
      labelBn: "পদার্থবিজ্ঞানে স্নাতক",
    },
    {
      value: "bsc_chemistry",
      label: "B.Sc. in Chemistry",
      labelBn: "রসায়নে স্নাতক",
    },
    {
      value: "bsc_mathematics",
      label: "B.Sc. in Mathematics",
      labelBn: "গণিতে স্নাতক",
    },
    {
      value: "bcom_accounting",
      label: "B.Com in Accounting",
      labelBn: "হিসাবরক্ষণে স্নাতক",
    },
    {
      value: "bcom_management",
      label: "B.Com in Management",
      labelBn: "ব্যবস্থাপনায় স্নাতক",
    },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Application Submitted!",
      description:
        "Your application has been successfully submitted. You will receive a confirmation email shortly.",
    });
  };

  const steps = [
    { id: 1, title: "Personal Info", titleBn: "ব্যক্তিগত তথ্য" },
    { id: 2, title: "Academic Info", titleBn: "শিক্ষাগত তথ্য" },
    { id: 3, title: "Address", titleBn: "ঠিকানা" },
    { id: 4, title: "Documents", titleBn: "দলিলপত্র" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <UserPlus className="h-8 w-8" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Online Application
              </h1>
            </div>
            <p className="text-xl opacity-90">অনলাইন আবেদন</p>
            <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
              Apply for admission to Dhaka Adarsha Degree College. Fill out the
              form below to start your academic journey with us.
            </p>
          </div>
        </div>
      </section>

      {/* Application Information */}
      <section className="py-8 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Application Deadline</h3>
                <p className="text-primary font-bold">August 15, 2024</p>
                <p className="text-sm text-gray-600">আবেদনের শেষ তারিখ</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Application Fee</h3>
                <p className="text-primary font-bold">৳500</p>
                <p className="text-sm text-gray-600">আবেদন ফি</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Required Documents</h3>
                <p className="text-primary font-bold">4 Items</p>
                <p className="text-sm text-gray-600">প্রয়োজনীয় কাগজপত্র</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      currentStep >= step.id
                        ? "bg-primary border-primary text-white"
                        : "border-gray-300 text-gray-500"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <span>{step.id}</span>
                    )}
                  </div>
                  <div className="ml-2 text-center">
                    <p
                      className={`text-sm font-medium ${
                        currentStep >= step.id
                          ? "text-primary"
                          : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500">{step.titleBn}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-1 mx-4 ${
                        currentStep > step.id ? "bg-primary" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                {steps[currentStep - 1].title}
                <span className="block text-base text-primary font-normal mt-1">
                  {steps[currentStep - 1].titleBn}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name (English) *</Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.personalInfo.fullName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: {
                              ...formData.personalInfo,
                              fullName: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fullNameBn">Full Name (Bangla) *</Label>
                      <Input
                        id="fullNameBn"
                        placeholder="আপনার পূর্ণ নাম লিখুন"
                        value={formData.personalInfo.fullNameBn}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: {
                              ...formData.personalInfo,
                              fullNameBn: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fatherName">Father's Name *</Label>
                      <Input
                        id="fatherName"
                        placeholder="Father's name"
                        value={formData.personalInfo.fatherName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: {
                              ...formData.personalInfo,
                              fatherName: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherName">Mother's Name *</Label>
                      <Input
                        id="motherName"
                        placeholder="Mother's name"
                        value={formData.personalInfo.motherName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: {
                              ...formData.personalInfo,
                              motherName: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.personalInfo.dateOfBirth}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: {
                              ...formData.personalInfo,
                              dateOfBirth: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender *</Label>
                      <Select
                        value={formData.personalInfo.gender}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            personalInfo: {
                              ...formData.personalInfo,
                              gender: value,
                            },
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="religion">Religion *</Label>
                      <Select
                        value={formData.personalInfo.religion}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            personalInfo: {
                              ...formData.personalInfo,
                              religion: value,
                            },
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select religion" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="islam">Islam</SelectItem>
                          <SelectItem value="hinduism">Hinduism</SelectItem>
                          <SelectItem value="christianity">
                            Christianity
                          </SelectItem>
                          <SelectItem value="buddhism">Buddhism</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.personalInfo.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: {
                              ...formData.personalInfo,
                              email: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        placeholder="+880 1XX XXX XXXX"
                        value={formData.personalInfo.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: {
                              ...formData.personalInfo,
                              phone: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Academic Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      SSC Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sscBoard">Board *</Label>
                        <Select
                          value={formData.academicInfo.sscBoard}
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              academicInfo: {
                                ...formData.academicInfo,
                                sscBoard: value,
                              },
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select board" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dhaka">Dhaka</SelectItem>
                            <SelectItem value="chittagong">
                              Chittagong
                            </SelectItem>
                            <SelectItem value="rajshahi">Rajshahi</SelectItem>
                            <SelectItem value="sylhet">Sylhet</SelectItem>
                            <SelectItem value="barisal">Barisal</SelectItem>
                            <SelectItem value="dinajpur">Dinajpur</SelectItem>
                            <SelectItem value="comilla">Comilla</SelectItem>
                            <SelectItem value="jessore">Jessore</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sscYear">Passing Year *</Label>
                        <Select
                          value={formData.academicInfo.sscYear}
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              academicInfo: {
                                ...formData.academicInfo,
                                sscYear: value,
                              },
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent>
                            {[2024, 2023, 2022, 2021, 2020].map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sscGpa">GPA *</Label>
                        <Input
                          id="sscGpa"
                          placeholder="0.00"
                          value={formData.academicInfo.sscGpa}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              academicInfo: {
                                ...formData.academicInfo,
                                sscGpa: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sscRoll">Roll Number *</Label>
                        <Input
                          id="sscRoll"
                          placeholder="Roll no."
                          value={formData.academicInfo.sscRoll}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              academicInfo: {
                                ...formData.academicInfo,
                                sscRoll: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      HSC Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="hscBoard">Board *</Label>
                        <Select
                          value={formData.academicInfo.hscBoard}
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              academicInfo: {
                                ...formData.academicInfo,
                                hscBoard: value,
                              },
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select board" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dhaka">Dhaka</SelectItem>
                            <SelectItem value="chittagong">
                              Chittagong
                            </SelectItem>
                            <SelectItem value="rajshahi">Rajshahi</SelectItem>
                            <SelectItem value="sylhet">Sylhet</SelectItem>
                            <SelectItem value="barisal">Barisal</SelectItem>
                            <SelectItem value="dinajpur">Dinajpur</SelectItem>
                            <SelectItem value="comilla">Comilla</SelectItem>
                            <SelectItem value="jessore">Jessore</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hscYear">Passing Year *</Label>
                        <Select
                          value={formData.academicInfo.hscYear}
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              academicInfo: {
                                ...formData.academicInfo,
                                hscYear: value,
                              },
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent>
                            {[2024, 2023, 2022, 2021, 2020].map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hscGpa">GPA *</Label>
                        <Input
                          id="hscGpa"
                          placeholder="0.00"
                          value={formData.academicInfo.hscGpa}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              academicInfo: {
                                ...formData.academicInfo,
                                hscGpa: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hscRoll">Roll Number *</Label>
                        <Input
                          id="hscRoll"
                          placeholder="Roll no."
                          value={formData.academicInfo.hscRoll}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              academicInfo: {
                                ...formData.academicInfo,
                                hscRoll: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="desiredDepartment">
                      Desired Department *
                    </Label>
                    <Select
                      value={formData.academicInfo.desiredDepartment}
                      onValueChange={(value) =>
                        setFormData({
                          ...formData,
                          academicInfo: {
                            ...formData.academicInfo,
                            desiredDepartment: value,
                          },
                        })
                      }
                    >
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
                </div>
              )}

              {/* Step 3: Address Information */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="presentAddress">Present Address *</Label>
                    <Textarea
                      id="presentAddress"
                      placeholder="Enter your present address"
                      value={formData.addressInfo.presentAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          addressInfo: {
                            ...formData.addressInfo,
                            presentAddress: e.target.value,
                          },
                        })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="permanentAddress">
                      Permanent Address *
                    </Label>
                    <Textarea
                      id="permanentAddress"
                      placeholder="Enter your permanent address"
                      value={formData.addressInfo.permanentAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          addressInfo: {
                            ...formData.addressInfo,
                            permanentAddress: e.target.value,
                          },
                        })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="district">District *</Label>
                      <Input
                        id="district"
                        placeholder="District"
                        value={formData.addressInfo.district}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            addressInfo: {
                              ...formData.addressInfo,
                              district: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="upazila">Upazila *</Label>
                      <Input
                        id="upazila"
                        placeholder="Upazila"
                        value={formData.addressInfo.upazila}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            addressInfo: {
                              ...formData.addressInfo,
                              upazila: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postCode">Post Code *</Label>
                      <Input
                        id="postCode"
                        placeholder="Post code"
                        value={formData.addressInfo.postCode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            addressInfo: {
                              ...formData.addressInfo,
                              postCode: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Document Upload */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900 mb-1">
                          Document Requirements
                        </h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• All documents must be in PDF format</li>
                          <li>• Maximum file size: 2MB per document</li>
                          <li>• Ensure documents are clear and readable</li>
                          <li>
                            • Photo should be passport size (300x300px
                            recommended)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="photo">Passport Size Photo *</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">
                          Click to upload photo
                        </p>
                        <p className="text-xs text-gray-500">
                          JPG, PNG (Max 2MB)
                        </p>
                        <Input
                          type="file"
                          accept="image/*"
                          className="hidden"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="sscCertificate">SSC Certificate *</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">
                          Click to upload SSC certificate
                        </p>
                        <p className="text-xs text-gray-500">PDF (Max 2MB)</p>
                        <Input type="file" accept=".pdf" className="hidden" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="hscCertificate">HSC Certificate *</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">
                          Click to upload HSC certificate
                        </p>
                        <p className="text-xs text-gray-500">PDF (Max 2MB)</p>
                        <Input type="file" accept=".pdf" className="hidden" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="testimonial">
                        Character Certificate (Optional)
                      </Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">
                          Click to upload testimonial
                        </p>
                        <p className="text-xs text-gray-500">PDF (Max 2MB)</p>
                        <Input type="file" accept=".pdf" className="hidden" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <span className="text-primary underline cursor-pointer">
                          Terms and Conditions
                        </span>{" "}
                        and confirm that all information provided is accurate.
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm">
                        I want to receive updates about admission and college
                        events via email.
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>

                {currentStep < 4 ? (
                  <Button onClick={handleNext}>Next</Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Submit Application
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Required Documents Info */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Required Documents Checklist
            <span className="block text-sm text-primary mt-2">
              প্রয়োজনীয় কাগজপত্রের তালিকা
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Passport Size Photo",
              "SSC Certificate",
              "HSC Certificate",
              "Character Certificate",
            ].map((doc, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-medium text-sm">{doc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Application Guidelines
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
