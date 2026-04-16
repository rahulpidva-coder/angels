import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, CheckCircle2 } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type AgeOption = {
  label: string;
  value: string;
  program: string;
};

const ageOptions: AgeOption[] = [
  { label: '1.5 – 2 yrs', value: '1.5-2', program: 'Playgroup' },
  { label: '3 – 4 yrs',   value: '3-4',   program: 'Nursery'   },
  { label: '4 – 5 yrs',   value: '4-5',   program: 'Jr. KG'    },
  { label: '5 – 6 yrs',   value: '5-6',   program: 'Sr. KG'    },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    mobile: '',
    ageGroup: '',
    parentName: '',
    childName: '',
    consent: false,
  });

  const [errors, setErrors] = useState({ mobile: '', ageGroup: '', consent: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const selectedAge = useMemo(
    () => ageOptions.find((o) => o.value === form.ageGroup),
    [form.ageGroup]
  );
  const suggestedProgram = selectedAge?.program || '';

  const reset = () => {
    setForm({ mobile: '', ageGroup: '', parentName: '', childName: '', consent: false });
    setErrors({ mobile: '', ageGroup: '', consent: '' });
    setIsSubmitting(false);
    setIsSuccess(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 200);
  };

  const validate = () => {
    const e = { mobile: '', ageGroup: '', consent: '' };
    const m = form.mobile.replace(/\D/g, '');
    if (!m) e.mobile = 'Mobile number is required';
    else if (m.length < 10) e.mobile = 'Please enter a valid mobile number';
    if (!form.ageGroup) e.ageGroup = 'Please select child age';
    if (!form.consent) e.consent = 'Please allow WhatsApp updates to continue';
    setErrors(e);
    return !e.mobile && !e.ageGroup && !e.consent;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enquiryType: 'admission',
          parentName: form.parentName.trim(),
          childName: form.childName.trim(),
          mobile: form.mobile.replace(/\D/g, ''),
          ageGroup: form.ageGroup,
          suggestedProgram,
          consent: form.consent,
          source: 'website-homepage-hero-modal',
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Failed');
      setIsSuccess(true);
    } catch {
      alert('Something went wrong. Please try again or contact us on WhatsApp.');
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

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="relative w-full max-w-lg rounded-[1.5rem] bg-white shadow-2xl border border-white/60 overflow-hidden max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-lime-50 via-white to-yellow-50 px-5 pt-4 pb-3 border-b border-lime-100">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-200/40 rounded-full blur-3xl" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[11px] font-semibold text-lime-700 shadow-sm border border-lime-100">
                    👼 Admission Enquiry
                  </span>
                  <h3 className="mt-2 text-lg font-heading font-bold text-gray-800 leading-tight">
                    Enquire for Admissions
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Just the basics — takes under a minute.
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
            <div className="px-5 py-4 overflow-y-auto">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">

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
                      className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-100 transition"
                    />
                    {errors.mobile && (
                      <p className="text-xs text-rose-500 mt-1">{errors.mobile}</p>
                    )}
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Child's Age <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {ageOptions.map((opt) => {
                        const active = form.ageGroup === opt.value;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => {
                              setForm((p) => ({ ...p, ageGroup: opt.value }));
                              if (errors.ageGroup) setErrors((p) => ({ ...p, ageGroup: '' }));
                            }}
                            className={`text-left rounded-xl border px-3 py-2.5 transition-all ${
                              active
                                ? 'border-lime-500 bg-lime-50 ring-2 ring-lime-100'
                                : 'border-gray-200 bg-white hover:border-lime-300 hover:bg-lime-50/50'
                            }`}
                          >
                            <span className="block text-sm font-semibold text-gray-800 leading-snug">
                              {opt.label}
                            </span>
                            <span className="block text-[11px] text-gray-400 mt-0.5">
                              {opt.program}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.ageGroup && (
                      <p className="text-xs text-rose-500 mt-1">{errors.ageGroup}</p>
                    )}
                    {/* Compact suggested program pill */}
                    {suggestedProgram && (
                      <p className="text-xs text-gray-500 mt-2">
                        Suggested program:{' '}
                        <span className="inline-flex items-center bg-lime-100 text-lime-700 font-semibold px-2 py-0.5 rounded-full text-[11px]">
                          {suggestedProgram}
                        </span>
                      </p>
                    )}
                  </div>

                  {/* Optional names */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Parent Name <span className="font-normal text-gray-400">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Parent name"
                        value={form.parentName}
                        onChange={(e) => setForm((p) => ({ ...p, parentName: e.target.value }))}
                        className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-100 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Child Name <span className="font-normal text-gray-400">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Child name"
                        value={form.childName}
                        onChange={(e) => setForm((p) => ({ ...p, childName: e.target.value }))}
                        className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-lime-400 focus:ring-4 focus:ring-lime-100 transition"
                      />
                    </div>
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-2.5 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, consent: e.target.checked }));
                        if (errors.consent) setErrors((p) => ({ ...p, consent: '' }));
                      }}
                      className="mt-0.5 h-3.5 w-3.5 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
                    />
                    <span className="text-xs text-gray-500 leading-relaxed">
                      I agree to receive admission updates from Angels Preschool on WhatsApp.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-xs text-rose-500 -mt-2">{errors.consent}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime-600 text-white text-sm font-semibold px-4 py-3 shadow-md shadow-lime-200 hover:bg-lime-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <MessageCircle size={16} />
                    {isSubmitting ? 'Submitting…' : 'Submit Enquiry'}
                  </button>
                </form>
              ) : (
                <div className="py-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center mb-3">
                    <CheckCircle2 className="text-lime-600" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Thank you for enquiring!</h4>
                  <p className="text-sm text-gray-500 mt-1 max-w-xs mx-auto leading-relaxed">
                    We've received your details and will reach out to you shortly.
                  </p>
                  {suggestedProgram && (
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-lime-50 border border-lime-100 px-3 py-1 text-xs font-medium text-lime-700">
                      Suggested Program: {suggestedProgram}
                    </div>
                  )}
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="rounded-xl bg-lime-600 text-white text-sm font-semibold px-5 py-2.5 hover:bg-lime-700 transition"
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

export default EnquiryModal;