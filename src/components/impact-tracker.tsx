"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Search, MessageSquare, TrendingUp } from "lucide-react";

interface ImpactMetrics {
  studentsHelped: number;
  comparisonsCompleted: number;
  questionsAnswered: number;
  activeUsers: number;
}

export function ImpactTracker() {
  const [metrics, setMetrics] = useState<ImpactMetrics>({
    studentsHelped: 12847,
    comparisonsCompleted: 45623,
    questionsAnswered: 8934,
    activeUsers: 234,
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        studentsHelped: prev.studentsHelped + Math.floor(Math.random() * 3),
        comparisonsCompleted:
          prev.comparisonsCompleted + Math.floor(Math.random() * 5),
        questionsAnswered:
          prev.questionsAnswered + Math.floor(Math.random() * 2),
        activeUsers: 200 + Math.floor(Math.random() * 100),
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <Badge variant="secondary" className="mb-2">
            <TrendingUp className="w-3 h-3 mr-1" />
            Live Impact Metrics
          </Badge>
          <h3 className="text-lg font-semibold text-foreground">
            Real-time Social Impact
          </h3>
          <p className="text-sm text-muted-foreground">
            Tracking our mission to democratize education access
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Users className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-xl font-bold text-green-700">
              {metrics.studentsHelped.toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground">Students Helped</div>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Search className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-xl font-bold text-blue-700">
              {metrics.comparisonsCompleted.toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground">Comparisons</div>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <MessageSquare className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-xl font-bold text-purple-700">
              {metrics.questionsAnswered.toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground">AI Responses</div>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="text-xl font-bold text-orange-700">
              {metrics.activeUsers}
            </div>
            <div className="text-xs text-muted-foreground">Active Now</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
