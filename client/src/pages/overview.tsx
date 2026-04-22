import { motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";

const VIDEO_URL =
  "https://bucket-jwk39s.s3.us-west-2.amazonaws.com/RX360_Overview.mp4";

export default function OverviewPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_520px_at_50%_-10%,hsl(var(--primary)/0.18),transparent_55%),radial-gradient(900px_420px_at_15%_0%,hsl(var(--accent)/0.14),transparent_60%),radial-gradient(800px_380px_at_85%_10%,hsl(160_90%_45%/0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--background))_0%,hsl(var(--background))_45%,hsl(var(--background)/0.9)_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center gap-8 px-4 py-12 sm:px-6"
      >
        <a href="/" aria-label="Rx360 home">
          <Logo />
        </a>

        <div className="w-full overflow-hidden rounded-2xl border border-border/40 bg-background/40 shadow-xl backdrop-blur-sm">
          <video
            className="aspect-video w-full"
            controls
            playsInline
            preload="metadata"
          >
            <source src={VIDEO_URL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Rx360
        </p>
      </motion.div>
    </div>
  );
}
