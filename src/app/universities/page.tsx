"use client";

import {
  BookOpen,
  Calendar,
  ExternalLink,
  MapPin,
  Search,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ComparisonWidget } from "@/components/comparison-widget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data - in production this would come from your database
const universities = [
  {
    id: "univ_1",
    name: "Stanford University",
    description:
      "A leading research university known for innovation and entrepreneurship",
    location: "Stanford, CA, USA",
    website: "https://stanford.edu",
    logo: "/stanford-university-logo.png",
    establishedYear: 1885,
    type: "Private",
    accreditation: "WASC",
    rating: 4.8,
    studentCount: 17249,
    coursesCount: 65,
    averageFee: 58416,
    country: "USA",
  },
  {
    id: "univ_2",
    name: "MIT",
    description:
      "Massachusetts Institute of Technology - Premier institution for science and technology",
    location: "Cambridge, MA, USA",
    website: "https://mit.edu",
    logo: "/mit-logo-generic.png",
    establishedYear: 1861,
    type: "Private",
    accreditation: "NEASC",
    rating: 4.9,
    studentCount: 11934,
    coursesCount: 58,
    averageFee: 57986,
    country: "USA",
  },
  {
    id: "univ_3",
    name: "UC Berkeley",
    description:
      "University of California, Berkeley - Top public research university",
    location: "Berkeley, CA, USA",
    website: "https://berkeley.edu",
    logo: "/uc-berkeley-logo.png",
    establishedYear: 1868,
    type: "Public",
    accreditation: "WASC",
    rating: 4.7,
    studentCount: 45057,
    coursesCount: 130,
    averageFee: 14254,
    country: "USA",
  },
];

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const filteredAndSortedUniversities = useMemo(() => {
    const filtered = universities.filter((university) => {
      const matchesSearch =
        university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        university.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        university.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType =
        typeFilter === "all" || university.type.toLowerCase() === typeFilter;
      const matchesLocation =
        locationFilter === "all" ||
        university.country.toLowerCase() === locationFilter;

      return matchesSearch && matchesType && matchesLocation;
    });

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        case "students":
          return b.studentCount - a.studentCount;
        case "established":
          return b.establishedYear - a.establishedYear;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, typeFilter, locationFilter, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Page Header */}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Explore Universities
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Discover top universities worldwide. Compare programs, fees, and
                find the perfect fit for your educational journey.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search universities, locations, or programs..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="University Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={locationFilter}
                  onValueChange={setLocationFilter}
                >
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  Showing {filteredAndSortedUniversities.length} of{" "}
                  {universities.length} universities
                  {searchTerm && (
                    <span className="ml-2 text-primary">
                      for "{searchTerm}"
                    </span>
                  )}
                </p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="students">Student Count</SelectItem>
                    <SelectItem value="established">
                      Established Year
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-6">
                {filteredAndSortedUniversities.length > 0 ? (
                  filteredAndSortedUniversities.map((university) => (
                    <Card
                      key={university.id}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* University Logo */}
                          <div className="flex-shrink-0">
                            <img
                              src={university.logo || "/placeholder.svg"}
                              alt={`${university.name} logo`}
                              className="w-20 h-20 rounded-lg object-cover border border-border"
                            />
                          </div>

                          {/* University Info */}
                          <div className="flex-1 space-y-4">
                            <div>
                              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                <h3 className="text-2xl font-bold text-foreground">
                                  {university.name}
                                </h3>
                                <div className="flex items-center gap-2">
                                  <Badge variant="secondary">
                                    {university.type}
                                  </Badge>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-medium">
                                      {university.rating}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <p className="text-muted-foreground mb-3">
                                {university.description}
                              </p>

                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {university.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  Est. {university.establishedYear}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="w-4 h-4" />
                                  {university.studentCount.toLocaleString()}{" "}
                                  students
                                </div>
                                <div className="flex items-center gap-1">
                                  <BookOpen className="w-4 h-4" />
                                  {university.coursesCount} programs
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                              <Link href={`/universities/${university.id}`}>
                                <Button className="w-full sm:w-auto">
                                  View Details
                                </Button>
                              </Link>
                              <Button
                                variant="outline"
                                className="w-full sm:w-auto bg-transparent"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Visit Website
                              </Button>
                              <Button
                                variant="outline"
                                className="w-full sm:w-auto bg-transparent"
                              >
                                Add to Compare
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="text-muted-foreground mb-4">
                      <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <h3 className="text-lg font-medium mb-2">
                        No universities found
                      </h3>
                      <p>
                        Try adjusting your search terms or filters to find more
                        results.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm("");
                        setTypeFilter("all");
                        setLocationFilter("all");
                      }}
                    >
                      Clear all filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <ComparisonWidget universities={universities} />

              <Card>
                <CardHeader>
                  <CardTitle>Popular Searches</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={() => setSearchTerm("Computer Science")}
                    >
                      Computer Science Programs
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={() => setSearchTerm("Business")}
                    >
                      Business Schools
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={() => setSearchTerm("Engineering")}
                    >
                      Engineering Programs
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={() => setSearchTerm("Medical")}
                    >
                      Medical Schools
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
