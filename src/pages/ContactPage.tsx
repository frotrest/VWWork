import React from 'react';
import {
  FaBuilding,
  FaPaperPlane,
  FaCommentDots,
  FaShieldAlt,
} from 'react-icons/fa';
import OfficeCard from '@/components/OfficeCard/OfficeCard';
import ContactForm from '@/components/ContactForm/ContactForm';
import FaqAccordion from '@/components/FaqAccordion/FaqAccordion';
import type { Office } from '@app-types';
import { motion } from 'motion/react';

const offices: Office[] = [
  {
    city: 'Київ (Україна)',
    role: 'Головний офіс та координаційний центр кандидатів',
    address:
      'вул. Велика Васильківська, 72, Бізнес-центр «Олімпійський», 6 поверх',
    phone: '+38 (044) 390-00-00',
    mobile: '+38 (067) 500-11-22',
    email: 'kyiv@vv-work.eu',
    workingHours: 'Пн – Пт: 09:00 – 19:00, Сб: 10:00 – 16:00',
    badge: 'Головний офіс',
  },
  {
    city: 'Варшава (Польща)',
    role: 'Центр зустрічі та адаптації працівників у Польщі',
    address: 'Al. Jerozolimskie 123, 02-017 Warszawa (біля Dworzec Centralny)',
    phone: '+48 22 890 34 00',
    mobile: '+48 571 223 344',
    email: 'polska@vv-work.eu',
    workingHours: 'Пн – Пт: 08:30 – 18:00, Сб: черговий координатор',
    badge: 'Хаб у Польщі',
  },
  {
    city: 'Франкфурт (Німеччина)',
    role: 'Юридичний департамент та візовий супровід у ФРН',
    address: 'Mainzer Landstraße 180, 60327 Frankfurt am Main',
    phone: '+49 69 711 90 00',
    mobile: '+49 176 889 001',
    email: 'germany@vv-work.eu',
    workingHours: 'Пн – Пт: 09:00 – 17:30',
    badge: 'Офіс у Німеччині',
  },
];

const ContactsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 pb-24 ">
      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <FaBuilding className="w-3.5 h-3.5 text-blue-600" />
          <span>Служба підтримки та офіси VV Work</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Контакти та координаційні центри
        </h1>

        <p className="text-base text-slate-600 leading-relaxed">
          Ми завжди на зв’язку, щоб допомогти вам знайти надійну роботу в Європі
          або підібрати перевірений персонал для вашого підприємства.
        </p>
      </motion.div>

      {/* Offices List (Flexbox) */}
      <section className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight"
        >
          Наші офіційні представництва
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row gap-6"
        >
          {offices.map((office, idx) => (
            <div key={idx} className="flex-1">
              <OfficeCard office={office} />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Interactive Form & Messengers */}
      <section className="flex flex-col lg:flex-row gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full lg:w-7/12"
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full lg:w-5/12 space-y-6"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
            <h3 className="text-lg font-black text-slate-900 tracking-tight">
              Швидкі канали зв’язку
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Відповідаємо щодня з 08:00 до 22:00 за київським часом. Оберіть
              зручний для вас месенджер:
            </p>

            <div className="space-y-3">
              <a
                href="https://t.me"
                target="_blank"
                className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-between p-4 rounded-2xl bg-sky-50/80 border border-sky-200/80 text-sky-900 hover:bg-sky-100/90 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-xs">
                    <FaPaperPlane className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">
                      Telegram Бот VV Work
                    </div>
                    <div className="text-xs text-sky-700">
                      @vv_work_support_bot
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-sky-700 group-hover:translate-x-1 transition-transform">
                  Відкрити →
                </span>
              </a>

              <a
                href="https://viber.com"
                target="_blank"
                className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-between p-4 rounded-2xl bg-purple-50/80 border border-purple-200/80 text-purple-900 hover:bg-purple-100/90 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs">
                    <FaCommentDots className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Viber Гаряча Лінія</div>
                    <div className="text-xs text-purple-700">
                      Спільнота підтримки кандидатів
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-purple-700 group-hover:translate-x-1 transition-transform">
                  Приєднатися →
                </span>
              </a>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <FaShieldAlt className="w-4 h-4 text-emerald-600" />
                  <span>Гарантія безпеки та юридичної підтримки</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  У разі непередбачених ситуацій на місці роботи в ЄС працює
                  цілодобова чергова лінія зв’язку з вашим персональним
                  координатором.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FaqAccordion />
    </div>
  );
};

export default ContactsPage;
