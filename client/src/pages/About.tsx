import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";

export default function About() {
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
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            About Rx360
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-xl"
          >
            Building a world where independence and connection go hand in hand.
          </motion.p>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/healthcare-care.jpg`}
                alt="Senior packing medications for travel"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">The Challenge</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Rx360 Inspiration</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                As more adults move into their later years, maintaining independence becomes both more important — and sometimes more complicated.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Health information, appointments, medications, communication with doctors, and staying connected with loved ones can quickly become overwhelming.
              </p>
              <p className="text-lg font-medium text-foreground italic">
                We believe thoughtful tools can help cut through that noise.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Connect people to a complete circle of care</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                At Rx360, our mission is simple: connect people to a complete circle of care that supports independent, vibrant, and healthy lives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We believe that independence and health are deeply connected. When people have the right tools and support around them, they can stay active, confident, and engaged in the lives they want to live.
              </p>
              <p className="text-lg font-medium text-primary italic">
                Rx360 exists to help make that possible.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/circle-of-care-new.png`}
                alt="Circle of care connecting patients, family, and healthcare providers"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 overflow-hidden">
        <AbstractHeroBg />
        <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">
          <p className="text-secondary font-semibold tracking-wide uppercase mb-4">Our Origin</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Where Rx360 Began</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-4">
            Rx360 was born out of a real challenge faced by someone who wanted to remain independent but was being pulled in too many directions when it came to managing their health.
          </p>
          <p className="text-xl text-white/90 font-medium italic my-8">
            "What if the right ecosystem could help people stay in the driver's seat of their own health?"
          </p>
          <p className="text-lg text-white/70">
            That question sparked everything. Rx360 was created to help answer it.
          </p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built Around People</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Rx360 brings together health insights, supportive technology, and trusted connections into a unified ecosystem designed to make everyday wellness easier to manage.
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  "Stay informed about their health",
                  "Stay connected with loved ones and care providers",
                  "Stay focused on living their lives fully"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-medium text-foreground italic">
                Because independence should never mean navigating everything alone.
              </p>
            </div>
            <div className="bg-primary/5 rounded-3xl p-8 md:p-10 border border-primary/10">
              <h3 className="text-2xl font-bold mb-8">What Drives Us</h3>
              <ul className="space-y-6 mb-8">
                {[
                  "Independence is essential to quality of life",
                  "Health plays a central role in maintaining that independence",
                  "The right tools can make complex things simpler"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span className="text-lg text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is to help people stay strong, informed, and connected — so they can spend less time worrying and more time living.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
