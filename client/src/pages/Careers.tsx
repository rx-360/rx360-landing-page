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
import { MapPin, Heart, Lightbulb, Shield, Users, HelpCircle, Briefcase, ChevronDown, ChevronUp, Mail, Globe, Clock } from "lucide-react";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";
import { useState } from "react";

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

interface JobListing {
  id: string;
  title: string;
  type: string;
  level: string;
  summary: string;
  responsibilities: string[];
  required: string[];
  niceToHave: string[];
  applyNote: string;
}

const jobListings: JobListing[] = [
  {
    id: "frontend-staff",
    title: "Staff Frontend / Architectural Software Engineer",
    type: "Remote · Full-Time",
    level: "Staff Level",
    summary: "Own the frontend platform — the companion application, real-time data visualization layer, and the architectural patterns that let the product scale. You will set the architecture, define the stack, and orchestrate AI coding agents to accelerate implementation while maintaining a rigorous quality gate on everything that ships.",
    responsibilities: [
      "Own the frontend architecture: component model, state management, rendering strategy, performance budget, and build pipeline",
      "Orchestrate AI coding agents to accelerate frontend development — generating components, tests, and integration code — while enforcing strict quality gates",
      "Build and own the core user-facing application — real-time device data, maps, health metrics, alerts, and device management UI",
      "Define API contracts jointly with the backend team; shape the data model that flows to the client",
      "Make technology choices: framework selection, SPA vs. SSR, offline support, and progressive web app vs. native",
      "Establish frontend engineering standards for an AI-first team: human review checkpoints, test coverage, accessibility, and cross-platform consistency",
      "Contribute to system-level architecture discussions",
      "Mentor engineers through architectural review, code review, and pairing",
    ],
    required: [
      "5+ years of frontend engineering experience, including at least 2 years in a senior or staff-level role",
      "Deep expertise in modern JavaScript/TypeScript and at least one major framework (React preferred)",
      "Demonstrated ability to make and own architectural decisions — component systems, state at scale, real performance problems",
      "Experience designing and consuming REST or GraphQL APIs",
      "Conductor mindset: you set the architecture and direct AI agents to build it",
      "Active and fluent use of AI development tools (Cursor, GitHub Copilot, Claude Code, or equivalent)",
      "Strong opinions about code quality with sharp instincts for where AI-generated code fails silently",
      "Clear, direct communicator who can work across hardware, firmware, backend, and design",
    ],
    niceToHave: [
      "Experience with real-time data (WebSockets, SSE, or MQTT) or geospatial visualization (Mapbox, Leaflet, Deck.gl)",
      "Familiarity with mobile-first or native hybrid development (React Native, Expo)",
      "Background in health tech, IoT dashboards, or safety-critical interfaces",
      "Experience with design systems and accessibility (WCAG 2.1)",
      "Exposure to backend or full-stack systems",
    ],
    applyNote: "Email careers@rx360.com with your resume and examples of architectural decisions or systems you have designed.",
  },
  {
    id: "backend-staff",
    title: "Staff Backend Software Engineer",
    type: "Remote · Full-Time",
    level: "Staff Level",
    summary: "Own the backend platform that connects our devices to the cloud — from the ingestion layer that handles satellite and cellular telemetry, to the APIs that power our mobile and web applications. You will work directly with hardware and firmware teams to define device-cloud protocols and set the architecture for how we scale.",
    responsibilities: [
      "Architect the backend platform for device telemetry ingestion — handling satellite (Iridium SBD, Skylo NTN), LTE-M, and NB-IoT data streams",
      "Direct AI coding agents to implement services, pipelines, and integrations — reviewing output critically and iterating to production quality",
      "Define and own device-cloud communication protocols and API contracts, working jointly with the firmware team",
      "Design scalable, reliable data pipelines for time-series sensor data from a growing fleet of wearables",
      "Build and maintain REST and/or gRPC APIs consumed by mobile clients and internal tooling",
      "Implement device management, OTA firmware update delivery, and fleet provisioning systems",
      "Drive security-first design: end-to-end encryption, secure key management, and authentication at scale",
      "Set standards for backend engineering: AI-assisted development workflows, code review practices, testing strategy, and CI/CD pipelines",
    ],
    required: [
      "5+ years of backend engineering experience with production distributed systems",
      "Strong systems background — you understand how data moves through networks, failure modes, and edge behavior",
      "Experience building and operating cloud-native services (AWS, GCP, or Azure) at production scale",
      "Proficiency in at least one systems-oriented language (Go, Rust, or C++) and one high-productivity language (Python or TypeScript)",
      "Experience with message queues (Kafka, SQS, MQTT), time-series databases, and streaming data pipelines",
      "Conductor mindset: you define the architecture and orchestrate AI agents to execute it",
      "Active and fluent use of AI development tools (Cursor, GitHub Copilot, Claude Code, or equivalent)",
      "Clear, direct communication — written and verbal",
    ],
    niceToHave: [
      "Experience with IoT device backends, MQTT brokers, or constrained-device protocols (CoAP, LwM2M)",
      "Familiarity with satellite communication systems or mobile network protocols (LTE-M, NB-IoT)",
      "Background in embedded systems or firmware",
      "Experience with real-time telemetry, geospatial data, or health sensor data pipelines",
    ],
    applyNote: "Email careers@rx360.com with your resume and a brief note on a system you are proud of having built.",
  },
  {
    id: "firmware-staff",
    title: "Staff Firmware Engineer",
    type: "Remote · Full-Time",
    level: "Staff Level",
    summary: "Own the embedded software stack for the Mark I platform built on Nordic nRF chipsets (nRF9151, nRF5340, nRF52840, nRF54L15) running on the nRF Connect SDK with Zephyr RTOS. You will be responsible for everything from hardware bring-up and peripheral driver development to protocol implementation, power management, and over-the-air update systems.",
    responsibilities: [
      "Own the firmware architecture for the Mark I platform — task model, memory layout, peripheral abstraction, and HAL",
      "Direct AI coding agents to accelerate driver development, protocol scaffolding, and test generation",
      "Develop and maintain firmware for Nordic nRF chipsets: nRF9151, nRF5340, nRF52840, and nRF54L15",
      "Implement and integrate communication stacks: BLE 5.x, LTE-M, NB-IoT, Skylo NTN, and Iridium SBD",
      "Drive power optimization: PSM, eDRX, deep sleep profiles, and wake-up strategies targeting sub-5 µA standby",
      "Develop peripheral drivers for sensors, IMUs, displays, and flash storage over UART, SPI, I2C, and I2S",
      "Own the FOTA system: MCUboot, secure boot, delta updates, rollback, and fleet management integration",
      "Implement hardware security features: TrustZone, CryptoCell-312, secure key storage, and encrypted storage",
      "Work hands-on with hardware engineers during PCB bring-up: signal integrity, pin validation, and power rail sequencing",
    ],
    required: [
      "Strong hands-on experience in embedded C/C++ firmware development for production IoT or wearable devices",
      "Direct experience with Nordic nRF chipsets (nRF9151, nRF52840, nRF5340, or nRF54L15) — shipped firmware on at least one",
      "Working knowledge of the nRF Connect SDK and Zephyr RTOS, or equivalent RTOS (FreeRTOS, ThreadX)",
      "Experience implementing and debugging wireless communication stacks: BLE, LTE-M, NB-IoT, or satellite protocols",
      "Deep understanding of power management in constrained systems: PSM, eDRX, active/sleep current budgeting",
      "Experience with hardware bring-up: reading schematics, oscilloscopes, logic analyzers, debugging signal integrity",
      "Comfort directing AI coding tools for embedded development — with domain depth to catch timing errors and race conditions",
      "Hands-on problem solver — you debug with a scope as readily as with a debugger",
    ],
    niceToHave: [
      "Experience with satellite communication protocols, specifically Iridium SBD or 3GPP NTN (Skylo)",
      "Familiarity with Bluetooth mesh, Thread, Zigbee, or Matter on Nordic platforms",
      "Experience with FOTA in production: MCUboot, SMP protocol, or proprietary update systems",
      "Background in health/medical wearables, safety devices, or other regulated embedded products",
      "Contributions to Zephyr RTOS or the nRF Connect SDK upstream",
    ],
    applyNote: "Email careers@rx360.com with your resume and a description of the most technically challenging firmware problem you have solved.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const }
  })
};

