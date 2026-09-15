import React, { useState } from 'react';
import {
  FiX as X,
  FiCheckCircle as CheckCircle2,
  FiAlertCircle as AlertCircle,
  FiRefreshCw as RefreshCw,
  FiSend as Send,
  FiBriefcase as Building2,
} from 'react-icons/fi';
import type {
  EmployerInquiryModalProps,
  EmployerInquiryData,
} from '@app-types';
import { submitEmployerInquiryApi } from '../../services/api';
import ModalWrapper from './ModalWrapper';

const COUNTRIES = [
  'Польща',
  'Німеччина',
  'Чехія',
  'Словаччина',
  'Литва',
  'Латвія',
  'Нідерланди',
  'Інша країна ЄС',
] as const;

type Country = (typeof COUNTRIES)[number];

const EmployerInquiryModal = ({
  isOpen,
  onClose,
}: EmployerInquiryModalProps) => {
  const [companyName, setCompanyName] = useState<string>('');
  const [contactPerson, setContactPerson] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [positionsNeeded, setPositionsNeeded] = useState<string>('');
  const [workerCount, setWorkerCount] = useState<number>(5);
  const [country, setCountry] = useState<Country>('Польща');
  const [notes, setNotes] = useState<string>('');

  const [errors, setErrors] = useState<{
    companyName?: string;
    contactPerson?: string;
    contact?: string;
    positionsNeeded?: string;
  }>({});

  const [status, setStatus] = useState<
    'idle' | 'optimistic_pending' | 'success' | 'error'
  >('idle');
  const [successInfo, setSuccessInfo] = useState<{
    id: string;
    message: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: {
      companyName?: string;
      contactPerson?: string;
      contact?: string;
      positionsNeeded?: string;
    } = {};

    // Той самий набір regex, що й у ContactForm/ApplicationModal — контакт
    // валідний за будь-яким одним із трьох форматів (телефон/email/Telegram)
    if (!companyName.trim() || companyName.trim().length < 2) {
      newErrors.companyName = 'Вкажіть назву вашої компанії (мін. 2 символи)';
    }

    if (!contactPerson.trim() || contactPerson.trim().length < 2) {
      newErrors.contactPerson = 'Вкажіть контактну особу або HR-менеджера';
    }

    const trimmedContact = contact.trim();
    const phoneRegex = /^(\+?[0-9\s\-()]{9,20})$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telegramRegex = /^@?[a-zA-Z0-9_]{4,32}$/;

    if (!trimmedContact) {
      newErrors.contact = 'Вкажіть телефон, email або Telegram для зв’язку';
    } else if (
      !phoneRegex.test(trimmedContact) &&
      !emailRegex.test(trimmedContact) &&
      !telegramRegex.test(trimmedContact)
    ) {
      newErrors.contact = 'Некоректний формат контактних даних';
    }

    if (!positionsNeeded.trim()) {
      newErrors.positionsNeeded = 'Вкажіть потрібні спеціальності або посади';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    const payload: EmployerInquiryData = {
      companyName: companyName.trim(),
      contactPerson: contactPerson.trim(),
      contact: contact.trim(),
      positionsNeeded: positionsNeeded.trim(),
      workerCount,
      country,
      notes: notes.trim(),
    };

    setStatus('optimistic_pending');
    setErrorMessage(null);

    try {
      const result = await submitEmployerInquiryApi(payload);
      setSuccessInfo({
        id: result.inquiryId,
        message: result.message,
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Помилка надсилання запиту. Спробуйте знову.'
      );
    }
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
            <Building2 className="w-4 h-4" />
            <span>B2B Підбір персоналу для підприємств ЄС</span>
          </div>
          <h2
            id="employer-modal-headline"
            className="text-xl font-black text-slate-900 tracking-tight"
          >
            Запит на підбір персоналу
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрити модалку"
          className="w-10 h-10 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Body */}
      <div className="p-6 overflow-y-auto space-y-4 max-h-[75vh]">
        {status === 'success' && successInfo ? (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Запит успішно надіслано!
            </h3>
            <p className="text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block">
              ID заявки: {successInfo.id}
            </p>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              {successInfo.message}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 px-5 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
            >
              Закрити вікно
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {status === 'error' && errorMessage && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div className="flex-1 space-y-1.5">
                  <p className="font-semibold">{errorMessage}</p>
                  <button
                    type="button"
                    onClick={() => handleSubmit()}
                    className="text-xs font-bold text-rose-700 underline hover:text-rose-900 cursor-pointer"
                  >
                    Повторити відправку
                  </button>
                </div>
              </div>
            )}

            {status === 'optimistic_pending' && (
              <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-800 text-xs flex items-center gap-2.5 animate-pulse">
                <RefreshCw className="w-4 h-4 animate-spin text-blue-600 shrink-0" />
                <span>Обробка та відправка запиту на підбір...</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Компанія <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                    if (errors.companyName)
                      setErrors((prev) => ({
                        ...prev,
                        companyName: undefined,
                      }));
                  }}
                  disabled={status === 'optimistic_pending'}
                  placeholder="Наприклад, AutoLogistic Sp. z o.o."
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-hidden ${
                    errors.companyName
                      ? 'border-rose-400 bg-rose-50/40 text-rose-950'
                      : 'border-slate-300 text-slate-900'
                  }`}
                />
                {errors.companyName && (
                  <p className="text-xs text-rose-600 font-medium">
                    {errors.companyName}
                  </p>
                )}
              </div>

              <div className="flex-1 space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Контактна особа <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={contactPerson}
                  onChange={(e) => {
                    setContactPerson(e.target.value);
                    if (errors.contactPerson)
                      setErrors((prev) => ({
                        ...prev,
                        contactPerson: undefined,
                      }));
                  }}
                  disabled={status === 'optimistic_pending'}
                  placeholder="Ім'я та посада"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-hidden ${
                    errors.contactPerson
                      ? 'border-rose-400 bg-rose-50/40 text-rose-950'
                      : 'border-slate-300 text-slate-900'
                  }`}
                />
                {errors.contactPerson && (
                  <p className="text-xs text-rose-600 font-medium">
                    {errors.contactPerson}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Телефон або Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                    if (errors.contact)
                      setErrors((prev) => ({ ...prev, contact: undefined }));
                  }}
                  disabled={status === 'optimistic_pending'}
                  placeholder="+48 ... або hr@company.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-hidden ${
                    errors.contact
                      ? 'border-rose-400 bg-rose-50/40 text-rose-950'
                      : 'border-slate-300 text-slate-900'
                  }`}
                />
                {errors.contact && (
                  <p className="text-xs text-rose-600 font-medium">
                    {errors.contact}
                  </p>
                )}
              </div>

              <div className="flex-1 space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Країна працевлаштування
                </label>
                <select
                  value={country}
                  aria-label="Виберіть категорію"
                  onChange={(e) => setCountry(e.target.value as Country)}
                  disabled={status === 'optimistic_pending'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden bg-white text-slate-900 cursor-pointer"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Потрібні посади <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={positionsNeeded}
                  onChange={(e) => {
                    setPositionsNeeded(e.target.value);
                    if (errors.positionsNeeded)
                      setErrors((prev) => ({
                        ...prev,
                        positionsNeeded: undefined,
                      }));
                  }}
                  disabled={status === 'optimistic_pending'}
                  placeholder="Напр., водії СЕ, карщики UDT, фасадчики"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-hidden ${
                    errors.positionsNeeded
                      ? 'border-rose-400 bg-rose-50/40 text-rose-950'
                      : 'border-slate-300 text-slate-900'
                  }`}
                />
                {errors.positionsNeeded && (
                  <p className="text-xs text-rose-600 font-medium">
                    {errors.positionsNeeded}
                  </p>
                )}
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Кількість людей:
                  </label>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {workerCount} осіб
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  aria-label="Кількість працівників"
                  value={workerCount}
                  onChange={(e) => setWorkerCount(Number(e.target.value))}
                  disabled={status === 'optimistic_pending'}
                  className="w-full accent-blue-600 cursor-pointer mt-2"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Вимоги до кандидатів, умови, житло (до 500 симв.)
              </label>
              <textarea
                rows={2}
                maxLength={500}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                disabled={status === 'optimistic_pending'}
                placeholder="Опишіть специфіку роботи, графік, необхідність знання мов або сертифікатів..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden resize-none text-slate-900"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'optimistic_pending'}
                className="w-full py-3.5 px-5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {status === 'optimistic_pending' ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Відправка запиту...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Замовити підбір персоналу</span>
                  </>
                )}
              </button>
              <p className="text-[11px] text-slate-500 text-center mt-2">
                Перший пул кандидатів надаємо протягом 48 годин з моменту
                звернення.
              </p>
            </div>
          </form>
        )}
      </div>
    </ModalWrapper>
  );
};

export default EmployerInquiryModal;
