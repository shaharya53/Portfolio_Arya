import React from 'react';
import ContactSection from '../components/ContactSection';
import FAQAccordion from '../components/FAQAccordion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Contact() {
  useDocumentTitle('Contact & Collaboration');
  return (
    <div className="w-full pt-16 sm:pt-24">
      <ContactSection />
      <FAQAccordion />
    </div>
  );
}
