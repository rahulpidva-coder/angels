import React from "react";
import { Heart, Eye, Target, Star, Shield, Home, Sparkles, Users, MessageCircle, Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useModal } from "../context/ModalContext";
import ourStoryImg from "../assets/img_OurStory.png";

const About = () => {
  const { openEnquiryModal, openVisitModal } = useModal();

  return (
    <div className="pb-20 space-y-20">

      {/* Header */}
      <div className="bg-lime-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-3">
          About Angels
        </h1>
        <div className="w-16 h-1 bg-lime-500 rounded-full mx-auto mb-4" />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          More than just a preschool, we are a community dedicated to raising
          happy, confident children.
        </p>
      </div>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src={ourStoryImg} alt="Young children learning happily in a preschool classroom" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-gray-800">Our Story</h2>
            <div className="w-16 h-1 bg-lime-500 rounded-full" />
            <p className="text-gray-600 leading-relaxed">
              Angels Preschool began in 1998 from a moment that changed
              everything. When a local daycare suddenly discontinued a batch
              mid-year, a young teenager stepped in simply to help five small
              children complete their academic session. What started as a
              temporary responsibility quietly grew into a lifelong purpose.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With limited space but limitless warmth, a small home classroom
              slowly became a place where children felt safe, loved, and
              encouraged to explore. Parents trusted Angels not for fancy
              infrastructure, but for the transformation they saw in their children.
            </p>
            <p className="text-gray-600 leading-relaxed">
              More than twenty years later, Angels Preschool continues to stand
              for care, honesty, and the belief that every child deserves a
              joyful and nurturing start to life.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-heading font-bold text-gray-900">The Heart Behind Angels</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
              Since beginning, every batch, every routine and every classroom at Angels has been shaped by a simple question:{" "}
              <span className="font-semibold text-gray-900">"Is this truly in the best interest of the child?"</span>
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-white rounded-[32px] border border-cyan-200 shadow-[0_10px_25px_rgba(34,211,238,0.18)] p-8 md:p-10 relative overflow-hidden">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <Eye size={24} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">Vision</h3>
                  <div className="h-[3px] w-20 bg-cyan-400 rounded-full mt-1" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Where little wings find the courage to fly</h4>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                To build a foundation where children grow emotionally strong,
                creatively expressive, and confidently independent — guided by
                care, values, and meaningful learning experiences in a place that still feels like home.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border border-lime-200 shadow-[0_12px_32px_rgba(190,242,100,0.33)] p-8 md:p-10 relative overflow-hidden">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-lime-50 flex items-center justify-center text-lime-600">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">Mission</h3>
                  <div className="h-[3px] w-20 bg-lime-400 rounded-full mt-1" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Every day, every child, with heart</h4>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                To nurture each child through purposeful play, gentle guidance,
                and heartfelt care — building character, curiosity and confidence
                in a safe, loving environment where learning feels natural, joyful and unhurried.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-heading font-bold text-gray-800 mb-3">Our Core Values</h2>
            <div className="w-16 h-1 bg-lime-500 rounded-full mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              These are the principles that quietly shape every routine, every
              classroom, and every decision we make at Angels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {[
              { icon: Heart,    color: 'bg-rose-50 text-rose-500',     shadow: 'shadow-rose-50 border-rose-50',     title: 'Love That Feels Like Home',         desc: 'Every child is welcomed with warmth, patience and genuine affection — the kind that makes them feel safe enough to learn and explore.' },
              { icon: Star,     color: 'bg-lime-50 text-lime-600',     shadow: 'shadow-lime-50 border-lime-50',     title: 'Growth Through Gentle Guidance',    desc: 'We believe children blossom when they are encouraged, not pressured. Small daily wins slowly build lifelong confidence.' },
              { icon: Shield,   color: 'bg-cyan-50 text-cyan-600',     shadow: 'shadow-cyan-50 border-cyan-50',     title: 'Character Over Competition',        desc: 'Kindness, honesty and respect are woven into everyday routines, helping children grow into grounded and responsible individuals.' },
              { icon: Sparkles, color: 'bg-amber-50 text-amber-500',   shadow: 'shadow-amber-50 border-amber-50',   title: 'Learning Through Real Experiences', desc: 'Stories, play, conversations and exploration make every moment meaningful, so learning becomes natural and joyful instead of forced.' },
              { icon: Home,     color: 'bg-emerald-50 text-emerald-600', shadow: 'shadow-emerald-50 border-emerald-50 md:col-span-2 lg:col-span-1', title: 'A Community Built on Trust', desc: 'Parents choose Angels for the love, consistency and integrity they experience every day — a preschool that truly feels like an extended family.' },
              { icon: Users,    color: 'bg-sky-50 text-sky-600',       shadow: 'shadow-sky-50 border-sky-50',       title: 'Respect for Every Child',           desc: 'Every child is unique, and we honour their pace, personality and potential — nurturing confidence without comparison or pressure.' },
            ].map(({ icon: Icon, color, shadow, title, desc }) => (
              <div key={title} className={`bg-white rounded-3xl shadow-lg p-7 text-left border ${shadow}`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm ${color}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Nudge to Programs — after values, parent naturally wonders what learning looks like */}
          <div className="text-center pt-4">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-lime-700 font-semibold hover:text-lime-800 transition-colors"
            >
              See what your child will learn at Angels
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cyan-600 rounded-3xl overflow-hidden shadow-2xl text-white">
          <div className="grid md:grid-cols-2">
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-heading font-bold mb-2">Meet the Founder</h2>
              <h3 className="text-xl font-semibold text-lime-200 mb-6">Mrs. Angela Pidva</h3>
              <p className="leading-relaxed mb-6 text-lime-50">
                "I never imagined Angels would become what it is today. Back in
                1998, I simply opened my home to help five children who suddenly
                had nowhere to go. Over the years, that small beginning shaped
                my life's purpose. My focus has always been to give every child
                a place where they feel loved, understood, and confident.
                Watching our little angels grow, flourish, and step into school
                with pride remains my greatest joy."
              </p>
              <div className="flex items-center gap-2 text-lime-200 font-bold">
                <Star fill="currentColor" />
                <span>25+ Years of Experience</span>
              </div>
            </div>
            <div className="h-64 md:h-auto bg-lime-700 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
                alt="Founder of Angels Preschool with a warm smile"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — page ends with an action, not a dead end */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-lime-50 to-cyan-50 rounded-3xl border border-lime-100 px-8 py-12 text-center space-y-5">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">
            Impressed? Come see Angels for yourself.
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            No commitment needed. Just visit, meet our team, and see why parents have trusted us for 25+ years.
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
        </div>
      </section>

    </div>
  );
};

export default About;