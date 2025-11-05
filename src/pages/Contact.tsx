import { Mail, Instagram, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // toast({
    //   title: "Message sent!",
    //   description: "Thank you for reaching out. I'll get back to you soon.",
    // });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide mb-6" data-testid="text-page-title">
            GET IN TOUCH
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-light leading-loose max-w-2xl mx-auto" data-testid="text-page-subtitle">
            Interested in commissioning a piece, inquiring about available works, or collaborating? I would be delighted to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium tracking-wide mb-8" data-testid="text-contact-info-title">
                CONTACT
              </h2>
              
              <div className="space-y-6">
                <a
                  href="mailto:elena@elenamartinezart.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  data-testid="link-email"
                >
                  <div className="p-3 rounded-md border border-card-border group-hover-elevate">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="font-light">elena@elenamartinezart.com</span>
                </a>

                <a
                  href="https://instagram.com/elenamartinezart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  data-testid="link-instagram"
                >
                  <div className="p-3 rounded-md border border-card-border group-hover-elevate">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <span className="font-light">@elenamartinezart</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl md:text-2xl font-light mb-4" data-testid="text-studio-title">Studio Visits</h3>
              <p className="text-muted-foreground font-light leading-relaxed" data-testid="text-studio-info">
                Private studio visits are available by appointment. Please contact me to schedule a viewing of current works or to discuss bespoke commissions.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl md:text-2xl font-light mb-4" data-testid="text-representation-title">Gallery Representation</h3>
              <p className="text-foreground mb-2 font-light" data-testid="text-gallery-name">
                Gallery Modern
              </p>
              <p className="text-muted-foreground font-light" data-testid="text-gallery-location">
                Seattle, Washington
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <Label htmlFor="name" className="text-sm uppercase tracking-widest mb-3 block font-light" data-testid="label-name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="font-light"
                  data-testid="input-name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm uppercase tracking-widest mb-3 block font-light" data-testid="label-email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="font-light"
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm uppercase tracking-widest mb-3 block font-light" data-testid="label-message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  required
                  className="font-light"
                  data-testid="input-message"
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-sm uppercase tracking-widest" data-testid="button-submit">
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
