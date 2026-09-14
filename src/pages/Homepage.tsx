import { useState, useEffect } from 'react';
import type { JobCategory, Partner, Vacancy } from '@app-types';
import { fetchAllPartners, fetchAllVacancies } from '../services/api';
import HeroSection from '@/components/Hero/Hero';
import CategoriesSection from '@/components/Categories/Categories';
import PartnersSection from '@/components/Partners/Partners';
import EmployerPromoSection from '@/components/EmployerPromo/EmployerPromo';
import VacanciesSection from '@/components/Vacancies/Vacancies';
import HowItWorksSection from '@/components/HowWorks/HowWorks';
import { useOutletContext } from 'react-router-dom';
import { useDebounce } from '@/hooks/useDebounce';

const HomePage = () => {
  const { onSelectVacancyForApply, onOpenEmployerModal } = useOutletContext<{
    onSelectVacancyForApply: (vacancy?: Vacancy) => void;
    onOpenEmployerModal: () => void;
  }>();

  const [heroSearchQuery, setHeroSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState<JobCategory>('Всі категорії');

  const [partners, setPartners] = useState<Partner[]>([]);
  const [isPartnersLoading, setIsPartnersLoading] = useState(true);
  const [partnersError, setPartnersError] = useState<string | null>(null);
  const [isRetryingPartners, setIsRetryingPartners] = useState(false);

  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [isVacanciesLoading, setIsVacanciesLoading] = useState(true);
  const [vacanciesError, setVacanciesError] = useState<string | null>(null);
  const [isRetryingVacancies, setIsRetryingVacancies] = useState(false);

  const debouncedSearchQuery = useDebounce(heroSearchQuery, 300);

  const loadPartnersData = async () => {
    setIsPartnersLoading(true);
    setPartnersError(null);
    try {
      const data = await fetchAllPartners();
      setPartners(data);
    } catch (err) {
      setPartnersError(
        err instanceof Error
          ? err.message
          : 'Не вдалося завантажити список роботодавців.'
      );
    } finally {
      setIsPartnersLoading(false);
      setIsRetryingPartners(false);
    }
  };

  const loadVacanciesData = async () => {
    setIsVacanciesLoading(true);
    setVacanciesError(null);
    try {
      const data = await fetchAllVacancies();
      setVacancies(data);
    } catch (err) {
      setVacanciesError(
        err instanceof Error
          ? err.message
          : 'Не вдалося завантажити актуальні вакансії.'
      );
    } finally {
      setIsVacanciesLoading(false);
      setIsRetryingVacancies(false);
    }
  };

  useEffect(() => {
    Promise.resolve().then(() => {
      loadPartnersData();
      loadVacanciesData();
    });
  }, []);

  const filteredHomeVacancies = vacancies.filter((v) => {
    const matchesCategory =
      selectedCategory === 'Всі категорії' || v.category === selectedCategory;
    const matchesSearch =
      !debouncedSearchQuery.trim() ||
      v.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
      v.city.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
      v.country.toLowerCase().includes(debouncedSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToVacancies = () => {
    const el = document.getElementById('vacancies');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      <HeroSection
        heroSearchQuery={heroSearchQuery}
        setHeroSearchQuery={setHeroSearchQuery}
        setSelectedCategory={setSelectedCategory}
        onSearchClick={scrollToVacancies}
      />

      <CategoriesSection
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <PartnersSection
        partners={partners}
        isLoading={isPartnersLoading}
        error={partnersError}
        isRetrying={isRetryingPartners}
        onRetry={() => {
          setIsRetryingPartners(true);
          loadPartnersData();
        }}
        onOpenEmployerModal={onOpenEmployerModal}
      />

      <EmployerPromoSection onOpenEmployerModal={onOpenEmployerModal} />

      <VacanciesSection
        vacancies={filteredHomeVacancies}
        isLoading={isVacanciesLoading}
        error={vacanciesError}
        isRetrying={isRetryingVacancies}
        selectedCategory={selectedCategory}
        onRetry={() => {
          setIsRetryingVacancies(true);
          loadVacanciesData();
        }}
        onResetFilters={() => {
          setHeroSearchQuery('');
          setSelectedCategory('Всі категорії');
        }}
        onSelectVacancyForApply={onSelectVacancyForApply}
      />

      <HowItWorksSection />
    </div>
  );
};

export default HomePage;
