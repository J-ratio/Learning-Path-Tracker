import { motion } from "framer-motion";
import { Lock, Unlock, Check } from "lucide-react";
import { Topic } from "@shared/schema";

interface TopicCardProps {
  topic: Topic;
  isCompleted: boolean;
  isUnlocked: boolean;
  index: number;
  onClick: () => void;
}

export default function TopicCard({ topic, isCompleted, isUnlocked, index, onClick }: TopicCardProps) {
  const getStatusIcon = () => {
    if (isCompleted) {
      return <Check className="w-5 h-5 text-primary" />;
    }
    if (isUnlocked) {
      return <Unlock className="w-5 h-5 text-accent" />;
    }
    return <Lock className="w-5 h-5 text-muted-foreground" />;
  };

  const getStatusText = () => {
    if (isCompleted) return "✓ Completed";
    if (isUnlocked) return "Click to start learning";
    return "Locked";
  };

  const getCardClasses = () => {
    let classes = "bg-card border border-border rounded-lg p-6 transition-all duration-300";
    
    if (isCompleted) {
      classes += " border-primary/50 bg-primary/10";
    } else if (isUnlocked) {
      classes += " cursor-pointer hover:border-accent/50 hover:bg-accent/5";
    } else {
      classes += " opacity-50 cursor-not-allowed";
    }
    
    return classes;
  };

  return (
    <motion.div
      className={getCardClasses()}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={isUnlocked && !isCompleted ? { 
        y: -5,
        boxShadow: "0 0 20px rgba(0, 255, 136, 0.3)"
      } : {}}
      onClick={isUnlocked ? onClick : undefined}
      data-testid={`topic-card-${topic.topic.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-medium text-foreground">{topic.topic}</h3>
        <div className="flex-shrink-0">
          {getStatusIcon()}
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        {topic.prerequisites.length > 0 ? (
          <div className="text-sm text-muted-foreground">
            Prerequisites: {topic.prerequisites.join(', ')}
          </div>
        ) : (
          <div className="text-sm text-accent">No prerequisites</div>
        )}
        <div className="text-sm text-muted-foreground">
          {topic.resources.length} learning resources
        </div>
      </div>

      <div className={`text-sm font-medium ${
        isCompleted ? 'text-primary' : 
        isUnlocked ? 'text-accent' : 
        'text-muted-foreground'
      }`}>
        {getStatusText()}
      </div>
    </motion.div>
  );
}
