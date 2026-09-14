import React from 'react';
import { FaSearch } from 'react-icons/fa';
import type { JobCategory, VacancyFiltersBarProps } from '@app-types';
import { motion } from 'motion/react';

const VacancyFiltersBar: React.FC<VacancyFiltersBarProps> = ({
  searchInput,
  setSearchInput,
  selectedCategory,
  setSelectedCategory,
  partnerCategories,
}) => {
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
      }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        <div className="lg:col-span-7">
          <div className="relative">
            <FaSearch className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="partner-vacancies-search"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Пошук за назвою посади..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 focus:bg-white"
            />
            {searchInput && (
              <button
                onClick={() => setSearchInput('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="lg:col-span-5 flex items-center justify-between sm:justify-end gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">
            Категорія:
          </span>
          <select
            id="partner-category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as JobCategory)}
            className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white text-slate-800 font-medium focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 cursor-pointer w-full sm:w-auto"
          >
            {partnerCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  );
};

export default VacancyFiltersBar;
