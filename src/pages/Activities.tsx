import React from "react";
import {
  Sparkles, BookOpen, PartyPopper, Palette,
  Music2, Blocks, Leaf, Trees, Users,
  ShoppingBasket, Library, MessageCircle, ChevronRight, Camera,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useModal } from "../context/ModalContext";

import annualDayHero  from "../assets/img_AnnualDayHero.jpeg";
import calmTimeImg    from "../assets/img_CalmTime.png";
import act_dance      from "../assets/act_Dance.png";
import act_read       from "../assets/act_GroupReading.png";
import act_Arts       from "../assets/act_Arts.png";
import act_Story      from "../assets/act_Story.png";
import act_Block      from "../assets/act_Block.png";
import act_classwork  from "../assets/act_classwork.png";
import act_freeplay   from "../assets/act_freeplay.png";

// ═══════════════════════════════════════════════════════════════════════
//  FESTIVAL IMAGE SLOTS — replace null with real import when ready
const fest1: string | null = null; // Diwali / Holi / Navratri
const fest2: string | null = null; // Colour & theme days
const fest3: string | null = null; // Children's Day celebrations
// ═══════════════════════════════════════════════════════════════════════

const FestImg = ({ src, alt, label }: { src: string | null; alt: string; label: string }) => {
  if (src) return <img src={src} alt={alt} className="w-full h-full object-cover" />;
  return (
    <div className="w-full h-full bg-gradient-to-br from-lime-50 via-white to-orange-50 flex flex-col items-center justify-center gap-2 p-4">
      <Camera className="text-lime-300 shrink-0" size={20} />
      <span className="text-[11px] font-semibold text-lime-500 text-center leading-snug">{label}</span>
    </div>
  );
};

