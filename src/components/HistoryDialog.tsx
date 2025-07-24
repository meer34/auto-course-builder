import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CourseCard, type CourseOutline } from "@/components/CourseCard";
import { History, Clock, Target } from "lucide-react";

interface HistoryDialogProps {
  history?: CourseOutline[];
  onSelectCourse: (course: CourseOutline) => void;
}

export function HistoryDialog({ history, onSelectCourse }: HistoryDialogProps) {
  const historyCount = history?.length || 0;
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <History className="h-4 w-4" />
          History ({historyCount})
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Course Generation History</DialogTitle>
        </DialogHeader>
        
        {history && history.length > 0 ? (
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-2">
              {history.map((course) => (
                <div
                  key={course.id}
                  onClick={() => onSelectCourse(course)}
                  className="p-4 border border-border rounded-lg hover:bg-muted cursor-pointer transition-colors"
                >
                  <h3 className="font-semibold text-foreground mb-1">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      {course.difficulty}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {course.estimatedTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="text-center py-8">
            <div className="w-12 h-12 mx-auto mb-3 bg-muted rounded-full flex items-center justify-center">
              <History className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">
              No course history yet. Generate your first course to see it here!
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}