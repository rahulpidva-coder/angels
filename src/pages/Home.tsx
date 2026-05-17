import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart, Shield, BookOpen, Clock, MessageCircle,
  ChevronRight, Star, Users, PencilLine,
  PartyPopper, Shapes, Calendar,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';
import { Button, SectionHeader, Badge, Card } from '../components/ui';

import heroImage from '../assets/img_HomeHero.png';
import heroNxt   from '../assets/img_HomeNext.png';
import prg_Play  from '../assets/img_PlayHome.png';
import prg_Nur   from '../assets/home_nur.png';
import prg_Jr    from '../assets/home_jr.png';
import prg_Sr    from '../assets/home_sr.png';
import trustImg  from '../assets/img_CalmTime.png';

// Dynamic parent note photos — add images to src/assets/notes/ and they appear automatically
const noteImgModules = import.meta.glob<{ default: string }>(
  '../assets/notes/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true }
);
const noteImages = Object.values(noteImgModules).map(m => m.default);
const NOTE_ROTATIONS = ['rotate-3', '-rotate-3', 'rotate-2', '-rotate-2', 'rotate-3', '-rotate-2'];
const NOTE_PINS = [
  'from-rose-400 to-rose-600',
  'from-sky-400 to-sky-600',
  'from-amber-400 to-amber-600',
  'from-emerald-400 to-emerald-600',
  'from-violet-400 to-violet-600',
  'from-rose-400 to-orange-500',
];

// ── Motion language system ────────────────────────────────────────────────────
// Single expo-out curve: sharp initiation, luxurious deceleration tail
const ease = [0.16, 1, 0.3, 1];

// Named reveal variants — used consistently across all sections
const revealUp     = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } };
const revealUpSlow = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } } };

// Image entry — subtle Ken Burns zoom-out as the photo "develops" into the frame
const imgReveal    = { hidden: { opacity: 0, scale: 1.06 }, visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease } } };

// Stagger containers — three deliberate speeds
const staggerSm = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const staggerMd = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const staggerLg = { hidden: {}, visible: { transition: { staggerChildren: 0.16 } } };

// Hero (fires on mount, not scroll; retains slight delay between children)
const heroContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.10, delayChildren: 0.08 } } };
const heroItem      = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease } } };

type AdmissionStatus = 'OPEN' | 'LIMITED' | 'CONNECT';
const ADMISSION_STATUS: AdmissionStatus = 'OPEN';
const admissionMeta = {
  OPEN:    { badge: 'Admissions Open • 2026–27'    },
  LIMITED: { badge: 'Limited Admissions • 2026–27' },
  CONNECT: { badge: 'Connect With Us • 2026–27'    },
};

