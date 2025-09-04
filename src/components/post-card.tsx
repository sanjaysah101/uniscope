"use client";

import {
  Bookmark,
  FileText,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Newspaper,
  Send,
  Share2,
  StickyNote,
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { formatDistanceToNow } from "@/lib/date-fns";

interface Post {
  id: string;
  type: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    university: string;
    year: string;
  };
  tags: string[];
  likes: number;
  comments: number;
  createdAt: string;
  isLiked: boolean;
}

interface PostCardProps {
  post: Post;
  onLike: () => void;
}

export function PostCard({ post, onLike }: PostCardProps) {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [isBookmarked, setIsBookmarked] = useState(false);

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

  const getPostTypeLabel = (type: string) => {
    switch (type) {
      case "blog":
        return "Blog";
      case "news":
        return "News";
      case "note":
        return "Notes";
      default:
        return "Post";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
              />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-sm">{post.author.name}</h4>
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-white ${getPostTypeColor(
                    post.type,
                  )}`}
                >
                  {getPostTypeIcon(post.type)}
                </div>
                <Badge variant="outline" className="text-xs">
                  {getPostTypeLabel(post.type)}
                </Badge>
              </div>
              <div className="text-xs text-muted-foreground">
                {post.author.year} at {post.author.university} •{" "}
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                })}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Post Content */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-balance">
            {post.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            {post.content}
          </p>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onLike}
              className={`gap-2 ${post.isLiked ? "text-red-500" : ""}`}
            >
              <Heart
                className={`w-4 h-4 ${post.isLiked ? "fill-current" : ""}`}
              />
              {post.likes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowComments(!showComments)}
              className="gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              {post.comments}
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={isBookmarked ? "text-primary" : ""}
          >
            <Bookmark
              className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`}
            />
          </Button>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="space-y-4 pt-4 border-t border-border">
            {/* Add Comment */}
            <div className="flex gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback>You</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <Textarea
                  placeholder="Write a comment..."
                  className="min-h-20 resize-none"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <div className="flex justify-end">
                  <Button size="sm" disabled={!newComment.trim()}>
                    <Send className="w-3 h-3 mr-2" />
                    Comment
                  </Button>
                </div>
              </div>
            </div>

            {/* Sample Comments */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="font-medium text-sm mb-1">John Doe</div>
                    <p className="text-sm">
                      Congratulations! That's amazing news. Stanford has an
                      incredible program.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <button className="hover:text-foreground">Like</button>
                    <button className="hover:text-foreground">Reply</button>
                    <span>2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
