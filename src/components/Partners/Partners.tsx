import React from 'react';
import { FiArrowRight, FiCheckCircle, FiStar, FiMapPin } from 'react-icons/fi';
import { PartnerCardSkeleton } from '../SkeletonLoader/SkeletonLoader';
import ErrorRetryBlock from '../ErrorRetryBlock/ErrorRetryBlock';
import { useNavigate } from 'react-router-dom';
import type { PartnersSectionProps } from '@app-types';
import { motion } from 'motion/react';

const PartnersSection: React.FC<PartnersSectionProps> = ({
  partners,
  isLoading,
  error,
  isRetrying,
  onRetry,
  onOpenEmployerModal,
}) => {
  const navigate = useNavigate();
  return (
    <section id="partners" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{
          x: 100,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
      >
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Перевірені роботодавці ЄС
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Партнери платформи VV Work
          </h2>
        </div>
        <button
          onClick={onOpenEmployerModal}
          className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
        >
          <span>Стати роботодавцем-партнером</span>
          <FiArrowRight className="w-4 h-4" />
        </button>
      </motion.div>

      {isLoading ? (
        <div className="flex flex-wrap gap-6">
          <div className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex">
            <PartnerCardSkeleton />
          </div>
          <div className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex">
            <PartnerCardSkeleton />
          </div>
          <div className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex">
            <PartnerCardSkeleton />
          </div>
        </div>
      ) : error ? (
        <ErrorRetryBlock
          title="Не вдалося завантажити роботодавців"
          message={error}
          onRetry={onRetry}
          isRetrying={isRetrying}
        />
      ) : (
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="flex flex-wrap gap-6"
        >
          {partners.map((partner) => (
            <div
              key={partner.slug}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    loading="lazy"
                    className="w-16 h-16 rounded-2xl object-cover border border-slate-100 shadow-2xs"
                  />
                  <div className="flex flex-col items-end gap-1">
                    {partner.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/70">
                        <FiCheckCircle className="w-3.5 h-3.5" />
                        Перевірено
                      </span>
                    )}
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                      <FiStar className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{partner.rating}</span>
                      <span className="text-slate-400 font-normal">
                        ({partner.reviewsCount})
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-1">
                  <FiMapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>
                    {partner.city}, {partner.country}
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                  {partner.tagline}
                </p>
                {/* Показуємо лише перші 2 highlights із повного списку */}
                <div className="space-y-1.5 mt-4 pt-4 border-t border-slate-100">
                  {partner.highlights.slice(0, 2).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">
                  <span className="text-blue-600 font-black text-sm">
                    {partner.activeVacanciesCount}
                  </span>{' '}
                  активних вакансій
                </span>
                <button
                  onClick={() =>
                    navigate(`/partners/${partner.slug}`, { replace: true })
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-blue-600 transition-colors shadow-2xs cursor-pointer"
                >
                  <span>Відкрити профіль</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default PartnersSection;
