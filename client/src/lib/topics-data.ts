import { Topic } from "@shared/schema";

export const topicsData: Topic[] = [
  {
    "topic": "Calculus",
    "prerequisites": [],
    "resources": [
      { "name": "Calculus Video Lectures", "link": "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
      { "name": "Calculus Textbook Chapter 1" }
    ]
  },
  {
    "topic": "Linear Algebra",
    "prerequisites": [],
    "resources": [
      { "name": "Linear Algebra Playlist", "link": "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
      { "name": "Linear Algebra for ML Article", "link": "https://towardsdatascience.com/linear-algebra-for-machine-learning-solve-4-key-problems-62f85f6ad5e6" }
    ]
  },
  {
    "topic": "Probability & Statistics",
    "prerequisites": [],
    "resources": [
      { "name": "Probability Theory Course", "link": "https://www.khanacademy.org/math/statistics-probability" },
      { "name": "Statistics YouTube Series", "link": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" }
    ]
  },
  {
    "topic": "Feature Engineering",
    "prerequisites": [],
    "resources": [
      { "name": "Feature Engineering Guide" },
      { "name": "Kaggle Feature Engineering Tutorial", "link": "https://www.kaggle.com/learn/feature-engineering" }
    ]
  },
  {
    "topic": "Data Preprocessing",
    "prerequisites": [],
    "resources": [
      { "name": "Data Cleaning Videos" },
      { "name": "Preprocessing Code Examples" }
    ]
  },
  {
    "topic": "Ethics & Bias in AI",
    "prerequisites": [],
    "resources": [
      { "name": "AI Ethics Talks" },
      { "name": "Bias in AI Papers" }
    ]
  },
  {
    "topic": "Correlation",
    "prerequisites": ["Probability & Statistics"],
    "resources": [
      { "name": "Correlation Explained" },
      { "name": "Correlation Practice Problems" }
    ]
  },
  {
    "topic": "Hypothesis Testing",
    "prerequisites": ["Probability & Statistics"],
    "resources": [
      { "name": "Hypothesis Testing Lecture", "link": "https://www.youtube.com/watch?v=QZ7kgmhdIwA" },
      { "name": "Statistical Tests Notes" }
    ]
  },
  {
    "topic": "A/B Testing",
    "prerequisites": ["Hypothesis Testing"],
    "resources": [
      { "name": "A/B Testing Tutorial" },
      { "name": "Case Studies on A/B Testing" }
    ]
  },
  {
    "topic": "Types of ML",
    "prerequisites": ["Probability & Statistics"],
    "resources": [
      { "name": "ML Types Overview" },
      { "name": "Supervised vs Unsupervised" }
    ]
  },
  {
    "topic": "Supervised Learning",
    "prerequisites": ["Types of ML"],
    "resources": [
      { "name": "Supervised Learning Course", "link": "https://www.coursera.org/learn/machine-learning" },
      { "name": "Supervised Algorithms Guide" }
    ]
  },
  {
    "topic": "Unsupervised Learning",
    "prerequisites": ["Types of ML"],
    "resources": [
      { "name": "Unsupervised Learning Videos" },
      { "name": "Clustering Techniques" }
    ]
  },
  {
    "topic": "Linear Models",
    "prerequisites": ["Linear Algebra", "Supervised Learning", "Data Preprocessing"],
    "resources": [
      { "name": "Linear Regression Tutorial" },
      { "name": "Ridge and Lasso Guide" }
    ]
  },
  {
    "topic": "Tree Models",
    "prerequisites": ["Supervised Learning", "Data Preprocessing"],
    "resources": [
      { "name": "Decision Trees Lecture" },
      { "name": "Random Forests Video", "link": "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ" }
    ]
  },
  {
    "topic": "Support Vector Machines (SVMs)",
    "prerequisites": ["Linear Algebra", "Supervised Learning", "Data Preprocessing"],
    "resources": [
      { "name": "SVM Course" },
      { "name": "SVM Practice Problems" }
    ]
  },
  {
    "topic": "Neural Networks",
    "prerequisites": ["Linear Algebra", "Calculus", "Supervised Learning"],
    "resources": [
      { "name": "Intro to Neural Nets", "link": "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
      { "name": "Backpropagation Notes" }
    ]
  },
  {
    "topic": "Deep Learning",
    "prerequisites": ["Neural Networks"],
    "resources": [
      { "name": "Deep Learning Course", "link": "https://www.coursera.org/specializations/deep-learning" },
      { "name": "CNN and RNN Videos" }
    ]
  },
  {
    "topic": "NLP",
    "prerequisites": ["Deep Learning"],
    "resources": [
      { "name": "NLP with Deep Learning" },
      { "name": "Transformer Models", "link": "https://www.youtube.com/watch?v=kCc8FmEb1nY" }
    ]
  },
  {
    "topic": "Model Evaluation",
    "prerequisites": ["Supervised Learning"],
    "resources": [
      { "name": "Evaluation Methods" },
      { "name": "ROC Curves" }
    ]
  },
  {
    "topic": "Model Deployment",
    "prerequisites": ["Model Evaluation"],
    "resources": [
      { "name": "Deployment Pipelines" },
      { "name": "Docker for ML" }
    ]
  }
];
