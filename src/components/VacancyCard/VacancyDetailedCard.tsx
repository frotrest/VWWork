import React from 'react';
import {
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaChevronRight,
  FaHome,
  FaCheck,
} from 'react-icons/fa';
import type { VacancyCardProps } from '@app-types';
import { motion } from 'motion/react';

const VacancyDetailedCard: React.FC<VacancyCardProps> = ({
  vacancy,
  onApply,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.97,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md transition-all space-y-5"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="space-y-1.5 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              {vacancy.category}
            </span>
            {/* Значок Терміново відображається лише для вакансій, позначених як термінові */}
            {vacancy.urgent && (
              <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200">
                Терміновий набір
              </span>
            )}
            <span className="text-[11px] text-slate-400">
              Опубліковано {vacancy.publishedAt}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
            {vacancy.title}
          </h3>
          {/* Коротка інформація: місцезнаходження, тип зайнятості, необхідний досвід */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-0.5">
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <FaMapMarkerAlt className="w-3.5 h-3.5 text-slate-400" />
              {vacancy.city}, {vacancy.country}
            </span>
            <span className="flex items-center gap-1">
              <FaClock className="w-3.5 h-3.5 text-slate-400" />
              {vacancy.employmentType}
            </span>
            <span className="flex items-center gap-1">
              <FaBriefcase className="w-3.5 h-3.5 text-slate-400" />
              {vacancy.experienceRequired}
            </span>
          </div>
        </div>

        {/* Блок із інформацією про зарплату + кнопка «Подати заявку»; на мобільних пристроях відображається у вигляді рядка, на настільних комп’ютерах — у вигляді стовпця */}
        <div className="flex flex-row flex-wrap lg:flex-col items-center lg:items-end justify-between gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
          <div className="text-left lg:text-right">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              Ставка ({vacancy.salary.netOrGross})
            </span>
            <div className="text-xl sm:text-2xl font-black text-blue-700 leading-tight">
              {vacancy.salary.amount} {vacancy.salary.currency}
            </div>
            <span className="text-[11px] text-slate-500 font-medium">
              на {vacancy.salary.period}
            </span>
          </div>

          <button
            id={`apply-btn-${vacancy.id}`}
            onClick={() => onApply(vacancy)}
            className="px-6 py-3 rounded-2xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Подати заявку</span>
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        {vacancy.description}
      </p>

      {vacancy.housingProvided && (
        <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 flex items-start gap-2.5 text-xs text-emerald-950">
          <FaHome className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-emerald-800">Проживання: </strong>
            {vacancy.housingCost || 'Надається роботодавцем безкоштовно'}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
        <div className="space-y-1.5">
          <span className="font-bold uppercase tracking-wider text-slate-500 text-[10px]">
            Обов’язки:
          </span>
          <ul className="space-y-1 text-slate-700">
            {vacancy.responsibilities?.map((r, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-blue-500 font-bold">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-1.5">
          <span className="font-bold uppercase tracking-wider text-slate-500 text-[10px]">
            Ми гарантуємо:
          </span>
          <ul className="space-y-1 text-slate-700">
            {vacancy.benefits?.map((b, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(VacancyDetailedCard);
