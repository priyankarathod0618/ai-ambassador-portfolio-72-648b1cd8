import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench, Brain, Globe } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Python", "SQL", "Java"],
    },
    {
      icon: Brain,
      title: "Libraries & Frameworks",
      skills: [
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "Matplotlib",
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Jupyter Notebook", "Google Colab", "yfinance", "Git"],
    },
    {
      icon: Database,
      title: "Domains",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Time-Series Forecasting",
        "Recommendation Systems",
        "Data Preprocessing",
        "Data Visualization",
      ],
    },
    {
      icon: Globe,
      title: "Languages Spoken",
      skills: ["English", "Hindi", "Gujarati"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan to-purple mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-card p-8 hover:shadow-[0_0_40px_rgba(0,217,255,0.2)] transition-all duration-500 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan/20 to-purple/20 group-hover:from-cyan/30 group-hover:to-purple/30 transition-all">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-sm py-1 px-3"
                  >
                    {skill}
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
