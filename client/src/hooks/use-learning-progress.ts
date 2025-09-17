import { useState, useEffect } from "react";
import { LearningProgress, Topic } from "@shared/schema";

export function useLearningProgress(topics: Topic[]) {
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
  const [resourceProgress, setResourceProgress] = useState<Record<string, Record<string, boolean>>>({});

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('learningProgress');
    if (saved) {
      try {
        const data: LearningProgress = JSON.parse(saved);
        setCompletedTopics(new Set(data.completedTopics || []));
        setResourceProgress(data.resourceProgress || {});
      } catch (error) {
        console.error('Failed to load progress from localStorage:', error);
      }
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = (completed: Set<string>, resources: Record<string, Record<string, boolean>>) => {
    const data: LearningProgress = {
      completedTopics: Array.from(completed),
      resourceProgress: resources
    };
    localStorage.setItem('learningProgress', JSON.stringify(data));
  };

  // Check if topic is unlocked
  const isTopicUnlocked = (topic: Topic) => {
    return topic.prerequisites.every(prereq => completedTopics.has(prereq));
  };

  // Mark topic as complete
  const markTopicComplete = (topicName: string) => {
    const newCompleted = new Set(completedTopics);
    newCompleted.add(topicName);
    setCompletedTopics(newCompleted);
    saveProgress(newCompleted, resourceProgress);
  };

  // Update resource progress
  const updateResourceProgress = (topicName: string, resourceName: string, isCompleted: boolean) => {
    const newResourceProgress = {
      ...resourceProgress,
      [topicName]: {
        ...resourceProgress[topicName],
        [resourceName]: isCompleted
      }
    };
    setResourceProgress(newResourceProgress);
    saveProgress(completedTopics, newResourceProgress);
  };

  // Reset all progress
  const resetProgress = () => {
    setCompletedTopics(new Set());
    setResourceProgress({});
    localStorage.removeItem('learningProgress');
  };

  // Calculate statistics
  const getStats = () => {
    const total = topics.length;
    const completed = completedTopics.size;
    const available = topics.filter(topic => isTopicUnlocked(topic) && !completedTopics.has(topic.topic)).length;
    const locked = total - completed - available;

    return { total, completed, available, locked };
  };

  return {
    completedTopics,
    resourceProgress,
    isTopicUnlocked,
    markTopicComplete,
    updateResourceProgress,
    resetProgress,
    getStats
  };
}
