"use client";

import {
  DollarSign,
  ExternalLink,
  Filter,
  GraduationCap,
  Search,
  Star,
  Users,
} from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Scholarship {
  id: string;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  eligibility: string[];
  description: string;
  requirements: string[];
  category: string;
  level: string;
  field: string;
  country: string;
  applicationUrl: string;
  matchScore?: number;
}

const SCHOLARSHIPS: Scholarship[] = [
  {
    id: "sch_001",
    title: "Gates Cambridge Scholarship",
    provider: "University of Cambridge",
    amount: "Full tuition + living expenses",
    deadline: "2024-12-01",
    eligibility: [
      "International students",
      "Graduate programs",
      "Academic excellence",
    ],
    description:
      "Prestigious scholarship for outstanding international students to pursue graduate studies at Cambridge",
    requirements: [
      "Bachelor's degree",
      "Academic transcripts",
      "Research proposal",
      "References",
    ],
    category: "Merit-based",
    level: "Graduate",
    field: "All fields",
    country: "UK",
    applicationUrl: "https://cambridge.org/gates-scholarship",
    matchScore: 95,
  },
  {
    id: "sch_002",
    title: "Rhodes Scholarship",
    provider: "Rhodes Trust",
    amount: "$70,000 per year",
    deadline: "2024-10-15",
    eligibility: ["US citizens", "Age 18-24", "Leadership experience"],
    description:
      "World's oldest international scholarship program for study at Oxford University",
    requirements: [
      "Academic excellence",
      "Leadership qualities",
      "Service commitment",
      "Personal statement",
    ],
    category: "Merit-based",
    level: "Graduate",
    field: "All fields",
    country: "UK",
    applicationUrl: "https://rhodeshouse.ox.ac.uk",
    matchScore: 88,
  },
  {
    id: "sch_003",
    title: "Fulbright Program",
    provider: "US Department of State",
    amount: "$25,000 - $50,000",
    deadline: "2024-10-31",
    eligibility: ["US citizens", "Bachelor's degree", "Research/study abroad"],
    description:
      "International educational exchange program for students, scholars, and professionals",
    requirements: [
      "Project proposal",
      "Language proficiency",
      "Cultural adaptability",
      "Academic record",
    ],
    category: "Exchange",
    level: "Graduate",
    field: "All fields",
    country: "Various",
    applicationUrl: "https://fulbright.org",
    matchScore: 82,
  },
  {
    id: "sch_004",
    title: "Google Computer Science Scholarship",
    provider: "Google",
    amount: "$10,000",
    deadline: "2024-11-15",
    eligibility: [
      "Computer Science students",
      "Underrepresented groups",
      "Academic merit",
    ],
    description:
      "Supporting underrepresented students in computer science and technology",
    requirements: [
      "CS major",
      "Academic transcripts",
      "Essays",
      "Recommendations",
    ],
    category: "Diversity",
    level: "Undergraduate",
    field: "Computer Science",
    country: "US",
    applicationUrl: "https://google.com/scholarships",
    matchScore: 91,
  },
  {
    id: "sch_005",
    title: "Chevening Scholarship",
    provider: "UK Government",
    amount: "Full funding",
    deadline: "2024-11-07",
    eligibility: ["International students", "Leadership potential", "UK study"],
    description:
      "UK government's global scholarship program for future leaders",
    requirements: [
      "Work experience",
      "Leadership examples",
      "Study plan",
      "English proficiency",
    ],
    category: "Government",
    level: "Graduate",
    field: "All fields",
    country: "UK",
    applicationUrl: "https://chevening.org",
    matchScore: 79,
  },
  {
    id: "sch_006",
    title: "STEM Women Scholarship",
    provider: "Society of Women Engineers",
    amount: "$5,000 - $15,000",
    deadline: "2024-12-15",
    eligibility: ["Women in STEM", "Academic excellence", "Financial need"],
    description:
      "Supporting women pursuing careers in science, technology, engineering, and mathematics",
    requirements: [
      "STEM major",
      "GPA 3.5+",
      "Financial documentation",
      "Personal statement",
    ],
    category: "Diversity",
    level: "Undergraduate",
    field: "STEM",
    country: "US",
    applicationUrl: "https://swe.org/scholarships",
    matchScore: 86,
  },
  {
    id: "sch_007",
    title: "Commonwealth Scholarship",
    provider: "Commonwealth Scholarship Commission",
    amount: "Full tuition + allowances",
    deadline: "2024-12-31",
    eligibility: [
      "Commonwealth citizens",
      "Developing countries",
      "Graduate study",
    ],
    description:
      "Supporting students from developing Commonwealth countries to study in the UK",
    requirements: [
      "Academic merit",
      "Development impact",
      "Study plan",
      "References",
    ],
    category: "International",
    level: "Graduate",
    field: "All fields",
    country: "UK",
    applicationUrl: "https://commonwealth.org/scholarships",
    matchScore: 74,
  },
  {
    id: "sch_008",
    title: "National Merit Scholarship",
    provider: "National Merit Scholarship Corporation",
    amount: "$2,500 - $10,000",
    deadline: "2024-09-30",
    eligibility: [
      "US high school students",
      "PSAT scores",
      "Academic achievement",
    ],
    description:
      "Merit-based scholarship for high-achieving US high school students",
    requirements: [
      "PSAT/NMSQT scores",
      "Academic record",
      "School endorsement",
      "SAT confirmation",
    ],
    category: "Merit-based",
    level: "Undergraduate",
    field: "All fields",
    country: "US",
    applicationUrl: "https://nationalmerit.org",
    matchScore: 77,
  },
];

