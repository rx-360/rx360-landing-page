import { motion } from "framer-motion";
import rx360Logo from "@/assets/rx360-logo.png";

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 rx-noise" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_520px_at_50%_-10%,hsl(var(--primary)/0.18),transparent_55%),radial-gradient(900px_420px_at_15%_0%,hsl(var(--accent)/0.14),transparent_60%),radial-gradient(800px_380px_at_85%_10%,hsl(160_90%_45%/0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--background))_0%,hsl(var(--background))_45%,hsl(var(--background)/0.9)_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 px-6 text-center"
      >
        <img
          src={rx360Logo}
          alt="Rx360"
          className="h-12 w-auto sm:h-14"
        />
        <h1 className="rx-display text-3xl tracking-tight sm:text-4xl">
          Stay Connected. Stay Healthy.
        </h1>
        <div className="rx-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-muted-foreground">
          Coming soon
        </div>
      </motion.div>
    </div>
  );
}
