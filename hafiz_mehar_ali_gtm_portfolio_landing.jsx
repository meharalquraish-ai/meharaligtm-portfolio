import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const brand = "Hafiz Mehar Ali";
const domain = "meharaligtm.com";

const stats = ["Revenue", "Pipeline", "Reply Rate", "Automation Efficiency", "Campaign Scale"];
const stack = ["Instantly", "Smartlead", "Apollo", "Clay", "OpenAI", "Python", "Zapier"];
const process = ["Signal", "System", "Sequence", "Launch", "Optimize", "Scale"];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Icon({ name = "spark", className = "" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),
    chevron: (
      <svg {...common}>
        <path d="m9 18 6-6-6-6" />
      </svg>
    ),
    bot: (
      <svg {...common}>
        <rect x="5" y="8" width="14" height="11" rx="3" />
        <path d="M12 4v4" />
        <path d="M9 13h.01" />
        <path d="M15 13h.01" />
        <path d="M10 17h4" />
      </svg>
    ),
    brain: (
      <svg {...common}>
        <path d="M9 4a3 3 0 0 0-3 3v1a4 4 0 0 0-2 7.45A4 4 0 0 0 8 21h1V4Z" />
        <path d="M15 4a3 3 0 0 1 3 3v1a4 4 0 0 1 2 7.45A4 4 0 0 1 16 21h-1V4Z" />
        <path d="M9 9H6" />
        <path d="M15 9h3" />
        <path d="M9 15H6" />
        <path d="M15 15h3" />
      </svg>
    ),
    database: (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
        <path d="m13 9-2 4h3l-2 4" />
      </svg>
    ),
    fingerprint: (
      <svg {...common}>
        <path d="M6.5 10a5.5 5.5 0 0 1 11 0" />
        <path d="M8.5 14a3.5 3.5 0 0 1 7 0c0 2-1 3-1 5" />
        <path d="M12 14c0 2.5-.5 4-2 6" />
        <path d="M4 14a8 8 0 0 1 16 0" />
        <path d="M18 19c.6-1.5 1-3.2 1-5" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" />
        <path d="m15 16 2 2 4-4" />
      </svg>
    ),
    network: (
      <svg {...common}>
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />
        <path d="M8.5 8.2 11 15" />
        <path d="m15.5 8.2-2.5 6.8" />
        <path d="M9 6h6" />
      </svg>
    ),
    orbit: (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M3 12c0-2.5 4-4.5 9-4.5s9 2 9 4.5-4 4.5-9 4.5-9-2-9-4.5Z" />
        <path d="M7.5 4.5c2.2-1.2 5.8 1.1 8 5.3s2.2 8.1 0 9.3-5.8-1.1-8-5.3-2.2-8.1 0-9.3Z" />
      </svg>
    ),
    radar: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 12 19 5" />
        <path d="M12 3v3" />
        <path d="M21 12h-3" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 3 20 6v6c0 5-3.3 8-8 9-4.7-1-8-4-8-9V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2L15.8 9" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        <path d="M12 2 14.5 9.5 22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z" />
        <path d="M19 3v4" />
        <path d="M21 5h-4" />
      </svg>
    ),
    terminal: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m7 10 3 2-3 2" />
        <path d="M12 15h5" />
      </svg>
    ),
    zap: (
      <svg {...common}>
        <path d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" />
      </svg>
    ),
  };

  return icons[name] || icons.spark;
}

const services = [
  { title: "Cold Email Infrastructure", icon: "mail" },
  { title: "GTM Systems", icon: "network" },
  { title: "AI Automation", icon: "brain" },
  { title: "Deliverability Engineering", icon: "shield" },
  { title: "Lead Intelligence", icon: "radar" },
  { title: "Outbound Campaigns", icon: "database" },
];

function runDevChecks() {
  const requiredStats = ["Revenue", "Pipeline", "Reply Rate", "Automation Efficiency", "Campaign Scale"];
  const requiredServices = [
    "Cold Email Infrastructure",
    "GTM Systems",
    "AI Automation",
    "Deliverability Engineering",
    "Lead Intelligence",
    "Outbound Campaigns",
  ];
  const requiredStack = ["Instantly", "Smartlead", "Apollo", "Clay", "OpenAI", "Python", "Zapier"];

  const hasAll = (actual, expected) => expected.every((item) => actual.includes(item));

  console.assert(brand === "Hafiz Mehar Ali", "Brand name should remain set.");
  console.assert(domain === "meharaligtm.com", "Domain should remain set.");
  console.assert(hasAll(stats, requiredStats), "Stats placeholders should include all requested categories.");
  console.assert(hasAll(services.map((item) => item.title), requiredServices), "Service placeholders should include all requested categories.");
  console.assert(hasAll(stack, requiredStack), "Tech stack placeholders should include all requested tools.");
}

