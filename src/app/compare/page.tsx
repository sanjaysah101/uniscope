"use client";

import {
  Award,
  Calendar,
  DollarSign,
  ExternalLink,
  Plus,
  Search,
  Star,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Mock data - in production this would come from your database
const universities = [
  {
    id: "univ_1",
    name: "Stanford University",
    location: "Stanford, CA, USA",
    logo: "/stanford-university-logo.png",
    establishedYear: 1885,
    type: "Private",
    accreditation: "WASC",
    rating: 4.8,
    studentCount: 17249,
    acceptanceRate: 4.3,
    averageFee: 58416,
    courses: ["Computer Science", "Business Administration", "Engineering"],
    strengths: ["Innovation", "Research", "Silicon Valley Network"],
    website: "https://stanford.edu",
  },
  {
    id: "univ_2",
    name: "MIT",
    location: "Cambridge, MA, USA",
    logo: "/mit-logo-generic.png",
    establishedYear: 1861,
    type: "Private",
    accreditation: "NEASC",
    rating: 4.9,
    studentCount: 11934,
    acceptanceRate: 6.7,
    averageFee: 57986,
    courses: ["Electrical Engineering", "Computer Science", "Physics"],
    strengths: ["Technology", "Research", "Innovation"],
    website: "https://mit.edu",
  },
  {
    id: "univ_3",
    name: "UC Berkeley",
    location: "Berkeley, CA, USA",
    logo: "/uc-berkeley-logo.png",
    establishedYear: 1868,
    type: "Public",
    accreditation: "WASC",
    rating: 4.7,
    studentCount: 45057,
    acceptanceRate: 16.3,
    averageFee: 14254,
    courses: ["Business Administration", "Engineering", "Liberal Arts"],
    strengths: ["Public Education", "Diversity", "Research"],
    website: "https://berkeley.edu",
  },
];

export default function ComparePage() {
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([
    "univ_1",
    "univ_2",
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const selectedUnivData = universities.filter((uni) =>
    selectedUniversities.includes(uni.id),
  );
  const availableUniversities = universities.filter(
    (uni) => !selectedUniversities.includes(uni.id),
  );
  const filteredAvailable = availableUniversities.filter(
    (uni) =>
      uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const addUniversity = (universityId: string) => {
    if (selectedUniversities.length < 4) {
      setSelectedUniversities([...selectedUniversities, universityId]);
      setShowAddModal(false);
      setSearchTerm("");
    }
  };

  const removeUniversity = (universityId: string) => {
    setSelectedUniversities(
      selectedUniversities.filter((id) => id !== universityId),
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Compare Universities
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Compare universities side-by-side to make informed decisions about
            your education. Analyze fees, programs, ratings, and more.
          </p>
        </div>

        {/* Comparison Controls */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Comparing {selectedUniversities.length} of 4 universities
            </span>
            {selectedUniversities.length < 4 && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAddModal(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add University
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Save Comparison
            </Button>
            <Button variant="outline" size="sm">
              Share Comparison
            </Button>
          </div>
        </div>

        {/* Add University Modal */}
        {showAddModal && (
          <Card className="mb-6 border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Add University to Compare</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAddModal(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <CardDescription>
                Search and select a university to add to your comparison
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search universities..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="grid gap-3 max-h-60 overflow-y-auto">
                  {filteredAvailable.map((university) => (
                    <div
                      key={university.id}
                      className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer"
                      onClick={() => addUniversity(university.id)}
                      onKeyDown={() => addUniversity(university.id)}
                      role="button"
                      tabIndex={0}
                    >
                      <Image
                        src={university.logo || "/placeholder.svg"}
                        alt={`${university.name} logo`}
                        className="w-10 h-10 rounded object-cover"
                        width={40}
                        height={40}
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{university.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {university.location}
                        </p>
                      </div>
                      <Badge variant="secondary">{university.type}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Comparison Table */}
        {selectedUnivData.length > 0 ? (
          <div className="space-y-6">
            {/* University Headers */}
            <Card>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
                  <div className="hidden lg:block p-4 border-r border-border bg-muted/30">
                    <div className="font-semibold text-muted-foreground">
                      Universities
                    </div>
                  </div>
                  {selectedUnivData.map((university, index) => (
                    <div
                      key={university.id}
                      className={`p-4 ${
                        index < selectedUnivData.length - 1
                          ? "border-r border-border"
                          : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={university.logo || "/placeholder.svg"}
                          alt={`${university.name} logo`}
                          className="w-12 h-12 rounded object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-sm leading-tight">
                              {university.name}
                            </h3>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeUniversity(university.id)}
                              className="h-6 w-6 p-0 flex-shrink-0"
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {university.location}
                          </p>
                          <Badge variant="secondary" className="mt-2 text-xs">
                            {university.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comparison Rows */}
            <div className="space-y-4">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {/* Rating */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-b border-border">
                      <div className="hidden lg:block p-4 border-r border-border bg-muted/30 font-medium">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4" />
                          Rating
                        </div>
                      </div>
                      {selectedUnivData.map((university, index) => (
                        <div
                          key={university.id}
                          className={`p-4 ${
                            index < selectedUnivData.length - 1
                              ? "border-r border-border"
                              : ""
                          }`}
                        >
                          <div className="lg:hidden text-sm font-medium text-muted-foreground mb-1">
                            Rating
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">
                              {university.rating}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Established Year */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-b border-border">
                      <div className="hidden lg:block p-4 border-r border-border bg-muted/30 font-medium">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Established
                        </div>
                      </div>
                      {selectedUnivData.map((university, index) => (
                        <div
                          key={university.id}
                          className={`p-4 ${
                            index < selectedUnivData.length - 1
                              ? "border-r border-border"
                              : ""
                          }`}
                        >
                          <div className="lg:hidden text-sm font-medium text-muted-foreground mb-1">
                            Established
                          </div>
                          <span className="font-semibold">
                            {university.establishedYear}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Student Count */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-b border-border">
                      <div className="hidden lg:block p-4 border-r border-border bg-muted/30 font-medium">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Students
                        </div>
                      </div>
                      {selectedUnivData.map((university, index) => (
                        <div
                          key={university.id}
                          className={`p-4 ${
                            index < selectedUnivData.length - 1
                              ? "border-r border-border"
                              : ""
                          }`}
                        >
                          <div className="lg:hidden text-sm font-medium text-muted-foreground mb-1">
                            Students
                          </div>
                          <span className="font-semibold">
                            {university.studentCount.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Accreditation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
                      <div className="hidden lg:block p-4 border-r border-border bg-muted/30 font-medium">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Accreditation
                        </div>
                      </div>
                      {selectedUnivData.map((university, index) => (
                        <div
                          key={university.id}
                          className={`p-4 ${
                            index < selectedUnivData.length - 1
                              ? "border-r border-border"
                              : ""
                          }`}
                        >
                          <div className="lg:hidden text-sm font-medium text-muted-foreground mb-1">
                            Accreditation
                          </div>
                          <span className="font-semibold">
                            {university.accreditation}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Admissions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Admissions</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {/* Acceptance Rate */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-b border-border">
                      <div className="hidden lg:block p-4 border-r border-border bg-muted/30 font-medium">
                        Acceptance Rate
                      </div>
                      {selectedUnivData.map((university, index) => (
                        <div
                          key={university.id}
                          className={`p-4 ${
                            index < selectedUnivData.length - 1
                              ? "border-r border-border"
                              : ""
                          }`}
                        >
                          <div className="lg:hidden text-sm font-medium text-muted-foreground mb-1">
                            Acceptance Rate
                          </div>
                          <span className="font-semibold">
                            {university.acceptanceRate}%
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Average Fee */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
                      <div className="hidden lg:block p-4 border-r border-border bg-muted/30 font-medium">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          Annual Tuition
                        </div>
                      </div>
                      {selectedUnivData.map((university, index) => (
                        <div
                          key={university.id}
                          className={`p-4 ${
                            index < selectedUnivData.length - 1
                              ? "border-r border-border"
                              : ""
                          }`}
                        >
                          <div className="lg:hidden text-sm font-medium text-muted-foreground mb-1">
                            Annual Tuition
                          </div>
                          <span className="font-semibold">
                            ${university.averageFee.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Programs</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
                    <div className="hidden lg:block p-4 border-r border-border bg-muted/30 font-medium">
                      Top Courses
                    </div>
                    {selectedUnivData.map((university, index) => (
                      <div
                        key={university.id}
                        className={`p-4 ${
                          index < selectedUnivData.length - 1
                            ? "border-r border-border"
                            : ""
                        }`}
                      >
                        <div className="lg:hidden text-sm font-medium text-muted-foreground mb-2">
                          Top Courses
                        </div>
                        <div className="space-y-1">
                          {university.courses.map((course) => (
                            <Badge
                              key={university.id}
                              variant="outline"
                              className="text-xs mr-1 mb-1"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Strengths */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Strengths</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
                    <div className="hidden lg:block p-4 border-r border-border bg-muted/30 font-medium">
                      Strengths
                    </div>
                    {selectedUnivData.map((university, index) => (
                      <div
                        key={university.id}
                        className={`p-4 ${
                          index < selectedUnivData.length - 1
                            ? "border-r border-border"
                            : ""
                        }`}
                      >
                        <div className="lg:hidden text-sm font-medium text-muted-foreground mb-2">
                          Strengths
                        </div>
                        <div className="space-y-1">
                          {university.strengths.map((strength) => (
                            <div key={strength} className="text-sm">
                              • {strength}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <Card>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
                  <div className="hidden lg:block p-4 border-r border-border bg-muted/30 font-medium">
                    Actions
                  </div>
                  {selectedUnivData.map((university, index) => (
                    <div
                      key={university.id}
                      className={`p-4 ${
                        index < selectedUnivData.length - 1
                          ? "border-r border-border"
                          : ""
                      }`}
                    >
                      <div className="lg:hidden text-sm font-medium text-muted-foreground mb-2">
                        Actions
                      </div>
                      <div className="space-y-2">
                        <Link href={`/universities/${university.id}`}>
                          <Button size="sm" className="w-full">
                            View Details
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full bg-transparent"
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Visit Website
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <div className="text-muted-foreground mb-4">
                No universities selected for comparison
              </div>
              <Button onClick={() => setShowAddModal(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Universities to Compare
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
