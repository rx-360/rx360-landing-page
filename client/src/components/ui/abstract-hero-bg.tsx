export function AbstractHeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[hsl(333,30%,45%)] via-[hsl(315,41%,25%)] to-[hsl(280,35%,18%)]">
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[hsl(333,40%,55%)]/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-32 -right-20 w-[600px] h-[600px] bg-[hsl(280,40%,30%)]/30 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white/40 rounded-full blur-sm" />
      <div className="absolute bottom-1/4 left-[20%] w-3 h-3 bg-white/30 rounded-full blur-sm" />
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
  );
}
