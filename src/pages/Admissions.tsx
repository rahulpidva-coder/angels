import React, { useState } from 'react';
import {
  ClipboardCheck, Users, FileText, CreditCard,
  Calendar, MessageCircle, HelpCircle,
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Admissions: React.FC = () => {
  const { openEnquiryModal, openVisitModal } = useModal();
  const whatsappNumber = '+918369023546';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does Angels ensure a safe and caring environment?",
      a: `Children remain under teacher supervision at all times. We only hand over a child to parents or family members we know, or to someone the parent has informed us about in advance. Our classrooms have CCTV monitoring, and school entry is controlled to keep the environment safe and comfortable.`,
      cta: null,
    },
    {
      q: "What documents are required for admission?",
      a: `We need your child's birth certificate, one passport-size photograph, a parent ID proof, and vaccination records. A simple checklist will be shared with you during your visit.`,
      cta: null,
    },
    {
      q: "Is there a settling period for new students?",
      a: `Yes. The first few days have shorter timings so children ease in comfortably. If needed, a parent may stay nearby until the child feels settled. Every child adjusts at their own pace, and we support them gently.`,
      cta: null,
    },
    {
      q: "How many children are there in each class?",
      a: "We keep our batches small so teachers can give each child individual attention and support.",
      cta: null,
    },
    {
      q: "Can we visit the school before enrolling?",
      a: `Yes, absolutely. You can visit the school, see the classrooms, and understand how we work. Visits are by appointment — book yours below and we'll confirm a slot that works for you.`,
      cta: 'visit', // ← inline Book a Visit button here
    },
    {
      q: "Do you provide transportation?",
      a: "We currently do not provide transportation. Children are dropped and picked up by parents or trusted family members to ensure safety and familiarity.",
      cta: null,
    },
    {
      q: "How involved can parents be?",
      a: `We keep communication open and simple. Apart from regular PTMs, parents can speak to the class teacher after school for any concerns. Our Principal is also available whenever guidance or discussion is needed. We believe children grow best when parents and school work closely together.`,
      cta: null,
    },
    {
      q: "What about uniforms and books?",
      a: "Uniform and book details are shared after admission confirmation. Most essential materials are included in the annual fee.",
      cta: null,
    },
    {
      q: "What are the school holidays?",
      a: `We follow major public holidays and have Diwali, Christmas, and summer breaks. A full academic calendar is shared at the start of every year.`,
      cta: null,
    },
  ];

  const steps = [
    { step: '1', icon: MessageCircle,  title: 'Initial Enquiry',               description: 'Contact us via WhatsApp, phone, or visit our school. We will answer your questions and share basic information about our programs.' },
    { step: '2', icon: Calendar,       title: 'Schedule a School Visit',        description: 'Book an appointment to visit our school, see classrooms in action, meet our teachers, and get a feel for the Angels environment.' },
    { step: '3', icon: Users,          title: 'Interaction with Child & Parent', description: "A friendly, informal interaction where we get to know your child and you get to know us better. This helps us understand your child's needs and temperament." },
    { step: '4', icon: FileText,       title: 'Form Submission',                description: 'Fill out the admission form with necessary details and submit required documents (birth certificate, photos, address proof, etc.).' },
    { step: '5', icon: CreditCard,     title: 'Fee Payment',                   description: "Pay the admission fee and first-term fees to secure your child's seat. We accept various payment methods for your convenience." },
    { step: '6', icon: ClipboardCheck, title: 'Confirmation & Orientation',    description: "Receive confirmation of admission, orientation details, and prepare for your child's exciting journey at Angels!" },
  ];

  const eligibility = [
    { program: 'Playgroup', age: '1 year 8 months to 2 years 6 months' },
    { program: 'Nursery',   age: '2 years 6 months to 3 years 6 months' },
    { program: 'Jr. KG',    age: '3 years 6 months to 4 years 6 months' },
    { program: 'Sr. KG',    age: '4 years 6 months to 5 years 6 months' },
  ];

  return (
    <div className="pb-20 space-y-20">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-lime-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-3">
          Admissions
        </h1>
        <div className="w-16 h-1 bg-lime-500 rounded-full mx-auto mb-4" />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
          Join the Angels Preschool family and give your child the best start to
          their educational journey.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button type="button" onClick={openEnquiryModal} className="btn-primary inline-flex items-center justify-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Admission Enquiry
          </button>
          <button type="button" onClick={openVisitModal} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-sky-500 bg-white text-sky-700 font-semibold px-8 py-4 shadow-sm hover:bg-sky-50 transition">
            <Calendar className="h-5 w-5" />
            Book a Visit
          </button>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-6">Admissions Overview</h2>
          <div className="space-y-4 text-gray-600">
            <p className="text-lg">
              Admissions at Angels Preschool typically open in{' '}
              <span className="font-bold text-gray-800">December–January</span>{' '}
              for the new academic year beginning in{' '}
              <span className="font-bold text-gray-800">April</span>.
            </p>
            <p>
              We have <span className="font-bold text-gray-800">limited seats</span> in each class to
              maintain our commitment to small batch sizes and individual attention. We recommend
              enquiring early as seats fill up quickly, especially for Playgroup and Nursery.
            </p>
            <p>
              Our admission process is designed to be simple, transparent, and welcoming. We want
              both you and your child to feel comfortable and confident about joining the Angels family.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-step */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
              Step-by-Step Admission Process
            </h2>
            <div className="w-16 h-1 bg-lime-500 mx-auto mt-3 rounded-full" />
          </div>
          <div className="space-y-6">
            {steps.map(({ step, icon: Icon, title, description }) => (
              <div key={step} className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-lime-500 text-white flex items-center justify-center text-2xl font-bold shadow-md">{step}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-6 w-6 text-lime-600" />
                    <h3 className="text-xl font-heading font-bold text-gray-800">{title}</h3>
                  </div>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">Eligibility & Age Criteria</h2>
          <div className="w-16 h-1 bg-lime-500 mx-auto mt-3 rounded-full" />
          <p className="text-gray-600 mt-4">
            Age criteria as of <span className="font-bold text-gray-800">April 1st</span> of the academic year:
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {eligibility.map((item) => (
              <div key={item.program} className="p-4 rounded-xl bg-amber-50 border-l-4 border-lime-500">
                <h3 className="font-heading font-bold text-lg text-gray-800 mb-1">{item.program}</h3>
                <p className="text-gray-600">{item.age}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            * In special cases, we may consider children who are slightly younger or older. Please contact us to discuss.
          </p>
        </div>
      </section>

      {/* Timings */}
      <section className="bg-gradient-to-br from-lime-50 to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">School Timings</h2>
            <div className="w-16 h-1 bg-lime-500 mx-auto mt-3 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-heading font-bold text-lime-600 mb-4">Playgroup & Nursery</h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-bold text-gray-800">Timings:</span> 9:00 AM – 12:00 PM</p>
                <p><span className="font-bold text-gray-800">Duration:</span> 3 hours</p>
                <p className="text-sm mt-4">Perfect duration for younger children to enjoy learning without getting too tired.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-heading font-bold text-cyan-600 mb-4">Jr. KG & Sr. KG</h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-bold text-gray-800">Timings:</span> 9:00 AM – 1:00 PM</p>
                <p><span className="font-bold text-gray-800">Duration:</span> 4 hours</p>
                <p className="text-sm mt-4">Extended hours for older children with structured learning and activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-lime-50 to-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-lime-100 text-lime-600 mb-6">
            <CreditCard className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">Fee Structure</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our fee structure is transparent and competitive. We share complete fee details including
            admission fees, term fees, and any additional costs during your school visit or upon request.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent("Hi! I would like to know the fee details for Angels Preschool.")}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Request Fee Details on WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime-100 text-lime-600 mb-4">
              <HelpCircle className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-lime-500 mx-auto mt-3 rounded-full" />
            <p className="text-gray-600 mt-4">Everything you need to know about admissions.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <summary className="flex justify-between items-center cursor-pointer p-5 list-none">
                  <h3 className="font-bold text-gray-800 text-left">{faq.q}</h3>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4">˅</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">
                  <p>{faq.a}</p>
                  {/* Inline CTA for visit FAQ — highest intent moment */}
                  {faq.cta === 'visit' && (
                    <button
                      type="button"
                      onClick={openVisitModal}
                      className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-sky-500 bg-white text-sky-700 font-semibold px-5 py-2 text-sm hover:bg-sky-50 transition"
                    >
                      <Calendar size={15} />
                      Book a Visit
                    </button>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-lime-50 to-cyan-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
            Ready to start your child&apos;s Angels journey?
          </h2>
          <p className="text-lg text-gray-600">
            We'd love to meet you and your little one. Enquire for admission or book a visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" onClick={openEnquiryModal} className="btn-primary inline-flex items-center justify-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Admission Enquiry
            </button>
            <button type="button" onClick={openVisitModal} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-sky-500 bg-white text-sky-700 font-semibold px-8 py-4 shadow-sm hover:bg-sky-50 transition">
              <Calendar className="h-5 w-5" />
              Book a Visit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Admissions;