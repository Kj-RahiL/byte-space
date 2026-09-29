"use client";

import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 overflow-hidden selection:bg-primary selection:text-background">
      {/* Background Ambient Glow */}
      <div className="absolute w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Card */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
        {/* Pulse Visualizer Centerpiece */}
        <div className="relative flex items-center justify-center w-20 h-20 mb-8">
          {/* Animated Radial Rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/30"
            animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border border-secondary/20"
            animate={{ scale: [1.2, 0.9, 1.2], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />

          {/* Central Animated Equalizer Bars */}
          <div className="flex items-center gap-1.5 h-8 z-10">
            {[0, 1, 2, 3].map((index) => (
              <motion.span
                key={index}
                className="w-1.5 rounded-full bg-primary"
                animate={{ height: ["20%", "100%", "20%"] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
              />
            ))}
          </div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-secondary font-medium">
            Connecting
          </span>
          <h2 className="font-display text-xl font-bold text-foreground">
            Initializing Pulse
          </h2>
          <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-[260px]">
            Establishing real-time session and loading messages...
          </p>
        </motion.div>

        {/* Bottom Shimmer Bar */}
        <div className="w-32 h-[2px] bg-border rounded-full mt-8 overflow-hidden relative">
          <motion.div
            className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{ x: [-50, 150] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
