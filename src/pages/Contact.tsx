import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, MessageCircle, Send, Loader2 } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type FormData = {
  parentName: string;
  childName: string;
  age: string;
  class: string;
  phone: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]       = useState(false);
  const [submitError, setSubmitError]   = useState('');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch(`${API_BASE_URL}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enquiryType:      'contact',
          parentName:       data.parentName,
          childName:        data.childName || null,
          mobile:           data.phone.replace(/\D/g, ''),
          email:            data.email || null,
          ageGroup:         data.age || null,
          suggestedProgram: data.class || null,
          message:          data.message || null,
          consent:          true,
          source:           'website-contact-page',
        }),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message || 'Submission failed');
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong. Please try again or reach us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-20 space-y-12">

      {/* Tring-tring keyframe */}
      <style>{`
        @keyframes tring {
          0%   { transform: rotate(0deg);   }
          10%  { transform: rotate(-18deg); }
          20%  { transform: rotate(18deg);  }
          30%  { transform: rotate(-14deg); }
          40%  { transform: rotate(14deg);  }
          50%  { transform: rotate(-8deg);  }
          60%  { transform: rotate(8deg);   }
          70%  { transform: rotate(-4deg);  }
          80%  { transform: rotate(4deg);   }
          90%  { transform: rotate(0deg);   }
          100% { transform: rotate(0deg);   }
        }
        .tring-hover:hover .phone-icon {
          animation: tring 0.7s ease-in-out;
        }
      `}</style>

      {/* Hero */}
      <div className="bg-lime-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          We'd love to hear from you. Visit us, call us, or drop a message!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Contact Info ── */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-6">Get in Touch</h3>
              <div className="space-y-5">

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-lime-100 p-3 rounded-full text-lime-600 shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-0.5">Visit Us</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Ground Floor, Sai Krupa, next to Dr Devgiri's Clinic,
                      near Samaj Kalyan Ground, Bhatwadi, Barve Nagar,<br />
                      Ghatkopar (West), Mumbai, Maharashtra 400084
                    </p>
                  </div>
                </div>

                {/*
                  Phone — entire row is the tap target.
                  Icon rings on hover so user instantly understands it's callable.
                */}
                <a
                  href="tel:+918369023546"
                  className="tring-hover flex items-center gap-4 group cursor-pointer"
                >
                  <div className="bg-cyan-100 p-3 rounded-full shrink-0 group-hover:bg-cyan-200 transition-colors">
                    <Phone className="phone-icon text-cyan-600" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 group-hover:text-cyan-700 transition-colors mb-0.5">
                      Call Us
                    </h4>
                    <span className="text-gray-600 group-hover:text-cyan-600 transition-colors text-sm">
                      +91 8369023546
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-0.5">WhatsApp</h4>
                    <a
                      href="https://wa.me/918369023546"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lime-600 hover:underline font-medium text-sm"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full text-yellow-600 shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-0.5">Email</h4>
                    <a
                      href="mailto:hello@angelspreschool.com"
                      className="text-gray-600 hover:text-lime-600 transition-colors text-sm"
                    >
                      hello@angelspreschool.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-3xl overflow-hidden h-64 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2633175637316!2d72.9040411!3d19.0961009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7d742f8dbf9%3A0x37249ddcc7907e3a!2sAngels%20Preschool%20Ghatkopar-%20West!5e0!3m2!1sen!2sin!4v1764396666851!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps — Angels Preschool"
              />
            </div>
          </div>

          {/* ── Enquiry Form ── */}
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border-t-8 border-lime-500">
            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">Send Us a Message</h3>
            <p className="text-sm text-gray-500 mb-6">
              Have a specific question or want to share more details? We're happy to help.
            </p>

            {isSuccess && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl flex items-center gap-2">
                <div className="bg-green-200 p-1 rounded-full"><Send size={16} /></div>
                <span className="font-bold text-sm">Thank you! We'll be in touch shortly.</span>
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-rose-50 text-rose-600 rounded-xl text-sm border border-rose-100">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Parent Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register('parentName', { required: 'Required' })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all text-sm"
                    placeholder="John Doe"
                  />
                  {errors.parentName && <span className="text-rose-500 text-xs">{errors.parentName.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Child Name</label>
                  <input
                    {...register('childName')}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all text-sm"
                    placeholder="Baby Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Child's Age</label>
                  <input
                    {...register('age')}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all text-sm"
                    placeholder="e.g. 3 Years"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Class Interested</label>
                  <select
                    {...register('class')}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all text-sm"
                  >
                    <option value="">Select Class</option>
                    <option value="Playgroup">Playgroup</option>
                    <option value="Nursery">Nursery</option>
                    <option value="Jr. KG">Jr. KG</option>
                    <option value="Sr. KG">Sr. KG</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register('phone', {
                      required: 'Required',
                      pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' },
                    })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all text-sm"
                    placeholder="9876543210"
                  />
                  {errors.phone && <span className="text-rose-500 text-xs">{errors.phone.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                  <input
                    {...register('email', {
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                    })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all text-sm"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-rose-500 text-xs">{errors.email.message}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Message <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all resize-none text-sm"
                  placeholder="Any specific questions or details you'd like to share?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;