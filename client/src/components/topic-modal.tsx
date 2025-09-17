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
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div 
              className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.3 }}
            >
              {/* Modal Header */}
              <div className="border-b border-border p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-foreground" data-testid="modal-title">
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
              <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
                <div className="p-6 space-y-6">
                  {/* Prerequisites Section */}
                  {topic.prerequisites.length > 0 && (
                    <div data-testid="prerequisites-section">
                      <h3 className="text-lg font-medium mb-3 text-accent">Prerequisites</h3>
                      <div className="space-y-2">
                        {topic.prerequisites.map((prereq, index) => {
                          const isPrereqCompleted = completedTopics.has(prereq);
                          return (
                            <div 
                              key={index}
                              className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg"
                              data-testid={`prerequisite-${prereq.replace(/\s+/g, '-').toLowerCase()}`}
                            >
                              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                isPrereqCompleted ? 'bg-primary border-primary' : 'border-muted-foreground'
                              }`}>
                                {isPrereqCompleted && <Check className="w-3 h-3 text-primary-foreground" />}
                              </div>
                              <span className={`text-sm ${
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
                    <h3 className="text-lg font-medium mb-3 text-secondary">Learning Resources</h3>
                    <div className="space-y-2">
                      {topic.resources.map((resource, index) => {
                        const isResourceCompleted = localResourceProgress[resource] || false;
                        return (
                          <div 
                            key={index}
                            className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg"
                            data-testid={`resource-${resource.replace(/\s+/g, '-').toLowerCase()}`}
                          >
                            <Checkbox
                              checked={isResourceCompleted}
                              onCheckedChange={(checked) => handleResourceChange(resource, !!checked)}
                              className="w-4 h-4"
                              data-testid={`checkbox-resource-${resource.replace(/\s+/g, '-').toLowerCase()}`}
                            />
                            <span className="text-sm text-foreground">{resource}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-border p-6">
                <Button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    isCompleted ? 
                    'bg-primary/50 text-primary-foreground cursor-not-allowed' :
                    'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]'
                  }`}
                  disabled={isCompleted}
                  onClick={handleMarkComplete}
                  data-testid="button-mark-complete"
                >
                  {isCompleted ? 'Completed ✓' : 'Mark as Complete'}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
