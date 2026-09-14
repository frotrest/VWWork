import React from 'react';
import { motion } from 'motion/react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-slate-100/80 rounded-3xl p-8 sm:p-12 border border-slate-200/80"
      >
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Як отримати роботу через VV Work?
          </h3>
          <p className="text-sm text-slate-600">
            Простий та прозорий шлях від заявки до першого робочого дня в
            Європі.
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-6">
          <div className="w-full md:w-[calc(25%-1.125rem)] bg-white p-6 rounded-2xl shadow-2xs border border-slate-200/60 relative flex flex-col">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 font-black text-sm flex items-center justify-center mb-4">
              1
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1.5">
              Подача заявки
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Оберіть вакансію або залиште відкриту анкету. Це займе лише 1
              хвилину.
            </p>
          </div>

          <div className="w-full md:w-[calc(25%-1.125rem)] bg-white p-6 rounded-2xl shadow-2xs border border-slate-200/60 relative flex flex-col">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 font-black text-sm flex items-center justify-center mb-4">
              2
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1.5">
              Дзвінок куратора
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Менеджер з’ясовує ваші побажання, досвід та погоджує кандидатуру з
              роботодавцем.
            </p>
          </div>

          <div className="w-full md:w-[calc(25%-1.125rem)] bg-white p-6 rounded-2xl shadow-2xs border border-slate-200/60 relative flex flex-col">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 font-black text-sm flex items-center justify-center mb-4">
              3
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1.5">
              Оформлення документів
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Безкоштовне виготовлення робочого запрошення, медичного поліса та
              координація виїзду.
            </p>
          </div>

          <div className="w-full md:w-[calc(25%-1.125rem)] bg-white p-6 rounded-2xl shadow-2xs border border-slate-200/60 relative flex flex-col">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 font-black text-sm flex items-center justify-center mb-4">
              4
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1.5">
              Зустріч та початок роботи
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Координатор зустрічає вас на місці, поселяє у житло та супроводжує
              перший робочий день.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorksSection;
