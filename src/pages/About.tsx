import { ExhibitionCarousel } from "@/components/ExhibitionCarousel";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";

export default function About() {
  const [portraitLoaded, setPortraitLoaded] = useState(false);

  const smallPortrait =
    "https://images.unsplash.com/photo-1549924231-f129b911e442?q=40&w=600";

  const hdPortrait =
    "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1500";

  return (
    <PageTransition>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">

        {/* ---------------- HERO ---------------- */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h1 className="font-display text-5xl md:text-7xl font-normal leading-tight tracking-tight">
              About the Artist
            </h1>

            <div className="w-16 h-[1px] bg-foreground/30" />

            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed font-light font-serif italic">
              "A journey that began with coal sketches beside railway tracks in rural Gujarat,
              evolving into a lifetime of art, heritage, and cultural preservation."
            </p>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] overflow-hidden bg-muted"
          >
            {!portraitLoaded && (
              <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground font-sans tracking-widest uppercase">
                Loading
              </div>
            )}

            <img
              src={smallPortrait}
              alt="Artist portrait small"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${portraitLoaded ? "opacity-0" : "opacity-100"
                }`}
            />

            <img
              src={hdPortrait}
              loading="lazy"
              alt="Artist portrait"
              onLoad={() => setPortraitLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${portraitLoaded ? "opacity-100" : "opacity-0"
                }`}
            />
          </motion.div>
        </div>

        {/* ---------------- BIOGRAPHY ---------------- */}
        <div className="grid md:grid-cols-12 gap-12 mb-40">
          <div className="md:col-span-7 space-y-8 text-lg md:text-xl leading-loose font-light text-foreground/80">
            {[
              <>
                <span className="font-medium text-foreground">Kashyap Vyas</span> grew up in a
                railway town in Gujarat, where his father worked as a railway guard.
                He spent his childhood drawing engines using pieces of coal,
                unknowingly laying the foundation of his artistic journey.
              </>,
              <>
                He pursued a Bachelor’s Degree in Fine Arts from
                <span className="font-medium text-foreground"> MS University, Vadodara</span>,
                refining his technique and visual language.
              </>,
              <>
                After working in advertising agencies in Bombay, he entered the
                museum field — first at <span className="font-medium text-foreground">
                  Bhavnagar Museum
                </span>, then at
                <span className="font-medium text-foreground"> Junagadh Museum</span>,
                retiring in 2021 as <span className="font-medium text-foreground">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Quick Facts */}
          <div className="md:col-span-4 md:col-start-9 space-y-8 sticky top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl font-medium mb-6">Quick Facts</h3>
              <ul className="space-y-4 text-muted-foreground font-light text-base">
                <li className="flex items-start gap-3">
                  <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-foreground/20" />
                  Artist for 30+ years
                </li>
                <li className="flex items-start gap-3">
                  <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-foreground/20" />
                  BFA from MS University, Vadodara
                </li>
                <li className="flex items-start gap-3">
                  <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-foreground/20" />
                  Retired Curator In-Charge, Junagadh Museum
                </li>
                <li className="flex items-start gap-3">
                  <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-foreground/20" />
                  Passionate about history & heritage
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* ---------------- EXHIBITION CAROUSEL ---------------- */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-normal mb-4">Exhibitions</h2>
            <div className="w-12 h-[1px] bg-foreground/20" />
          </div>
          <ExhibitionCarousel />
        </div>

      </div>
    </PageTransition>
  );
}
