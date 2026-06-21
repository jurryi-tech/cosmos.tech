"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineScale, HiOutlinePencilAlt, HiOutlineCog } from "react-icons/hi";
import { renderCardVisual, CardType } from "./FeatureCardVisuals";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  cardType?: CardType;
  cardData?: Record<string, any>;
}

interface PageTemplateProps {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  howItHelps: {
    attorneys: string;
    drafters: string;
    engineers: string;
  };
  accentColor?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const roleCards = [
  { key: "attorneys" as const, label: "Patent Attorneys", icon: <HiOutlineScale size={22} /> },
  { key: "drafters" as const, label: "Patent Drafters", icon: <HiOutlinePencilAlt size={22} /> },
  { key: "engineers" as const, label: "Patent Engineers", icon: <HiOutlineCog size={22} /> },
];

export default function PageTemplate({
  category,
  title,
  subtitle,
  description,
  features,
  howItHelps,
  accentColor = "#C5A44E",
}: PageTemplateProps) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 h-[72px] bg-[rgba(253,251,247,0.92)] backdrop-blur-xl border-b border-black/5">
        <div className="mx-auto flex h-full items-center justify-between px-8 max-w-[1440px]">
          <Link href="/" className="flex items-center gap-3">
            <motion.span
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1A1A1A] font-serif text-base font-bold text-[#FDFBF7]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              J
            </motion.span>
            <span className="font-mono text-sm tracking-[0.3em] text-[#1A1A1A] uppercase">
              COSMOS
            </span>
          </Link>
          <motion.div whileHover={{ x: -3 }} transition={{ type: "spring", stiffness: 400 }}>
            <Link
              href="/"
              className="text-sm font-medium text-[#3A3A3A] hover:text-[#C5A44E] transition-colors flex items-center gap-2"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="pt-[120px] pb-20 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-[40px]" style={{ backgroundColor: accentColor }} />
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: accentColor }}>
              {category}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-[#1A1A1A] leading-[1.1] mb-4"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-mono text-sm tracking-wide mb-8"
            style={{ color: accentColor }}
          >
            {subtitle}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#5A5A5A] leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>

          {/* Animated line */}
          <motion.div
            className="mt-12 h-[1px] w-full"
            style={{ backgroundColor: accentColor, opacity: 0.2 }}
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="px-6 pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-serif text-2xl text-[#1A1A1A] mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Key Capabilities
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const visual = renderCardVisual(feature.cardType, feature.cardData, accentColor);
              return (
                <motion.div
                  key={feature.title}
                  className="feature-card group bg-white rounded-xl p-6 border border-[#E8E6E3] hover:border-[#C5A44E]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A44E]/5 min-w-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-4 transition-colors duration-300"
                    style={{
                      backgroundColor: accentColor + "10",
                      color: accentColor,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-[#1A1A1A] mb-2 text-[15px]">{feature.title}</h3>
                  {visual && <div className="mb-3">{visual}</div>}
                  <p className={`text-sm text-[#777] leading-relaxed ${visual ? "line-clamp-2" : ""}`}>
                    {feature.description}
                  </p>
                  {/* Micro hover line */}
                  <motion.div
                    className="mt-4 h-[2px] rounded-full"
                    style={{ backgroundColor: accentColor }}
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Cosmos Helps Section */}
      <section className="px-6 pb-24 bg-gradient-to-b from-[#FDFBF7] to-[#F5F3EE]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: accentColor }}>
              TAILORED FOR YOUR ROLE
            </span>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#1A1A1A] mt-3">
              How Cosmos Helps
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {roleCards.map((role, i) => (
              <motion.div
                key={role.key}
                className="relative bg-white rounded-2xl p-8 border border-[#E8E6E3] overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
              >
                {/* Top accent bar */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ backgroundColor: accentColor }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                  style={{ backgroundColor: accentColor + "12", color: accentColor }}
                >
                  {role.icon}
                </div>

                <h3 className="font-serif text-lg text-[#1A1A1A] mb-4">{role.label}</h3>
                <p className="text-sm text-[#666] leading-[1.8]">
                  {howItHelps[role.key]}
                </p>

                {/* Floating corner decoration */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-[0.04]"
                  style={{ backgroundColor: accentColor }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to transform your patent workflow?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="mailto:contact@cosmos.com?subject=Demo%20Request&body=Hi%20Cosmos%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20demo.%0A%0AThank%20you."
              className="inline-block px-10 py-4 rounded-md text-sm font-medium text-[#1A1A1A] transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: accentColor }}
            >
              Request Access
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-[#111] text-[#666] px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="font-mono text-xs tracking-[0.2em] text-white hover:text-[#C5A44E] transition-colors">
            COSMOS
          </Link>
          <p className="text-xs">&copy; 2026 Cosmos Tech, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
