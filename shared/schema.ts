import { z } from "zod";

export const resourceSchema = z.object({
  name: z.string(),
  link: z.string().url().optional()
});

export const topicSchema = z.object({
  topic: z.string(),
  prerequisites: z.array(z.string()),
  resources: z.array(resourceSchema)
});

export const learningProgressSchema = z.object({
  completedTopics: z.array(z.string()),
  resourceProgress: z.record(z.record(z.boolean()))
});

export type Resource = z.infer<typeof resourceSchema>;
export type Topic = z.infer<typeof topicSchema>;
export type LearningProgress = z.infer<typeof learningProgressSchema>;
