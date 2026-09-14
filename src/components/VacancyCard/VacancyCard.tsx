import React from 'react';
import { FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import type { VacancyCardProps } from '@app-types';
import { useNavigate } from 'react-router-dom';

const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy, onApply }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between w-full h-full min-w-0">
      <div className="space-y-3 min-w-0">
        {/* Category & Urgent badge */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
            {vacancy.category}
          </span>
          {vacancy.urgent && (
            <span className="text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200/80 px-2.5 py-1 rounded-full whitespace-nowrap">
              🔥 Терміновий набір
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-black text-slate-900 line-clamp-2 hover:text-blue-600 transition-colors">
          {vacancy.title}
        </h3>

        {/* Partner / Company & Location */}
        <div className="flex items-center justify-between gap-2 text-xs text-slate-600 min-w-0">
          <button
            onClick={() =>
              navigate(`/partners/${vacancy.partnerSlug}`, { replace: true })
            }
            className="font-semibold text-blue-600 hover:underline cursor-pointer flex items-center gap-1 text-left min-w-0 shrink"
          >
            <FaBuilding className="w-3.5 h-3.5 shrink-0 text-blue-600" />
            <span className="truncate">{vacancy.partnerName}</span>
          </button>

          <span
            className="flex items-center gap-1 text-slate-500 shrink-0 max-w-[45%] truncate"
            title={`${vacancy.city}, ${vacancy.country}`}
          >
            <FaMapMarkerAlt className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">
              {vacancy.city}, {vacancy.country}
            </span>
          </span>
        </div>

        {/* Salary Highlight */}
        <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <span className="text-[10px] uppercase font-bold text-blue-800 tracking-wider block truncate">
              Зарплата {vacancy.salary.netOrGross}
            </span>
            <div className="text-base sm:text-lg font-black text-blue-900 truncate">
              {vacancy.salary.amount} {vacancy.salary.currency}
              <span className="text-xs font-medium text-blue-700">
                {' '}
                / {vacancy.salary.period}
              </span>
            </div>
          </div>
          {vacancy.housingProvided && (
            <div className="text-right shrink-0">
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded whitespace-nowrap">
                Житло є
              </span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
            {vacancy.employmentType}
          </span>
          <span className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
            {vacancy.experienceRequired}
          </span>
        </div>
      </div>

      {/* Card Actions */}
      <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2">
        <button
          onClick={() => onApply(vacancy)}
          className="flex-1 py-2.5 px-3 sm:px-4 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-2xs transition-colors cursor-pointer text-center truncate"
        >
          Подати заявку
        </button>
        <button
          onClick={() =>
            navigate(`/partners/${vacancy.partnerSlug}`, { replace: true })
          }
          className="py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer shrink-0"
          title="Всі вакансії роботодавця"
        >
          Деталі
        </button>
      </div>
    </div>
  );
};

export default React.memo(VacancyCard);
