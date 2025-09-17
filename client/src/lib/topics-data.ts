import { Topic } from "@shared/schema";

export const topicsData: Topic[] = [
  {
    "topic": "Calculus",
    "prerequisites": [],
    "resources": [
      { "name": "Calculus 1 - Full College Course", "link": "https://www.youtube.com/watch?v=WUvTyaaNkzM" },
      { "name": "3Blue1Brown - Essence of Calculus", "link": "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
      { "name": "Professor Leonard - Calculus 1", "link": "https://www.youtube.com/playlist?list=PLF797E961509B4EB5" }
    ]
  },
  {
    "topic": "Linear Algebra",
    "prerequisites": [],
    "resources": [
      { "name": "Gilbert Strang MIT 18.06", "link": "https://www.youtube.com/playlist?list=PL49CF3715CB9EF31D" },
      { "name": "3Blue1Brown - Essence of Linear Algebra", "link": "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
      { "name": "Linear Algebra for Data Science", "link": "https://www.youtube.com/watch?v=SioiFuMRiv4" }
    ]
  },
  {
    "topic": "Probability & Statistics",
    "prerequisites": [],
    "resources": [
      { "name": "StatQuest with Josh Starmer", "link": "https://www.youtube.com/c/joshstarmer" },
      { "name": "Khan Academy Statistics", "link": "https://www.khanacademy.org/math/statistics-probability" },
      { "name": "MIT Probability & Statistics", "link": "https://oli.cmu.edu/courses/probability-statistics-open-free/" }
    ]
  },
  {
    "topic": "Feature Engineering",
    "prerequisites": [],
    "resources": [
      { "name": "Feature Engineering for Machine Learning", "link": "https://www.freecodecamp.org/news/feature-engineering-techniques-for-structured-data/" },
      { "name": "Feature Engineering Tutorial", "link": "https://www.geeksforgeeks.org/machine-learning/what-is-feature-engineering/" },
      { "name": "Kaggle Feature Engineering", "link": "https://www.kaggle.com/learn/feature-engineering" }
    ]
  },
  {
    "topic": "Data Preprocessing",
    "prerequisites": [],
    "resources": [
      { "name": "Data Preprocessing in Python", "link": "https://www.geeksforgeeks.org/machine-learning/data-preprocessing-machine-learning-python/" },
      { "name": "Data Cleaning Tutorial", "link": "https://www.youtube.com/watch?v=bDhvCp3_lYw" },
      { "name": "Complete Data Preprocessing Course", "link": "https://www.youtube.com/watch?v=Oe4PCS5CXJ0" }
    ]
  },
  {
    "topic": "Ethics & Bias in AI",
    "prerequisites": [],
    "resources": [
      { "name": "AI Ethics Course by MIT", "link": "https://www.edx.org/course/artificial-intelligence-ethics-and-governance" },
      { "name": "Responsible AI Development Tools", "link": "https://dialzara.com/blog/10-top-tools-for-ethical-ai-development-2024" },
      { "name": "AI Fairness 360 Tutorial", "link": "https://github.com/Trusted-AI/AIF360" }
    ]
  },
  {
    "topic": "Correlation",
    "prerequisites": ["Probability & Statistics"],
    "resources": [
      { "name": "Pearson's Correlation, Clearly Explained", "link": "https://www.youtube.com/watch?v=xZ_z8KWkhXE" },
      { "name": "Correlation Analysis - Full Course", "link": "https://www.youtube.com/watch?v=G5FkaxWBtkM" },
      { "name": "Correlation vs Causation", "link": "https://www.khanacademy.org/math/probability/scatterplots-a1/correlation-coefficient-r/a/correlation-and-causation" }
    ]
  },
  {
    "topic": "Hypothesis Testing",
    "prerequisites": ["Probability & Statistics"],
    "resources": [
      { "name": "StatQuest - Hypothesis Testing", "link": "https://www.youtube.com/watch?v=0oc49DyA3hU" },
      { "name": "Free Hypothesis Testing Course", "link": "https://www.upgrad.com/free-courses/data-science/hypothesis-testing-course-free/" },
      { "name": "Hypothesis Testing with Python", "link": "https://www.youtube.com/watch?v=5ABpqVSx33I" }
    ]
  },
  {
    "topic": "A/B Testing",
    "prerequisites": ["Hypothesis Testing"],
    "resources": [
      { "name": "A/B Testing Complete Guide", "link": "https://www.youtube.com/watch?v=VaRBKBdX6l8" },
      { "name": "A/B Testing for Data Scientists", "link": "https://towardsdatascience.com/a-b-testing-complete-guide-for-data-scientists-7536c7e8b47b" },
      { "name": "Statistical Significance in A/B Testing", "link": "https://www.optimizely.com/optimization-glossary/statistical-significance/" }
    ]
  },
  {
    "topic": "Types of ML",
    "prerequisites": ["Probability & Statistics"],
    "resources": [
      { "name": "Machine Learning Explained", "link": "https://www.youtube.com/watch?v=ukzFI9rgwfU" },
      { "name": "Types of Machine Learning", "link": "https://www.coursera.org/learn/machine-learning-course" },
      { "name": "ML Types Overview", "link": "https://machinelearningmastery.com/types-of-learning-in-machine-learning/" }
    ]
  },
  {
    "topic": "Supervised Learning",
    "prerequisites": ["Types of ML"],
    "resources": [
      { "name": "Supervised Learning - Andrew Ng", "link": "https://www.youtube.com/watch?v=jGwO_UgTS7I" },
      { "name": "Complete Supervised Learning Course", "link": "https://www.youtube.com/watch?v=1FZ0A1QCMWc" },
      { "name": "Supervised Learning Algorithms", "link": "https://scikit-learn.org/stable/supervised_learning.html" }
    ]
  },
  {
    "topic": "Unsupervised Learning",
    "prerequisites": ["Types of ML"],
    "resources": [
      { "name": "Unsupervised Learning Explained", "link": "https://www.youtube.com/watch?v=8dqdDEyzkFA" },
      { "name": "Clustering and Association", "link": "https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning" },
      { "name": "Unsupervised Learning Guide", "link": "https://towardsdatascience.com/unsupervised-learning-and-data-clustering-eeecb78b422a" }
    ]
  },
  {
    "topic": "Reinforcement Learning",
    "prerequisites": ["Types of ML"],
    "resources": [
      { "name": "RL Introduction", "link": "https://www.youtube.com/watch?v=2pWv7GOvuf0" },
      { "name": "Reinforcement Learning Course", "link": "https://www.coursera.org/learn/reinforcement-learning" },
      { "name": "RL Algorithms", "link": "https://spinningup.openai.com/en/latest/" }
    ]
  },
  {
    "topic": "Learning Theory",
    "prerequisites": ["Probability & Statistics"],
    "resources": [
      { "name": "Learning Theory Books", "link": "https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/" },
      { "name": "PAC Learning Paper", "link": "https://web.mit.edu/6.435/www/Valiant84.pdf" },
      { "name": "Bias-Variance Tradeoff", "link": "https://www.youtube.com/watch?v=EuBBz3bI-aA" }
    ]
  },
  {
    "topic": "Linear Models",
    "prerequisites": ["Linear Algebra", "Supervised Learning", "Data Preprocessing"],
    "resources": [
      { "name": "Linear Regression - StatQuest", "link": "https://www.youtube.com/watch?v=nk2CQITm_eo" },
      { "name": "Logistic Regression Explained", "link": "https://www.youtube.com/watch?v=yIYKR4sgzI8" },
      { "name": "Ridge and Lasso Regression", "link": "https://www.youtube.com/watch?v=Q81RR3yKn30" }
    ]
  },
  {
    "topic": "Tree Models",
    "prerequisites": ["Supervised Learning", "Data Preprocessing"],
    "resources": [
      { "name": "Decision Trees - StatQuest", "link": "https://www.youtube.com/watch?v=7VeUPuFGJHk" },
      { "name": "Random Forests Explained", "link": "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ" },
      { "name": "Tree-Based Models Tutorial", "link": "https://www.kaggle.com/learn/intro-to-machine-learning" }
    ]
  },
  {
    "topic": "Support Vector Machines (SVMs)",
    "prerequisites": ["Linear Algebra", "Supervised Learning", "Data Preprocessing"],
    "resources": [
      { "name": "SVM - StatQuest", "link": "https://www.youtube.com/watch?v=efR1C6CvhmE" },
      { "name": "Support Vector Machines Explained", "link": "https://www.youtube.com/watch?v=_YPScrckx28" },
      { "name": "SVM with Python Tutorial", "link": "https://scikit-learn.org/stable/modules/svm.html" }
    ]
  },
  {
    "topic": "K-Means Clustering",
    "prerequisites": ["Unsupervised Learning", "Linear Algebra"],
    "resources": [
      { "name": "K-Means Explained", "link": "https://www.youtube.com/watch?v=4b5d3muPQmA" },
      { "name": "Clustering Examples", "link": "https://scikit-learn.org/stable/modules/clustering.html" },
      { "name": "K-Means Tutorial", "link": "https://www.youtube.com/watch?v=_aWzGGNrcic" }
    ]
  },
  {
    "topic": "Dimensionality Reduction",
    "prerequisites": ["Linear Algebra"],
    "resources": [
      { "name": "PCA Overview", "link": "https://www.youtube.com/watch?v=FgakZw6K1QQ" },
      { "name": "t-SNE Tutorial", "link": "https://www.youtube.com/watch?v=NEaUSP4YerM" },
      { "name": "Dimensionality Reduction Guide", "link": "https://scikit-learn.org/stable/modules/decomposition.html" }
    ]
  },
  {
    "topic": "Ensemble Methods",
    "prerequisites": ["Tree Models", "Linear Models"],
    "resources": [
      { "name": "Bagging and Boosting", "link": "https://www.youtube.com/watch?v=2Mg8QD0F1dQ" },
      { "name": "Ensemble Techniques Lecture", "link": "https://www.youtube.com/watch?v=Un9zObFjBH0" },
      { "name": "Ensemble Methods Guide", "link": "https://scikit-learn.org/stable/modules/ensemble.html" }
    ]
  },
  {
    "topic": "Neural Networks",
    "prerequisites": ["Linear Algebra", "Calculus", "Supervised Learning"],
    "resources": [
      { "name": "Neural Networks - 3Blue1Brown", "link": "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
      { "name": "Neural Networks Explained", "link": "https://www.youtube.com/watch?v=aircAruvnKk" },
      { "name": "Backpropagation Calculus", "link": "https://www.youtube.com/watch?v=tIeHLnjs5U8" }
    ]
  },
  {
    "topic": "Deep Learning",
    "prerequisites": ["Neural Networks"],
    "resources": [
      { "name": "Deep Learning Specialization - Coursera", "link": "https://www.coursera.org/specializations/deep-learning" },
      { "name": "Fast.ai Deep Learning Course", "link": "https://course.fast.ai/" },
      { "name": "Deep Learning with Python", "link": "https://www.youtube.com/watch?v=VyWAvY2CF9c" }
    ]
  },
  {
    "topic": "NLP",
    "prerequisites": ["Deep Learning"],
    "resources": [
      { "name": "NLP with Deep Learning - Stanford", "link": "https://www.youtube.com/playlist?list=PLoROMvodv4rOhcuXMZkNm7j3fVwBBY42z" },
      { "name": "NLP Course - Hugging Face", "link": "https://huggingface.co/course/chapter1/1" },
      { "name": "Natural Language Processing", "link": "https://www.coursera.org/specializations/natural-language-processing" }
    ]
  },
  {
    "topic": "Computer Vision (CV)",
    "prerequisites": ["Deep Learning"],
    "resources": [
      { "name": "CV Tutorials", "link": "https://www.youtube.com/playlist?list=PLjMXczUzEYcHvw5YYSU92WrY8IwhTuq7p" },
      { "name": "Image Processing Lectures", "link": "https://www.youtube.com/watch?v=aa7HL8w7YhA" },
      { "name": "Computer Vision Course", "link": "https://www.coursera.org/learn/computer-vision-basics" }
    ]
  },
  {
    "topic": "Reinforcement Learning (RL)",
    "prerequisites": ["Deep Learning", "Reinforcement Learning"],
    "resources": [
      { "name": "Advanced RL", "link": "https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ" },
      { "name": "RL Projects", "link": "https://github.com/openai/gym" },
      { "name": "Deep RL Course", "link": "https://www.youtube.com/watch?v=2pWv7GOvuf0" }
    ]
  },
  {
    "topic": "Cross-validation",
    "prerequisites": ["Data Preprocessing"],
    "resources": [
      { "name": "Cross-validation Explained", "link": "https://www.youtube.com/watch?v=fSytzGwwBVw" },
      { "name": "Validation Techniques Paper", "link": "https://scikit-learn.org/stable/modules/cross_validation.html" },
      { "name": "K-Fold Cross Validation", "link": "https://www.youtube.com/watch?v=TIgfjmp-4BA" }
    ]
  },
  {
    "topic": "Evaluation Metrics",
    "prerequisites": ["Supervised Learning"],
    "resources": [
      { "name": "Model Evaluation Metrics", "link": "https://www.youtube.com/watch?v=LbX4X71-TFI" },
      { "name": "Precision and Recall", "link": "https://www.youtube.com/watch?v=Kdsp6soqA7o" },
      { "name": "ROC Curves and AUC", "link": "https://www.youtube.com/watch?v=4jRBRDbJemM" }
    ]
  },
  {
    "topic": "Overfitting & Underfitting",
    "prerequisites": ["Cross-validation", "Evaluation Metrics"],
    "resources": [
      { "name": "Overfitting Solutions", "link": "https://www.youtube.com/watch?v=EuBBz3bI-aA" },
      { "name": "Regularization Techniques", "link": "https://www.youtube.com/watch?v=Q81RR3yKn30" },
      { "name": "Bias-Variance Tradeoff", "link": "https://www.youtube.com/watch?v=EuBBz3bI-aA" }
    ]
  },
  {
    "topic": "Parameter Tuning/Hyperparameter Optimization",
    "prerequisites": ["Overfitting & Underfitting"],
    "resources": [
      { "name": "Grid Search Tutorial", "link": "https://www.youtube.com/watch?v=HdlDYng8g9s" },
      { "name": "Bayesian Optimization", "link": "https://www.youtube.com/watch?v=c4KKvyWW_Xk" },
      { "name": "Hyperparameter Tuning Guide", "link": "https://scikit-learn.org/stable/modules/grid_search.html" }
    ]
  },
  {
    "topic": "Model Selection",
    "prerequisites": ["Parameter Tuning/Hyperparameter Optimization", "Evaluation Metrics"],
    "resources": [
      { "name": "Model Selection Strategies", "link": "https://www.youtube.com/watch?v=6dbrR-WymjI" },
      { "name": "Algorithm Comparison", "link": "https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html" },
      { "name": "Choosing the Right Algorithm", "link": "https://www.youtube.com/watch?v=cKxRvEZd3Mw" }
    ]
  },
  {
    "topic": "Model Evaluation",
    "prerequisites": ["Model Selection", "Evaluation Metrics"],
    "resources": [
      { "name": "Model Evaluation Methods", "link": "https://www.youtube.com/watch?v=LbX4X71-TFI" },
      { "name": "ROC Curves", "link": "https://www.youtube.com/watch?v=4jRBRDbJemM" },
      { "name": "Evaluation Strategies", "link": "https://scikit-learn.org/stable/modules/model_evaluation.html" }
    ]
  },
  {
    "topic": "Model Deployment",
    "prerequisites": ["Model Evaluation"],
    "resources": [
      { "name": "ML Model Deployment Tutorial", "link": "https://www.youtube.com/watch?v=mrExsjcvF4o" },
      { "name": "Deploy ML Models with Flask", "link": "https://www.youtube.com/watch?v=UbCWoMf80PY" },
      { "name": "Docker for Data Science", "link": "https://www.youtube.com/watch?v=jbb1dbFaovg" }
    ]
  },
  {
    "topic": "Model Monitoring & Maintenance",
    "prerequisites": ["Model Deployment"],
    "resources": [
      { "name": "Monitoring Tools", "link": "https://www.youtube.com/watch?v=QcevzK6e3zE" },
      { "name": "Maintenance Best Practices", "link": "https://towardsdatascience.com/machine-learning-model-monitoring-in-production-8eb42c18bc5a" },
      { "name": "MLOps Pipeline", "link": "https://www.youtube.com/watch?v=YmgBLQP42jM" }
    ]
  },
  {
    "topic": "Interpretability & Explainable AI",
    "prerequisites": ["Model Evaluation"],
    "resources": [
      { "name": "Explainability Methods", "link": "https://www.youtube.com/watch?v=B-c8tIgchu0" },
      { "name": "SHAP and LIME", "link": "https://www.youtube.com/watch?v=VY2eGRllFq4" },
      { "name": "Model Interpretability Guide", "link": "https://christophm.github.io/interpretable-ml-book/" }
    ]
  }
];
