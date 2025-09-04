"use client";
import { BookOpen, Bot, Search, Star, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";
import { ImpactTracker } from "@/components/impact-tracker";
import { ScholarshipMatcher } from "@/components/scholarship-matcher";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 px-4 animate-fade-in"
        role="main"
        aria-labelledby="hero-heading"
      >
        <div className="container mx-auto text-center max-w-4xl">
          <Badge
            variant="secondary"
            className="mb-4 text-xs sm:text-sm animate-scale-in"
          >
            <TrendingUp
              className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
              aria-hidden="true"
            />
            <span className="hidden sm:inline">
              Helping 12,847+ students find their perfect university
            </span>
            <span className="sm:hidden">12,847+ students helped</span>
          </Badge>
          {user ? (
            <>
              <h2
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight"
              >
                Welcome back,
                <span className="text-primary"> {user.name.split(" ")[0]}</span>
                !
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-2xl mx-auto px-2">
                Continue exploring universities, connect with fellow students,
                and make the most of your educational journey.
              </p>
            </>
          ) : (
            <>
              <h2
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight"
              >
                Your Complete Guide to
                <span className="text-primary"> Higher Education</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-2xl mx-auto px-2">
                Compare universities, connect with students, get AI-powered
                support, and make informed decisions about your educational
                journey.
              </p>
            </>
          )}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/universities" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 btn-enhanced focus-visible:ring-enhanced"
              >
                <Search
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  aria-hidden="true"
                />
                Explore Universities
              </Button>
            </Link>
            <Link href="/community" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 bg-transparent btn-enhanced focus-visible:ring-enhanced"
              >
                <Users
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  aria-hidden="true"
                />
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Tracker Section */}
      <section className="py-8 px-4" aria-labelledby="impact-heading">
        <div className="container mx-auto max-w-4xl">
          <h2 id="impact-heading" className="sr-only">
            Platform Impact Metrics
          </h2>
          <ImpactTracker />
        </div>
      </section>

      {/* Scholarship Matcher Section */}
      <section className="py-8 px-4" aria-labelledby="scholarship-heading">
        <div className="container mx-auto max-w-4xl">
          <h2 id="scholarship-heading" className="sr-only">
            Scholarship Matching Tool
          </h2>
          <ScholarshipMatcher />
        </div>
      </section>

      {/* Features Grid */}
      <section
        className="py-12 sm:py-16 px-4 bg-muted/30"
        aria-labelledby="features-heading"
      >
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h3
              id="features-heading"
              className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-2"
            >
              Everything You Need in One Platform
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              From university comparison to community support, we've got every
              aspect of your educational journey covered.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            role="list"
          >
            <Card
              className="border-border card-enhanced focus-within:ring-2 focus-within:ring-ring"
              role="listitem"
            >
              <CardHeader className="pb-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2"
                  aria-hidden="true"
                >
                  <Search className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  University Comparison
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Compare fees, courses, rankings, and more across multiple
                  universities side-by-side.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="border-border card-enhanced focus-within:ring-2 focus-within:ring-ring"
              role="listitem"
            >
              <CardHeader className="pb-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2"
                  aria-hidden="true"
                >
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  Student Community
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Connect with current students, share experiences, and get real
                  insights about university life.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="border-border card-enhanced focus-within:ring-2 focus-within:ring-ring sm:col-span-2 lg:col-span-1"
              role="listitem"
            >
              <CardHeader className="pb-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-2"
                  aria-hidden="true"
                >
                  <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  24/7 AI Support
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Get instant answers to your questions about admissions,
                  courses, and university life.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="border-border card-enhanced focus-within:ring-2 focus-within:ring-ring"
              role="listitem"
            >
              <CardHeader className="pb-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2"
                  aria-hidden="true"
                >
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  Course Reviews
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Read detailed reviews from students who've taken the courses
                  you're interested in.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="border-border card-enhanced focus-within:ring-2 focus-within:ring-ring"
              role="listitem"
            >
              <CardHeader className="pb-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2"
                  aria-hidden="true"
                >
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  University Profiles
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Comprehensive profiles with official details, social links,
                  and student testimonials.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="border-border card-enhanced focus-within:ring-2 focus-within:ring-ring"
              role="listitem"
            >
              <CardHeader className="pb-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-2"
                  aria-hidden="true"
                >
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  Educational Content
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Access bite-sized educational content, study materials, and
                  exam preparation resources.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 px-4"
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-primary/5 card-enhanced">
            <CardContent className="pt-6 sm:pt-8 px-4 sm:px-6">
              <h3
                id="cta-heading"
                className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4"
              >
                Ready to Start Your Journey?
              </h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Join thousands of students who are making smarter educational
                decisions with Uniscope.
              </p>
              <Button
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 btn-enhanced focus-visible:ring-enhanced"
              >
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t border-border bg-muted/30 py-8 sm:py-12 px-4"
        role="contentinfo"
      >
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded flex items-center justify-center"
              aria-hidden="true"
            >
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground text-lg sm:text-xl">
              Uniscope
            </span>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base">
            Empowering students to make informed educational decisions.
          </p>
        </div>
      </footer>
    </div>
  );
}
