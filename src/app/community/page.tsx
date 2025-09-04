"use client";

import {
  FileText,
  MessageCircle,
  Newspaper,
  PenTool,
  Plus,
  Search,
  StickyNote,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/components/auth-provider";
import { PostCard } from "@/components/post-card";
import { TrendingTopics } from "@/components/trending-topics";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

// Mock data for posts
const mockPosts = [
  {
    id: "post_1",
    type: "post",
    title: "Just got accepted to Stanford!",
    content:
      "After months of preparation and waiting, I finally got my acceptance letter! The application process was intense but totally worth it. Happy to share my experience and answer any questions about the process.",
    author: {
      id: "user_1",
      name: "Sarah Johnson",
      avatar: "/student-avatar.png",
      university: "Stanford University",
      year: "Incoming Freshman",
    },
    tags: ["stanford", "acceptance", "undergraduate"],
    likes: 24,
    comments: 8,
    createdAt: "2024-01-15T10:30:00Z",
    isLiked: false,
  },
  {
    id: "post_2",
    type: "blog",
    title: "Complete Guide to Computer Science Interviews",
    content:
      "After going through multiple tech interviews during my job search, I wanted to share a comprehensive guide that covers everything from data structures to system design. This guide helped me land offers at top tech companies.",
    author: {
      id: "user_2",
      name: "Michael Chen",
      avatar: "/student-avatar-2.png",
      university: "MIT",
      year: "Senior",
    },
    tags: ["computer-science", "interviews", "career"],
    likes: 156,
    comments: 23,
    createdAt: "2024-01-14T15:45:00Z",
    isLiked: true,
  },
  {
    id: "post_3",
    type: "news",
    title: "New Scholarship Program Announced for STEM Students",
    content:
      "The National Science Foundation just announced a new $50M scholarship program for underrepresented students in STEM fields. Applications open next month with awards up to $10,000 per year.",
    author: {
      id: "user_3",
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?key=avatar3",
      university: "UC Berkeley",
      year: "Graduate Student",
    },
    tags: ["scholarships", "stem", "funding"],
    likes: 89,
    comments: 12,
    createdAt: "2024-01-13T09:20:00Z",
    isLiked: false,
  },
  {
    id: "post_4",
    type: "note",
    title: "Calculus II Study Notes - Integration Techniques",
    content:
      "Sharing my comprehensive notes on integration techniques from Calculus II. Covers substitution, integration by parts, partial fractions, and trigonometric integrals with plenty of examples.",
    author: {
      id: "user_4",
      name: "David Kim",
      avatar: "/placeholder.svg?key=avatar4",
      university: "Harvard University",
      year: "Sophomore",
    },
    tags: ["calculus", "mathematics", "study-notes"],
    likes: 67,
    comments: 15,
    createdAt: "2024-01-12T14:10:00Z",
    isLiked: true,
  },
];

export default function CommunityPage() {
  const { user } = useAuth();
  const [posts, setPosts] = useState(mockPosts);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPost, setNewPost] = useState({
    type: "post",
    title: "",
    content: "",
    tags: "",
  });

  const filteredPosts = posts.filter((post) => {
    const matchesFilter =
      selectedFilter === "all" || post.type === selectedFilter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesFilter && matchesSearch;
  });

  const handleCreatePost = () => {
    if (!user || !newPost.title || !newPost.content) return;

    const post = {
      id: `post_${Date.now()}`,
      type: newPost.type,
      title: newPost.title,
      content: newPost.content,
      author: {
        id: user.id,
        name: user.name,
        avatar: user.avatar || "/placeholder.svg",
        university: "Your University",
        year: "Student",
      },
      tags: newPost.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString(),
      isLiked: false,
    };

    setPosts([post, ...posts]);
    setNewPost({ type: "post", title: "", content: "", tags: "" });
    setShowCreatePost(false);
  };

  const handleLikePost = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked,
          };
        }
        return post;
      }),
    );
  };

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case "blog":
        return <FileText className="w-4 h-4" />;
      case "news":
        return <Newspaper className="w-4 h-4" />;
      case "note":
        return <StickyNote className="w-4 h-4" />;
      default:
        return <MessageCircle className="w-4 h-4" />;
    }
  };

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case "blog":
        return "bg-blue-500";
      case "news":
        return "bg-green-500";
      case "note":
        return "bg-yellow-500";
      default:
        return "bg-primary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  Student Community
                </h1>
                <p className="text-muted-foreground">
                  Connect with fellow students, share experiences, and support
                  each other's educational journey.
                </p>
              </div>
              {user && (
                <Dialog open={showCreatePost} onOpenChange={setShowCreatePost}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Create Post
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Create New Post</DialogTitle>
                      <DialogDescription>
                        Share your thoughts, experiences, or resources with the
                        community.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="post-type">Post Type</Label>
                        <Select
                          value={newPost.type}
                          onValueChange={(value) =>
                            setNewPost({ ...newPost, type: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="post">
                              <div className="flex items-center gap-2">
                                <MessageCircle className="w-4 h-4" />
                                General Post
                              </div>
                            </SelectItem>
                            <SelectItem value="blog">
                              <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                Blog Article
                              </div>
                            </SelectItem>
                            <SelectItem value="news">
                              <div className="flex items-center gap-2">
                                <Newspaper className="w-4 h-4" />
                                News & Updates
                              </div>
                            </SelectItem>
                            <SelectItem value="note">
                              <div className="flex items-center gap-2">
                                <StickyNote className="w-4 h-4" />
                                Study Notes
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="post-title">Title</Label>
                        <Input
                          id="post-title"
                          placeholder="Enter a compelling title..."
                          value={newPost.title}
                          onChange={(e) =>
                            setNewPost({ ...newPost, title: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="post-content">Content</Label>
                        <Textarea
                          id="post-content"
                          placeholder="Share your thoughts, experiences, or resources..."
                          className="min-h-32"
                          value={newPost.content}
                          onChange={(e) =>
                            setNewPost({ ...newPost, content: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="post-tags">
                          Tags (comma-separated)
                        </Label>
                        <Input
                          id="post-tags"
                          placeholder="e.g., computer-science, study-tips, career"
                          value={newPost.tags}
                          onChange={(e) =>
                            setNewPost({ ...newPost, tags: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex gap-3 pt-4">
                        <Button
                          onClick={handleCreatePost}
                          disabled={!newPost.title || !newPost.content}
                        >
                          <PenTool className="w-4 h-4 mr-2" />
                          Publish Post
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setShowCreatePost(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search posts, topics, or tags..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Posts</SelectItem>
                  <SelectItem value="post">General Posts</SelectItem>
                  <SelectItem value="blog">Blog Articles</SelectItem>
                  <SelectItem value="news">News & Updates</SelectItem>
                  <SelectItem value="note">Study Notes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    onLike={() => handleLikePost(post.id)}
                  />
                ))
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      No posts found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {searchTerm || selectedFilter !== "all"
                        ? "Try adjusting your search or filters"
                        : "Be the first to share something with the community!"}
                    </p>
                    {user && (
                      <Button onClick={() => setShowCreatePost(true)}>
                        <Plus className="w-4 h-4 mr-2" />
                        Create First Post
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Community Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Community Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Active Members
                      </span>
                      <span className="font-semibold">12,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Posts Today</span>
                      <span className="font-semibold">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Universities
                      </span>
                      <span className="font-semibold">2,341</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <TrendingTopics />

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Study Groups
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Find Study Buddy
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Ask Question
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Career Advice
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
