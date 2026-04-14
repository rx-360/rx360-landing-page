import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, Activity, Smartphone, HeartHandshake, Users, Shield, TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const }
  })
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-people.jpg`}
            alt="Couple walking together on a tree-lined street with string lights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, hsla(315,41%,15%,0.54), hsla(315,41%,20%,0.45), transparent)' }} />
        </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-semibold text-lg mb-4 tracking-wide uppercase border-t-[#ffffff] border-r-[#ffffff] border-b-[#ffffff] border-l-[#ffffff] text-[#ffffffcc]"
            >
              Wellness Reimagined
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
            >
              Stay Connected.
              <br />
              <span className="text-[#e882b7]">Live Independent.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl leading-relaxed mb-8 max-w-lg text-[#ffffffcc] font-medium"
              style={{ textShadow: '0 1px 12px rgba(0,0,0,0.2)' }}
            >A modern wellness platform that puts you in the driver's seat to ensure long-lasting independent living.</motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/about">
                <Button size="lg" className="rounded-xl text-base px-8 h-14 bg-white text-primary hover:bg-white/90 shadow-xl">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-xl text-base px-8 h-14 border-white/30 text-white hover:bg-white/10">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}images/lifestyle-tech.jpg`}
                  alt="Senior couple hiking joyfully on a green hillside"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <p className="text-primary font-semibold text-sm tracking-wide uppercase">Our Platform</p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">A Smarter Way to Support Independence</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rx360 is a wellness platform built for people who want to stay active, informed, and in control of their lives. Our ecosystem helps users keep track of what matters while continuing to live life on their own terms.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                {[
                  { icon: Activity, title: "Health Insights" },
                  { icon: Smartphone, title: "Smart Technology" },
                  { icon: HeartHandshake, title: "Connected Care" },
                ].map((feature, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl bg-white border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <p className="font-semibold text-sm">{feature.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-4">How It Works</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#ffffff]">A Complete Circle of Care</h2>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Rx360 brings together the people and information that help support everyday wellness — creating a simple, reassuring experience.
              </p>
              <ul className="space-y-5 mb-8">
                {[
                  { icon: Users, text: "Loved ones stay connected and informed" },
                  { icon: Shield, text: "Healthcare providers remain part of the conversation" },
                  { icon: TrendingUp, text: "Individuals stay aware of important health signals" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-lg text-white/90">{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/70 italic">
                Together, this creates a circle of care that supports independence rather than replacing it.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src={`${import.meta.env.BASE_URL}images/healthcare-care.png`}
                  alt="Circle of care connecting patients, family, and healthcare providers"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">Real Life, Real People</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for the Way You Live</h2>
            <p className="text-lg text-muted-foreground">
              Our ecosystem blends thoughtful technology with a simple, intuitive experience — making it easy to stay connected and supported.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "active-lifestyle.jpg", title: "Active Living", desc: "Stay engaged in the activities you love with confidence and peace of mind." },
              { img: "family-connection.jpg", title: "Family Connection", desc: "Keep loved ones close, even when they're far away. Stay connected effortlessly." },
              { img: "peaceful-living.jpg", title: "Peace of Mind", desc: "The best technology quietly supports your life without adding complexity." },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group rounded-2xl bg-white">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${item.img}`}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[hsl(333,30%,45%)] via-[hsl(315,41%,25%)] to-[hsl(280,35%,18%)]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[hsl(333,40%,55%)]/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -right-20 w-[600px] h-[600px] bg-[hsl(280,40%,30%)]/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white/40 rounded-full blur-sm" />
          <div className="absolute bottom-1/4 left-1/5 w-3 h-3 bg-white/30 rounded-full blur-sm" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="none" viewBox="0 0 1440 400">
            <path d="M0,200 C180,280 360,100 540,180 C720,260 900,120 1080,200 C1260,280 1350,160 1440,200" fill="none" stroke="white" strokeWidth="1.5" />
            <path d="M0,220 C180,300 360,120 540,200 C720,280 900,140 1080,220 C1260,300 1350,180 1440,220" fill="none" stroke="white" strokeWidth="1" />
            <path d="M0,240 C180,320 360,140 540,220 C720,300 900,160 1080,240 C1260,320 1350,200 1440,240" fill="none" stroke="white" strokeWidth="0.8" />
            <path d="M0,180 C180,260 360,80 540,160 C720,240 900,100 1080,180 C1260,260 1350,140 1440,180" fill="none" stroke="white" strokeWidth="0.6" />
            <path d="M0,260 C200,340 400,160 600,240 C800,320 1000,180 1200,260 C1350,320 1400,220 1440,260" fill="none" stroke="white" strokeWidth="0.5" />
            <ellipse cx="1300" cy="60" rx="80" ry="80" fill="white" fillOpacity="0.04" />
            <ellipse cx="200" cy="340" rx="120" ry="60" fill="white" fillOpacity="0.03" />
          </svg>
        </div>
        <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">We Believe...</h2>
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed mb-8">Independence and connection should go hand in hand.</p>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
              People deserve the freedom to live their lives fully while knowing support is always within reach.
            </p>
            <p className="text-xl font-bold text-[#ffffff]">
              Living Fully. Staying Connected. Maintaining Independence.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-white text-center">
        <div className="container max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Connected. Live Independent.</h2>
            <p className="text-lg text-muted-foreground mb-4">
              We're building a new kind of wellness platform designed to support vibrant, independent lives.
            </p>
            <Link href="/about">
              <Button size="lg" className="rounded-xl px-12 h-14 text-lg shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
