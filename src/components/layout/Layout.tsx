import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import EnquiryModal from './EnquiryModal';
import VisitModal from './VisitModal';
import { ModalProvider } from '../../context/ModalContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname, hash } = useLocation();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isVisitOpen, setIsVisitOpen]     = useState(false);

  useEffect(() => {
    if (hash) {
      // Page needs to render first, then scroll to the anchor
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <ModalProvider
      openEnquiry={() => setIsEnquiryOpen(true)}
      openVisit={() => setIsVisitOpen(true)}
    >
      <div className="min-h-screen flex flex-col font-body">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
        <VisitModal   isOpen={isVisitOpen}   onClose={() => setIsVisitOpen(false)}   />
      </div>
    </ModalProvider>
  );
};

export default Layout;