import { motion } from "framer-motion";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";
import privacyPolicyHtml from "@/content/privacy-policy.html?raw";

export default function PrivacyPolicy() {
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
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-xl"
          >
            Last updated May 19, 2026
          </motion.p>
        </div>
      </section>

      <section className="pt-12 pb-24 bg-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="privacy-policy-content prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }}
          />
        </div>
      </section>
    </div>
  );
}
