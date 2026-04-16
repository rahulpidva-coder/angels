import React from 'react';
import { Check, Clock, MessageCircle, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import prg_Play from '../assets/img_playgroup.png';
import prg_Nur  from '../assets/img_nursery.png';
import prg_Jr   from '../assets/img_Jr.png';
import prg_Sr   from '../assets/img_Sr.png';

const programs = [
  {
    id: 'playgroup',
    title: 'Playgroup',
    age: '1.5 – 2.5 Years',
    desc: 'A gentle introduction to the world outside home. We focus on sensory play, social interaction, and developing motor skills.',
    focus: ['Sensory Play', 'Social Skills', 'Music & Movement', 'Basic Vocabulary'],
    pillColor: 'bg-red-100 text-red-700',
    checkBg:   'bg-red-50',
    checkText: 'text-red-600',
    img: prg_Play,
  },
  {
    id: 'nursery',
    title: 'Nursery',
    age: '2.5 – 3.5 Years',
    desc: 'Building independence and curiosity. Children start structured learning through fun activities, storytelling, and creative arts.',
    focus: ['Language Development', 'Pre-writing Skills', 'Creative Arts', 'Number Concepts'],
    pillColor: 'bg-yellow-100 text-yellow-700',
    checkBg:   'bg-yellow-50',
    checkText: 'text-yellow-600',
    img: prg_Nur,
  },
  {
    id: 'jrkg',
    title: 'Junior KG',
    age: '3.5 – 4.5 Years',
    desc: 'Strengthening the foundation. We introduce reading, writing, and logical thinking concepts in an engaging manner.',
    focus: ['Phonics & Reading', 'Writing Skills', 'Math Concepts', 'Environmental Science'],
    pillColor: 'bg-cyan-100 text-cyan-700',
    checkBg:   'bg-cyan-50',
    checkText: 'text-cyan-600',
    img: prg_Jr,
  },
  {
    id: 'srkg',
    title: 'Senior KG',
    age: '4.5 – 5.5 Years',
    desc: 'Preparing for primary school. Advanced concepts are taught to ensure a smooth transition to formal schooling.',
    focus: ['Advanced Phonics', 'Sentence Formation', 'Complex Math', 'General Knowledge'],
    pillColor: 'bg-lime-100 text-lime-700',
    checkBg:   'bg-lime-50',
    checkText: 'text-lime-600',
    img: prg_Sr,
  },
];

const Programs = () => {
  const { openEnquiryModal, openVisitModal } = useModal();

  return (
    <div className="pb-20 space-y-20">

      {/* Header */}
      <div className="bg-lime-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-3">
          Our Programs
        </h1>
        <div className="w-16 h-1 bg-lime-500 rounded-full mx-auto mb-4" />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Curriculum designed to spark curiosity and foster holistic development at every stage.
        </p>
      </div>

      {/* Programs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {programs.map((prog, idx) => (
          <div
            key={prog.id}
            id={prog.id}
            className={`scroll-mt-28 flex flex-col ${
              idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
            } gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-xl h-80 md:h-96">
                <img
                  src={prog.img}
                  alt={prog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <div className={`inline-block px-4 py-1 rounded-full font-bold text-sm ${prog.pillColor}`}>
                {prog.age}
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-800">{prog.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{prog.desc}</p>

              <div>
                <h4 className="font-bold text-gray-800 mb-3">Key Focus Areas:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {prog.focus.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                      <div className={`p-1 rounded-full ${prog.checkBg}`}>
                        <Check size={14} className={prog.checkText} />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nudge to Activities — parent wonders what daily life looks like */}
              <Link
                to="/activities"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime-700 hover:text-lime-800 transition-colors"
              >
                See what a day at Angels looks like
                <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Routine Timeline */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-800">A Day at Angels</h2>
            <div className="w-16 h-1 bg-lime-500 mx-auto mt-3 rounded-full" />
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-lime-200 rounded-full" />
            <div className="space-y-8">
              {[
                { time: '9:00 AM',  title: 'Arrival & Assembly',   desc: 'Prayers, rhymes, and warm-up exercises.'                    },
                { time: '9:30 AM',  title: 'Circle Time',          desc: 'Discussion about the day, weather, and news.'               },
                { time: '10:00 AM', title: 'Learning Activities',  desc: 'Structured learning sessions based on curriculum.'           },
                { time: '11:00 AM', title: 'Snack Break',          desc: 'Healthy eating and social interaction.'                     },
                { time: '11:30 AM', title: 'Free Play',            desc: 'Outdoor play or indoor creative corners.'                   },
                { time: '12:30 PM', title: 'Departure',            desc: 'Pack up and goodbye song.'                                  },
              ].map((slot, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center justify-between relative ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-md border border-gray-100 z-10 hover:border-lime-300 transition-colors">
                    <div className="flex items-center gap-2 text-lime-600 font-bold mb-2">
                      <Clock size={18} />
                      {slot.time}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{slot.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{slot.desc}</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lime-500 rounded-full border-4 border-white shadow-sm z-10" />
                  <div className="w-full md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — parent has read all programs, now guide them to act */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-lime-50 to-cyan-50 rounded-3xl border border-lime-100 px-8 py-12 text-center space-y-5">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">
            Found the right program for your child?
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Take the first step — enquire for admission or come visit us and see the school for yourself.
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

export default Programs;