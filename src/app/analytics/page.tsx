"use client";

import {
  BarChart3,
  Globe,
  GraduationCap,
  Heart,
  MessageSquare,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AnalyticsPage() {
  // Mock analytics data - in real app, this would come from API
  const impactMetrics = {
    studentsHelped: 12847,
    universitiesCompared: 45623,
    questionsAnswered: 8934,
    connectionsFormed: 3421,
    scholarshipsFound: 892,
    decisionsSupported: 7654,
  };

  const realtimeStats = {
    activeUsers: 234,
    comparisonsToday: 156,
    chatSessionsToday: 89,
    newRegistrations: 23,
  };

  const monthlyGrowth = {
    users: 23.5,
    engagement: 18.2,
    comparisons: 31.4,
    aiInteractions: 45.7,
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Impact Overview */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Social Impact Dashboard
          </h2>
          <p className="text-muted-foreground text-lg">
            Measuring our impact on educational accessibility and student
            success
          </p>
        </div>

        {/* Key Impact Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700"
                >
                  +23.5% this month
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-green-700">
                {impactMetrics.studentsHelped.toLocaleString()}
              </CardTitle>
              <CardDescription>
                Students Helped Make Better Decisions
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-blue-600" />
                </div>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700"
                >
                  +31.4% this month
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-blue-700">
                {impactMetrics.universitiesCompared.toLocaleString()}
              </CardTitle>
              <CardDescription>
                University Comparisons Completed
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-700"
                >
                  +45.7% this month
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-purple-700">
                {impactMetrics.questionsAnswered.toLocaleString()}
              </CardTitle>
              <CardDescription>AI-Powered Questions Answered</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-orange-600" />
                </div>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-700"
                >
                  +18.2% this month
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-orange-700">
                {impactMetrics.connectionsFormed.toLocaleString()}
              </CardTitle>
              <CardDescription>Student Connections Formed</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-emerald-600" />
                </div>
                <Badge
                  variant="secondary"
                  className="bg-emerald-100 text-emerald-700"
                >
                  +27.8% this month
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-emerald-700">
                {impactMetrics.scholarshipsFound.toLocaleString()}
              </CardTitle>
              <CardDescription>
                Scholarship Opportunities Matched
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-indigo-600" />
                </div>
                <Badge
                  variant="secondary"
                  className="bg-indigo-100 text-indigo-700"
                >
                  +19.3% this month
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-indigo-700">
                {impactMetrics.decisionsSupported.toLocaleString()}
              </CardTitle>
              <CardDescription>Educational Decisions Supported</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Real-time Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Real-time Activity
              </CardTitle>
              <CardDescription>Live platform usage statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Active Users
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold">
                      {realtimeStats.activeUsers}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Comparisons Today
                  </span>
                  <span className="font-semibold">
                    {realtimeStats.comparisonsToday}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    AI Chat Sessions
                  </span>
                  <span className="font-semibold">
                    {realtimeStats.chatSessionsToday}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    New Registrations
                  </span>
                  <span className="font-semibold">
                    {realtimeStats.newRegistrations}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Global Reach
              </CardTitle>
              <CardDescription>
                Platform usage across different regions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    🇺🇸 United States
                  </span>
                  <span className="font-semibold">42%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    🇬🇧 United Kingdom
                  </span>
                  <span className="font-semibold">18%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    🇨🇦 Canada
                  </span>
                  <span className="font-semibold">12%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    🇦🇺 Australia
                  </span>
                  <span className="font-semibold">8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    🌍 Other Countries
                  </span>
                  <span className="font-semibold">20%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Stories */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Success Stories & Impact</CardTitle>
            <CardDescription>
              Real stories from students who found their path through Uniscope
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  Sarah M., California
                </p>
                <p className="text-sm">
                  "Uniscope helped me compare 15 universities for my computer
                  science degree. The AI chatbot answered all my questions about
                  admission requirements, and I connected with current students.
                  Now I'm at Stanford!"
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  James K., London
                </p>
                <p className="text-sm">
                  "The scholarship matching feature found me 3 opportunities I
                  never knew existed. I saved over £20,000 on my Oxford
                  education thanks to Uniscope's comprehensive database."
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  Priya S., Mumbai
                </p>
                <p className="text-sm">
                  "As a first-generation college student, I had no idea where to
                  start. Uniscope's community helped me understand the
                  application process and choose the right university for my
                  goals."
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  Alex R., Toronto
                </p>
                <p className="text-sm">
                  "The comparison tool made it easy to evaluate programs across
                  different countries. I found the perfect engineering program
                  that matched my budget and career aspirations."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="text-center bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Mission to Democratize Education
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every student deserves access to quality educational guidance.
              Help us reach more students and create greater impact in
              educational accessibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/community">
                <Button size="lg" className="w-full sm:w-auto">
                  Join Our Community
                </Button>
              </Link>
              <Link href="/universities">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-transparent"
                >
                  Explore Universities
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
