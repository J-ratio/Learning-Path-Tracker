import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { Topic } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface TopicModalProps {
  topic: Topic | null;
  isOpen: boolean;
  onClose: () => void;
  completedTopics: Set<string>;
  resourceProgress: Record<string, Record<string, boolean>>;
  onMarkComplete: (topicName: string) => void;
  onUpdateResource: (topicName: string, resourceName: string, isCompleted: boolean) => void;
}

export default function TopicModal({ 
  topic, 
  isOpen, 
  onClose, 
  completedTopics,
  resourceProgress,
  onMarkComplete,
  onUpdateResource
}: TopicModalProps) {
  const [localResourceProgress, setLocalResourceProgress] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (topic && resourceProgress[topic.topic]) {
      setLocalResourceProgress(resourceProgress[topic.topic]);
    } else if (topic) {
      setLocalResourceProgress({});
    }
  }, [topic, resourceProgress]);

  if (!topic) return null;

  const isCompleted = completedTopics.has(topic.topic);

  const handleResourceChange = (resourceName: string, checked: boolean) => {
    setLocalResourceProgress(prev => ({ ...prev, [resourceName]: checked }));
    onUpdateResource(topic.topic, resourceName, checked);
  };

  const handleMarkComplete = () => {
    onMarkComplete(topic.topic);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50" data-testid="topic-modal">
          {/* Backdrop with blur effect */}
          <motion.div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Bottom horizontal bar */}
          <motion.div 
            className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border max-h-[70vh] overflow-hidden"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", duration: 0.4, damping: 25 }}
          >
              {/* Modal Header */}
              <div className="border-b border-border/30 px-8 py-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground" data-testid="modal-title">
                    {topic.topic}
                  </h2>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={onClose}
                    className="text-muted-foreground hover:text-foreground"
                    data-testid="button-close-modal"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
              </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(70vh-140px)]">
              <div className="px-8 py-6 space-y-8">
                  {/* Prerequisites Section */}
                  {topic.prerequisites.length > 0 && (
                    <div data-testid="prerequisites-section">
                      <h3 className="text-lg font-semibold mb-4 text-foreground">Prerequisites</h3>
                      <div className="space-y-2">
                        {topic.prerequisites.map((prereq, index) => {
                          const isPrereqCompleted = completedTopics.has(prereq);
                          return (
                            <div 
                              key={index}
                              className="flex items-center space-x-4 py-3 px-4 bg-transparent border border-border/20 rounded-lg hover:bg-muted/10 transition-colors"
                              data-testid={`prerequisite-${prereq.replace(/\s+/g, '-').toLowerCase()}`}
                            >
                              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                isPrereqCompleted ? 'bg-primary border-primary' : 'border-muted-foreground'
                              }`}>
                                {isPrereqCompleted && <Check className="w-3 h-3 text-primary-foreground" />}
                              </div>
                              <span className={`text-base font-medium ${
                                isPrereqCompleted ? 'text-foreground' : 'text-muted-foreground'
                              }`}>
                                {prereq}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Resources Section */}
                  <div data-testid="resources-section">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Learning Resources</h3>
                    <div className="space-y-2">
                      {topic.resources.map((resource, index) => {
                        const isResourceCompleted = localResourceProgress[resource.name] || false;
                        return (
                          <div 
                            key={index}
                            className="group flex items-center space-x-4 py-4 px-4 bg-transparent border border-border/20 rounded-lg hover:bg-muted/10 hover:border-border/40 transition-all duration-200"
                            data-testid={`resource-${resource.name.replace(/\s+/g, '-').toLowerCase()}`}
                          >
                            <Checkbox
                              checked={isResourceCompleted}
                              onCheckedChange={(checked) => handleResourceChange(resource.name, !!checked)}
                              className="w-5 h-5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                              data-testid={`checkbox-resource-${resource.name.replace(/\s+/g, '-').toLowerCase()}`}
                            />
                            <div className="flex-1">
                              {resource.link ? (
                                <a
                                  href={resource.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-base font-medium text-accent hover:text-accent/80 transition-colors underline-offset-4 hover:underline"
                                  data-testid={`link-resource-${resource.name.replace(/\s+/g, '-').toLowerCase()}`}
                                >
                                  {resource.name}
                                </a>
                              ) : (
                                <span className="text-base font-medium text-foreground">{resource.name}</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-border/30 px-8 py-6">
              <Button
                className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  isCompleted ? 
                  'bg-primary/20 text-primary border border-primary/30 cursor-not-allowed' :
                  'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:scale-[1.02]'
                }`}
                disabled={isCompleted}
                onClick={handleMarkComplete}
                data-testid="button-mark-complete"
              >
                {isCompleted ? '✓ Completed' : 'Mark as Complete'}
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
