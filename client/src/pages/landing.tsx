import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  HeartPulse,
  Shield,
  Sparkles,
  Stethoscope,
  Watch,
  Waves,
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import rx360Logo from "@/assets/rx360-logo.png";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>;
}

function BadgePill({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div
      className="rx-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-foreground/80"
      data-testid="badge-pill"
    >
      <span className="text-foreground/70">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const waitlistMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to join waitlist");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "You're on the list!",
        description: "We'll keep you updated on our launch.",
      });
      setEmail("");
    },
    onError: (error: Error) => {
      toast({
        title: "Something went wrong",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      waitlistMutation.mutate(email);
    }
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 rx-noise" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_520px_at_50%_-10%,hsl(var(--primary)/0.18),transparent_55%),radial-gradient(900px_420px_at_15%_0%,hsl(var(--accent)/0.14),transparent_60%),radial-gradient(800px_380px_at_85%_10%,hsl(160_90%_45%/0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--background))_0%,hsl(var(--background))_45%,hsl(var(--background)/0.9)_100%)]" />
      </div>

      {/* Top Nav */}
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="group inline-flex items-center" data-testid="link-home">
              <img
                src={rx360Logo}
                alt="Rx360 - Stay Connected. Stay Healthy."
                className="h-8 w-auto"
                data-testid="logo-image"
              />
            </Link>

            <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
              <a
                href="#product"
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground"
                data-testid="link-product"
              >
                Product
              </a>
              <a
                href="#mission"
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground"
                data-testid="link-mission"
              >
                Mission
              </a>
              <a
                href="#careers"
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground"
                data-testid="link-careers"
              >
                Careers
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Button className="rounded-full" data-testid="button-join-waitlist">
                Join waitlist
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <main>
        <section className="pt-10 sm:pt-14">
          <Container>
            <div className="rx-glow rounded-[28px] border border-border/60 bg-card/40 p-6 sm:p-10 md:p-12">
              <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2" data-testid="row-hero-badges">
                    <BadgePill icon={<Watch className="size-3.5" aria-hidden="true" />}>Elegant. Portable. Connected.</BadgePill>
                    <BadgePill icon={<HeartPulse className="size-3.5" aria-hidden="true" />}>Wear your way to wellness.</BadgePill>
                  </div>

                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="rx-display mt-6 text-pretty text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
                    data-testid="text-hero-title"
                  >
                    Stay Connected. Stay Healthy.
                  </motion.h1>

                  <p
                    className="mt-4 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
                    data-testid="text-hero-subtitle"
                  >
                    Rx360 is a complete wellness ecosystem that helps you stay on track with medications, get support in
                    emergencies, and share updates with your doctor and support circle—when you choose.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="flex w-full max-w-md items-center gap-2 rounded-2xl border border-border/70 bg-background/60 p-2 shadow-sm">
                      <Input
                        type="email"
                        placeholder="Email for launch updates"
                        className="h-11 border-0 bg-transparent shadow-none focus-visible:ring-0"
                        data-testid="input-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Button
                        className="h-11 rounded-xl"
                        data-testid="button-submit"
                        type="submit"
                        disabled={waitlistMutation.isPending}
                      >
                        {waitlistMutation.isPending ? "Joining..." : "Join"}
                      </Button>
                    </div>
                    <div className="text-xs text-muted-foreground" data-testid="text-email-help">
                      No spam. Just the essentials.
                    </div>
                  </form>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {[
                      {
                        title: "RxSchedule",
                        desc: "Right Dose. Right Time.",
                        icon: <BellRing className="size-4" aria-hidden="true" />,
                      },
                      {
                        title: "Fall detection",
                        desc: "A safety layer for peace of mind.",
                        icon: <Waves className="size-4" aria-hidden="true" />,
                      },
                      {
                        title: "RxPulse band",
                        desc: "Bold style. Discrete alerts.",
                        icon: <Watch className="size-4" aria-hidden="true" />,
                      },
                    ].map((f, idx) => (
                      <div
                        key={f.title}
                        className="rx-card rx-hoverlift rounded-2xl p-4"
                        data-testid={`card-hero-feature-${idx}`}
                      >
                        <div className="flex items-center gap-2 text-sm font-semibold" data-testid={`text-feature-title-${idx}`}>
                          <span className="inline-flex size-7 items-center justify-center rounded-xl bg-foreground text-background">
                            {f.icon}
                          </span>
                          {f.title}
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground" data-testid={`text-feature-desc-${idx}`}>
                          {f.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:justify-self-end">
                  <div className="rx-card rx-subtle-ring rx-noise relative overflow-hidden rounded-[28px] p-5">
                    <div className="absolute -left-24 -top-24 size-64 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.35),transparent_60%)]" />
                    <div className="absolute -bottom-24 -right-24 size-64 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.30),transparent_60%)]" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-xs font-semibold text-muted-foreground" data-testid="text-prototype-label">
                            Concept preview
                          </div>
                          <div className="rx-display mt-1 text-xl" data-testid="text-prototype-title">
                            RxPulse band
                          </div>
                        </div>
                        <div
                          className="inline-flex items-center gap-2 rounded-full bg-foreground/10 px-3 py-1 text-xs font-semibold"
                          data-testid="badge-status"
                        >
                          <span className="size-1.5 rounded-full bg-emerald-500" />
                          Coming soon
                        </div>
                      </div>

                      <div className="mt-5 grid gap-3">
                        {[
                          "RxSchedule reminders",
                          "Fall detection + assistance",
                          "Support circle notifications",
                          "Pharmacy‑informed guidance",
                        ].map((t, i) => (
                          <div
                            key={t}
                            className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/50 px-4 py-3"
                            data-testid={`row-capability-${i}`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-foreground text-background">
                                {i % 2 === 0 ? (
                                  <Stethoscope className="size-4" aria-hidden="true" />
                                ) : (
                                  <Shield className="size-4" aria-hidden="true" />
                                )}
                              </span>
                              <span className="text-sm font-semibold" data-testid={`text-capability-${i}`}>
                                {t}
                              </span>
                            </div>
                            <span className="text-xs text-muted-foreground">Soon</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 rounded-2xl border border-border/60 bg-background/50 p-4">
                        <div className="text-xs font-semibold text-muted-foreground" data-testid="text-privacy-label">
                          Private by default
                        </div>
                        <div className="mt-1 text-sm text-foreground/90" data-testid="text-privacy-copy">
                          No one sees your health information unless you give them access.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-muted-foreground" data-testid="text-disclaimer">
                    Concept UI for early communication.
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Product */}
        <section id="product" className="py-14 sm:py-18">
          <Container>
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <div className="rx-display text-3xl tracking-tight" data-testid="text-product-title">
                  Stay Connected. Stay Healthy.
                </div>
                <p className="mt-3 max-w-prose text-muted-foreground" data-testid="text-product-copy">
                  Rx360 is a complete wellness ecosystem for living your life freely, while keeping the people you care
                  about informed about your well-being. Assisted by a mobile phone interface, wearable wristband, and
                  virtual chat, you can connect with your personal data, care circle, and overall health—wherever you go.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "RxPassport",
                    desc: "Portable Health. Yours to Share.",
                  },
                  {
                    title: "RxSchedule",
                    desc: "Right Dose. Right Time.",
                  },
                  {
                    title: "RxAssistant",
                    desc: "Virtual assistance with pharmacist-informed guidance.",
                  },
                  {
                    title: "RxPulse",
                    desc: "Bold style. Discrete alerts.",
                  },
                ].map((c, idx) => (
                  <Card
                    key={c.title}
                    className="rx-card rx-hoverlift rounded-2xl p-5"
                    data-testid={`card-product-${idx}`}
                  >
                    <div className="text-sm font-semibold" data-testid={`text-product-card-title-${idx}`}>
                      {c.title}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground" data-testid={`text-product-card-desc-${idx}`}>
                      {c.desc}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Mission */}
        <section id="mission" className="py-14 sm:py-18">
          <Container>
            <div className="rx-card rx-noise rounded-[28px] p-8 sm:p-10">
              <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
                <div>
                  <div className="rx-display text-3xl tracking-tight" data-testid="text-mission-title">
                    Age the way you want to.
                  </div>
                  <p className="mt-3 text-muted-foreground" data-testid="text-mission-copy">
                    Rx360 is built for self-directed care—easy to use, easy to share, and designed to keep your pharmacist,
                    doctor, and support circle informed when you choose.
                  </p>
                </div>

                <div className="grid gap-3">
                  {[
                    {
                      title: "Approachable",
                      desc: "Easy setup and an uncomplicated experience.",
                    },
                    {
                      title: "Self-directed",
                      desc: "You control what gets shared, and with whom.",
                    },
                    {
                      title: "Credible",
                      desc: "Pharmacy-connected guidance you can trust.",
                    },
                  ].map((v, idx) => (
                    <div
                      key={v.title}
                      className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/50 p-4"
                      data-testid={`row-value-${idx}`}
                    >
                      <div className="mt-0.5 inline-flex size-9 items-center justify-center rounded-xl bg-foreground text-background">
                        <Sparkles className="size-4" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold" data-testid={`text-value-title-${idx}`}>
                          {v.title}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground" data-testid={`text-value-desc-${idx}`}>
                          {v.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>


        {/* Careers */}
        <section id="careers" className="py-14 sm:py-18">
          <Container>
            <div className="rx-card rx-noise rounded-[28px] p-8 sm:p-10">
              <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
                <div>
                  <div className="rx-display text-3xl tracking-tight" data-testid="text-careers-title">
                    Careers
                  </div>
                  <p className="mt-3 text-muted-foreground" data-testid="text-careers-copy">
                    Join a small team building high‑trust technology for aging with dignity. We care about craft,
                    outcomes, and respectful design.
                  </p>
                </div>

                <div className="grid gap-3">
                  {[
                    {
                      role: "Industrial Design",
                      type: "Full‑time · Remote/Hybrid",
                    },
                    {
                      role: "Mobile Engineer",
                      type: "Full‑time · Remote",
                    },
                    {
                      role: "Clinical Partnerships",
                      type: "Part‑time · US",
                    },
                  ].map((j, idx) => (
                    <a
                      key={j.role}
                      href="#"
                      className="group flex items-center justify-between rounded-2xl border border-border/60 bg-background/50 px-5 py-4 transition hover:bg-background/70"
                      data-testid={`link-job-${idx}`}
                    >
                      <div>
                        <div className="text-sm font-semibold" data-testid={`text-job-role-${idx}`}>
                          {j.role}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground" data-testid={`text-job-type-${idx}`}>
                          {j.type}
                        </div>
                      </div>
                      <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </a>
                  ))}
                  <Button variant="secondary" className="mt-2 h-11 rounded-xl" data-testid="button-careers-contact">
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Footer */}
        <footer className="pb-12">
          <Container>
            <Separator className="my-8" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-muted-foreground" data-testid="text-footer-left">
                © {new Date().getFullYear()} rx360. Coming soon.
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  data-testid="link-privacy"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  data-testid="link-terms"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  data-testid="link-contact"
                >
                  Contact
                </a>
              </div>
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}