const Activities = () => {
  const { openEnquiryModal } = useModal();

  return (
    <div className="pb-20 space-y-20 bg-gradient-to-b from-lime-50/60 via-white to-cyan-50/40">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr,1fr] gap-10 items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center text-sm font-semibold tracking-wide uppercase text-lime-700 bg-white/90 rounded-full px-3 py-1 shadow-sm">
              <Sparkles className="h-5 w-5 mr-1" />
              Activities at Angels
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
              Learning through{" "}
              <span className="text-lime-600">simple, joyful experiences</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              At Angels, every corner of the school is used with love — for
              stories, dance, free play, calm moments and little celebrations
              that make childhood feel special.
            </p>
          </div>

          <div className="relative h-80 md:h-96">
            <div className="absolute inset-y-3 left-0 right-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
              <img src={act_dance} alt="Children enjoying dance at Angels" className="w-full h-full object-cover object-center" />
            </div>
            <div className="hidden md:block absolute -top-6 right-4 w-32 md:w-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
              <img src={act_read} alt="Children reading together" className="w-full h-full object-cover object-center" />
            </div>
            <div className="absolute -bottom-10 right-0 w-32 md:w-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
              <img src={act_Block} alt="Children building with blocks" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE EXPERIENCES ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Our core experiences in the classroom
          </h2>
          <div className="w-16 h-1 bg-lime-500 mx-auto mt-3 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            These are the simple, honest activities children keep coming back to — each one
            designed to build confidence, curiosity and comfort in their own way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="bg-gradient-to-br from-lime-50 to-cyan-50 rounded-3xl shadow-lg border border-lime-100 overflow-hidden flex flex-col md:col-span-2 lg:col-span-1">
            <div className="h-52"><img src={calmTimeImg} alt="Calm time at Angels Preschool" className="w-full h-full object-cover object-center" /></div>
            <div className="p-6 space-y-3 flex-1 flex flex-col">
              <div className="inline-flex items-center gap-2 text-lime-700 font-semibold text-sm"><Leaf className="h-4 w-4" />Calm time — Pranayam &amp; Gayatri Mantra</div>
              <p className="text-sm text-gray-700 flex-1">Before starting activities, children sit together for a few minutes of simple pranayam and the Gayatri Mantra. It helps them slow down, feel peaceful and begin the day with a clear, happy mind.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-lime-100 overflow-hidden flex flex-col">
            <div className="h-52"><img src={act_Story} alt="Circle time and stories at Angels" className="w-full h-full object-cover object-center" /></div>
            <div className="p-6 space-y-3 flex-1 flex flex-col">
              <div className="inline-flex items-center gap-2 text-lime-700 font-semibold text-sm"><BookOpen className="h-4 w-4" />Circle time &amp; stories</div>
              <p className="text-sm text-gray-700 flex-1">Short stories, rhymes and talk-time that build language, imagination, listening and the courage to speak in a group.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-amber-100 overflow-hidden flex flex-col">
            <div className="h-52"><img src={act_freeplay} alt="Free play at Angels Preschool" className="w-full h-full object-cover object-center" /></div>
            <div className="p-6 space-y-3 flex-1 flex flex-col">
              <div className="inline-flex items-center gap-2 text-amber-500 font-semibold text-sm"><Blocks className="h-4 w-4" />Free play &amp; indoor games</div>
              <p className="text-sm text-gray-700 flex-1">Toys, cycles, blocks and simple board games that build sharing, patience, basic math and hand–eye coordination — without any pressure.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-cyan-100 overflow-hidden flex flex-col">
            <div className="h-52"><img src={act_Arts} alt="Art and craft at Angels" className="w-full h-full object-cover object-center" /></div>
            <div className="p-6 space-y-3 flex-1 flex flex-col">
              <div className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-sm"><Palette className="h-4 w-4" />Art &amp; hands-on activities</div>
              <p className="text-sm text-gray-700 flex-1">Colours, textures, clay and simple craft that develop fine motor skills and give children a gentle way to express what they feel and see.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-sky-100 overflow-hidden flex flex-col">
            <div className="h-52"><img src={act_classwork} alt="Table time at Angels Preschool" className="w-full h-full object-cover object-center" /></div>
            <div className="p-6 space-y-3 flex-1 flex flex-col">
              <div className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm"><BookOpen className="h-4 w-4" />Table time &amp; early work</div>
              <p className="text-sm text-gray-700 flex-1">Short worksheets and book work in small doses — tracing, colouring, matching and simple thinking tasks that build focus, pencil grip and confidence, without any pressure.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-pink-100 overflow-hidden flex flex-col">
            <div className="h-52"><img src={act_dance} alt="Dance and movement at Angels" className="w-full h-full object-cover object-center" /></div>
            <div className="p-6 space-y-3 flex-1 flex flex-col">
              <div className="inline-flex items-center gap-2 text-pink-500 font-semibold text-sm"><Music2 className="h-4 w-4" />Dance &amp; movement</div>
              <p className="text-sm text-gray-700 flex-1">Easy steps, action songs and small group performances that help with rhythm, body awareness, memory and stage comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANNUAL FUNCTION ───────────────────────────────────────────── */}
      <section className="bg-lime-50/70 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 text-lime-700 text-xs font-semibold tracking-wide uppercase bg-white rounded-full px-3 py-1 shadow-sm mb-4">
              <PartyPopper className="h-4 w-4" />
              Signature moment
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Annual Function — the highlight of our year
            </h2>
            <div className="w-16 h-1 bg-lime-500 mt-3 rounded-full" />
            <p className="text-gray-600 max-w-2xl mt-4">
              A grand yet warm celebration where every child gets a chance to shine,
              no matter how shy or confident they are at the beginning of the year.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-lime-100 overflow-hidden grid lg:grid-cols-2">
            <div className="relative h-72 lg:h-auto">
              <img src={annualDayHero} alt="Children performing on stage during Angels Preschool Annual Day" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                Annual Day • Stage performances &amp; group acts
              </div>
            </div>
            <div className="p-8 md:p-10 space-y-4 flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold text-gray-900">
                Stage confidence, teamwork &amp; joy
              </h3>
              <p className="text-gray-700">
                A couple of months before the event, children start practising
                small dances or group items. Practice is kept light and
                encouraging — no child is pushed beyond what they are ready for.
              </p>
              <p className="text-gray-700">
                The Annual Function is usually held in a proper auditorium with
                all parents present. For families it becomes a treasured memory;
                for children, it becomes their first real experience of facing a
                crowd and feeling proud of themselves.
              </p>
              {/* Link to Gallery — natural next click after reading about Annual Day */}
              <Link
                to="/gallery"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime-700 hover:text-lime-800 transition-colors mt-2"
              >
                See photos from our Annual Day
                <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FESTIVALS & THEME DAYS ────────────────────────────────────── */}
      <section className="bg-orange-50/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Festivals &amp; special days
            </h2>
            <div className="w-16 h-1 bg-lime-500 mx-auto mt-3 rounded-full" />
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Celebrations are simple, child-friendly and meaningful — helping
              children connect with culture in a way that feels joyful, not overwhelming.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-lg border border-orange-100 overflow-hidden flex flex-col">
              <div className="h-44"><FestImg src={fest1} alt="Festival celebrations" label="Diwali / Holi / Navratri — children in festive dress" /></div>
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-gray-900">Festival celebrations</h3>
                <p className="text-sm text-gray-700 flex-1">Diwali, Holi, Navratri, Janmashtami, Christmas and other festivals are celebrated with dress-up, bhajans / songs, simple stories and classroom activities.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-rose-100 overflow-hidden flex flex-col">
              <div className="h-44"><FestImg src={fest2} alt="Colour and theme days" label="Colour Day — children dressed in one bright colour" /></div>
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-gray-900">Colour &amp; theme days</h3>
                <p className="text-sm text-gray-700 flex-1">Colour days, Fruit / Vegetable Day, Toy Day and similar themes make basic concepts more concrete and exciting for children.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-indigo-100 overflow-hidden flex flex-col">
              <div className="h-44"><FestImg src={fest3} alt="Special children's days" label="Children's Day — streamers, fun, celebration" /></div>
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-gray-900">Special children&apos;s days</h3>
                <p className="text-sm text-gray-700 flex-1">Children&apos;s Day, fancy dress and other small events let children feel celebrated just for being themselves.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIELD TRIPS — icon + text cards ───────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Little adventures outside the classroom
            </h2>
            <div className="w-16 h-1 bg-lime-500 mx-auto mt-3 rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Short, nearby trips that feel exciting but still safe and manageable for young children.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trees,         color: 'bg-green-50 text-green-600',   title: 'Nature walks',        desc: 'Walks around the neighbourhood or garden to spot trees, flowers and birds — learning to observe quietly and respect nature.' },
              { icon: Users,         color: 'bg-sky-50 text-sky-600',       title: 'Community helpers',   desc: 'Simple interactions with doctors, shopkeepers and helpers children see every day, so they understand real-life roles.' },
              { icon: ShoppingBasket, color: 'bg-amber-50 text-amber-600',  title: 'Market / farm visit', desc: 'For older groups, a basic visit to a vegetable market or farm to see where food really comes from.' },
              { icon: Library,       color: 'bg-purple-50 text-purple-600', title: 'Library / book corner', desc: 'Trips that help children connect books with excitement, cosy spaces and stories — not pressure.' },
            ].map((trip, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-md border border-gray-100 p-7 flex flex-col gap-4 hover:shadow-lg hover:border-lime-200 transition-all">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${trip.color}`}>
                  <trip.icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-gray-800">{trip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{trip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ───────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-lime-50 to-cyan-50 rounded-3xl border border-lime-100 px-8 py-12 text-center space-y-6">
          <p className="text-xl md:text-2xl font-heading font-semibold text-gray-800 leading-relaxed">
            Childhood blossoms through experiences — and at Angels, every
            experience is kept{" "}
            <span className="text-lime-600 font-bold">simple, caring and joyful</span>.
          </p>
          <p className="text-gray-500 text-sm">
            Come see it for yourself — or browse our gallery for a visual feel of life at Angels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button type="button" onClick={openEnquiryModal} className="btn-primary flex items-center justify-center gap-2">
              <MessageCircle size={18} />
              Enquire for Admission
            </button>
            <Link to="/gallery" className="flex items-center justify-center gap-2 rounded-full border-2 border-lime-500 bg-white text-lime-700 font-semibold px-8 py-4 hover:bg-lime-50 transition">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Activities;