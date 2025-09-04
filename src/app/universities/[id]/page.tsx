import {
  Award,
  Calendar,
  DollarSign,
  Globe,
  Heart,
  Mail,
  MapPin,
  Phone,
  Share2,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data - in production this would come from your database
const universityData = {
  univ_1: {
    id: "univ_1",
    name: "Stanford University",
    description:
      "Stanford University is a leading research university known for innovation and entrepreneurship. Located in the heart of Silicon Valley, Stanford has been at the forefront of technological advancement and academic excellence since 1885.",
    location: "Stanford, CA, USA",
    website: "https://stanford.edu",
    logo: "/stanford-university-logo.png",
    coverImage: "/stanford-university-campus.png",
    establishedYear: 1885,
    type: "Private",
    accreditation: "WASC",
    rating: 4.8,
    studentCount: 17249,
    email: "admissions@stanford.edu",
    phone: "+1-650-723-2300",
    courses: [
      {
        id: "course_1",
        title: "Computer Science",
        description:
          "Comprehensive program covering algorithms, software engineering, and AI",
        duration: "4 years",
        level: "Undergraduate",
        tuitionFee: 58416,
      },
      {
        id: "course_2",
        title: "Business Administration",
        description: "MBA program focusing on leadership and innovation",
        duration: "2 years",
        level: "Graduate",
        tuitionFee: 74706,
      },
    ],
    reviews: [
      {
        id: "review_1",
        rating: 5,
        title: "Excellent academic environment",
        content:
          "Stanford provides an incredible learning environment with world-class faculty and cutting-edge research opportunities.",
        author: "Sarah Johnson",
        avatar: "/student-avatar.png",
        date: "2024-01-15",
      },
      {
        id: "review_2",
        rating: 4,
        title: "Great networking opportunities",
        content:
          "The alumni network is amazing and the location in Silicon Valley provides excellent internship and job opportunities.",
        author: "Michael Chen",
        avatar: "/student-avatar-2.png",
        date: "2024-01-10",
      },
    ],
  },
};

interface PageProps {
  params: {
    id: string;
  };
}

export default function UniversityDetailPage({ params }: PageProps) {
  const university = universityData[params.id as keyof typeof universityData];

  if (!university) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            University Not Found
          </h1>
          <p className="text-muted-foreground mb-4">
            The university you're looking for doesn't exist.
          </p>
          <Link href="/universities">
            <Button>Back to Universities</Button>
          </Link>
        </div>
      </div>
    );
  }

  const averageRating =
    university.reviews.reduce((acc, review) => acc + review.rating, 0) /
    university.reviews.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src={university.coverImage || "/placeholder.svg"}
          alt={`${university.name} campus`}
          className="w-full h-64 md:h-80 object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4">
              <Image
                src={university.logo || "/placeholder.svg"}
                alt={`${university.name} logo`}
                width={96}
                height={96}
                className="w-24 h-24 rounded-lg border-4 border-white/20 bg-white/10 backdrop-blur-sm"
              />
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold">
                    {university.name}
                  </h1>
                  <Badge variant="secondary" className="w-fit">
                    {university.type}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
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
                    {university.studentCount.toLocaleString()} students
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {averageRating.toFixed(1)} ({university.reviews.length}{" "}
                    reviews)
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary">
                  <Heart className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="secondary">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="fees">Fees</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {university.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {university.description}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {university.studentCount.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Students
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {university.courses.length}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Programs
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {averageRating.toFixed(1)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Rating
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {new Date().getFullYear() -
                            university.establishedYear}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Years Old
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-muted-foreground" />
                      <a
                        href={university.website}
                        className="text-primary hover:underline"
                      >
                        Official Website
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">{university.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">{university.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">
                        Accredited by {university.accreditation}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full">Apply Now</Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Request Information
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Schedule Visit
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Add to Compare
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid gap-6">
              {university.courses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </div>
                      <Badge>{course.level}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Duration: {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        Tuition: ${course.tuitionFee.toLocaleString()}/year
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm">View Details</Button>
                      <Button variant="outline" size="sm">
                        Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fees" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fee Structure 2024-2025</CardTitle>
                <CardDescription>
                  Detailed breakdown of tuition and other fees
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {university.courses.map((course) => (
                    <div
                      key={course.id}
                      className="border border-border rounded-lg p-4"
                    >
                      <h4 className="font-semibold mb-2">
                        {course.title} ({course.level})
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">
                            Tuition Fee:
                          </span>
                          <div className="font-semibold">
                            ${course.tuitionFee.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            Other Fees:
                          </span>
                          <div className="font-semibold">$2,000</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            Total Annual:
                          </span>
                          <div className="font-semibold text-primary">
                            ${(course.tuitionFee + 2000).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Overall Rating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {averageRating.toFixed(1)}
                    </div>
                    <div className="flex justify-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= averageRating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Based on {university.reviews.length} reviews
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="md:col-span-2 space-y-4">
                {university.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage
                            src={review.avatar || "/placeholder.svg"}
                          />
                          <AvatarFallback>
                            {review.author.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{review.author}</h4>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-4 h-4 ${
                                    star <= review.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                          <h5 className="font-medium mb-2">{review.title}</h5>
                          <p className="text-muted-foreground text-sm">
                            {review.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
