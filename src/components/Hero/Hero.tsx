import React from 'react';
import { FiHome, FiSearch } from 'react-icons/fi';
import type { HeroSectionProps } from '@app-types';
import { motion } from 'motion/react';

const HeroSection: React.FC<HeroSectionProps> = ({
  heroSearchQuery,
  setHeroSearchQuery,
  setSelectedCategory,
  onSearchClick,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-slate-200/70 bg-radial-[at_top_right] from-blue-50/80 via-white to-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs font-bold tracking-wide shadow-2xs">
            <FiHome className="w-3.5 h-3.5 text-blue-600" />
            <span>Офіційне працевлаштування в країнах ЄС</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Знайди роботу.{' '}
            <span className="text-blue-600">Знайди працівника.</span> Працюй у
            Європі.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Прямі контракти від верифікованих роботодавців Польщі, Німеччини,
            Швеції, Чехії та країн Балтії. Без прихованих платежів, з
            безкоштовним оформленням та підтримкою куратора.
          </p>

          <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-200/90 max-w-2xl mx-auto transition-all">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <div className="relative w-full flex-1">
                <FiSearch className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="hero-job-search"
                  type="text"
                  value={heroSearchQuery}
                  onChange={(e) => setHeroSearchQuery(e.target.value)}
                  placeholder="Посада, місто або спеціальність (напр. Водій, Логістика)..."
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <button
                id="hero-search-btn"
                onClick={onSearchClick}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <FiSearch className="w-4 h-4" />
                <span>Знайти вакансії</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-3 border-t border-slate-100 mt-3 text-xs text-slate-500">
              <span className="font-semibold text-slate-400">
                Швидкий вибір:
              </span>
              {[
                'Водій CE',
                'Склад',
                'Будівництво',
                'Німеччина',
                'Житло безкоштовно',
              ].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setHeroSearchQuery(tag === 'Житло безкоштовно' ? '' : tag);
                    if (tag === 'Будівництво')
                      setSelectedCategory('Будівництво');
                    if (tag === 'Склад') setSelectedCategory('Логістика');
                    if (tag === 'Водій CE') setSelectedCategory('Водії');
                    onSearchClick();
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 font-medium transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-6 max-w-4xl mx-auto text-left">
            <div className="w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                2,400+
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-0.5">
                Активних вакансій в ЄС
              </div>
            </div>
            <div className="w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-blue-600">
                180+
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-0.5">
                Перевірених роботодавців
              </div>
            </div>
            <div className="w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600">
                0 ₴
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-0.5">
                Комісій з кандидата
              </div>
            </div>
            <div className="w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                98%
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-0.5">
                Офіційне погодження віз
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
