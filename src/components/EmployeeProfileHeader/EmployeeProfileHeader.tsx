import React from 'react';
import {
  FaMapMarkerAlt,
  FaStar,
  FaCheckCircle,
  FaCalendarAlt,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaCheck,
  FaShieldAlt,
} from 'react-icons/fa';
import type { EmployeeProfileHeaderProps } from '@app-types';
import { motion } from 'motion/react';

const EmployeeProfileHeader: React.FC<EmployeeProfileHeaderProps> = ({
  partner,
}) => {
  return (
    <motion.div
      initial={{
        y: 40,
        opacity: 0,
      }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm space-y-6"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
        {/* Logo and основні деталі */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <img
            src={partner.logoUrl}
            alt={partner.name}
            loading="lazy"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-slate-100 shadow-xs shrink-0"
          />
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                {partner.name}
              </h1>
              {partner.verified && (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
                  <FaCheckCircle className="w-3.5 h-3.5" />
                  Верифікований роботодавець
                </span>
              )}
            </div>

            <div className="text-xs text-slate-500 font-medium">
              {partner.legalName}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 pt-1">
              <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                <FaMapMarkerAlt className="w-4 h-4 text-slate-400" />
                {partner.city}, {partner.country}
              </span>
              <span className="flex items-center gap-1 text-amber-700 font-bold">
                <FaStar className="w-4 h-4 fill-amber-500 text-amber-500" />
                {partner.rating} ({partner.reviewsCount} відгуків)
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <FaCalendarAlt className="w-4 h-4 text-slate-400" />
                Працює з {partner.establishedYear} року
              </span>
            </div>
          </div>
        </div>

        {/* Загальна кількість найнятих працівників  */}
        <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 sm:p-5 text-center min-w-45 w-full md:w-auto">
          <div className="text-2xl sm:text-3xl font-black text-blue-700">
            {partner.totalHired}+
          </div>
          <div className="text-xs font-semibold text-blue-900 mt-0.5">
            Працевлаштовано українців
          </div>
          <div className="text-[11px] text-blue-700 font-medium mt-1">
            Офіційний контракт та віза
          </div>
        </div>
      </div>

      {/* Опис та основні особливості */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
            Про компанію
          </h3>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {partner.description}
          </p>

          {/* Основні моменти (у вигляді списку) */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Умови та переваги роботи у роботодавця:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {partner.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-800"
                >
                  <FaCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Контакти та картка підтвердження */}
        <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 space-y-4 h-fit">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Контакти відділу найму
          </h3>

          <div className="space-y-2.5 text-xs text-slate-700">
            {partner.contacts.website && (
              <div className="flex items-center gap-2">
                <FaGlobe className="w-4 h-4 text-blue-600 shrink-0" />
                <a
                  href={partner.contacts.website}
                  target="_blank"
                  className="text-blue-600 hover:underline truncate"
                >
                  {partner.contacts.website.replace('https://', '')}
                </a>
              </div>
            )}
            {partner.contacts.email && (
              <div className="flex items-center gap-2">
                <FaEnvelope className="w-4 h-4 text-blue-600 shrink-0" />
                <a
                  href={`mailto:${partner.contacts.email}`}
                  className="hover:underline truncate"
                >
                  {partner.contacts.email}
                </a>
              </div>
            )}
            {partner.contacts.phone && (
              <div className="flex items-center gap-2">
                <FaPhone className="w-4 h-4 text-blue-600 shrink-0" />
                <a
                  href={`tel:${partner.contacts.phone}`}
                  className="hover:underline"
                >
                  {partner.contacts.phone}
                </a>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-200/80 flex items-start gap-2 text-[11px] text-slate-500 leading-relaxed">
            <FaShieldAlt className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              Трудовий договір підписується напряму з роботодавцем згідно з
              кодексом праці ЄС.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EmployeeProfileHeader;