runDevChecks();

function useMouseGradient() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event) => setPos({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return pos;
}

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

function SectionLabel({ children }) {
  return (
    <motion.div
      variants={fadeUp}
      className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-white/[0.035] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />
      {children}
    </motion.div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl",
        "before:absolute before:inset-0 before:rounded-[2rem] before:bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_38%),radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.16),transparent_34%)] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        "after:absolute after:inset-px after:rounded-[calc(2rem-1px)] after:border after:border-white/[0.04]",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function BackgroundSystem() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_80%_5%,rgba(168,85,247,0.14),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.11),transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
      <div className="absolute left-1/2 top-0 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -right-32 top-28 h-[32rem] w-[32rem] rounded-full border border-cyan-300/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute -left-28 top-[42rem] h-[26rem] w-[26rem] rounded-full border border-purple-400/10"
      />
      {Array.from({ length: 38 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-cyan-200/50"
          style={{ left: `${(i * 29) % 100}%`, top: `${(i * 47) % 100}%` }}
          animate={{ opacity: [0.1, 0.9, 0.1], scale: [1, 1.8, 1] }}
          transition={{ duration: 2.4 + (i % 6) * 0.45, repeat: Infinity, delay: i * 0.11 }}
        />
      ))}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Services", "Process", "Work", "Stack", "Contact"];

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-5 z-50 mx-auto w-[min(1180px,calc(100%-24px))]"
    >
      <nav className="relative overflow-hidden rounded-full border border-white/10 bg-[#080b1a]/70 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/5 via-transparent to-purple-400/5" />
        <div className="relative flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-200/20 bg-cyan-300/10 shadow-[0_0_28px_rgba(34,211,238,0.18)]">
              <Icon name="spark" className="h-4 w-4 text-cyan-200" />
            </span>
            <span className="hidden text-sm font-bold tracking-wide text-white sm:block">{brand}</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/58 transition hover:bg-white/[0.06] hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-2.5 text-sm font-bold text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)] transition hover:border-cyan-200/45 hover:bg-cyan-300/15 md:inline-flex"
            >
              CTA Placeholder
            </a>
            <button
              onClick={() => setOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] lg:hidden"
              aria-label="Toggle menu"
            >
              <span className="relative block h-3.5 w-5">
                <span className={cn("absolute left-0 top-0 h-px w-5 bg-white transition", open && "top-1.5 rotate-45")} />
                <span className={cn("absolute bottom-0 left-0 h-px w-5 bg-white transition", open && "bottom-2 -rotate-45")} />
              </span>
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 rounded-[1.5rem] border border-white/10 bg-[#080b1a]/90 p-3 backdrop-blur-2xl lg:hidden"
        >
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="block rounded-2xl px-4 py-3 text-white/70 hover:bg-white/[0.06] hover:text-white">
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden px-5 pb-24 pt-36 sm:pt-44">
      <motion.div style={{ y, opacity }} className="absolute inset-x-0 top-28 mx-auto h-[36rem] w-[36rem] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <SectionLabel>AI-Native GTM Portfolio</SectionLabel>
          <motion.h1 variants={fadeUp} className="max-w-5xl text-6xl font-black leading-[0.86] tracking-[-0.08em] text-white sm:text-7xl md:text-8xl xl:text-[9.6rem]">
            Massive Hero Heading Placeholder
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg leading-8 text-white/58 md:text-xl">
            Subheadline placeholder text for a futuristic outbound GTM engineer portfolio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black text-[#050816] transition hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]">
              Primary CTA Placeholder <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#work" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
              Secondary CTA Placeholder
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/38">
            <span>{domain}</span>
            <span className="h-1 w-1 rounded-full bg-cyan-200/60" />
            <span>Placeholder System Label</span>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.25 }} className="relative min-h-[34rem]">
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-[3rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl"
          >
            <div className="h-full rounded-[2.4rem] border border-cyan-200/10 bg-[#070a18]/80 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-cyan-300/70" />
                  <span className="h-3 w-3 rounded-full bg-purple-400/70" />
                  <span className="h-3 w-3 rounded-full bg-white/25" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/50">Placeholder UI</span>
              </div>
              <div className="grid h-[calc(100%-3rem)] place-items-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="relative grid h-72 w-72 place-items-center rounded-full border border-cyan-200/10">
                  <div className="absolute inset-8 rounded-full border border-purple-300/10" />
                  <div className="absolute inset-16 rounded-full border border-cyan-300/10" />
                  <div className="grid h-24 w-24 place-items-center rounded-full border border-cyan-200/30 bg-cyan-300/10 shadow-[0_0_80px_rgba(34,211,238,0.22)]">
                    <Icon name="bot" className="h-9 w-9 text-cyan-100" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <FloatingPill className="left-0 top-16" icon="zap" label="Placeholder" />
          <FloatingPill className="bottom-20 right-0" icon="orbit" label="Placeholder" />
          <FloatingPill className="right-10 top-3" icon="terminal" label="Placeholder" />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingPill({ className, icon, label }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={cn("absolute z-20 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl", className)}
    >
      <div className="flex items-center gap-3 text-sm font-bold text-white/75">
        <Icon name={icon} className="h-4 w-4 text-cyan-200" />
        {label}
      </div>
    </motion.div>
  );
}

function StatsSection() {
  return (
    <motion.section variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} className="relative z-10 mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((item, index) => (
          <GlassCard key={item} className="min-h-44">
            <div className="text-xs uppercase tracking-[0.28em] text-cyan-100/48">{item}</div>
            <div className="mt-8 text-5xl font-black tracking-[-0.06em] text-white">00</div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${42 + index * 9}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.08 }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-purple-400"
              />
            </div>
          </GlassCard>
        ))}
      </div>
    </motion.section>
  );
}

