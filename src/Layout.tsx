import { Suspense, useState, useCallback, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import type { Vacancy } from '@app-types';
import ApplicationModal from './components/Modal/ApplicationModal';
import EmployerInquiryModal from './components/Modal/EmployerModal';
import { motion, AnimatePresence } from 'motion/react';

const Layout = () => {
  const [isApplicationModalOpen, setIsApplicationModalOpen] =
    useState<boolean>(false);
  const [isEmployerModalOpen, setIsEmployerModalOpen] =
    useState<boolean>(false);
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);

  const handleOpenApplicationModal = useCallback((vacancy?: Vacancy) => {
    setSelectedVacancy(vacancy ?? null);
    setIsApplicationModalOpen(true);
  }, []);

  const handleCloseApplicationModal = useCallback(() => {
    setIsApplicationModalOpen(false);
    setSelectedVacancy(null);
  }, []);

  const handleOpenEmployerModal = useCallback(() => {
    setIsEmployerModalOpen(true);
  }, []);

  const handleCloseEmployerModal = useCallback(() => {
    setIsEmployerModalOpen(false);
  }, []);

  const outletContextValue = useMemo(
    () => ({
      onSelectVacancyForApply: handleOpenApplicationModal,
      onOpenEmployerModal: handleOpenEmployerModal,
    }),
    [handleOpenApplicationModal, handleOpenEmployerModal]
  );

  return (
    <>
      <Header
        onOpenQuickApplyModal={handleOpenApplicationModal}
        onOpenEmployerModal={handleOpenEmployerModal}
      />
      <main className="overflow-x-hidden">
        <Suspense
          fallback={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="max-w-7xl mx-auto px-4 py-12 animate-pulse space-y-6"
            >
              <div className="h-10 bg-slate-200 rounded-xl w-1/3 mx-auto" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-64 bg-slate-100 rounded-3xl" />
                ))}
              </div>
            </motion.div>
          }
        >
          <Outlet context={outletContextValue} />
        </Suspense>
      </main>
      <Footer onOpenEmployerModal={handleOpenEmployerModal} />
      <AnimatePresence>
        {isApplicationModalOpen && (
          <ApplicationModal
            key={selectedVacancy?.id ?? 'general'}
            isOpen={isApplicationModalOpen}
            onClose={handleCloseApplicationModal}
            vacancy={selectedVacancy}
            defaultCategory="Всі вакансії"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isEmployerModalOpen && (
          <EmployerInquiryModal
            isOpen={isEmployerModalOpen}
            onClose={handleCloseEmployerModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Layout;
