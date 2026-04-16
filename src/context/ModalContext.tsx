import React, { createContext, useContext } from 'react';

interface ModalContextType {
  openEnquiryModal: () => void;
  openVisitModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openEnquiryModal: () => {},
  openVisitModal: () => {},
});

export const useModal = () => useContext(ModalContext);

interface ModalProviderProps {
  children: React.ReactNode;
  openEnquiry: () => void;
  openVisit: () => void;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({
  children,
  openEnquiry,
  openVisit,
}) => (
  <ModalContext.Provider
    value={{ openEnquiryModal: openEnquiry, openVisitModal: openVisit }}
  >
    {children}
  </ModalContext.Provider>
);