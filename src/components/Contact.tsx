import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 gradient-text text-center">Get In Touch</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan to-purple mb-12 mx-auto" />

        <Card className="glass-card p-8 md:p-12">
          <p className="text-lg text-center text-foreground/90 mb-12 leading-relaxed">
            I'm always excited to connect with fellow tech enthusiasts, potential collaborators, 
            or anyone interested in AI and machine learning. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:priyanka.rathod0618@gmail.com"
              className="flex items-center gap-4 p-6 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-medium">priyanka.rathod0618@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919662541574"
              className="flex items-center gap-4 p-6 rounded-xl bg-purple/5 hover:bg-purple/10 border border-purple/20 hover:border-purple/40 transition-all group"
            >
              <div className="p-3 rounded-lg bg-purple/10 group-hover:bg-purple/20 transition-colors">
                <Phone className="h-6 w-6 text-purple" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="font-medium">+91 9662541574</p>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <p className="font-medium">Connect with me</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 rounded-xl bg-purple/5 border border-purple/20">
              <div className="p-3 rounded-lg bg-purple/10">
                <MapPin className="h-6 w-6 text-purple" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-medium">Ahmedabad, Gujarat</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan to-purple hover:opacity-90 text-white font-semibold px-8"
              asChild
            >
              <a href="mailto:priyanka.rathod0618@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send a Message
              </a>
            </Button>
          </div>
        </Card>

        <footer className="text-center mt-16 text-muted-foreground">
          <p>© 2024 Priyanka Rathod. Built with passion for innovation.</p>
        </footer>
      </div>
    </section>
  );
};
