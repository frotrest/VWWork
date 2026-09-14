import React, { useState } from 'react';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';
import type { FaqItem } from '@app-types';
import { AnimatePresence, motion } from 'motion/react';

const faqs: FaqItem[] = [
  {
    question: 'Чи бере VV Work плату за працевлаштування з пошукача?',
    answer:
      'Ні, працевлаштування через платформу VV Work є абсолютно безкоштовним для кандидатів. Послуги з пошуку, відбору та координації повністю оплачуються роботодавцями згідно з директивами ЄС про захист трудових мігрантів.',
  },
  {
    question: 'Які документи необхідні для виїзду та офіційного оформлення?',
    answer:
      'Для більшості вакансій у Польщі достатньо біометричного паспорта (ми оформлюємо офіційне освядчення/запрошення або карту побиту). Для Німеччини та Скандинавії допомагаємо з отриманням робочих віз фахівця або оформленням за параграфом 24 чи відрядженням A1.',
  },
  {
    question: 'Чи надається житло і які там умови?',
    answer:
      'Більшість роботодавців забезпечують безкоштовне проживання або покривають більшу частину його вартості (хостели готельного типу чи квартири по 2–3 особи в кімнаті з окремим санвузлом, кухнею, пральною машиною та Wi-Fi).',
  },
  {
    question: 'Хто зустріне мене після прибуття в Європу?',
    answer:
      'У кожному місті закріплено україномовного координатора від VV Work або роботодавця. Вас зустрічають на вокзалі/автостанції, допомагають поселитися, відкрити банківський рахунок і супроводжують у перший робочий день.',
  },
];

const FaqAccordion: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 space-y-6"
    >
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
          <FaQuestionCircle className="w-4 h-4" />
          <span>Відповіді на часті запитання</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          Що важливо знати перед працевлаштуванням
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openFaqIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs"
            >
              <button
                type="button"
                onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                className="w-full px-5 py-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50/50 cursor-pointer"
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default FaqAccordion;
