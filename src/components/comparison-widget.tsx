"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Star, DollarSign } from "lucide-react";
import Link from "next/link";

interface University {
  id: string;
  name: string;
  location: string;
  logo: string;
  type: string;
  rating: number;
  studentCount: number;
  averageFee: number;
}

interface ComparisonWidgetProps {
  universities: University[];
  maxSelections?: number;
  showActions?: boolean;
}

export function ComparisonWidget({
  universities,
  maxSelections = 3,
  showActions = true,
}: ComparisonWidgetProps) {
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>(
    [],
  );

  const toggleUniversity = (universityId: string) => {
    if (selectedUniversities.includes(universityId)) {
      setSelectedUniversities(
        selectedUniversities.filter((id) => id !== universityId),
      );
    } else if (selectedUniversities.length < maxSelections) {
      setSelectedUniversities([...selectedUniversities, universityId]);
    }
  };

  const selectedUnivData = universities.filter((uni) =>
    selectedUniversities.includes(uni.id),
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Quick Compare
          <Badge variant="secondary">
            {selectedUniversities.length}/{maxSelections}
          </Badge>
        </CardTitle>
        <CardDescription>
          Select up to {maxSelections} universities to compare side-by-side
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* University Selection */}
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {universities.map((university) => (
            <div
              key={university.id}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50"
            >
              <Checkbox
                checked={selectedUniversities.includes(university.id)}
                onCheckedChange={() => toggleUniversity(university.id)}
                disabled={
                  !selectedUniversities.includes(university.id) &&
                  selectedUniversities.length >= maxSelections
                }
              />
              <img
                src={university.logo || "/placeholder.svg"}
                alt={`${university.name} logo`}
                className="w-8 h-8 rounded object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">
                  {university.name}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {university.location}
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                {university.type}
              </Badge>
            </div>
          ))}
        </div>

        {/* Selected Universities Preview */}
        {selectedUnivData.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-border">
            <h4 className="font-medium text-sm">Selected for Comparison</h4>
            {selectedUnivData.map((university) => (
              <div
                key={university.id}
                className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg"
              >
                <img
                  src={university.logo || "/placeholder.svg"}
                  alt={`${university.name} logo`}
                  className="w-6 h-6 rounded object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-xs truncate">
                    {university.name}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {university.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />$
                      {university.averageFee.toLocaleString()}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleUniversity(university.id)}
                  className="h-6 w-6 p-0"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        {showActions && selectedUniversities.length > 1 && (
          <div className="pt-4 border-t border-border">
            <Link
              href={`/compare?universities=${selectedUniversities.join(",")}`}
            >
              <Button className="w-full">Compare Selected Universities</Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
