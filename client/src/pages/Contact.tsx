import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSubmitContact } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";

const formSchema = z.object({
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inquiryType: "",
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    toast({ title: "Message Sent", description: "Your message has been sent. We'll be in touch soon!" });
    form.reset();
  }

  return (
    <div className="w-full bg-background min-h-screen">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <AbstractHeroBg />
        <div className="container max-w-5xl mx-auto px-4 relative z-10 py-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-semibold tracking-wide uppercase mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-xl"
          >
            Meaningful conversations are where great ideas begin. We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
          <div className="lg:col-span-2 flex flex-col justify-start space-y-10">
            <div>
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Reach Out</p>
              <h3 className="text-2xl font-bold mb-4 text-foreground">General Inquiries</h3>
              <p className="text-muted-foreground leading-relaxed">
                For general questions about Rx360, our platform, or our mission. Or if you're interested in partnering with Rx360, we welcome the conversation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Careers</h3>
                  <p className="text-muted-foreground mb-1">Interested in joining the Rx360 team?</p>
                  <Link href="/careers" className="text-primary font-medium hover:underline">
                    View Careers Page &rarr;
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Our Location</h3>
                  <p className="text-foreground font-medium">Rx360</p>
                  <p className="text-muted-foreground">Los Angeles, California<br/>United States</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card className="p-8 md:p-10 shadow-xl border-border/50 rounded-3xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="inquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-lg">
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">General Inquiries</SelectItem>
                            <SelectItem value="partnerships">Partnerships & Collaborations</SelectItem>
                            <SelectItem value="media">Media & Press</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input className="h-12 rounded-lg" placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input className="h-12 rounded-lg" placeholder="Your company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input className="h-12 rounded-lg" type="email" placeholder="you@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 rounded-lg"
                              placeholder="(555) 000-0000"
                              {...field}
                              onChange={(e) => {
                                const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                                let formatted = digits;
                                if (digits.length >= 7) {
                                  formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
                                } else if (digits.length >= 4) {
                                  formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
                                } else if (digits.length > 0) {
                                  formatted = `(${digits}`;
                                }
                                field.onChange(formatted);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            className="min-h-[150px] resize-none rounded-lg" 
                            placeholder="Tell us more about what you need..." 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={submitContact.isPending}
                    className="w-full h-14 text-base rounded-lg hover:-translate-y-0.5 transition-all"
                  >
                    {submitContact.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </div>

      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[hsl(315,41%,22%)] via-[hsl(315,41%,30%)] to-[hsl(315,41%,22%)]">
        <div className="container max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Stay Connected. Live Independent.</h2>
          <p className="text-lg text-white/80">
            We're building a new kind of wellness ecosystem designed to help people live vibrant, independent lives while staying connected to the care and support that matters most.
          </p>
        </div>
      </section>
    </div>
  );
}
