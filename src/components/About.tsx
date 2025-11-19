import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Trophy } from "lucide-react";

export const About = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "96.34% in Class 12",
      description: "Senior Secondary Education",
    },
    {
      icon: Award,
      title: "96.11% in Class 10",
      description: "Secondary Education",
    },
    {
      icon: GraduationCap,
      title: "Rank 3088 in GUJCET",
      description: "Among ~1.3 lakh candidates across Gujarat",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 gradient-text">About Me</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan to-purple mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a first-year Computer Science student at <span className="text-primary font-semibold">Lok Jagruti University</span>, 
              passionate about exploring the frontiers of artificial intelligence and machine learning.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I thrive in high-pressure environments and am eager to collaborate with innovative teams 
              to solve impactful challenges. My journey in tech is driven by curiosity and a desire to 
              create solutions that make a difference.
            </p>
            <div className="space-y-4 pt-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
                <div className="space-y-2 text-foreground/80">
                  <p className="font-medium">B.Tech in Computer Science</p>
                  <p className="text-sm text-muted-foreground">Lok Jagruti University • 2025 – 2029</p>
                  <p className="text-sm text-muted-foreground">Ahmedabad, Gujarat</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-6">Academic Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="glass-card p-6 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
