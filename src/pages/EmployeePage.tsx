import React, { useState, useEffect, useMemo } from 'react';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import type { JobCategory, Partner, Vacancy } from '@app-types';
import { fetchPartnerBySlug, fetchPartnerVacancies } from '../services/api';
import { useDebounce } from '../hooks/useDebounce';
import {
  VacancyCardSkeleton,
  PartnerHeaderSkeleton,
} from '@/components/SkeletonLoader/SkeletonLoader';
import ErrorRetryBlock from '@/components/ErrorRetryBlock/ErrorRetryBlock';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import EmployeeProfileHeader from '@/components/EmployeeProfileHeader/EmployeeProfileHeader';
import VacancyFiltersBar from '@/components/VacancyFiltersBar/VacancyFiltersBar';
import VacancyDetailedCard from '@/components/VacancyCard/VacancyDetailedCard';
import { motion } from 'motion/react';

const EmployeePage: React.FC = () => {
  // Отримуємо динамічний slug з URL (наприклад, /partners/:slug)
  const { slug } = useParams<{ slug: string }>();
  const { onSelectVacancyForApply } = useOutletContext<{
    onSelectVacancyForApply: (vacancy?: Vacancy) => void;
  }>();

  // Asynchronous Partner data
  const [partner, setPartner] = useState<Partner | null>(null);
  const [isPartnerLoading, setIsPartnerLoading] = useState(true);
  const [partnerError, setPartnerError] = useState<string | null>(null);
  const [isRetryingPartner, setIsRetryingPartner] = useState(false);

  // Asynchronous Vacancies data
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [isVacanciesLoading, setIsVacanciesLoading] = useState(true);
  const [vacanciesError, setVacanciesError] = useState<string | null>(null);
  const [isRetryingVacancies, setIsRetryingVacancies] = useState(false);

  const [searchInput, setSearchInput] = useState('');
  const debouncedSearchQuery = useDebounce(searchInput, 350);

  // Category filter state
  const [selectedCategory, setSelectedCategory] =
    useState<JobCategory>('Всі категорії');

  const navigate = useNavigate();

  // Load Partner Profile
  const loadPartner = async () => {
    if (!slug) return;
    setIsPartnerLoading(true);
    setPartnerError(null);
    try {
      const data = await fetchPartnerBySlug(slug);
      if (!data) {
        setPartnerError(`Роботодавця з ідентифікатором "${slug}" не знайдено.`);
      } else {
        setPartner(data);
      }
    } catch (err) {
      setPartnerError(
        err instanceof Error
          ? err.message
          : 'Не вдалося завантажити профіль партнера.'
      );
    } finally {
      setIsPartnerLoading(false);
      setIsRetryingPartner(false);
    }
  };

  // Load Partner Vacancies
  const loadVacancies = async () => {
    if (!slug) return;
    setIsVacanciesLoading(true);
    setVacanciesError(null);
    try {
      const data = await fetchPartnerVacancies(slug);
      setVacancies(data);
    } catch (err) {
      setVacanciesError(
        err instanceof Error
          ? err.message
          : 'Не вдалося завантажити список вакансій роботодавця.'
      );
    } finally {
      setIsVacanciesLoading(false);
      setIsRetryingVacancies(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (!slug) return;

    Promise.resolve().then(() => {
      loadPartner();
      loadVacancies();
    });
  }, [slug]);

  const filteredVacancies = useMemo(() => {
    const trimmedQuery = debouncedSearchQuery.trim().toLowerCase();

    return vacancies.filter((vac) => {
      const matchesCategory =
        selectedCategory === 'Всі категорії' ||
        vac.category === selectedCategory;

      const matchesSearch =
        trimmedQuery === '' ||
        vac.title.toLowerCase().includes(trimmedQuery) ||
        vac.description.toLowerCase().includes(trimmedQuery) ||
        vac.city.toLowerCase().includes(trimmedQuery) ||
        vac.country.toLowerCase().includes(trimmedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [vacancies, debouncedSearchQuery, selectedCategory]);

  const partnerCategories = useMemo(() => {
    const unique = new Set<JobCategory>();
    unique.add('Всі категорії');
    vacancies.forEach((v) => unique.add(v.category));
    return Array.from(unique);
  }, [vacancies]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-12 pb-20">
      {/* Breadcrumbs / Back navigation */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="flex flex-col gap-2 sm:flex-row sm:gap-0 items-center justify-between"
      >
        <button
          onClick={() => navigate('/', { replace: true })}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Назад до всіх роботодавців</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <button
            onClick={() => navigate('/', { replace: true })}
            className="hover:underline"
          >
            Головна
          </button>
          <span>/</span>
          <span>Партнери</span>
          <span>/</span>
          <span className="text-slate-700 font-medium truncate max-w-37.5 sm:max-w-xs">
            {partner?.name || slug}
          </span>
        </div>
      </motion.div>

      {/* ================= PARTNER PROFILE HEADER ================= */}
      {isPartnerLoading ? (
        <PartnerHeaderSkeleton />
      ) : partnerError ? (
        <ErrorRetryBlock
          title="Помилка завантаження роботодавця"
          message={partnerError}
          onRetry={() => {
            setIsRetryingPartner(true);
            loadPartner();
          }}
          isRetrying={isRetryingPartner}
        />
      ) : partner ? (
        <EmployeeProfileHeader partner={partner} />
      ) : null}

      {/* ================= VACANCY LIST & SIMULTANEOUS FILTERS ================= */}
      <section className="space-y-6">
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              Відкриті позиції
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Вакансії роботодавця {partner ? `(${vacancies.length})` : ''}
            </h2>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Знайдено:{' '}
            <strong className="text-slate-900">
              {filteredVacancies.length}
            </strong>{' '}
            вакансій
          </div>
        </motion.div>

        {/* Filter Controls Bar */}
        <VacancyFiltersBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          partnerCategories={partnerCategories}
        />

        {/* Vacancies Async List */}
        {isVacanciesLoading ? (
          <div className="space-y-4">
            <VacancyCardSkeleton />
            <VacancyCardSkeleton />
          </div>
        ) : vacanciesError ? (
          <ErrorRetryBlock
            title="Помилка завантаження вакансій"
            message={vacanciesError}
            onRetry={() => {
              setIsRetryingVacancies(true);
              loadVacancies();
            }}
            isRetrying={isRetryingVacancies}
          />
        ) : filteredVacancies.length === 0 ? (
          <motion.div
            initial={{
              y: 40,
              opacity: 0,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 max-w-md mx-auto space-y-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mx-auto text-xl">
              <FaSearch className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Вакансій не знайдено
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Жодна вакансія не відповідає обраним критеріям пошуку або
              категорії.
            </p>
            <button
              onClick={() => {
                setSearchInput('');
                setSelectedCategory('Всі категорії');
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-all cursor-pointer"
            >
              Скинути параметри пошуку
            </button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {filteredVacancies.map((vacancy) => (
              <VacancyDetailedCard
                key={vacancy.id}
                vacancy={vacancy}
                onApply={onSelectVacancyForApply}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default EmployeePage;
