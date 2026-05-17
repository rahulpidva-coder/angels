import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart, Shield, BookOpen, Clock, MessageCircle,
  ChevronRight, Star, Users, Award, PencilLine,
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

// ── Hero entrance animation variants ────────────────────────────────────────
const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};
const heroItem = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

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
      desc: 'A legacy of consistency that Ghatkopar families have relied upon — generation after generation, since 1998.',
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
              initial={{ opacity: 0, x: 36, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 relative"
            >
              {/* Ambient glow behind the frame */}
              <div className="pointer-events-none absolute inset-[-12px] rounded-[2.5rem] bg-lime-200/30 blur-3xl" />

              {/* Hero image — cover fill; swap in a portrait image for best results */}
              <div className="relative border-4 border-white rounded-[2rem] shadow-2xl overflow-hidden min-h-[380px] sm:min-h-[520px] lg:min-h-[640px]">
                <img
                  src={heroImage}
                  alt="Children learning joyfully at Angels Preschool"
                  className="absolute inset-0 w-full h-full object-cover"
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
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.52 }}
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {trustPillars.map((item, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
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
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            viewport={{ once: true }}
            className="relative order-first lg:order-last"
          >
            {/* Warm offset shadow frame */}
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-[2rem] bg-lime-100/60 pointer-events-none" />

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={trustImg}
                alt="A nurturing moment at Angels Preschool"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating legacy chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.48, duration: 0.38 }}
              viewport={{ once: true }}
              className="absolute -top-5 -left-5 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100"
            >
              <span className="text-2xl font-heading font-bold text-lime-600 leading-none">25+</span>
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mt-0.5">Years Trusted</p>
            </motion.div>

            {/* Floating trust signal */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.42 }}
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
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62 }}
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

              {/* The promise — centered stage moment, the section's emotional peak */}
              <p className="text-2xl md:text-3xl lg:text-[34px] font-heading font-semibold text-gray-800 leading-relaxed text-center max-w-3xl mx-auto mb-12">
                Before your child moves on from Angels, they will carry{' '}
                <span className="text-lime-700">
                  discipline, handwriting confidence, and a strong academic foundation
                </span>{' '}
                that primary schools notice — and the joyful, irreplaceable memories
                of their very first school.
              </p>

              {/* Outcome markers — minimal pills, warmth not clutter */}
              <div className="flex flex-wrap justify-center gap-3">
                {trustFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-white rounded-full px-4 py-2.5 border border-gray-100 shadow-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${feat.dot}`} />
                    <span className="text-[13px] font-semibold text-gray-700">{feat.title}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </section>

      {/* PROGRAMS SNAPSHOT */}
      <section className="bg-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <SectionHeader
              title="Our Programs"
              subtitle="Carefully designed programs that support your child's emotional, social, and learning development at every stage."
              align="left"
              size="sm"
            />
            <Link to="/programs" className="text-lime-600 font-bold hover:text-lime-700 flex items-center gap-1 shrink-0">
              View All Programs <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Playgroup', age: '1.5+ years', desc: 'A gentle and nurturing first step away from home.',                        img: prg_Play, color: 'border-red-400',    anchor: '/programs#playgroup' },
              { title: 'Nursery',   age: '3+ years',   desc: 'Building confidence, communication, and early skills.',                    img: prg_Nur,  color: 'border-yellow-400', anchor: '/programs#nursery'   },
              { title: 'Jr. KG',    age: '4+ years',   desc: 'Introducing structured learning through fun activities.',                  img: prg_Jr,   color: 'border-cyan-400',   anchor: '/programs#jrkg'      },
              { title: 'Sr. KG',    age: '5+ years',   desc: 'Preparing children for a smooth transition to formal schooling.',          img: prg_Sr,   color: 'border-lime-400',   anchor: '/programs#srkg'      },
            ].map((prog, idx) => (
              <Link to={prog.anchor} key={idx} className="group">
                <Card
                  padding="none"
                  className={`overflow-hidden hover:shadow-xl border-b-4 ${prog.color} h-full`}
                >
                  <div className="h-48 overflow-hidden">
                    <img src={prog.img} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{prog.title}</h3>
                    <p className="text-sm text-lime-700 font-semibold mb-3">{prog.age}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{prog.desc}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <div className="max-w-4xl mx-auto rounded-3xl bg-white/80 backdrop-blur border border-lime-100 shadow-lg px-8 py-7 text-center">
              <p className="text-xl md:text-2xl font-heading font-semibold text-gray-800 leading-relaxed">
                Each program is designed to build{' '}
                <span className="text-lime-700 font-bold">confidence</span>,{' '}
                <span className="text-lime-700 font-bold">independence</span>, and a{' '}
                <span className="text-lime-700 font-bold">love for learning</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE ANGELS EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-lime-50 via-emerald-50 to-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden px-8 py-12 md:px-12 md:py-16 mt-8">
          <div className="pointer-events-none absolute -top-20 -right-10 w-60 h-60 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-xs font-semibold text-lime-700 shadow-sm">
                💛 Since 1998 · Angels Preschool
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
                The Angels Experience
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Every child who walks into Angels is welcomed into a warm, steady space — familiar faces, gentle routines, and a loving atmosphere that feels like an extension of home.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Heart, title: 'Every child is known personally',    desc: "Teachers know each child's little habits, fears, and joys, and respond with patience and genuine care." },
                  { icon: Users, title: 'A stable, experienced team',          desc: 'Many of our teachers have been with us for years, creating a consistent and comforting environment.'       },
                  { icon: Star,  title: 'Values woven into everyday moments',  desc: 'Sharing toys, saying thank you, waiting for their turn — small daily habits that shape who they become.'  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow">
                      <Icon className="text-lime-600" size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{title}</h3>
                      <p className="text-sm text-gray-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div className="relative" initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
                <img src={heroNxt} alt="Children enjoying their day at Angels Preschool" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 left-4 sm:left-6 bg-white/95 backdrop-blur rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-lime-100 flex items-center justify-center">
                  <Award className="text-lime-600" size={20} />
                </div>
                <div className="text-xs sm:text-sm">
                  <p className="font-semibold text-gray-800">2000+ Happy Children</p>
                  <p className="text-[11px] text-gray-500">Trusted by parents. Loved by children.</p>
                </div>
              </div>
              <div className="absolute -top-5 right-4 sm:right-6 bg-lime-600 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                25+ Years of Angels
              </div>
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
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-12 flex-wrap text-sm"
        >
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />)}
          </div>
          <span className="font-bold text-gray-800">4.9 / 5</span>
          <span className="text-gray-300 select-none">·</span>
          <span className="text-gray-500">200+ parent reviews</span>
          <span className="text-gray-300 select-none">·</span>
          <span className="text-gray-500">Ghatkopar, Mumbai</span>
        </motion.div>

        {/* Editorial layout: featured left, two compact right */}
        <div className="grid lg:grid-cols-2 gap-6 mb-14">

          {/* Featured testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="h-full"
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 h-full flex flex-col">
              <p className="text-[5rem] leading-none text-lime-100 -mb-3 select-none font-serif">{'“'}</p>
              <p className="text-gray-700 leading-relaxed text-lg flex-1 mb-6">
                Aarav used to cling to me at drop-off. By the third week at Angels, he was
                running in ahead of me. That moment told me everything I needed to know
                about this school.
              </p>
              <div className="flex items-center gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-lime-700">PS</span>
                </div>
                <div>
                  <p className="font-bold text-gray-800 leading-none">Priya Sharma</p>
                  <p className="text-sm text-lime-600 mt-0.5">Mother · Aarav, Sr. KG</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two compact testimonials stacked */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
          >
            {[
              {
                initials: 'RM', name: 'Rahul Mehta', role: 'Father · Vihaan, Nursery',
                text: "The shift in Vihaan's confidence was noticeable within months — not just manners, but a quiet self-assurance in how he carries himself every day.",
              },
              {
                initials: 'AD', name: 'Anita Desai', role: 'Mother · Zara, Playgroup',
                text: "As a working parent, finding Angels was a genuine relief. I leave for work knowing my daughter is safe, loved, and fully engaged — every single day.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                whileHover={{ y: -3 }}
                className="flex-1"
              >
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 h-full flex flex-col">
                  <p className="text-[3rem] leading-none text-lime-100 -mb-1 select-none font-serif">{'“'}</p>
                  <p className="text-gray-600 leading-relaxed text-sm flex-1 mb-4">{t.text}</p>
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-lime-50 border border-lime-100 flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-lime-700">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800 leading-none">{t.name}</p>
                      <p className="text-xs text-lime-600 mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA block */}
        <div className="text-center space-y-5">
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Join hundreds of Ghatkopar families who have trusted Angels with their child's first steps.
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
        </div>
      </section>

    </div>
  );
};

export default Home;
