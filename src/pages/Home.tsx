import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart, Shield, BookOpen, Clock, MessageCircle,
  ChevronRight, Star, Users, Award, PencilLine,
  PartyPopper, Shapes, Calendar,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

import heroImage from '../assets/img_HomeHero.png';
import heroNxt   from '../assets/img_HomeNext.png';
import prg_Play  from '../assets/img_PlayHome.png';
import prg_Nur   from '../assets/home_nur.png';
import prg_Jr    from '../assets/home_jr.png';
import prg_Sr    from '../assets/home_sr.png';

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

  // Highlight cards — link only where a deeper page exists
  const highlights = [
    { icon: Clock,       title: '25+ Years of Trust',             desc: 'A legacy of care and consistency that families have relied on since 1998.',                color: 'bg-yellow-100 text-yellow-600', link: '/about'      },
    { icon: Users,       title: 'Generations of Families',        desc: 'Former students now return as parents, trusting Angels with their own children.',         color: 'bg-pink-100 text-pink-600',     link: '/about'      },
    { icon: Shield,      title: 'Discipline & Punctuality',       desc: 'We gently build habits, values, and discipline that stay with children for life.',        color: 'bg-green-100 text-green-600',   link: null          },
    { icon: PencilLine,  title: 'Exceptional Handwriting Skills', desc: 'Focused practice that builds neat, confident writing and stronger fine motor control.',   color: 'bg-sky-100 text-sky-600',       link: null          },
    { icon: BookOpen,    title: 'Strong Foundations for Life',    desc: 'A balanced preschool journey that supports academics, confidence, and emotional growth.', color: 'bg-blue-100 text-blue-600',     link: '/programs'   },
    { icon: Shapes,      title: 'Rich Co-Curricular Activities',  desc: 'Children explore creativity, expression, and learning through varied activities.',       color: 'bg-orange-100 text-orange-600', link: '/activities' },
    { icon: PartyPopper, title: 'Celebrations & Annual Day',      desc: 'Events help children build confidence, expression, and joyful participation.',           color: 'bg-purple-100 text-purple-600', link: '/gallery'    },
    { icon: Heart,       title: 'Loving & Nurturing Environment', desc: 'A caring space where every child feels seen, safe, and encouraged every day.',           color: 'bg-rose-100 text-rose-600',     link: '/about'      },
  ];

  return (
    <div className="space-y-20 pb-20">

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-lime-50 via-white to-white pt-14 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-7 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm text-xs font-semibold text-lime-700 border border-lime-100">
                  👼 Since 1998 • Trusted by Families
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-gray-800 leading-tight">
                Nurturing little angels since{' '}
                <span className="text-lime-600">1998</span>
              </h1>

              <div className="space-y-5 text-gray-600 text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  For over 25+ years, Angels Preschool has been a place where little hearts feel{' '}
                  <span className="text-lime-700 font-semibold">safe</span>,{' '}
                  <span className="text-lime-700 font-semibold">loved</span>, and{' '}
                  <span className="text-lime-700 font-semibold">confident</span> to explore the world
                  around them — guided with care, patience, and strong foundational values.
                </p>
                <p>
                  Trusted by families for generations, many of our former students now return as
                  parents — choosing us once again as the very first step in their child's journey.
                </p>
              </div>

              <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
                <div className="flex justify-center lg:justify-start">
                  <span className="inline-flex items-center gap-2 rounded-full bg-lime-50 text-lime-700 px-3 py-1 text-[11px] font-bold border border-lime-100">
                    {currentAdmissionMeta.badge}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center lg:justify-start pt-3">
                  <button type="button" onClick={openEnquiryModal} className="btn-primary flex items-center justify-center gap-2">
                    <MessageCircle size={20} />
                    Admission Enquiry
                  </button>
                  <button type="button" onClick={openVisitModal} className="flex items-center justify-center gap-2 rounded-full border-2 border-sky-500 bg-white text-sky-700 font-semibold px-8 py-4 shadow-sm hover:bg-sky-50 transition">
                    <Calendar size={20} />
                    Book a Visit
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-lime-100 rounded-[2rem] blur-2xl opacity-40" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src={heroImage} alt="Children at Angels Preschool" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-gray-100">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Star className="text-yellow-500 fill-yellow-500" size={22} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">4.9/5 Parent Rating</p>
                  <p className="text-xs text-gray-500">Based on reviews</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-white rounded-full px-4 py-2 shadow-md text-xs font-semibold text-lime-700">
                25+ Years of Care
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-800">Why Parents Trust Angels</h2>
          <div className="w-16 h-1 bg-lime-500 mx-auto mt-3 rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const card = (
              <div className={`bg-white p-7 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group h-full ${item.link ? 'cursor-pointer' : ''}`}>
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  <item.icon size={30} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-snug">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                {item.link && (
                  <p className="mt-3 text-xs font-semibold text-lime-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                    Learn more <ChevronRight size={12} />
                  </p>
                )}
              </div>
            );
            return item.link ? (
              <motion.div key={index} whileHover={{ y: -5 }}>
                <Link to={item.link}>{card}</Link>
              </motion.div>
            ) : (
              <motion.div key={index} whileHover={{ y: -5 }}>
                {card}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PROGRAMS SNAPSHOT */}
      <section className="bg-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-800">Our Programs</h2>
              <div className="w-16 h-1 bg-lime-500 rounded-full mt-3" />
              <p className="text-gray-600 mt-3">
                Carefully designed programs that support your child's emotional, social, and learning development at every stage.
              </p>
            </div>
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
                <div className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-b-4 ${prog.color} h-full`}>
                  <div className="h-48 overflow-hidden">
                    <img src={prog.img} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{prog.title}</h3>
                    <p className="text-sm text-lime-700 font-semibold mb-3">{prog.age}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{prog.desc}</p>
                  </div>
                </div>
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

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-800">What Parents Say</h2>
          <div className="w-16 h-1 bg-lime-500 mx-auto mt-3 rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            The trust families place in Angels is built over years of care, consistency, and genuine connection.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Priya Sharma', role: 'Mother of Aarav (Sr. KG)',   text: 'Angels Preschool has been a blessing for us. The teachers are so warm and caring. Aarav loves going to school every day.' },
            { name: 'Rahul Mehta',  role: 'Father of Vihaan (Nursery)', text: "The focus on discipline along with academics is what sets Angels apart. I've seen a positive change in my son's behavior." },
            { name: 'Anita Desai',  role: 'Mother of Zara (Playgroup)', text: 'Safe, hygienic, and full of love. As a working mother, I feel completely at peace leaving my daughter here.' },
          ].map((review, idx) => (
            <motion.div key={idx} className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full" whileHover={{ y: -4 }}>
              <div className="absolute -top-4 left-8 bg-lime-500 text-white p-2 rounded-full shadow-md">
                <MessageCircle size={18} fill="currentColor" />
              </div>
              <div className="flex items-center gap-1 pt-4 mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />)}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">"{review.text}"</p>
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-bold text-gray-800">{review.name}</h4>
                <p className="text-sm text-lime-600">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA after testimonials — highest trust moment on the page */}
        <div className="mt-14 text-center space-y-5">
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Join hundreds of families who have trusted Angels with their child's first steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" onClick={openEnquiryModal} className="btn-primary flex items-center justify-center gap-2">
              <MessageCircle size={18} />
              Admission Enquiry
            </button>
            <button type="button" onClick={openVisitModal} className="flex items-center justify-center gap-2 rounded-full border-2 border-sky-500 bg-white text-sky-700 font-semibold px-8 py-4 shadow-sm hover:bg-sky-50 transition">
              <Calendar size={18} />
              Book a Visit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;