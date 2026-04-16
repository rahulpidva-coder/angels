import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ChevronDown, ChevronLeft, ChevronRight, X, Quote, MessageCircle, Calendar } from 'lucide-react';
import { useModal } from '../context/ModalContext';

// ═══════════════════════════════════════════════════════════════════════════
//  PHOTO SLOTS — replace null with real import when ready
import hero1 from '../assets/gallery/hero1.png';
import hero2 from '../assets/gallery/hero2.png';
import hero3 from '../assets/gallery/hero3.png';

import morning1 from '../assets/gallery/morning1.png';
import morning2 from '../assets/gallery/morning2.png';
const morning3: string | null = null;

import classroom1 from '../assets/gallery/classroom1.png';
import classroom2 from '../assets/gallery/classroom2.png';
import classroom3 from '../assets/gallery/classroom3.png';

import play1 from '../assets/gallery/play1.png';
import play2 from '../assets/gallery/play2.png';
const play3: string | null = null;

const festival1: string | null = null;
const festival2: string | null = null;

const annual1: string | null = null;
const annual2: string | null = null;
const annual3: string | null = null;
const annual4: string | null = null;
const annual5: string | null = null;
const annual6: string | null = null;
const annual7: string | null = null;
const annual8: string | null = null;

import candid1 from '../assets/gallery/candid1.jpeg';
import candid2 from '../assets/gallery/candid2.png';
const candid3:  string | null = null;
const candid4:  string | null = null;
const candid5:  string | null = null;
const candid6:  string | null = null;
const candid7:  string | null = null;
import candid8 from '../assets/gallery/candid8.png';

const candid9:  string | null = null;
const candid10: string | null = null;
import candid11 from '../assets/gallery/candid11.png';
const candid12: string | null = null;
// ═══════════════════════════════════════════════════════════════════════════

// ── Dynamic Annual Day year ────────────────────────────────────────────────
const annualDayYear = (() => {
  const now = new Date();
  return now.getMonth() <= 4 ? now.getFullYear() - 1 : now.getFullYear();
})();

// ── Placeholder / real image renderer ─────────────────────────────────────
const Img = ({
  src, alt, label, className = '',
}: {
  src: string | null; alt: string; label: string; className?: string;
}) => {
  if (src) return <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />;
  return (
    <div className={`w-full h-full bg-gradient-to-br from-lime-50 via-white to-cyan-50
      flex flex-col items-center justify-center gap-2 p-4 ${className}`}>
      <Camera className="text-lime-300 shrink-0" size={22} />
      <span className="text-[11px] font-semibold text-lime-500 text-center leading-snug">{label}</span>
    </div>
  );
};

// ── Section heading ────────────────────────────────────────────────────────
const SectionHeading = ({ title }: { title: string }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-heading font-bold text-gray-800">{title}</h2>
    <div className="w-16 h-1 bg-lime-500 mt-3 rounded-full" />
  </div>
);

// ── Motion variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const candids = [
  { src: candid1,  label: 'Two children sharing / talking'   },
  { src: candid2,  label: 'Child laughing — pure joy'        },
  { src: candid3,  label: 'Teacher + child moment'           },
  { src: candid4,  label: 'Snack time'                       },
  { src: candid5,  label: 'Art — colourful hands'            },
  { src: candid6,  label: 'Story time — wide-eyed listeners' },
  { src: candid7,  label: 'Outdoor — running freely'         },
  { src: candid8,  label: 'Child showing artwork proudly'    },
  { src: candid9,  label: 'Morning assembly'                 },
  { src: candid10, label: 'Dance / movement activity'        },
  { src: candid11, label: 'Festival dress-up group'          },
  { src: candid12, label: 'Goodbye — child waving'           },
];

