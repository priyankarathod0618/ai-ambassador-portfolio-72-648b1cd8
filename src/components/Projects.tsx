import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Film, Heart, TrendingUp } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      icon: Film,
      title: "Movie Recommendation System",
      description: "Built a sophisticated movie recommendation engine using Cosine Similarity algorithm to analyze user preferences and viewing patterns.",
      details: "Leveraged NumPy, Pandas, Difflib, and Scikit-learn for data processing and similarity calculations. Achieved 85% accuracy in predicting user-preferred movies through advanced feature engineering.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Cosine Similarity"],
      gradient: "from-cyan/20 to-blue-500/20",
    },
    {
      icon: Heart,
      title: "Heart Disease Predictor",
      description: "Developed a machine learning diagnostic tool using Logistic Regression to assess the likelihood of heart disease from patient health metrics.",
      details: "Implemented efficient feature selection and data preprocessing techniques to achieve 87% accuracy with minimal feature engineering. Strong model interpretability enables healthcare professionals to understand prediction rationale.",
      tech: ["Python", "Logistic Regression", "Pandas", "Scikit-learn", "Medical ML"],
      gradient: "from-purple/20 to-pink-500/20",
    },
    {
      icon: TrendingUp,
      title: "Stock Price Predictor",
      description: "Built a deep learning LSTM model to forecast Tesla's stock closing prices using comprehensive historical market data from 2014 to 2024.",
      details: "Implemented a 4-layer LSTM architecture with Dropout regularization to prevent overfitting. Achieved strong alignment between predicted and actual price trends through careful hyperparameter tuning and time-series analysis.",
      tech: ["Python", "LSTM", "TensorFlow", "Keras", "Matplotlib", "yfinance"],
      gradient: "from-cyan/20 to-purple/20",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan to-purple mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card p-6 hover:shadow-[0_0_40px_rgba(0,217,255,0.2)] transition-all duration-500 group hover:-translate-y-2"
            >
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 w-fit group-hover:scale-110 transition-transform`}>
                <project.icon className="h-8 w-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {project.details}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="border-primary/30 text-primary/90 bg-primary/5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
