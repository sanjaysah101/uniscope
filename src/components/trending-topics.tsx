import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Hash } from "lucide-react";

const trendingTopics = [
  { tag: "stanford-acceptance", posts: 45, trend: "up" },
  { tag: "computer-science", posts: 234, trend: "up" },
  { tag: "study-abroad", posts: 89, trend: "up" },
  { tag: "scholarships", posts: 156, trend: "stable" },
  { tag: "career-advice", posts: 78, trend: "up" },
  { tag: "internships", posts: 123, trend: "down" },
  { tag: "graduate-school", posts: 67, trend: "up" },
  { tag: "student-life", posts: 198, trend: "stable" },
];

export function TrendingTopics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Trending Topics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {trendingTopics.slice(0, 6).map((topic, index) => (
            <div key={topic.tag} className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <span className="text-xs font-medium">{index + 1}</span>
                  <Hash className="w-3 h-3" />
                </div>
                <span className="text-sm font-medium truncate">
                  {topic.tag}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  {topic.posts}
                </span>
                <div
                  className={`w-2 h-2 rounded-full ${
                    topic.trend === "up"
                      ? "bg-green-500"
                      : topic.trend === "down"
                        ? "bg-red-500"
                        : "bg-gray-400"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
