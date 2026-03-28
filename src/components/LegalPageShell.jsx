import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Footer from "./Footer";
import { LAST_UPDATED_LEGAL, LAST_UPDATED_ISO } from "../constants/legal";

/**
 * Shared chrome for Privacy Policy and Terms pages (cream / espresso theme).
 */
const LegalPageShell = ({
  title,
  eyebrow = "Legal",
  intro,
  lastUpdated = LAST_UPDATED_LEGAL,
  children,
  relatedLink,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f0e8]">
      <header
        className="sticky top-0 z-20 border-b border-[#ddd5c8] bg-[#f5f0e8]/95 backdrop-blur-md"
        role="banner"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="text-xs sm:text-sm font-medium tracking-[0.12em] uppercase text-[#7a5c40] hover:text-[#2a1a0e] transition-colors"
          >
            ← Home
          </Link>
          <Link to="/" className="shrink-0" aria-label={`${title} — NUVÓ home`}>
            <img
              src="/assets/logo.png"
              alt="NUVÓ"
              className="h-9 sm:h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      <main
        id="main-content"
        className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 pb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs tracking-[0.28em] uppercase text-[#7a5c40] mb-2">
            {eyebrow}
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight text-[#2a1a0e]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {title}
          </h1>
          {intro ? (
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5a3d22]/85">
              {intro}
            </p>
          ) : null}
          <p className="mt-4 text-xs sm:text-sm text-[#7a5c40]">
            Last updated:{" "}
            <time dateTime={LAST_UPDATED_ISO}>{lastUpdated}</time>
          </p>
        </motion.div>

        <motion.article
          className="mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {children}
        </motion.article>

        {relatedLink ? (
          <p className="mt-12 pt-8 border-t border-[#ddd5c8] text-sm text-[#5a3d22]/80">
            See also:{" "}
            <Link
              to={relatedLink.to}
              className="font-medium text-[#7a5c40] underline underline-offset-4 hover:text-[#2a1a0e]"
            >
              {relatedLink.label}
            </Link>
          </p>
        ) : null}
      </main>

      <Footer />
    </div>
  );
};

/** Consistent section block inside legal articles */
export const LegalSection = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-28">
    <h2 className="text-base sm:text-lg font-bold text-[#2a1a0e] mt-10 first:mt-0 mb-4 pb-2 border-b border-[#ddd5c8]">
      {title}
    </h2>
    <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#3d2510]">
      {children}
    </div>
  </section>
);

export default LegalPageShell;
