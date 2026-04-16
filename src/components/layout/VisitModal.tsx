import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, CheckCircle2 } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const visitSlotOptions = [
  { label: 'Weekday Morning (9:00 – 10:00 AM)',      value: 'weekday-9-10'  },
  { label: 'Weekday Mid-Morning (10:00 – 11:00 AM)', value: 'weekday-10-11' },
  { label: 'Weekday Late Morning (11:00 – 12:00 PM)', value: 'weekday-11-12' },
  { label: 'Saturday Morning',                        value: 'saturday-morning' },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const VisitModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ parentName: '', mobile: '', preferredSlot: '' });
  const [errors, setErrors] = useState({ parentName: '', mobile: '', preferredSlot: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const reset = () => {
    setForm({ parentName: '', mobile: '', preferredSlot: '' });
    setErrors({ parentName: '', mobile: '', preferredSlot: '' });
    setIsSubmitting(false);
    setIsSuccess(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 200);
  };

  const validate = () => {
    const e = { parentName: '', mobile: '', preferredSlot: '' };
    if (!form.parentName.trim()) e.parentName = 'Parent name is required';
    const m = form.mobile.replace(/\D/g, '');
    if (!m) e.mobile = 'Mobile number is required';
    else if (m.length < 10) e.mobile = 'Please enter a valid mobile number';
    if (!form.preferredSlot) e.preferredSlot = 'Please select a preferred slot';
    setErrors(e);
    return !e.parentName && !e.mobile && !e.preferredSlot;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/visit-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parentName: form.parentName.trim(),
          mobile: form.mobile.replace(/\D/g, ''),
          preferredSlot: form.preferredSlot,
          source: 'website-homepage-book-visit-modal',
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Failed');
      setIsSuccess(true);
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/45 backdrop-blur-[3px]"
            onClick={handleClose}
          />

          {/* Modal — narrower than enquiry modal */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="relative w-full max-w-md rounded-[1.5rem] bg-white shadow-2xl border border-white/60 overflow-hidden"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-sky-50 via-white to-white px-5 pt-4 pb-3 border-b border-sky-100">
              <div className="absolute top-0 right-0 w-20 h-20 bg-sky-200/40 rounded-full blur-3xl" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[11px] font-semibold text-sky-700 shadow-sm border border-sky-100">
                    📍 Book a Visit
                  </span>
                  <h3 className="mt-2 text-lg font-heading font-bold text-gray-800 leading-tight">
                    Plan your school visit
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Share your details and we'll confirm your slot.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="shrink-0 w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="px-5 py-4">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Parent Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Parent Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter parent name"
                      value={form.parentName}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, parentName: e.target.value }));
                        if (errors.parentName) setErrors((p) => ({ ...p, parentName: '' }));
                      }}
                      className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100 transition"
                    />
                    {errors.parentName && (
                      <p className="text-xs text-rose-500 mt-1">{errors.parentName}</p>
                    )}
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      placeholder="Your WhatsApp number"
                      value={form.mobile}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, mobile: e.target.value }));
                        if (errors.mobile) setErrors((p) => ({ ...p, mobile: '' }));
                      }}
                      className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100 transition"
                    />
                    {errors.mobile && (
                      <p className="text-xs text-rose-500 mt-1">{errors.mobile}</p>
                    )}
                  </div>

                  {/* Preferred Slot */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Preferred Slot <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={form.preferredSlot}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, preferredSlot: e.target.value }));
                        if (errors.preferredSlot) setErrors((p) => ({ ...p, preferredSlot: '' }));
                      }}
                      className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100 transition"
                    >
                      <option value="">Select a preferred slot</option>
                      {visitSlotOptions.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                    {errors.preferredSlot && (
                      <p className="text-xs text-rose-500 mt-1">{errors.preferredSlot}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 text-white text-sm font-semibold px-4 py-3 shadow-md shadow-sky-200 hover:bg-sky-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Calendar size={16} />
                    {isSubmitting ? 'Submitting…' : 'Request Visit'}
                  </button>
                </form>
              ) : (
                <div className="py-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-3">
                    <CheckCircle2 className="text-sky-600" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Visit request received!</h4>
                  <p className="text-sm text-gray-500 mt-1 max-w-xs mx-auto leading-relaxed">
                    We'll connect with you shortly to confirm your visit.
                  </p>
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="rounded-xl bg-sky-600 text-white text-sm font-semibold px-5 py-2.5 hover:bg-sky-700 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VisitModal;