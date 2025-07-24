import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface CourseHeaderProps {
  topic: string;
  difficulty: string;
  onTopicChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
  onGenerateCourse: () => void;
  isGenerating?: boolean;
}

export function CourseHeader({
  topic,
  difficulty,
  onTopicChange,
  onDifficultyChange,
  onGenerateCourse,
  isGenerating = false
}: CourseHeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-border shadow-soft">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-foreground mb-1">
            AutoCourse.AI
          </h1>
          <p className="text-sm text-muted-foreground">
            Generate comprehensive courses on any topic with AI
          </p>
        </div>
        
        <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-1 lg:grid-cols-3 sm:gap-3">
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-foreground mb-1">
              📘 Topic
            </label>
            <Input
              value={topic}
              onChange={(e) => onTopicChange(e.target.value)}
              placeholder="e.g., AI, JavaScript, Marketing"
              className="w-full"
            />
          </div>
          
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-foreground mb-1">
              🎯 Difficulty
            </label>
            <Select value={difficulty} onValueChange={onDifficultyChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="lg:col-span-1 flex items-end">
            <Button
              variant="hero"
              size="lg"
              onClick={onGenerateCourse}
              disabled={!topic.trim() || isGenerating}
              className="w-full"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Generating...
                </>
              ) : (
                <>🚀 Generate Course</>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}