import React from 'react';
import type { CategoriesSectionProps } from '@app-types';
import { CATEGORIES_LIST } from '../../services/api';
import { motion } from 'motion/react';

const categoryIcons: Record<string, string> = {
  'Всі категорії': '🌐',
  Будівництво: '🏗️',
  Виробництво: '⚙️',
  Логістика: '📦',
  'Готельно-ресторанна сфера': '🍽️',
  IT: '💻',
  Водії: '🚛',
  'Медицина & Догляд': '🏥',
  'Сільське господарство': '🌾',
  Інші: '✨',
};

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
      >
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Напрямки зайнятості
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Популярні категорії професій
          </h2>
        </div>
        <p className="text-sm text-slate-500 max-w-md">
          Оберіть сферу діяльності — ми миттєво відфільтруємо відповідні
          пропозиції від провідних європейських партнерів.
        </p>
      </motion.div>

      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-wrap gap-3"
      >
        {CATEGORIES_LIST.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                onSelectCategory(cat);
                const el = document.getElementById('vacancies');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-25 grow basis-[calc(50%-0.375rem)] sm:basis-[calc(33.333%-0.5rem)] md:basis-[calc(20%-0.6rem)] ${
                isSelected
                  ? 'border-blue-600 bg-blue-50/80 shadow-sm ring-2 ring-blue-600/20'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              <span className="text-2xl mb-2">
                {categoryIcons[cat] || '💼'}
              </span>
              <div>
                <span
                  className={`block text-xs sm:text-sm font-bold leading-tight ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}
                >
                  {cat}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {cat === 'Всі категорії' ? 'Всі пропозиції' : 'Переглянути'}
                </span>
              </div>
            </button>
          );
        })}
      </motion.div>
    </section>
  );
};

export default CategoriesSection;