const Home = () => {
  const { openEnquiryModal, openVisitModal } = useModal();
  const currentAdmissionMeta = admissionMeta[ADMISSION_STATUS];

  const trustPillars = [
    {
      icon: Clock, title: '25+ Years of Steady Care',
      desc: 'A legacy of consistency that families have relied upon — generation after generation, since 1998.',
      color: 'bg-yellow-100 text-yellow-600', gradient: 'from-yellow-50/60 to-white', border: 'border-yellow-100/80', accent: 'bg-yellow-400', link: '/about',
    },
    {
      icon: Users, title: 'A Multigenerational Community',
      desc: 'Former students now return as parents, trusting Angels with their own children — a rare and deeply earned distinction.',
      color: 'bg-pink-100 text-pink-600', gradient: 'from-pink-50/60 to-white', border: 'border-pink-100/80', accent: 'bg-pink-400', link: '/about',
    },
    {
      icon: Heart, title: 'A Nurturing Home Away from Home',
      desc: 'Every child is known by name, seen as an individual, and cared for with the warmth of a second family.',
      color: 'bg-rose-100 text-rose-600', gradient: 'from-rose-50/60 to-white', border: 'border-rose-100/80', accent: 'bg-rose-400', link: '/about',
    },
  ];

  const trustFeatures = [
    { icon: Shield,      color: 'bg-green-100 text-green-600',   dot: 'bg-green-500',    title: 'Discipline & Punctuality'  },
    { icon: PencilLine,  color: 'bg-sky-100 text-sky-600',       dot: 'bg-sky-500',      title: 'Exceptional Handwriting'   },
    { icon: BookOpen,    color: 'bg-blue-100 text-blue-600',     dot: 'bg-blue-500',     title: 'Strong Foundations'        },
    { icon: Shapes,      color: 'bg-orange-100 text-orange-600', dot: 'bg-orange-400',   title: 'Co-Curricular Activities'  },
    { icon: PartyPopper, color: 'bg-purple-100 text-purple-600', dot: 'bg-purple-500',   title: 'Annual Day & Events'       },
  ];

  return (
    <div className="space-y-20 pb-20">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f7fdf0] via-white to-white pt-2 pb-16 sm:pb-24 lg:pt-6 lg:pb-36">

        {/* Atmospheric depth layers — pointer-events-none so they never intercept clicks */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-yellow-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-[480px] h-[480px] rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Left: storytelling column ── */}
            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate="visible"
              className="order-2 lg:order-1 space-y-5 text-center lg:text-left"
            >
              {/* Eyebrow — editorial location line */}
              <motion.div variants={heroItem} className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-lime-700 bg-lime-50 border border-lime-200/60 px-4 py-2 rounded-full">
                  Ghatkopar, Mumbai · Est. 1998
                </span>
              </motion.div>

              {/* H1 — forced 2-line composition; "angels" is the emotional anchor */}
              <motion.h1
                variants={heroItem}
                className="text-5xl lg:text-6xl font-heading font-bold text-gray-800 leading-[1.08] tracking-tight"
              >
                Nurturing little
                <br />
                <span className="text-lime-600">angels</span> since 1998
              </motion.h1>

              {/* Single strong body paragraph */}
              <motion.p
                variants={heroItem}
                className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                For over 25 years, Angels has been the first school that children genuinely
                love — a place where little hearts feel safe, grow with confidence, and begin
                a journey that parents trust enough to return to with their own children.
              </motion.p>

              {/* Stats strip — consolidated trust signals */}
              <motion.div
                variants={heroItem}
                className="flex justify-between max-w-lg mx-auto lg:mx-0 py-3 border-y border-gray-100"
              >
                {[
                  { value: '25+',   label: 'Years of Trust'  },
                  { value: '2000+', label: 'Happy Families'  },
                  { value: '4.9★',  label: 'Parent Rating'   },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="text-2xl font-heading font-bold text-gray-800 leading-none">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Admission status badge + primary CTAs */}
              <motion.div variants={heroItem} className="space-y-4">
                <div className="flex justify-center lg:justify-start">
                  <Badge className="text-[11px] font-bold gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 shrink-0" />
                    {currentAdmissionMeta.badge}
                  </Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" onClick={openEnquiryModal}>
                    <MessageCircle size={20} />
                    Admission Enquiry
                  </Button>
                  <Button variant="sky-outline" size="lg" onClick={openVisitModal}>
                    <Calendar size={20} />
                    Book a Visit
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right: image column ── */}
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.15, ease }}
              className="order-1 lg:order-2 relative"
            >
              {/* Ambient glow behind the frame */}
              <div className="pointer-events-none absolute inset-[-12px] rounded-[2.5rem] bg-lime-200/30 blur-3xl" />

              {/* Hero image — Ken Burns entry: image develops into the frame */}
              <div className="relative border-4 border-white rounded-[2rem] shadow-2xl overflow-hidden min-h-[380px] sm:min-h-[520px] lg:min-h-[640px]">
                <motion.img
                  src={heroImage}
                  alt="Children learning joyfully at Angels Preschool"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.07 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.6, delay: 0.15, ease }}
                />
                {/* Subtle depth gradient at base of image */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating card: star rating — bottom-left, primary trust signal */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100/80"
              >
                <div className="bg-yellow-100 p-2 rounded-full shrink-0">
                  <Star className="text-yellow-500 fill-yellow-500" size={18} />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm leading-none">4.9 / 5 Rating</p>
                  <div className="flex gap-0.5 mt-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={9} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating card: established year — top-right, brand anchor */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                className="absolute top-5 right-5 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl px-4 py-3 border border-white/40 text-center"
              >
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Est.</p>
                <p className="text-2xl font-heading font-bold text-lime-600 leading-none mt-0.5">1998</p>
              </motion.div>

              {/* Floating card: families — mid-right, hidden below md to prevent mobile clipping */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                className="hidden md:flex absolute -right-5 bottom-32 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl px-4 py-3 items-center gap-2.5 border border-white/40"
              >
                <div className="bg-rose-100 p-1.5 rounded-full shrink-0">
                  <Heart className="text-rose-500" size={14} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-none">2000+ Families</p>
                  <p className="text-[11px] text-gray-600 mt-0.5">Loved by parents</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── WHY PARENTS TRUST ANGELS ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Act I: Editorial opening — section roots, clean and authoritative ── */}
        <motion.div
          variants={revealUpSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <SectionHeader title="Why Parents Trust Angels" size="sm" align="center" className="mb-7" />
          <p className="text-xl font-heading font-semibold text-gray-700 leading-relaxed max-w-xl mx-auto text-center">
            What began in 1998 as one teacher's belief that five neighbourhood
            children deserved better — has grown into Ghatkopar's most trusted
            preschool, now welcoming{' '}
            <span className="text-lime-700">second-generation families</span>.
          </p>
        </motion.div>

        {/* ── Act II: The numbered manifesto — pillars as cinematic editorial statements ── */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">

          {/* LEFT: numbered trust pillars — each one a chapter, not a list item */}
          <motion.div
            variants={staggerLg}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {trustPillars.map((item, i) => (
              <motion.div
                key={i}
                variants={revealUp}
                className="relative"
              >
                {/* Editorial number — background watermark; depth without noise */}
                <span className="pointer-events-none select-none absolute -top-6 -left-1 text-[8rem] font-heading font-bold leading-none text-gray-100 hidden lg:block">
                  0{i + 1}
                </span>

                <Link
                  to={item.link}
                  className={`group relative z-10 flex gap-6 items-start ${
                    i === 0
                      ? 'pb-12 border-b border-gray-100'
                      : i < trustPillars.length - 1
                      ? 'py-12 border-b border-gray-100'
                      : 'pt-12'
                  }`}
                >
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shrink-0 shadow-sm mt-1`}>
                    <item.icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3 leading-snug group-hover:text-lime-700 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: portrait image — immersive, artfully framed */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative order-first lg:order-last"
          >
            {/* Warm offset shadow frame */}
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-[2rem] bg-lime-100/60 pointer-events-none" />

            {/* overflow-hidden clips the imgReveal scale — photo developing into frame */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <motion.img
                src={trustImg}
                alt="A nurturing moment at Angels Preschool"
                className="w-full aspect-[3/4] object-cover"
                variants={imgReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating legacy chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.45, ease }}
              viewport={{ once: true }}
              className="absolute -top-5 -left-5 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100"
            >
              <span className="text-2xl font-heading font-bold text-lime-600 leading-none">25+</span>
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mt-0.5">Years Trusted</p>
            </motion.div>

            {/* Floating trust signal */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5, ease }}
              viewport={{ once: true }}
              className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl border border-white/60"
            >
              <div className="flex gap-0.5 mb-1.5">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-bold text-gray-800 leading-snug">Ghatkopar's Most Trusted</p>
              <p className="text-[11px] text-gray-500 mt-0.5">Loved by parents. Chosen by families.</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Act III: The Angels Promise — the emotional climax of the section ── */}
        <motion.div
          variants={revealUpSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 lg:mt-32"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#f6fdf0] via-white to-[#fffef8] border border-lime-100/70">

            {/* Top accent stripe — opening flourish, not a section underline */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-lime-400 to-transparent" />

            {/* Atmospheric bloom behind the text */}
            <div className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[560px] h-[280px] bg-lime-100/35 rounded-full blur-3xl" />

            {/* Large decorative quote mark — background character, desktop only */}
            <span className="pointer-events-none select-none absolute top-6 left-10 text-[9rem] leading-none font-serif text-lime-200/50 hidden lg:block">
              "
            </span>

            <div className="relative px-8 py-16 lg:px-24 lg:py-20">

              {/* Ceremonial label */}
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-px w-12 bg-lime-300/80 rounded-full" />
                <p className="text-[11px] font-bold text-lime-700 tracking-[0.32em] uppercase whitespace-nowrap">The Angels Promise</p>
                <div className="h-px w-12 bg-lime-300/80 rounded-full" />
              </div>

              {/* The promise — blur-to-clear reveal: text comes into focus as it enters */}
              <motion.p
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.95, ease, delay: 0.12 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-[34px] font-heading font-semibold text-gray-800 leading-relaxed text-center max-w-3xl mx-auto mb-12"
              >
                Before your child moves on from Angels, they will carry{' '}
                <span className="text-lime-700">
                  discipline, handwriting confidence, and a strong academic foundation
                </span>{' '}
                that primary schools notice — and the joyful, irreplaceable memories
                of their very first school.
              </motion.p>

              {/* Outcome markers — staggered pill entry */}
              <motion.div
                className="flex flex-wrap justify-center gap-3"
                variants={staggerSm}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {trustFeatures.map((feat, i) => (
                  <motion.div key={i} variants={revealUp} className="flex items-center gap-2.5 bg-white rounded-full px-4 py-2.5 border border-gray-100 shadow-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${feat.dot}`} />
                    <span className="text-[13px] font-semibold text-gray-700">{feat.title}</span>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </motion.div>

      </section>

      {/* ── OUR PROGRAMS ─────────────────────────────────────────────────── */}
      <section className="bg-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header row */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-5 gap-6">
            <motion.div
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-lime-700 bg-white/80 border border-lime-200/50 px-4 py-1.5 rounded-full mb-4">
                Playgroup through Senior KG
              </span>
              <SectionHeader
                title="Our Programs"
                subtitle="Four thoughtfully designed stages — each one meeting your child exactly where they are, and growing them toward where they need to be."
                align="left"
                size="sm"
                className="mb-0"
              />
            </motion.div>
            <motion.div
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link to="/programs" className="text-lime-600 font-bold hover:text-lime-700 flex items-center gap-1.5 group shrink-0">
                View All Programs
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>

          {/* Journey progression indicator — desktop editorial timeline */}
          <motion.div
            className="hidden lg:flex items-start mb-12 mt-8"
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: 'Playgroup', dot: 'bg-orange-400' },
              { label: 'Nursery',   dot: 'bg-yellow-400' },
              { label: 'Jr. KG',    dot: 'bg-sky-400'    },
              { label: 'Sr. KG',    dot: 'bg-lime-500'   },
            ].map((s, i) => (
              <React.Fragment key={s.label}>
                <div className="flex flex-col items-center gap-1.5 shrink-0">
                  <div className={`w-2 h-2 rounded-full mt-0.5 ${s.dot}`} />
                  <span className="text-[10px] font-bold text-gray-400 tracking-[0.15em] uppercase">{s.label}</span>
                </div>
                {i < 3 && <div className="flex-1 h-px bg-gray-200/80 mx-5 mt-1" />}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Program cards */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerMd}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Playgroup', age: '1.5+ years',
                desc: 'A gentle, nurturing first step away from home — where your child discovers the joy of a world beyond you.',
                img: prg_Play,
                badge: 'bg-orange-50/90 text-orange-700 border border-orange-200/50',
                bar:   'bg-orange-200',
                anchor: '/programs#playgroup',
              },
              {
                title: 'Nursery', age: '3+ years',
                desc: 'Building confidence, communication, and early skills through play, rhythm, and warm daily routines.',
                img: prg_Nur,
                badge: 'bg-yellow-50/90 text-yellow-700 border border-yellow-200/50',
                bar:   'bg-yellow-200',
                anchor: '/programs#nursery',
              },
              {
                title: 'Jr. KG', age: '4+ years',
                desc: 'Structured learning through activities designed to build curiosity, focus, and a love of discovery.',
                img: prg_Jr,
                badge: 'bg-sky-50/90 text-sky-700 border border-sky-200/50',
                bar:   'bg-sky-200',
                anchor: '/programs#jrkg',
              },
              {
                title: 'Sr. KG', age: '5+ years',
                desc: 'Preparing children for a smooth, confident transition to formal schooling — ready in every way that matters.',
                img: prg_Sr,
                badge: 'bg-lime-50/90 text-lime-700 border border-lime-200/50',
                bar:   'bg-lime-300',
                anchor: '/programs#srkg',
              },
            ].map((prog, idx) => (
              <motion.div
                key={idx}
                variants={revealUp}
                whileHover={{ y: -5, transition: { duration: 0.22, ease } }}
              >
                <Link to={prog.anchor} className="group block h-full">
                  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100/80 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">

                    {/* Image — photography-forward with editorial overlays */}
                    <div className="relative h-56 overflow-hidden shrink-0">
                      <motion.img
                        src={prog.img}
                        alt={`${prog.title} at Angels Preschool`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        variants={imgReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                      {/* Depth gradient for overlay legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none" />
                      {/* Stage number — top-right editorial marker */}
                      <span className="absolute top-4 right-4 text-white/70 text-[11px] font-bold tracking-[0.2em]">
                        0{idx + 1}
                      </span>
                      {/* Age badge — bottom-left, glassy, colour-coded to stage */}
                      <div className="absolute bottom-4 left-4">
                        <span className={`inline-flex items-center ${prog.badge} text-[11px] font-bold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm`}>
                          {prog.age}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col px-6 pt-5 pb-6">
                      <h3 className="text-xl font-heading font-bold text-gray-800 mb-2.5 leading-snug group-hover:text-lime-700 transition-colors duration-200">
                        {prog.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{prog.desc}</p>
                      {/* Micro CTA — reveals on hover */}
                      <div className="flex items-center gap-1.5 text-[12px] font-semibold text-lime-600 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                        <span>Explore program</span>
                        <ChevronRight size={13} />
                      </div>
                    </div>

                    {/* Stage colour accent — refined 2px bottom line */}
                    <div className={`h-0.5 ${prog.bar} shrink-0`} />

                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Journey closing statement */}
          <motion.div
            className="mt-14"
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto rounded-3xl bg-white/80 backdrop-blur border border-lime-100/80 shadow-sm px-8 py-8 text-center">
              <p className="text-xl md:text-2xl font-heading font-semibold text-gray-800 leading-relaxed mb-5">
                Each stage grows naturally into the next — a carefully held journey from{' '}
                <span className="text-lime-700">first-day courage</span>{' '}
                to{' '}
                <span className="text-lime-700">school-ready confidence</span>.
              </p>
              <Link
                to="/programs"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime-600 hover:text-lime-700 group"
              >
                Explore all four programs
                <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── THE ANGELS EXPERIENCE ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Act I: Editorial opening — restrained, poetic, authoritative ── */}
        <motion.div
          variants={revealUpSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-lime-700 bg-lime-50 border border-lime-200/60 px-4 py-2 rounded-full">
              Since 1998 · Ghatkopar, Mumbai
            </span>
          </div>
          <SectionHeader
            title="The Angels Experience"
            align="left"
            size="sm"
            className="mb-5"
          />
          <p className="text-xl md:text-2xl font-heading font-semibold text-gray-700 leading-relaxed max-w-2xl">
            Every morning, something quiet and remarkable happens — your child
            walks through our doors, and{' '}
            <span className="text-lime-700">feels completely at home</span>.
          </p>
        </motion.div>

        {/* ── Act II: Immersive composition — cinematic image + emotional truths ── */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-stretch mb-16 lg:mb-24">

          {/* LEFT: Cinematic photograph — the emotional centrepiece */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden min-h-[360px] lg:min-h-[560px]"
          >
            {/* Ken Burns image reveal — photo develops into the frame */}
            <motion.img
              src={heroNxt}
              alt="Children enjoying a warm, joyful day at Angels Preschool"
              className="absolute inset-0 w-full h-full object-cover"
              variants={imgReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            {/* Depth gradients — cinematic base + warm top-corner atmosphere */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-300/10 via-transparent to-transparent" />

            {/* Editorial parent quote — the voice that lives inside the photograph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.45, ease }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 right-0 px-8 py-10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-lime-400/70 rounded-full" />
                <p className="text-[10px] font-bold text-white/50 tracking-[0.3em] uppercase">A parent's words</p>
              </div>
              <p className="text-white font-heading font-semibold text-2xl md:text-[26px] leading-snug max-w-sm">
                "By the third week, she was running in ahead of me."
              </p>
            </motion.div>

            {/* Year marker — glass pill, top-right — matches hero float */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
              className="absolute top-6 right-6 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl px-4 py-3 border border-white/40 text-center"
            >
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Est.</p>
              <p className="text-2xl font-heading font-bold text-lime-600 leading-none mt-0.5">1998</p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Three emotional moments — authentic, editorial, quietly hierarchical */}
          <motion.div
            variants={staggerLg}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {[
              {
                accent: 'bg-amber-300',
                accentW: 'w-10',
                headingSz: 'text-2xl lg:text-[26px]',
                title: 'Every child is known personally',
                body: "Teachers know each child's little habits, fears, and joys, and respond with patience and genuine care.",
                subtleClause: undefined as string | undefined,
              },
              {
                accent: 'bg-rose-300',
                accentW: 'w-7',
                headingSz: 'text-xl lg:text-2xl',
                title: 'A stable, experienced team',
                body: 'Many of our teachers have been with us for years, creating a consistent and comforting environment.',
                subtleClause: undefined as string | undefined,
              },
              {
                accent: 'bg-lime-400',
                accentW: 'w-5',
                headingSz: 'text-xl',
                title: 'Values woven into everyday moments',
                body: 'Sharing toys, saying thank you, waiting for their turn',
                subtleClause: '— small daily habits that shape who they become.' as string | undefined,
              },
            ].map((moment, i) => (
              <motion.div
                key={i}
                variants={revealUp}
                className={`${i === 0 ? 'pb-10 lg:pb-12' : i === 1 ? 'py-10 lg:py-12' : 'pt-10 lg:pt-12'} ${i < 2 ? 'border-b border-gray-100' : ''}`}
              >
                <div className={`${moment.accentW} h-0.5 ${moment.accent} rounded-full mb-5`} />
                <h3 className={`${moment.headingSz} font-heading font-bold text-gray-800 mb-3 leading-snug`}>
                  {moment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {moment.body}
                  {moment.subtleClause && (
                    <> <span className="text-lime-700 font-semibold">{moment.subtleClause}</span></>
                  )}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Act III: The closing belief — editorial strip, open composition ── */}
        <div className="border-t border-gray-100 pt-12 lg:pt-16 pb-4 lg:pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.95, ease, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-heading font-semibold text-gray-800 leading-snug max-w-2xl"
            >
              When parents tell us{' '}
              <span className="text-lime-700">"I wish I'd found Angels sooner"</span>
              {' '}— that is the experience we have been quietly building since 1998.
            </motion.p>
            <motion.div
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="shrink-0"
            >
              <Button variant="sky-outline" size="lg" onClick={openVisitModal}>
                <Calendar size={18} />
                Come see it for yourself
              </Button>
            </motion.div>
          </div>
        </div>

      </section>

      {/* ── PARENT VOICES ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Heard From Our Families"
          subtitle="Trust takes years to earn. These are the voices that built ours."
          size="sm"
          className="mb-10"
        />

        {/* Social proof anchor */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-4 flex-wrap text-sm"
        >
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />)}
          </div>
          <span className="font-bold text-gray-800">4.9 / 5</span>
          <span className="text-gray-300 select-none">·</span>
          <span className="text-gray-500">200+ parent reviews</span>
          <span className="text-gray-300 select-none">·</span>
        </motion.div>

        {/* ── In Their Own Words — pinned photo notes marquee ── */}
        {noteImages.length > 0 && (
          <>
            <motion.div
              variants={revealUpSlow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-14 mb-10"
            >
              <div className="flex items-center gap-6">
                <div className="h-px flex-1 bg-gray-200 rounded-full" />
                <div className="text-center shrink-0">
                  <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-lime-600 mb-1.5">Parent Voices</p>
                  <p className="text-lg font-heading font-semibold text-gray-700">In Their Own Words</p>
                </div>
                <div className="h-px flex-1 bg-gray-200 rounded-full" />
              </div>
            </motion.div>

            <div className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 pt-6 pb-14">
              <div className="notes-marquee flex gap-10" style={{ width: 'max-content' }}>
                {(() => {
                  const minCards = 8;
                  const repeatCount = Math.ceil(minCards / noteImages.length);
                  const base = Array.from({ length: repeatCount }).flatMap(() => noteImages);
                  return [...base, ...base];
                })().map((url, i) => {
                  const rotation = NOTE_ROTATIONS[i % NOTE_ROTATIONS.length];
                  const pin = NOTE_PINS[i % NOTE_PINS.length];
                  return (
                    <div
                      key={i}
                      className={`relative shrink-0 w-[320px] ${rotation} hover:rotate-0 transition-transform duration-500 cursor-default`}
                      style={{ filter: 'drop-shadow(3px 8px 18px rgba(0,0,0,0.20))' }}
                    >
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                        <div className={`w-[18px] h-[18px] rounded-full bg-gradient-to-br ${pin} border-2 border-white/40`} />
                        <div className="w-[3px] h-3 bg-gray-700/50 rounded-b-sm -mt-0.5" />
                      </div>
                      <div
                        className="overflow-hidden"
                        style={{
                          clipPath: 'polygon(0% 7%, 3% 3%, 7% 6%, 11% 2%, 15% 5%, 19% 1%, 23% 4%, 27% 0%, 31% 4%, 35% 1%, 39% 5%, 43% 2%, 47% 6%, 51% 3%, 55% 7%, 59% 4%, 63% 8%, 67% 5%, 71% 2%, 75% 6%, 79% 3%, 83% 7%, 87% 4%, 91% 1%, 95% 5%, 100% 3%, 100% 100%, 0% 100%)',
                        }}
                      >
                        <img
                          src={url}
                          alt="Parent handwritten note"
                          className="w-full h-[360px] object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* CTA block */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-5"
        >
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Join hundreds of families who have trusted Angels with their child's first steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openEnquiryModal}>
              <MessageCircle size={18} />
              Admission Enquiry
            </Button>
            <Button variant="sky-outline" size="lg" onClick={openVisitModal}>
              <Calendar size={18} />
              Book a Visit
            </Button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
