import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import {
  Send,
  Mail,
  MapPin,
  Briefcase,
  Linkedin,
  Github,
  Phone,
  Code,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import type { InsertContactMessage } from "@shared/schema";

export function ContactSection() {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            data-testid="contact-title"
          >
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="contact-description"
          >
            I'm always interested in discussing new opportunities in AI/ML
            engineering, computer vision, and innovative AI projects. Let's
            connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
              data-testid="contact-form"
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  {...form.register("name")}
                  data-testid="input-name"
                />
                {form.formState.errors.name && (
                  <p
                    className="text-sm text-destructive mt-1"
                    data-testid="error-name"
                  >
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...form.register("email")}
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p
                    className="text-sm text-destructive mt-1"
                    data-testid="error-email"
                  >
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Project collaboration, job opportunity, etc."
                  {...form.register("subject")}
                  data-testid="input-subject"
                />
                {form.formState.errors.subject && (
                  <p
                    className="text-sm text-destructive mt-1"
                    data-testid="error-subject"
                  >
                    {form.formState.errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  {...form.register("message")}
                  data-testid="input-message"
                />
                {form.formState.errors.message && (
                  <p
                    className="text-sm text-destructive mt-1"
                    data-testid="error-message"
                  >
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={contactMutation.isPending}
                data-testid="submit-contact-form"
              >
                {contactMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up">
            <div className="space-y-8">
              <div>
                <h3
                  className="text-xl font-semibold mb-6"
                  data-testid="contact-info-title"
                >
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div
                    className="flex items-center space-x-4"
                    data-testid="contact-email"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid="contact-email-link"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <div
                    className="flex items-center space-x-4"
                    data-testid="contact-phone"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Contact</p>
                      <a
                        href={`tel:${personal.phone}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid="contact-email-link"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>

                  <div
                    className="flex items-center space-x-4"
                    data-testid="contact-location"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">
                        {personal.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-6"
                  data-testid="social-links-title"
                >
                  Social Links
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    asChild
                    className="flex items-center justify-center space-x-2 p-4"
                    data-testid="contact-linkedin"
                  >
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    asChild
                    className="flex items-center justify-center space-x-2 p-4"
                    data-testid="contact-leetcode"
                  >
                    <a
                      href={personal.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code className="w-5 h-5 text-primary" />
                      <span className="font-medium">LeetCode</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    asChild
                    className="flex items-center justify-center space-x-2 p-4"
                    data-testid="contact-github"
                  >
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 text-primary" />
                      <span className="font-medium">GitHub</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* <Card className="bg-primary/5 border-primary/20" data-testid="opportunities-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Briefcase className="w-4 h-4 text-primary mr-2" />
                    Open to Opportunities
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    I'm currently seeking challenging full-time roles as an AI/ML Engineer or Computer Vision Engineer. Particularly interested in model fine-tuning, MLOps, and creating tangible product impact.
                  </p>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
