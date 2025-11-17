import { Mail, Instagram, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";

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
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">

        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-medium tracking-wide mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto">
            Interested in a commission or collaboration? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Links */}
          <div className="space-y-12">
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-wide mb-8">
              CONTACT
            </h2>

            <div className="space-y-6">
              <a
                href="mailto:kashyapvyas36@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition"
              >
                <div className="p-3 rounded-md border border-border">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-light">kashyapvyas36@gmail.com</span>
              </a>

              <a
                href="https://instagram.com/kashyap_vyas_art/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition"
              >
                <div className="p-3 rounded-md border border-border">
                  <Instagram className="h-5 w-5" />
                </div>
                <span className="font-light">@kashyap_vyas_art</span>
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">

              <div>
                <Label className="text-sm uppercase tracking-widest mb-3 block font-light">
                  Name
                </Label>
                <Input name="name" required className="font-light" />
              </div>

              <div>
                <Label className="text-sm uppercase tracking-widest mb-3 block font-light">
                  Email
                </Label>
                <Input name="email" type="email" required className="font-light" />
              </div>

              <div>
                <Label className="text-sm uppercase tracking-widest mb-3 block font-light">
                  Message
                </Label>
                <Textarea name="message" rows={6} required className="font-light" />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-sm uppercase tracking-widest flex items-center gap-2"
                disabled={loading}
              >
                {loading ? "Sending…" : (
                  <>
                    <MessageSquare className="h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}