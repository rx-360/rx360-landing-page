import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";

const team = [
  {
    name: "Elliot Friedman",
    role: "Chief Executive Officer",
    bio: "Elliot Friedman is the Chief Executive Officer of Rx360 and a longtime entrepreneur who has founded and led multiple companies across technology, healthcare, and consumer innovation.\n\nOver the course of his career, Elliot has built and scaled organizations focused on solving complex real-world challenges, including ventures in biotechnology, digital services, and emerging technology.\n\nHis work has consistently centered on identifying important gaps in the market and building teams capable of turning bold ideas into practical solutions. At Rx360, Elliot leads the company's vision to help older adults maintain independence while staying connected to the people and information that support their health.\n\nHe holds an undergraduate degree from the University of Pennsylvania and an MBA from the Massachusetts Institute of Technology.",
    initials: "EF",
    headshot: "headshot-elliot.jpeg"
  },
  {
    name: "Peyman Majd",
    role: "President",
    bio: "Peyman Majd serves as President of Rx360, where he focuses on operational leadership, partnerships, and the execution of the company's long-term strategy.\n\nPeyman brings extensive experience working across technology, healthcare, and consumer services, helping organizations develop innovative solutions that meet real human needs. His work has focused on building systems and partnerships that connect people, services, and information in ways that simplify complex problems.\n\nAt Rx360, Peyman helps guide the company's efforts to create a thoughtful wellness ecosystem that supports independent living while strengthening the connections between individuals, caregivers, and healthcare professionals.\n\nHe holds an undergraduate degree from the University of California, Los Angeles and a M.S. in Astronautical Engineering from the University of Southern California.",
    initials: "PM",
    headshot: "headshot-peyman.png"
  }
];

const companies = ["SpaceX", "Apple", "UI Health", "The New York Times", "Walgreens"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const }
  })
};

export default function Leadership() {
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
            Our Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            Leadership
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-xl"
          >
            The people behind Rx360 — entrepreneurs, operators, and innovators building for a healthier future.
          </motion.p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full p-8 md:p-10 border-border hover:border-primary/30 transition-all shadow-md hover:shadow-xl group rounded-2xl">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${person.headshot}`}
                      alt={person.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-1">{person.name}</h2>
                  <p className="text-primary font-medium mb-6">{person.role}</p>
                  {person.bio.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">World-Class Experience</p>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">A Team Built to Solve Meaningful Problems</h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            The broader Rx360 team includes experienced leaders and innovators who have helped shape products and organizations at companies such as:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mb-10">
            {[
              { src: "logo-spacex.png", alt: "SpaceX", className: "h-6 md:h-8 invert" },
              { src: "logo-apple.png", alt: "Apple", className: "h-10 md:h-12" },
              { src: "logo-uihealth.png", alt: "UI Health", className: "h-8 md:h-10" },
              { src: "logo-walgreens.png", alt: "Walgreens", className: "h-8 md:h-10" },
              { src: "logo-nyt.png", alt: "The New York Times", className: "h-5 md:h-7" },
            ].map((logo) => (
              <img
                key={logo.alt}
                src={`${import.meta.env.BASE_URL}images/${logo.src}`}
                alt={logo.alt}
                className={`${logo.className} w-auto object-contain opacity-70`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground mb-8">...and many others.</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Together, this diverse experience informs how Rx360 approaches its mission — combining technology, healthcare insights, and thoughtful design to support people living vibrant, independent lives.</p>
        </div>
      </section>
      <section className="relative py-24 overflow-hidden">
        <AbstractHeroBg />
        <div className="container max-w-3xl mx-auto px-4 text-center relative z-10">
          <div className="mx-auto mb-10 w-[27rem] h-60 rounded-t-full rounded-b-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
            <img
              src={`${import.meta.env.BASE_URL}images/sunset-hikers.jpg`}
              alt="Senior couple enjoying sunset on a hike"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Building the Future of Independent Living</h2>
          <p className="text-lg text-white/80 mb-4">
            The Rx360 leadership team believes that independence is one of the most important elements of a fulfilling life.
          </p>
          <p className="text-lg text-white/80 mb-8">
            Our mission is to create tools that help people stay connected, informed, and confident as they navigate their health and well-being.
          </p>
          <p className="text-2xl font-bold text-secondary">
            Stay Connected. Live Independent.
          </p>
        </div>
      </section>
    </div>
  );
}
