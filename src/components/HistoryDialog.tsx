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
import { History } from "lucide-react";

interface HistoryDialogProps {
  history: CourseOutline[];
}

export function HistoryDialog({ history }: HistoryDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <History className="h-4 w-4" />
          History ({history.length})
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Course Generation History</DialogTitle>
        </DialogHeader>
        
        {history.length > 0 ? (
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-4">
              {history.map((course) => (
                <CourseCard key={course.id} course={course} />
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