import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqsData } from '../data/faqs';

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
        {/* Left Sticky Column */}
        <div className="lg:col-span-5 text-left lg:sticky lg:top-28">
          <h2 className="font-antonio font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.92] tracking-tight uppercase mb-3 sm:mb-4 text-white">
            FREQUENTLY ASKED<br />QUESTIONS
          </h2>
          <p className="font-inter font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-md text-[#b5b5b5]">
            Here are answers to common questions about my full-stack engineering process, technical capabilities, project turnaround times, and collaboration workflow. Have more questions? Feel free to reach out anytime!
          </p>
        </div>

        {/* Right Accordion List with Fluid Height Animations */}
        <div className="lg:col-span-7 divide-y divide-transparent">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-b pb-5 sm:pb-7 pt-5 sm:pt-7 transition-colors duration-200 border-[#767676]/30"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span
                    className={`font-antonio font-bold text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-tight uppercase tracking-tight transition-colors duration-200 pr-4 ${
                      isOpen ? 'text-[#d0ff71]' : 'text-white group-hover:text-[#d0ff71]'
                    }`}
                  >
                    {faq.number} {faq.question}
                  </span>
                  <div
                    className={`shrink-0 transition-transform duration-300 transform ${
                      isOpen ? 'rotate-180 text-[#d0ff71]' : 'text-white/70 group-hover:text-[#d0ff71]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                  </div>
                </button>

                {/* Fluid Height Grid Wrapper */}
                <div className={`accordion-wrapper ${isOpen ? 'is-open' : ''}`}>
                  <div className="accordion-body">
                    <div className="pt-3 sm:pt-4 font-inter font-light text-sm sm:text-base md:text-[17px] leading-relaxed text-[#b5b5b5]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
