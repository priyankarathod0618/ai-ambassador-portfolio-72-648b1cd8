import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Megaphone, Target } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 gradient-text">Experience</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan to-purple mb-12" />

        <Card className="glass-card p-8 md:p-12 hover:shadow-[0_0_40px_rgba(0,217,255,0.2)] transition-all duration-500 group">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan/20 to-purple/20 group-hover:from-cyan/30 group-hover:to-purple/30 transition-all">
                <Briefcase className="h-12 w-12 text-primary" />
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                  MIT Global AI Community City Ambassador
                </h3>
                <p className="text-lg text-muted-foreground">Building AI Awareness & Community</p>
              </div>

              <div className="space-y-4 text-foreground/90">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Community Outreach</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Successfully conducted outreach programs at LJ University, engaging with students and faculty 
                      to promote artificial intelligence education and foster a collaborative learning environment 
                      within the academic community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 mt-1">
                    <Megaphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Knowledge Sharing</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Organized workshops, seminars, and interactive sessions focused on emerging AI technologies, 
                      machine learning fundamentals, and practical applications. Facilitated discussions on ethical 
                      AI development and its impact on society.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 mt-1">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Initiative Leadership</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Spearheaded initiatives to connect aspiring AI enthusiasts with industry resources, mentorship 
                      opportunities, and collaborative projects. Built a network of students passionate about 
                      advancing AI literacy and innovation in the local tech ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">Community Building</Badge>
                <Badge className="bg-purple/10 text-purple border-purple/20">Public Speaking</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">Leadership</Badge>
                <Badge className="bg-purple/10 text-purple border-purple/20">AI Advocacy</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">Event Management</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
