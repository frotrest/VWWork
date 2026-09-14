import React from 'react';
import type { VacanciesSectionProps } from '@app-types';
import { VacancyCardSkeleton } from '../SkeletonLoader/SkeletonLoader';
import ErrorRetryBlock from '../ErrorRetryBlock/ErrorRetryBlock';
import VacancyCard from '../VacancyCard/VacancyCard';
import { motion } from 'motion/react';

const VacanciesSection: React.FC<VacanciesSectionProps> = ({
  vacancies,
  isLoading,
  error,
  isRetrying,
  selectedCategory,
  onRetry,
  onResetFilters,
  onSelectVacancyForApply,
}) => {
  return (
    <section id="vacancies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
      >
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Гарячі пропозиції
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Актуальні вакансії в Європі
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">
            Показано: {vacancies.length} вакансій
          </span>
          {selectedCategory !== 'Всі категорії' && (
            <button
              onClick={onResetFilters}
              className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-lg hover:bg-rose-100 transition-colors cursor-pointer"
            >
              Скинути категорію ({selectedCategory}) ✕
            </button>
          )}
        </div>
      </motion.div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VacancyCardSkeleton />
          <VacancyCardSkeleton />
          <VacancyCardSkeleton />
        </div>
      ) : error ? (
        <ErrorRetryBlock
          title="Не вдалося завантажити вакансії"
          message={error}
          onRetry={onRetry}
          isRetrying={isRetrying}
        />
      ) : vacancies.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 max-w-md mx-auto space-y-3">
          <div className="text-3xl">🔍</div>
          <h3 className="text-lg font-bold text-slate-900">
            Вакансій не знайдено
          </h3>
          <p className="text-xs text-slate-500">
            Спробуйте змінити пошуковий запит або скинути обрану категорію.
          </p>
          <button
            onClick={onResetFilters}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 cursor-pointer"
          >
            Скинути всі фільтри
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {vacancies.map((vacancy) => (
            <motion.div
              key={vacancy.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex h-full w-full"
            >
              <div className="w-full">
                <VacancyCard
                  vacancy={vacancy}
                  onApply={onSelectVacancyForApply}
                />
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default VacanciesSection;
