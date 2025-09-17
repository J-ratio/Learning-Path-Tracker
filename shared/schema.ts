import { z } from "zod";

export const topicSchema = z.object({
  topic: z.string(),
  prerequisites: z.array(z.string()),
  resources: z.array(z.string())
});

export const learningProgressSchema = z.object({
  completedTopics: z.array(z.string()),
  resourceProgress: z.record(z.record(z.boolean()))
});

export type Topic = z.infer<typeof topicSchema>;
export type LearningProgress = z.infer<typeof learningProgressSchema>;
