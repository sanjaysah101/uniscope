"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { GraduationCap, DollarSign, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

interface UserProfile {
  academicLevel: string;
  fieldOfStudy: string;
  gpa: string;
  citizenship: string;
  demographics: string[];
  financialNeed: boolean;
}

export function ScholarshipMatcher() {
  const [profile, setProfile] = useState<UserProfile>({
    academicLevel: "",
    fieldOfStudy: "",
    gpa: "",
    citizenship: "",
    demographics: [],
    financialNeed: false,
  });

  const [matches, setMatches] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleDemographicChange = (demographic: string, checked: boolean) => {
    setProfile((prev) => ({
      ...prev,
      demographics: checked
        ? [...prev.demographics, demographic]
        : prev.demographics.filter((d) => d !== demographic),
    }));
  };

  const findMatches = () => {
    // Mock matching algorithm - in real app, this would call an API
    const mockMatches = [
      {
        id: "sch_004",
        title: "Google Computer Science Scholarship",
        provider: "Google",
        amount: "$10,000",
        matchScore: 95,
        reason: "Perfect match for CS students from underrepresented groups",
      },
      {
        id: "sch_006",
        title: "STEM Women Scholarship",
        provider: "Society of Women Engineers",
        amount: "$5,000 - $15,000",
        matchScore: 88,
        reason: "Excellent match for women in STEM fields",
      },
      {
        id: "sch_008",
        title: "National Merit Scholarship",
        provider: "National Merit Scholarship Corporation",
        amount: "$2,500 - $10,000",
        matchScore: 82,
        reason: "Good match based on academic achievement",
      },
    ];

    setMatches(mockMatches);
    setShowResults(true);
  };

  if (showResults) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Your Scholarship Matches
          </CardTitle>
          <CardDescription>
            Based on your profile, here are your top scholarship opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {matches.map((match) => (
              <div
                key={match.id}
                className="p-4 border rounded-lg hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold">{match.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {match.provider}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700"
                    >
                      {match.matchScore}% match
                    </Badge>
                    <div className="text-sm font-medium text-primary mt-1">
                      {match.amount}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {match.reason}
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Learn More
                  </Button>
                  <Button size="sm">Apply Now</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Found {matches.length} high-match scholarships for you
              </p>
              <Link href="/scholarships">
                <Button variant="outline" size="sm">
                  View All Scholarships
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          Scholarship Matcher
        </CardTitle>
        <CardDescription>
          Tell us about yourself to find personalized scholarship opportunities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Academic Level
              </label>
              <Select
                value={profile.academicLevel}
                onValueChange={(value) =>
                  setProfile((prev) => ({ ...prev, academicLevel: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">High School</SelectItem>
                  <SelectItem value="undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Field of Study
              </label>
              <Select
                value={profile.fieldOfStudy}
                onValueChange={(value) =>
                  setProfile((prev) => ({ ...prev, fieldOfStudy: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="computer-science">
                    Computer Science
                  </SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="medicine">Medicine</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="liberal-arts">Liberal Arts</SelectItem>
                  <SelectItem value="sciences">Sciences</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                GPA (if applicable)
              </label>
              <Input
                placeholder="e.g., 3.8"
                value={profile.gpa}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, gpa: e.target.value }))
                }
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Citizenship
              </label>
              <Select
                value={profile.citizenship}
                onValueChange={(value) =>
                  setProfile((prev) => ({ ...prev, citizenship: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select citizenship" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="international">International</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-3 block">
              Demographics (optional)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "First-generation college student",
                "Underrepresented minority",
                "Women in STEM",
                "Military/Veteran",
                "International student",
                "Community college transfer",
              ].map((demographic) => (
                <div key={demographic} className="flex items-center space-x-2">
                  <Checkbox
                    id={demographic}
                    checked={profile.demographics.includes(demographic)}
                    onCheckedChange={(checked) =>
                      handleDemographicChange(demographic, checked as boolean)
                    }
                  />
                  <label htmlFor={demographic} className="text-sm">
                    {demographic}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="financial-need"
              checked={profile.financialNeed}
              onCheckedChange={(checked) =>
                setProfile((prev) => ({
                  ...prev,
                  financialNeed: checked as boolean,
                }))
              }
            />
            <label htmlFor="financial-need" className="text-sm">
              I have demonstrated financial need
            </label>
          </div>

          <Button
            onClick={findMatches}
            className="w-full"
            disabled={!profile.academicLevel || !profile.fieldOfStudy}
          >
            <DollarSign className="w-4 h-4 mr-2" />
            Find My Scholarships
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
