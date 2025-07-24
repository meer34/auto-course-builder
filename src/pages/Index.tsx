import { useState } from "react";
import { CourseHeader } from "@/components/CourseHeader";
import { CourseCard, type CourseOutline } from "@/components/CourseCard";

const Index = () => {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [currentCourse, setCurrentCourse] = useState<CourseOutline | null>(null);
  const [history, setHistory] = useState<CourseOutline[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateCourse = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newCourse: CourseOutline = {
      id: Date.now().toString(),
      title: `Complete ${topic} Course`,
      description: `A comprehensive ${difficulty} level course covering all essential aspects of ${topic}. This course is designed to take you from basics to advanced concepts with practical examples and hands-on projects.`,
      difficulty,
      estimatedTime: difficulty === "beginner" ? "4-6 weeks" : difficulty === "intermediate" ? "6-8 weeks" : "8-12 weeks",
      modules: [
        {
          id: "1",
          title: `Introduction to ${topic}`,
          duration: "2 hours",
          topics: ["Overview", "History", "Core Concepts", "Getting Started"]
        },
        {
          id: "2", 
          title: `Fundamentals of ${topic}`,
          duration: "3 hours",
          topics: ["Basic Principles", "Key Terminology", "Common Practices", "Best Practices"]
        },
        {
          id: "3",
          title: `Advanced ${topic} Techniques`,
          duration: "4 hours", 
          topics: ["Advanced Concepts", "Real-world Applications", "Case Studies", "Problem Solving"]
        },
        {
          id: "4",
          title: `${topic} in Practice`,
          duration: "3 hours",
          topics: ["Hands-on Projects", "Industry Examples", "Tools & Resources", "Next Steps"]
        }
      ]
    };
    
    // Add previous course to history if it exists
    if (currentCourse) {
      setHistory(prev => [currentCourse, ...prev]);
    }
    
    setCurrentCourse(newCourse);
    setIsGenerating(false);
  };

  const handleSelectCourse = (course: CourseOutline) => {
    // Move current course to history if it exists
    if (currentCourse) {
      setHistory(prev => [currentCourse, ...prev]);
    }
    setCurrentCourse(course);
  };

  return (
    <div className="min-h-screen bg-background">
      <CourseHeader
        topic={topic}
        difficulty={difficulty}
        onTopicChange={setTopic}
        onDifficultyChange={setDifficulty}
        onGenerateCourse={handleGenerateCourse}
        isGenerating={isGenerating}
        history={history}
        onSelectCourse={handleSelectCourse}
      />
      
      {/* Content section with top padding to account for fixed header */}
      <div className="pt-[180px] pb-8">
        <div className="max-w-4xl mx-auto px-4">
          {currentCourse ? (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Generated Course Outline
                </h2>
                <p className="text-muted-foreground">
                  Your AI-generated course is ready for review
                </p>
              </div>
              
              <CourseCard course={currentCourse} />
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Ready to Create Your Course?
                </h3>
                <p className="text-muted-foreground">
                  Enter a topic and difficulty level above to generate a comprehensive course outline with AI.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
