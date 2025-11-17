import { ExhibitionCarousel } from "@/components/ExhibitionCarousel";
import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [portraitLoaded, setPortraitLoaded] = useState(false);

  const smallPortrait =
    "https://images.unsplash.com/photo-1549924231-f129b911e442?q=40&w=600";

  const hdPortrait =
    "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1500";

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">

        {/* ---------------- HERO ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center mb-28"
        >
          <div className="space-y-6">
            <h1 className="font-display text-[2.5rem] md:text-[3.75rem] font-semibold leading-[1.1] tracking-tight">
              About the Artist
            </h1>

            <p className="text-muted-foreground text-[1.08rem] md:text-[1.22rem] leading-[1.9] tracking-[0.005em] font-light">
              A journey that began with coal sketches beside railway tracks in rural Gujarat,
              evolving into a lifetime of art, heritage, and cultural preservation.
            </p>
          </div>

          {/* Portrait */}
          <div className="rounded-xl overflow-hidden shadow-xl relative bg-muted">
            {!portraitLoaded && (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                Loading…
              </div>
            )}

            <img
              src={smallPortrait}
              alt="Artist portrait small"
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                portraitLoaded ? "opacity-0" : "opacity-100"
              }`}
            />

            <img
              src={hdPortrait}
              loading="lazy"
              alt="Artist portrait"
              onLoad={() => setPortraitLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                portraitLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </motion.div>

        {/* ---------------- BIOGRAPHY ---------------- */}
        <div className="grid md:grid-cols-5 gap-12 md:gap-20 mb-36">
          <div className="md:col-span-3 space-y-10 text-[1.05rem] md:text-[1.22rem] leading-[1.92] tracking-[0.01em] font-light text-foreground/90">

            {[
              <>
                <span className="font-semibold text-foreground">Kashyap Vyas</span> grew up in a
                railway town in Gujarat, where his father worked as a railway guard.
                He spent his childhood drawing engines using pieces of coal,
                unknowingly laying the foundation of his artistic journey.
              </>,
              <>
                He pursued a Bachelor’s Degree in Fine Arts from
                <span className="font-semibold text-foreground"> MS University, Vadodara</span>,
                refining his technique and visual language.
              </>,
              <>
                After working in advertising agencies in Bombay, he entered the
                museum field — first at <span className="font-semibold text-foreground">
                  Bhavnagar Museum
                </span>, then at
                <span className="font-semibold text-foreground"> Junagadh Museum</span>,
                retiring in 2021 as <span className="font-semibold text-foreground">
                  Curator In-Charge
                </span>.
              </>,
              <>
                A passionate lifelong learner, his knowledge spans art, history,
                mythology, and culture — all while continuing to paint with the
                same love he had as a child.
              </>
            ].map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-6"
          >
            <h2 className="font-display text-[2rem] md:text-[2.75rem] font-semibold tracking-tight leading-tight">
              Quick Facts
            </h2>

            <ul className="space-y-3.5 text-muted-foreground font-light text-[1.02rem] leading-relaxed">
              <li>• Artist for 30+ years</li>
              <li>• Bachelor’s in Fine Arts (MSU Vadodara)</li>
              <li>• Retired Curator In-Charge, Junagadh Museum</li>
              <li>• Passionate about history, culture & heritage</li>
              <li>• Known for expressive landscapes & spiritual themes</li>
            </ul>
          </motion.div>
        </div>

        {/* ---------------- EDUCATION ---------------- */}
        <div className="grid md:grid-cols-2 gap-20 mb-36">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-display text-[2rem] md:text-[2.75rem] font-semibold tracking-tight leading-tight mb-10">
              Education
            </h2>

            <div className="space-y-10 font-light text-[1.05rem] md:text-[1.18rem] leading-[1.85]">
              <div>
                <div className="text-lg font-medium">Bachelor of Fine Arts</div>
                <div className="text-muted-foreground">MS University, Vadodara</div>
                <div className="text-sm text-muted-foreground">
                  Graduated with Honors
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---------------- EXHIBITION CAROUSEL ---------------- */}
        <div className="mb-36">
          <ExhibitionCarousel />
        </div>

      </div>
    </div>
  );
}
