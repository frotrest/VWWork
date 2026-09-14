import React from 'react';
import {
  FiBriefcase,
  FiClock,
  FiShield,
  FiFileText,
  FiUsers,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import type { EmployerPromoSectionProps } from '@app-types';
import { motion } from 'motion/react';

const EmployerPromoSection: React.FC<EmployerPromoSectionProps> = ({
  onOpenEmployerModal,
}) => {
  const navigate = useNavigate();
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{
          x: 100,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="rounded-3xl bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-slate-800"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-7/12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <FiBriefcase className="w-4 h-4" />
              <span>Корпоративним клієнтам & Роботодавцям</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Потрібні працівники на ваше підприємство?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Закриваємо кадровий дефіцит на складах, виробничих лініях,
              будівельних майданчиках та в сфері послуг по всій Європі. Беремо
              на себе повний цикл відбору та легалізації.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="w-full sm:w-[calc(50%-0.5rem)] flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <FiClock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Швидкий підбір за 48 годин
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Готові кандидати з біометрією та відкритими візами в базі.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-[calc(50%-0.5rem)] flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <FiShield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Візовий та юридичний супровід
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Оформлення запрошень, A1, дозволів та страхування.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-[calc(50%-0.5rem)] flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <FiFileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Гарантія безкоштовної заміни
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Якщо працівник не пройшов випробувальний термін — підбираємо
                    нового.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-[calc(50%-0.5rem)] flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <FiUsers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Масовий рекрутинг
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Формуємо бригади від 5 до 100 осіб під запуск нових
                    об’єктів.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="employer-cta-btn"
                onClick={onOpenEmployerModal}
                className="px-8 py-4 rounded-2xl font-bold text-base bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FiUsers className="w-5 h-5" />
                <span>Знайти працівника</span>
              </button>

              <button
                onClick={() => navigate('/contacts')}
                className="px-6 py-4 rounded-2xl font-bold text-sm bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Отримати консультацію B2B</span>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-5/12 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-300">
                Середній термін закриття заявки
              </span>
              <span className="text-sm font-black text-emerald-400">3 дні</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between text-slate-200">
                <span>Водії-міжнародники СЕ</span>
                <span className="font-bold text-white">від 2 днів</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-[90%]" />
              </div>

              <div className="flex items-center justify-between text-slate-200 pt-2">
                <span>Складська логістика & комплектація</span>
                <span className="font-bold text-white">від 24 годин</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full w-[95%]" />
              </div>

              <div className="flex items-center justify-between text-slate-200 pt-2">
                <span>Будівельні спеціальності & майстри</span>
                <span className="font-bold text-white">від 4 днів</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full w-[80%]" />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-600/30 border border-blue-400/20 text-xs text-blue-100 leading-relaxed">
              «VV Work забезпечила наш логістичний парк у Варшаві 40 водіями за
              3 тижні. Всі з кодом 95 та сертифікатами. Рекомендуємо!»
              <div className="font-bold text-white mt-1.5">
                — HR-директор Nordic Logistics AS
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EmployerPromoSection;
