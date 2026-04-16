import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { useSubmitApplication } from "@/hooks/use-careers";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Heart, Lightbulb, Shield, Users, HelpCircle, Briefcase } from "lucide-react";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit about yourself"),
});

const principles = [
  { icon: Heart, title: "Mission Comes First", desc: "The work we do has a real impact on people's lives. We take that responsibility seriously." },
  { icon: Lightbulb, title: "Thoughtful Technology", desc: "We believe technology should simplify life, not complicate it." },
  { icon: Shield, title: "Respect for Independence", desc: "The people we build for value autonomy and dignity. Everything we create reflects that." },
  { icon: Users, title: "Collaboration", desc: "Great ideas come from people working together across disciplines." },
  { icon: HelpCircle, title: "Curiosity", desc: "We encourage questions, experimentation, and new ways of thinking." }
];

const opportunities = [
  "Product Design",
  "Software Engineering",
  "Data & Health Insights",
  "Partnerships",
  "Operations"
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const }
  })
};

export default function Careers() {
  const { toast } = useToast();
  const submitApp = useSubmitApplication();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
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
            Join Our Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            Careers at Rx360
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-xl"
          >
            Help us build tools that support independent, vibrant, and healthy lives for millions of people.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">Our Purpose</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We're Building Rx360</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Many older adults want the same thing: the ability to continue living life on their own terms. But staying on top of health priorities can become increasingly complicated.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We're designing a wellness ecosystem that helps people stay informed, connected, and supported — while maintaining the independence that matters so much to them.
              </p>
              <p className="text-lg font-medium text-foreground italic">
                Our goal is to help people spend less time worrying about managing their health and more time living their lives.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/careers-family.jpg`}
                alt="Grandparents taking a selfie with their granddaughter"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h2>
            <p className="text-lg text-muted-foreground">We're building Rx360 with a few simple principles in mind:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="p-6 border-border shadow-sm hover:shadow-lg transition-all duration-300 h-full rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{p.title}</h3>
                  <p className="text-muted-foreground">{p.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 bg-background">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <p className="text-lg">
              Rx360 is a U.S. company based in <span className="font-semibold text-foreground">Los Angeles, California</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Opportunities</h2>
          <p className="text-lg text-muted-foreground mb-4">
            We're always interested in meeting thoughtful people who are passionate about improving health and independence.
          </p>
          <p className="text-lg text-muted-foreground mb-10">
            If you don't see a role listed that fits your background, we still encourage you to reach out.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {opportunities.map((role) => (
              <span key={role} className="px-5 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container max-w-xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Join Us</h2>
            <p className="text-lg text-muted-foreground">
              If you're interested in helping build tools that support independence and well-being, we'd love to connect.
            </p>
          </div>

          <Card className="p-8 shadow-xl border-border/50 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 text-center">Send Us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input className="h-12 rounded-lg" type="email" placeholder="you@example.com" {...field} />
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
                      <FormLabel>Phone (Optional)</FormLabel>
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
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tell us about yourself</FormLabel>
                      <FormControl>
                        <Textarea 
                          className="min-h-[120px] resize-none rounded-lg" 
                          placeholder="What excites you about Rx360's mission..." 
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
                  disabled={submitApp.isPending}
                  className="w-full h-14 text-base rounded-lg"
                >
                  {submitApp.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </Card>

          <p className="text-center text-xl font-bold text-primary mt-8">
            Stay Connected. Live Independent.
          </p>
        </div>
      </section>
    </div>
  );
}