function JobCard({ job, index }: { job: JobListing; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <Card className="overflow-hidden rounded-2xl border-border shadow-sm hover:shadow-lg transition-all duration-300">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4"
        >
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{job.title}</h3>
            <div className="flex flex-wrap gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" /> {job.type}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" /> {job.level}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">{job.summary}</p>
          </div>
          <div className="mt-1 shrink-0">
            {expanded ? (
              <ChevronUp className="w-6 h-6 text-primary" />
            ) : (
              <ChevronDown className="w-6 h-6 text-primary" />
            )}
          </div>
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="px-6 md:px-8 pb-8"
          >
            <div className="border-t border-border pt-6 space-y-8">
              <div>
                <h4 className="text-lg font-bold text-foreground mb-4">What You'll Do</h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-foreground mb-4">Required</h4>
                <ul className="space-y-2">
                  {job.required.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-foreground mb-4">Nice to Have</h4>
                <ul className="space-y-2">
                  {job.niceToHave.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">How to Apply</p>
                  <p className="text-muted-foreground">{job.applyNote}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitApp.mutate(values as any, {
      onSuccess: (res) => {
        toast({
          title: "Message Sent",
          description: res.message,
        });
        form.reset();
      }
    });
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

      <section className="py-24 bg-white" id="open-roles">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Roles</h2>
            <p className="text-lg text-muted-foreground mb-4">
              We're looking for engineers who thrive on hard problems, own their work end-to-end, and want to build something that genuinely matters.
            </p>
            <p className="text-lg text-muted-foreground">
              Don't see a fit? Email <a href="mailto:careers@rx360.com" className="text-primary font-medium hover:underline">careers@rx360.com</a> — we're always interested in meeting exceptional people.
            </p>
          </div>
          <div className="space-y-6">
            {jobListings.map((job, i) => (
              <JobCard key={job.id} job={job} index={i} />
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
                        <Input className="h-12 rounded-lg" placeholder="(555) 000-0000" {...field} />
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