// ══════════════════════════════════════════════════════════════════════════
const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { openEnquiryModal, openVisitModal } = useModal();

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setLightbox((p) => p !== null ? Math.min(p + 1, candids.length - 1) : null);
      if (e.key === 'ArrowLeft')  setLightbox((p) => p !== null ? Math.max(p - 1, 0) : null);
      if (e.key === 'Escape')     setLightbox(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  return (
    <div className="pb-24 overflow-x-hidden">

      <style>{`
        .hero-slide { position: absolute; inset: 0; opacity: 0; animation: heroFade 12s infinite; }
        .hero-slide:nth-child(1) { animation-delay: 0s;  }
        .hero-slide:nth-child(2) { animation-delay: 4s;  }
        .hero-slide:nth-child(3) { animation-delay: 8s;  }
        @keyframes heroFade { 0%{opacity:0} 8%{opacity:1} 33%{opacity:1} 41%{opacity:0} 100%{opacity:0} }
        .hero-slide > * { animation: kenBurns 12s ease-out infinite; }
        @keyframes kenBurns { 0%{transform:scale(1.06)} 100%{transform:scale(1.0)} }
        .candid-card img { transition: transform 0.5s ease; }
        .candid-card:hover img { transform: scale(1.04); }
      `}</style>

      {/* ── 1. HERO — pure image ─────────────────────────────────────── */}
      <section className="relative h-[88vh] min-h-[580px] overflow-hidden">
        <div className="absolute inset-0">
          {[
            { src: hero1, label: 'Wide classroom — children engaged, warm light' },
            { src: hero2, label: 'Annual Day stage — costumes, big smiles'       },
            { src: hero3, label: 'Outdoor play — natural, candid, joyful'        },
          ].map((slide, i) => (
            <div key={i} className="hero-slide">
              <Img src={slide.src} alt={`Angels Preschool ${i + 1}`} label={slide.label} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown className="text-white/60" size={30} />
        </motion.div>
      </section>

      {/* ── 2. PHOTO SECTIONS ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-20">

        {/* Morning — wide left + 2 stacked right */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
          <motion.div variants={fadeUp}><SectionHeading title="Morning at Angels" /></motion.div>
          <div className="grid grid-cols-12 gap-4">
            <motion.div variants={fadeUp} className="col-span-12 md:col-span-7 aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Img src={morning1} alt="Morning arrival" label="Teacher greeting children at the door" />
            </motion.div>
            <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
              <motion.div variants={fadeUp} className="flex-1 rounded-3xl overflow-hidden shadow-lg min-h-[160px]">
                <Img src={morning2} alt="Morning assembly" label="Morning assembly / pranayam circle" />
              </motion.div>
              <motion.div variants={fadeUp} className="flex-1 rounded-3xl overflow-hidden shadow-lg min-h-[160px]">
                <Img src={morning3} alt="Child arriving" label="Child arriving — happy expression" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Classroom — offset 3-photo grid */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
          <motion.div variants={fadeUp}><SectionHeading title="In the Classroom" /></motion.div>
          <div className="grid grid-cols-12 gap-4 items-end">
            <motion.div variants={fadeUp} className="col-span-5 aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
              <Img src={classroom1} alt="Table time" label="Table time — writing or drawing" />
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-4 aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Img src={classroom2} alt="Teacher reading" label="Teacher reading to the group" />
            </motion.div>
            <motion.div variants={fadeUp} className="col-span-3 aspect-[3/4] rounded-3xl overflow-hidden shadow-md">
              <Img src={classroom3} alt="Art activity" label="Art & craft activity" />
            </motion.div>
          </div>
        </motion.div>

        {/* Play — 1 wide top + 2 side by side */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
          <motion.div variants={fadeUp}><SectionHeading title="Play Time" /></motion.div>
          <div className="space-y-4">
            <motion.div variants={fadeUp} className="aspect-[21/9] rounded-3xl overflow-hidden shadow-lg">
              <Img src={play1} alt="Free play indoors" label="Free play indoors — blocks and toys" />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div variants={fadeUp} className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Img src={play2} alt="Outdoor play" label="Outdoor play — garden and running" />
              </motion.div>
              <motion.div variants={fadeUp} className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Img src={play3} alt="Playground" label="Cycles / playground equipment" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Celebrations */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
          <motion.div variants={fadeUp}><SectionHeading title="Celebrations & Special Days" /></motion.div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div variants={fadeUp} className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Img src={festival1} alt="Festival" label="Children dressed up — festival day" />
            </motion.div>
            <motion.div variants={fadeUp} className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Img src={festival2} alt="Celebration" label="Classroom celebration activity" />
            </motion.div>
          </div>
        </motion.div>

      </section>

      {/* ── 3. ANNUAL DAY — dark spotlight, 8 photos ─────────────────── */}
      <section className="bg-gray-950 mt-20 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">Annual Day</h2>
            <div className="w-16 h-1 bg-lime-500 mt-3 rounded-full" />
            <p className="text-gray-400 mt-5 max-w-2xl text-base leading-relaxed">
              Once a year, every child steps onto a real stage in front of hundreds of people —
              and discovers something about themselves that stays with them forever.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
            {/* Row 1 */}
            <div className="grid grid-cols-12 gap-4 mb-4">
              <motion.div variants={fadeUp} className="col-span-12 md:col-span-7 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Img src={annual1} alt="Annual Day stage" label="Wide stage — full group performance" />
              </motion.div>
              <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
                <motion.div variants={fadeUp} className="flex-1 rounded-3xl overflow-hidden shadow-xl min-h-[160px]">
                  <Img src={annual2} alt="Child performing" label="Close-up — proud child performing" />
                </motion.div>
                <motion.div variants={fadeUp} className="flex-1 rounded-3xl overflow-hidden shadow-xl min-h-[160px]">
                  <Img src={annual3} alt="Group dance" label="Group dance formation / costume parade" />
                </motion.div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <motion.div variants={fadeUp} className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Img src={annual4} alt="Costume close-up" label="Child in costume — expressive close-up" />
              </motion.div>
              <motion.div variants={fadeUp} className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Img src={annual5} alt="Backstage" label="Backstage — excited faces, preparation" />
              </motion.div>
              <motion.div variants={fadeUp} className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Img src={annual6} alt="Proud moment" label="Proud moment / bow on stage" />
              </motion.div>
            </div>
            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div variants={fadeUp} className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                <Img src={annual7} alt="Audience" label="Audience candid — parents + children together" />
              </motion.div>
              <motion.div variants={fadeUp} className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                <Img src={annual8} alt="Final bow" label="Full stage — final bow / curtain call" />
              </motion.div>
            </div>
          </motion.div>

          {/* Parent quote — dynamic year */}
          <motion.div className="mt-16 text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Quote className="text-lime-500 mx-auto mb-4" size={32} />
            <p className="text-gray-300 text-xl font-heading leading-relaxed italic">
              "Watching my child walk onto that stage with such confidence — I cried.
              I didn't expect that from a preschool. That's Angels."
            </p>
            <p className="text-lime-400 text-sm font-semibold mt-4">— A parent, Annual Day {annualDayYear}</p>
          </motion.div>
        </div>
      </section>

      {/* ── 4. CANDID MOMENTS WALL ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}>
          <SectionHeading title="Candid Moments" />
        </motion.div>

        <motion.div
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
        >
          {candids.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="candid-card break-inside-avoid rounded-2xl overflow-hidden shadow-md cursor-pointer group relative"
              onClick={() => setLightbox(i)}
            >
              <div className={i % 3 === 0 ? 'aspect-square' : i % 3 === 1 ? 'aspect-[3/4]' : 'aspect-[4/3]'}>
                <Img src={c.src} alt={c.label} label={c.label} />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-2xl select-none">🔍</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── 5. CLOSING CTA — parent emotionally engaged, now act ─────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="bg-gradient-to-br from-lime-50 to-cyan-50 rounded-3xl border border-lime-100 px-8 py-12 text-center space-y-5"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">
            Picture your child here.
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Every photo you've seen is from our own classrooms and events.
            Come visit and experience it for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button type="button" onClick={openEnquiryModal} className="btn-primary flex items-center justify-center gap-2">
              <MessageCircle size={18} />
              Admission Enquiry
            </button>
            <button type="button" onClick={openVisitModal} className="flex items-center justify-center gap-2 rounded-full border-2 border-sky-500 bg-white text-sky-700 font-semibold px-8 py-4 shadow-sm hover:bg-sky-50 transition">
              <Calendar size={18} />
              Book a Visit
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
            <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.2 }} className="relative max-w-3xl w-full rounded-3xl overflow-hidden bg-gray-900 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-[4/3]">
                <Img src={candids[lightbox].src} alt={candids[lightbox].label} label={candids[lightbox].label} />
              </div>
              <div className="px-6 py-4 bg-gray-950">
                <p className="text-gray-300 text-sm">{candids[lightbox].label}</p>
                <p className="text-gray-600 text-xs mt-1">{lightbox + 1} / {candids.length}</p>
              </div>
              {lightbox > 0 && (
                <button onClick={() => setLightbox((p) => p !== null ? p - 1 : null)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition">
                  <ChevronLeft size={20} />
                </button>
              )}
              {lightbox < candids.length - 1 && (
                <button onClick={() => setLightbox((p) => p !== null ? p + 1 : null)} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition">
                  <ChevronRight size={20} />
                </button>
              )}
              <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition">
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;