import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Users } from "lucide-react";

export interface CourseOutline {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  estimatedTime: string;
  modules: Array<{
    id: string;
    title: string;
    duration: string;
    topics: string[];
  }>;
}

interface CourseCardProps {
  course: CourseOutline;
}

export function CourseCard({ course }: CourseCardProps) {
  const difficultyColors = {
    beginner: "bg-green-100 text-green-800 border-green-200",
    intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200", 
    advanced: "bg-red-100 text-red-800 border-red-200"
  };

  return (
    <Card className="p-6 shadow-medium hover:shadow-lg transition-shadow duration-200 bg-surface border border-border">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {course.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {course.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge 
            variant="outline" 
            className={`capitalize ${difficultyColors[course.difficulty as keyof typeof difficultyColors]}`}
          >
            {course.difficulty}
          </Badge>
        </div>
      </div>
      
      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{course.estimatedTime}</span>
        </div>
        <div className="flex items-center gap-1">
          <BookOpen className="w-4 h-4" />
          <span>{course.modules.length} modules</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>Self-paced</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="font-medium text-foreground">Course Modules</h4>
        <div className="space-y-2">
          {course.modules.map((module, index) => (
            <div 
              key={module.id}
              className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border/50"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center justify-center">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h5 className="font-medium text-foreground text-sm">
                    {module.title}
                  </h5>
                  <span className="text-xs text-muted-foreground">
                    {module.duration}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {module.topics.map((topic, topicIndex) => (
                    <span 
                      key={topicIndex}
                      className="text-xs px-2 py-1 bg-background rounded border border-border text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}