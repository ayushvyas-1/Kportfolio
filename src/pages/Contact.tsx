import { Mail, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget; // Store reference before async

    const loadingToast = toast.loading("Sending your message…");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "4a8a3225-c993-4c2f-9152-215f6d1cb199");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      toast.dismiss(loadingToast);

      if (data.success) {
        toast.success("Message sent!", {
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        toast.error("Something went wrong", {
          description: "Please try again in a moment.",
        });
      }
    } catch (error) {
      console.log(error);
      toast.dismiss(loadingToast);
      toast.error("Something went wrong", {
        description: "Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">

        <div className="text-center mb-20">
          <h1 className="font-display text-5xl md:text-6xl font-normal tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-xl font-light max-w-2xl mx-auto">
            Interested in a commission or collaboration? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

          {/* Contact Links */}
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl font-medium mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <a
                  href="mailto:kashyapvyas36@gmail.com"
                  className="group flex items-center gap-6 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="p-4 bg-muted rounded-none group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest mb-1">Email</span>
                    <span className="font-light text-lg">kashyapvyas36@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://instagram.com/kashyap_vyas_art/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-6 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="p-4 bg-muted rounded-none group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest mb-1">Instagram</span>
                    <span className="font-light text-lg">@kashyap_vyas_art</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="group">
                <Label className="text-xs uppercase tracking-widest mb-2 block font-medium text-muted-foreground group-focus-within:text-foreground transition-colors">
                  Name
                </Label>
                <Input
                  name="name"
                  required
                  className="font-light border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors bg-transparent"
                  placeholder="Your Name"
                />
              </div>

              <div className="group">
                <Label className="text-xs uppercase tracking-widest mb-2 block font-medium text-muted-foreground group-focus-within:text-foreground transition-colors">
                  Email
                </Label>
                <Input
                  name="email"
                  type="email"
                  required
                  className="font-light border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors bg-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div className="group">
                <Label className="text-xs uppercase tracking-widest mb-2 block font-medium text-muted-foreground group-focus-within:text-foreground transition-colors">
                  Message
                </Label>
                <Textarea
                  name="message"
                  rows={4}
                  required
                  className="font-light border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors bg-transparent resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto text-xs uppercase tracking-[0.2em] h-14 px-8 rounded-none bg-foreground text-background hover:bg-foreground/90 transition-colors"
                disabled={loading}
              >
                {loading ? "Sending…" : (
                  <span className="flex items-center gap-2">
                    Send Message <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}