import { useState } from "react";
import { motion } from "framer-motion";
import { topicsData } from "@/lib/topics-data";
import { useLearningProgress } from "@/hooks/use-learning-progress";
import StatsOverview from "@/components/stats-overview";
import TopicCard from "@/components/topic-card";
import TopicModal from "@/components/topic-modal";
import { Button } from "@/components/ui/button";
import { Topic } from "@shared/schema";

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const {
    completedTopics,
    resourceProgress,
    isTopicUnlocked,
    markTopicComplete,
    updateResourceProgress,
    resetProgress,
    getStats
  } = useLearningProgress(topicsData);

  const stats = getStats();

  const handleTopicClick = (topic: Topic) => {
    setSelectedTopic(topic);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTopic(null);
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
      resetProgress();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              data-testid="header-title"
            >
              Learning Path Tracker
            </motion.h1>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground" data-testid="progress-display">
                Progress: <span className="text-primary font-medium">{stats.completed}</span>/<span className="text-primary font-medium">{stats.total}</span>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleResetProgress}
                className="px-3 py-1 text-xs bg-destructive/20 text-destructive hover:bg-destructive/30"
                data-testid="button-reset-progress"
              >
                Reset All
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <StatsOverview stats={stats} />

        {/* Topics Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          data-testid="topics-grid"
        >
          {topicsData.map((topic, index) => (
            <TopicCard
              key={topic.topic}
              topic={topic}
              isCompleted={completedTopics.has(topic.topic)}
              isUnlocked={isTopicUnlocked(topic)}
              index={index}
              onClick={() => handleTopicClick(topic)}
            />
          ))}
        </motion.div>
      </main>

      {/* Topic Modal */}
      <TopicModal
        topic={selectedTopic}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        completedTopics={completedTopics}
        resourceProgress={resourceProgress}
        onMarkComplete={markTopicComplete}
        onUpdateResource={updateResourceProgress}
      />
    </div>
  );
}