function AboutSection() {
  const expertiseIcons = ["fingerprint", "brain", "network"];

  return (
    <section id="about" className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-28 lg:grid-cols-[0.86fr_1.14fr]">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger} className="lg:sticky lg:top-32 lg:h-fit">
        <SectionLabel>About / Expertise</SectionLabel>
        <motion.h2 variants={fadeUp} className="text-5xl font-black tracking-[-0.06em] text-white md:text-7xl">
          Split Layout Title Placeholder
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-8 text-white/52">
          Placeholder paragraph for expertise positioning. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </motion.p>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger} className="space-y-5">
        {expertiseIcons.map((icon, i) => (
          <GlassCard key={icon} className="min-h-64 p-8">
            <div className="flex items-start gap-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-cyan-200/15 bg-cyan-300/10">
                <Icon name={icon} className="h-6 w-6 text-cyan-100" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-white">Expertise Block Placeholder</h3>
                <p className="mt-4 max-w-2xl leading-7 text-white/48">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-7xl px-5 py-28">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
        <SectionLabel>Premium Services</SectionLabel>
        <motion.div variants={fadeUp} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-5xl font-black tracking-[-0.06em] text-white md:text-7xl">Service Grid Placeholder</h2>
          <p className="max-w-md text-white/48">Short placeholder intro. Real service copy will be added later.</p>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon }) => (
            <GlassCard key={title} className="min-h-72">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl border border-purple-300/15 bg-purple-400/10">
                    <Icon name={icon} className="h-6 w-6 text-purple-100" />
                  </div>
                  <h3 className="text-2xl font-black tracking-[-0.04em] text-white">{title}</h3>
                </div>
                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-bold text-white/40">
                  <span>Placeholder</span>
                  <Icon name="chevron" className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-cyan-200" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section id="process" className="relative z-10 mx-auto max-w-7xl px-5 py-28">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
        <SectionLabel>Workflow</SectionLabel>
        <motion.h2 variants={fadeUp} className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-white md:text-7xl">Animated Timeline Placeholder</motion.h2>
        <div className="relative mt-16">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/40 to-purple-400/0 md:left-1/2" />
          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={step}
                variants={fadeUp}
                className={cn("relative grid gap-6 md:grid-cols-2", index % 2 ? "md:[&>*:first-child]:col-start-2" : "")}
              >
                <GlassCard className="ml-12 min-h-44 md:ml-0">
                  <div className="absolute -left-[3.25rem] top-8 grid h-10 w-10 place-items-center rounded-full border border-cyan-200/20 bg-[#050816] text-xs font-black text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.2)] md:left-[calc(50%-1.25rem)]">
                    {index + 1}
                  </div>
                  <span className="text-xs uppercase tracking-[0.28em] text-purple-100/45">Step Placeholder</span>
                  <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">{step}</h3>
                  <p className="mt-4 leading-7 text-white/45">Lorem ipsum dolor sit amet placeholder workflow description.</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-7xl px-5 py-28">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
        <SectionLabel>Case Studies</SectionLabel>
        <motion.h2 variants={fadeUp} className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-white md:text-7xl">Premium Work Cards Placeholder</motion.h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <GlassCard key={i} className="min-h-[30rem] p-4">
              <div className="h-52 rounded-[1.55rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
              <div className="p-3 pt-7">
                <div className="text-xs uppercase tracking-[0.28em] text-cyan-100/45">Case Study Placeholder</div>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white">Project Title Placeholder</h3>
                <div className="mt-7 grid grid-cols-3 gap-3">
                  {Array.from({ length: 3 }).map((__, j) => (
                    <div key={j} className="rounded-2xl border border-white/10 bg-white/[0.035] p-3">
                      <div className="text-2xl font-black text-white">00</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/35">Metric</div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function TechStack() {
  return (
    <section id="stack" className="relative z-10 mx-auto max-w-7xl px-5 py-28">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger} className="overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-2xl md:p-12">
        <SectionLabel>Tech Stack</SectionLabel>
        <motion.h2 variants={fadeUp} className="max-w-3xl text-5xl font-black tracking-[-0.06em] text-white md:text-7xl">Animated Logo Cloud Placeholder</motion.h2>
        <motion.div variants={fadeUp} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {stack.map((tool) => (
            <motion.div
              key={tool}
              whileHover={{ y: -6, scale: 1.04 }}
              className="grid min-h-36 place-items-center rounded-[1.5rem] border border-white/10 bg-[#050816]/50 p-5 text-center backdrop-blur-xl transition hover:border-cyan-300/30 hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]"
            >
              <div>
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.06]">
                  <Icon name="spark" className="h-5 w-5 text-cyan-100" />
                </div>
                <div className="text-sm font-black text-white/72">{tool}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-28">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
        <SectionLabel>Testimonials</SectionLabel>
        <motion.h2 variants={fadeUp} className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-white md:text-7xl">Slider Placeholder</motion.h2>
        <motion.div variants={fadeUp} className="mt-12 flex gap-5 overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <GlassCard key={i} className="min-h-80 min-w-[85%] md:min-w-[48%] lg:min-w-[32%]">
              <div className="flex h-full flex-col justify-between">
                <p className="text-2xl font-semibold leading-9 text-white/62">“Placeholder testimonial quote will be added here later.”</p>
                <div className="mt-10 flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full border border-white/10 bg-white/[0.06]" />
                  <div>
                    <div className="font-black text-white">Name Placeholder</div>
                    <div className="mt-1 text-sm text-white/40">Role Placeholder</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function CtaAndContact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-5 py-28">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
        <motion.div variants={fadeUp} className="relative overflow-hidden rounded-[3.5rem] border border-cyan-200/15 bg-[#070a18] p-8 shadow-2xl shadow-cyan-950/30 md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.24),transparent_34%),radial-gradient(circle_at_80%_40%,rgba(168,85,247,0.2),transparent_32%)]" />
          <motion.div animate={{ x: ["-20%", "20%", "-20%"] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-24 left-1/2 h-60 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-cyan-100/60">CTA Banner</div>
              <h2 className="text-5xl font-black tracking-[-0.06em] text-white md:text-7xl">Large CTA Placeholder</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder CTA description only.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-2xl">
              <div className="grid gap-4">
                <div className="h-16 rounded-2xl border border-white/10 bg-[#050816]/60" />
                <div className="h-16 rounded-2xl border border-white/10 bg-[#050816]/60" />
                <div className="h-28 rounded-2xl border border-white/10 bg-[#050816]/60" />
                <button className="rounded-2xl bg-white px-5 py-4 text-sm font-black text-[#050816]">Contact CTA Placeholder</button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 grid gap-5 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <GlassCard key={i} className="min-h-40">
              <div className="mb-5 h-10 w-10 rounded-2xl border border-white/10 bg-white/[0.06]" />
              <div className="text-xl font-black text-white">Contact Block Placeholder</div>
              <div className="mt-3 text-white/42">Social / channel placeholder</div>
            </GlassCard>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-white/42 md:flex-row md:items-center">
        <div className="font-bold text-white/70">{brand}</div>
        <div>{domain}</div>
        <div className="flex gap-4">
          <span>Link</span>
          <span>Link</span>
          <span>Link</span>
        </div>
      </div>
    </footer>
  );
}

export default function PortfolioLandingPage() {
  const mouse = useMouseGradient();
  const smoothX = useSpring(mouse.x, { stiffness: 80, damping: 24, mass: 0.4 });
  const smoothY = useSpring(mouse.y, { stiffness: 80, damping: 24, mass: 0.4 });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] font-sans text-white selection:bg-cyan-300 selection:text-[#050816]">
      <BackgroundSystem />
      <motion.div
        className="pointer-events-none fixed z-40 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl"
        style={{ left: smoothX, top: smoothY }}
      />
      <Navbar />
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProcessTimeline />
      <CaseStudies />
      <TechStack />
      <Testimonials />
      <CtaAndContact />
      <Footer />
    </main>
  );
}