export default function ScholarshipsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [fieldFilter, setFieldFilter] = useState("all");
  const [sortBy, setSortBy] = useState("match");

  const filteredScholarships = SCHOLARSHIPS.filter((scholarship) => {
    const matchesSearch =
      scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" || scholarship.category === categoryFilter;
    const matchesLevel =
      levelFilter === "all" || scholarship.level === levelFilter;
    const matchesField =
      fieldFilter === "all" || scholarship.field === fieldFilter;

    return matchesSearch && matchesCategory && matchesLevel && matchesField;
  }).sort((a, b) => {
    if (sortBy === "match") return (b.matchScore || 0) - (a.matchScore || 0);
    if (sortBy === "amount") return b.amount.localeCompare(a.amount);
    if (sortBy === "deadline")
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Find Your Perfect <span className="text-primary">Scholarship</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Discover funding opportunities tailored to your academic goals,
            background, and achievements. We've helped students secure over
            $2.3M in scholarships.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span>$2.3M+ awarded</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span>892 recipients</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-purple-600" />
              <span>150+ opportunities</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Find Scholarships
            </CardTitle>
            <CardDescription>
              Use our smart matching system to find scholarships that fit your
              profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <Input
                  placeholder="Search scholarships..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Merit-based">Merit-based</SelectItem>
                  <SelectItem value="Diversity">Diversity</SelectItem>
                  <SelectItem value="Government">Government</SelectItem>
                  <SelectItem value="Exchange">Exchange</SelectItem>
                  <SelectItem value="International">International</SelectItem>
                </SelectContent>
              </Select>
              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="Graduate">Graduate</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="match">Best Match</SelectItem>
                  <SelectItem value="amount">Amount</SelectItem>
                  <SelectItem value="deadline">Deadline</SelectItem>
                  <SelectItem value="title">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found {filteredScholarships.length} scholarships matching your
            criteria
          </p>
        </div>

        {/* Scholarship Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredScholarships.map((scholarship) => (
            <Card
              key={scholarship.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg">
                        {scholarship.title}
                      </CardTitle>
                      {scholarship.matchScore &&
                        scholarship.matchScore > 85 && (
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-700"
                          >
                            <Star className="w-3 h-3 mr-1" />
                            {scholarship.matchScore}% match
                          </Badge>
                        )}
                    </div>
                    <CardDescription className="text-sm">
                      {scholarship.provider} • {scholarship.country}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary">
                      {scholarship.amount}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Due: {new Date(scholarship.deadline).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {scholarship.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Eligibility</h4>
                    <div className="flex flex-wrap gap-1">
                      {scholarship.eligibility.slice(0, 3).map((req) => (
                        <Badge key={req} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                      {scholarship.eligibility.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{scholarship.eligibility.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {scholarship.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {scholarship.level}
                      </Badge>
                    </div>
                    <Button size="sm" asChild>
                      <a
                        href={scholarship.applicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply Now
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredScholarships.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                No scholarships found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or filters to find more
                opportunities.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                  setLevelFilter("all");
                  setFieldFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Tips Section */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Scholarship Application Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Before You Apply</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Read all eligibility requirements carefully</li>
                  <li>• Prepare required documents in advance</li>
                  <li>• Check application deadlines and plan ahead</li>
                  <li>• Research the scholarship provider's values</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Application Best Practices</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Tailor your essays to each scholarship</li>
                  <li>• Highlight relevant achievements and experiences</li>
                  <li>• Get strong letters of recommendation</li>
                  <li>• Proofread everything multiple times</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
