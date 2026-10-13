import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { profileData } from '../data/profile';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web Applications',
    message: '',
  });

  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const servicesList = [
    'Full-Stack Web Applications',
    'AI-Powered Platforms & Pipelines',
    'RESTful API & Backend Architecture',
    'Responsive Frontend & Clean UI/UX',
    'Database Modeling & Optimization',
    'Other Engineering Consultation',
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project or inquiry';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please enter at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitting(false);
        setSubmitted(true);
      } else {
        throw new Error(result.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setIsSubmitting(false);
      setSubmitError(
        err.message || 'Unable to send message directly. Please contact via direct email below.'
      );
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Full-Cover Portrait Card with floating "Hi" pill */}
        <div className="lg:col-span-5 relative w-full max-w-[440px] mx-auto lg:mx-0 group">
          <div className="relative aspect-[4/5] rounded-[36px] sm:rounded-[44px] overflow-hidden bg-[#181819] border border-white/10 shadow-2xl flex flex-col justify-end p-6 sm:p-8 text-center transition-all duration-500 hover:border-[#d0ff71]/40">
            {/* Full-bleed background image covering the entire card */}
            <img
              src={profileData.avatar || profileData.heroImage}
              alt={profileData.name}
              className="absolute inset-0 w-full h-full object-cover object-top sm:object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient overlays: top subtle vignette, bottom dark fade for maximum text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-45% to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent pointer-events-none"></div>

            {/* Card Content anchored at the bottom */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <h3 className="font-antonio font-bold text-3xl sm:text-4xl text-always-white uppercase tracking-tight mb-2 drop-shadow-md">
                {profileData.name}
              </h3>
              <span className="font-inter font-semibold text-xs sm:text-sm text-[#d0ff71] bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#d0ff71]/40 mb-3.5 shadow-lg">
                {profileData.title}
              </span>
              <p className="font-inter font-normal text-xs sm:text-sm text-always-light max-w-xs leading-relaxed drop-shadow">
                Based in {profileData.location}. Always excited to discuss challenging full-stack engineering problems.
              </p>
            </div>
          </div>

          {/* Floating 'Hi' Badge */}
          <div className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-6 z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 cursor-default select-none bg-[#d0ff71] text-black border-4 border-[#141415] shadow-2xl">
            <div className="flex flex-col items-center justify-center">
              <span className="font-antonio font-bold text-3xl sm:text-4xl tracking-tight">
                Hi
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Heading & Form */}
        <div className="lg:col-span-7 text-left">
          <div className="mb-10 sm:mb-12">
            <div className="flex items-center gap-4 flex-wrap mb-3">
              <h2 className="font-antonio font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.92] tracking-tight uppercase transition-colors duration-300 text-white">
                LET'S WORK TOGETHER
              </h2>
            </div>
            <p className="font-inter font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-xl transition-colors duration-300 text-[#b5b5b5]">
              Let's build something impactful together — whether it's your brand, your web application, or your next big idea.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 sm:p-10 rounded-[28px] bg-[#1f1f22] border border-[#d0ff71]/40 text-white space-y-5 animate-in fade-in duration-300 shadow-2xl">
              <div className="flex items-center gap-3 text-[#d0ff71]">
                <CheckCircle2 className="w-8 h-8" />
                <h3 className="font-antonio font-bold text-3xl uppercase tracking-tight">
                  Message Sent Successfully!
                </h3>
              </div>
              <p className="font-inter font-light text-base text-[#b5b5b5] leading-relaxed">
                Thank you, <span className="text-white font-medium">{formData.name}</span>! Your message has been sent directly to Arya Shah at <span className="text-[#d0ff71] font-mono">aryaaryashah@gmail.com</span>. I will review your requirements and respond promptly.
              </p>
              <div className="p-4 rounded-xl bg-[#141415] border border-white/10 font-mono text-sm space-y-1">
                <div><span className="text-[#a1a1aa]">Recipient:</span> <span className="text-[#d0ff71]">aryaaryashah@gmail.com</span></div>
                <div><span className="text-[#a1a1aa]">Service:</span> <span className="text-white">{formData.service}</span></div>
                <div><span className="text-[#a1a1aa]">Your Email:</span> <span className="text-white">{formData.email}</span></div>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      service: 'Full-Stack Web Applications',
                      message: '',
                    });
                  }}
                  className="inline-flex items-center gap-2 font-antonio font-bold text-base uppercase tracking-wider rounded-full px-8 py-3 bg-[#d0ff71] text-black hover:bg-[#bdf354] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-7">
              {submitError && (
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-200 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-300 mb-1">Failed to send message</p>
                    <p className="text-xs text-red-200/80 leading-relaxed">{submitError}</p>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-inter uppercase tracking-wider font-semibold transition-colors duration-200 text-[#d0ff71]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    className={`w-full rounded-[16px] sm:rounded-[20px] px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base transition-all duration-200 outline-none border bg-[#1f1f22] text-white placeholder-[#767676] focus:border-[#d0ff71] focus:bg-[#252529] focus:ring-2 focus:ring-[#d0ff71]/20 ${
                      errors.name ? 'border-red-500/80' : 'border-transparent'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 flex items-center gap-1 font-inter">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-inter uppercase tracking-wider font-semibold transition-colors duration-200 text-[#d0ff71]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    className={`w-full rounded-[16px] sm:rounded-[20px] px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base transition-all duration-200 outline-none border bg-[#1f1f22] text-white placeholder-[#767676] focus:border-[#d0ff71] focus:bg-[#252529] focus:ring-2 focus:ring-[#d0ff71]/20 ${
                      errors.email ? 'border-red-500/80' : 'border-transparent'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 flex items-center gap-1 font-inter">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Needed Dropdown */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-inter uppercase tracking-wider font-semibold transition-colors duration-200 text-[#d0ff71]">
                  Service Needed *
                </label>
                <div className="relative w-full">
                  <button
                    type="button"
                    onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                    aria-haspopup="listbox"
                    aria-expanded={serviceDropdownOpen}
                    className="w-full flex items-center justify-between text-left rounded-[18px] sm:rounded-[22px] px-6 py-4.5 sm:py-5 text-base sm:text-lg transition-all duration-200 outline-none border cursor-pointer bg-[#1f1f22] border-transparent text-white hover:border-white/20"
                  >
                    <span className="truncate text-white font-medium">{formData.service}</span>
                    <div
                      className={`shrink-0 ml-4 transition-transform duration-300 text-[#a1a1aa] ${
                        serviceDropdownOpen ? 'rotate-180 text-[#d0ff71]' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </button>

                  {serviceDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 z-30 rounded-[20px] bg-[#252529] border border-white/15 p-2 shadow-2xl backdrop-blur-xl">
                      {servicesList.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, service });
                            setServiceDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 rounded-xl text-sm sm:text-base font-inter transition-colors ${
                            formData.service === service
                              ? 'bg-[#d0ff71] text-black font-semibold'
                              : 'text-white hover:bg-white/10'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-inter uppercase tracking-wider font-semibold transition-colors duration-200 text-[#d0ff71]">
                  What Can I Help You With? *
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project, goals, timeline, and requirements..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: null });
                  }}
                  className={`w-full rounded-[16px] sm:rounded-[20px] px-5 sm:px-6 py-4 text-sm sm:text-base transition-all duration-200 resize-none outline-none border bg-[#1f1f22] text-white placeholder-[#767676] focus:border-[#d0ff71] focus:bg-[#252529] focus:ring-2 focus:ring-[#d0ff71]/20 ${
                    errors.message ? 'border-red-500/80' : 'border-transparent'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-xs text-red-400 flex items-center gap-1 font-inter">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-antonio font-bold text-lg sm:text-2xl uppercase tracking-wider rounded-full border px-10 sm:px-14 py-3.5 sm:py-4.5 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 border-[#d0ff71] text-[#d0ff71] hover:bg-[#d0ff71] hover:text-black hover:shadow-[0_0_24px_rgba(208,255,113,0.3)]"
                >
                  {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
