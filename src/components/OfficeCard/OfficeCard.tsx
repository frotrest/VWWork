import React from 'react';
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import type { OfficeCardProps } from '@app-types';

const OfficeCard: React.FC<OfficeCardProps> = ({ office }) => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
            {office.badge}
          </span>
          <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
            <FaMapMarkerAlt className="w-4 h-4 text-blue-600" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-black text-slate-900 tracking-tight">
            {office.city}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">{office.role}</p>
        </div>

        <div className="space-y-2.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span>{office.address}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{office.workingHours}</span>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <FaPhoneAlt className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <a
              href={`tel:${office.phone}`}
              className="font-semibold text-slate-800 hover:text-blue-600 transition-colors"
            >
              {office.phone}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <a
              href={`mailto:${office.email}`}
              className="text-blue-600 hover:underline"
            >
              {office.email}
            </a>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
        <a
          href={`tel:${office.phone}`}
          className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-xs font-bold text-slate-700 text-center transition-colors cursor-pointer"
        >
          Зателефонувати в офіс
        </a>
      </div>
    </div>
  );
};

export default OfficeCard;
