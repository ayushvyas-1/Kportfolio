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
                Born in 1962 in <span className="font-medium text-foreground">Wadhavan City</span>,
                <span className="font-medium text-foreground"> Kashyap Vyas</span> began his artistic journey
                in the railway town of Jetalsar. It was there, beside the tracks, that he spent his childhood
                sketching engines with pieces of coal—a humble beginning that would shape a lifetime of creativity.
              </>,
              <>
                He refined his craft at the <span className="font-medium text-foreground">C.U. Shah Art Teacher Training College</span> and
                later earned his Diploma in Applied Art from the prestigious
                <span className="font-medium text-foreground"> MS University, Vadodara</span> in 1985.
                His early career saw success in advertising, where he designed the iconic "Barmasi Flower" logo for
                <span className="font-medium text-foreground"> Kayam Churna</span> (Sheth Bros) in 1985.
              </>,
              <>
                In March 1985, he joined the <span className="font-medium text-foreground">Department of Museums, Gujarat State</span>.
                Over a distinguished 35-year career, he served as Curator at the Junagadh Museum, Darbar Hall Museum, and
                Prabhaspatan Archaeology Museum. He further specialized in Museology at the
                <span className="font-medium text-foreground"> National Museum, New Delhi</span> in 1991,
                earning an A+ grade for his work on modern display techniques.
              </>,
              <>
                Beyond his official duties, he was a volunteer artist for the <span className="font-medium text-foreground">Bhavnagar Wildlife Conservation Society</span>,
                creating illustrations of flora and fauna. He retired in October 2020, leaving behind a legacy of
                modernized museum displays, conservation workshops, and a deep commitment to preserving heritage.
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
                  Born 1962, Wadhavan City
                </li>
                <li className="flex items-start gap-3">
                  <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-foreground/20" />
                  Diploma in Applied Art (MSU Vadodara)
                </li>
                <li className="flex items-start gap-3">
                  <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-foreground/20" />
                  Museology Expert (National Museum)
                </li>
                <li className="flex items-start gap-3">
                  <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-foreground/20" />
                  Retired Curator (Gujarat State Museums)
                </li>
                <li className="flex items-start gap-3">
                  <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-foreground/20" />
                  Designed 'Kayam Churna' Logo (1985)
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* ---------------- EDUCATION & CAREER ---------------- */}
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
                <div className="text-lg font-medium">Museology Training (Grade A+)</div>
                <div className="text-muted-foreground">National Museum, New Delhi (1991)</div>
                <div className="text-sm text-muted-foreground">
                  Specialized in Modern Display Techniques
                </div>
              </div>
              <div>
                <div className="text-lg font-medium">Diploma in Applied Art</div>
                <div className="text-muted-foreground">MS University, Vadodara (1985)</div>
              </div>
              <div>
                <div className="text-lg font-medium">Art Teacher Training</div>
                <div className="text-muted-foreground">C.U. Shah College, Surendranagar (1978)</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <h2 className="font-display text-[2rem] md:text-[2.75rem] font-semibold tracking-tight leading-tight mb-10">
              Career Highlights
            </h2>

            <div className="space-y-10 font-light text-[1.05rem] md:text-[1.18rem] leading-[1.85]">
              <div>
                <div className="text-lg font-medium">Curator In-Charge</div>
                <div className="text-muted-foreground">Junagadh Museum & Darbar Hall Museum</div>
                <div className="text-sm text-muted-foreground">
                  1985 — 2020
                </div>
              </div>
              <div>
                <div className="text-lg font-medium">Commercial Designer</div>
                <div className="text-muted-foreground">Apex Advertising, Rajkot</div>
                <div className="text-sm text-muted-foreground">
                  Creator of the "Barmasi Flower" logo for Kayam Churna
                </div>
              </div>
              <div>
                <div className="text-lg font-medium">Wildlife Artist (Volunteer)</div>
                <div className="text-muted-foreground">Bhavnagar Wildlife Conservation Society</div>
              </div>
            </div>
          </motion.div>
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
