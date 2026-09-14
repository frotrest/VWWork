import React, { useState } from 'react';
import {
  FiX as X,
  FiCheckCircle as CheckCircle2,
  FiAlertCircle as AlertCircle,
  FiRefreshCw as RefreshCw,
  FiSend as Send,
  FiShield as ShieldCheck,
  FiBriefcase as Building2,
  FiMapPin as MapPin,
} from 'react-icons/fi';
import { submitApplicationApi } from '../../services/api.ts';
import type { ApplicationModalProps, ApplicationFormData } from '@app-types';
import ModalWrapper from './ModalWrapper';

const ApplicationModal = ({
  isOpen,
  onClose,
  vacancy,
  defaultCategory,
}: ApplicationModalProps) => {
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [errors, setErrors] = useState<{
    name?: string;
    contact?: string;
    message?: string;
  }>({});

  // Submission lifecycle: idle | optimistic_pending | success | error
  const [status, setStatus] = useState<
    'idle' | 'optimistic_pending' | 'success' | 'error'
  >('idle');
  const [successInfo, setSuccessInfo] = useState<{
    id: string;
    message: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Client validation
  const validate = (): boolean => {
    const newErrors: { name?: string; contact?: string; message?: string } = {};

    const trimmedName = name.trim();
    if (!trimmedName || trimmedName.length < 2) {
      newErrors.name = "Будь ласка, вкажіть ваше ім'я (мінімум 2 символи)";
    }

    const trimmedContact = contact.trim();
    const phoneRegex = /^(\+?[0-9\s\-()]{9,20})$/;
    const telegramRegex = /^@?[a-zA-Z0-9_]{4,32}$/;

    if (!trimmedContact) {
      newErrors.contact = 'Вкажіть номер телефону або нікнейм у Telegram';
    } else if (
      !phoneRegex.test(trimmedContact) &&
      !telegramRegex.test(trimmedContact)
    ) {
      newErrors.contact =
        'Некоректний формат. Введіть номер телефону (+380...) або Telegram (@username)';
    }

    if (message.length > 500) {
      newErrors.message = `Повідомлення занадто довге (${message.length}/500 символів)`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!validate()) {
      return;
    }

    const payload: ApplicationFormData = {
      vacancyId: vacancy?.id,
      vacancyTitle:
        vacancy?.title ||
        `Загальна анкета (${defaultCategory || 'Всі вакансії'})`,
      partnerSlug: vacancy?.partnerSlug,
      partnerName: vacancy?.partnerName,
      name: name.trim(),
      contact: contact.trim(),
      message: message.trim(),
    };

    setStatus('optimistic_pending');
    setErrorMessage(null);

    try {
      const result = await submitApplicationApi(payload);

      setSuccessInfo({
        id: result.applicationId,
        message: result.message,
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Не вдалося надіслати заявку через збій мережі. Спробуйте ще раз.'
      );
    }
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Безкоштовна заявка до VV Work</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            {vacancy ? 'Відгук на вакансію' : 'Швидка анкета пошукача'}
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-10 h-10 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6 overflow-y-auto space-y-5">
        {vacancy && (
          <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4 flex flex-col gap-1.5 text-sm">
            <span className="text-xs font-semibold text-blue-800">
              Обрана вакансія:
            </span>
            <div className="font-bold text-slate-900">{vacancy.title}</div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-1">
              <span className="flex items-center gap-1 font-medium">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                {vacancy.partnerName}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {vacancy.city}, {vacancy.country}
              </span>
              <span className="font-bold text-blue-700 bg-white px-2 py-0.5 rounded-md border border-blue-200">
                {vacancy.salary.amount} {vacancy.salary.currency}
              </span>
            </div>
          </div>
        )}

        {status === 'success' && successInfo ? (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-slate-900">
                Заявку успішно прийнято!
              </h3>
              <div className="text-xs font-bold font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block">
                Номер звернення: {successInfo.id}
              </div>
            </div>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              {successInfo.message}
            </p>
            <div className="pt-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 px-5 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
              >
                Зрозуміло, дякую
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {status === 'error' && errorMessage && (
              <div
                className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3 animate-in fade-in"
                role="alert"
              >
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div className="flex-1 space-y-2">
                  <p className="font-semibold text-rose-900">
                    Помилка відправлення форми
                  </p>
                  <p className="text-xs text-rose-700 leading-relaxed">
                    {errorMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleSubmit()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 text-white text-xs font-bold rounded-lg hover:bg-rose-700 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Спробувати надіслати ще раз
                  </button>
                </div>
              </div>
            )}

            {status === 'optimistic_pending' && (
              <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-800 text-xs flex items-center gap-2.5 animate-pulse">
                <RefreshCw className="w-4 h-4 animate-spin text-blue-600 shrink-0" />
                <span>
                  Оптимістична реєстрація заявки... Синхронізація з сервером
                  рекрутингу.
                </span>
              </div>
            )}

            {/* Full Name field */}
            <div className="space-y-1.5">
              <label
                htmlFor="app-name"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
              >
                Ваше ім'я та прізвище <span className="text-rose-500">*</span>
              </label>
              <input
                id="app-name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name)
                    setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                disabled={status === 'optimistic_pending'}
                placeholder="Олександр Коваленко"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-hidden ${
                  errors.name
                    ? 'border-rose-400 bg-rose-50/40 focus:ring-2 focus:ring-rose-200 text-rose-950'
                    : 'border-slate-300 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900'
                }`}
              />
              {errors.name && (
                <p className="text-xs font-medium text-rose-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="app-contact"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
              >
                Телефон або Telegram <span className="text-rose-500">*</span>
              </label>
              <input
                id="app-contact"
                type="text"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  if (errors.contact)
                    setErrors((prev) => ({ ...prev, contact: undefined }));
                }}
                disabled={status === 'optimistic_pending'}
                placeholder="+380 (98) 123-45-67 або @telegram_username"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-hidden ${
                  errors.contact
                    ? 'border-rose-400 bg-rose-50/40 focus:ring-2 focus:ring-rose-200 text-rose-950'
                    : 'border-slate-300 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900'
                }`}
              />
              {errors.contact ? (
                <p className="text-xs font-medium text-rose-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.contact}
                </p>
              ) : (
                <p className="text-[11px] text-slate-500">
                  Менеджер напише у месенджер або зателефонує у зручний час.
                </p>
              )}
            </div>

            {/* Message / Cover notes */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="app-message"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
                >
                  Повідомлення або коментар{' '}
                  <span className="text-slate-400 font-normal lowercase">
                    (опційно)
                  </span>
                </label>
                <span
                  className={`text-xs font-mono ${
                    message.length > 500
                      ? 'text-rose-600 font-bold'
                      : 'text-slate-400'
                  }`}
                >
                  {message.length} / 500
                </span>
              </div>
              <textarea
                id="app-message"
                rows={3}
                value={message}
                maxLength={500}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message && e.target.value.length <= 500) {
                    setErrors((prev) => ({ ...prev, message: undefined }));
                  }
                }}
                disabled={status === 'optimistic_pending'}
                placeholder="Вкажіть ваш досвід роботи, наявність біометричного паспорта або дату, коли готові до виїзду..."
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-hidden resize-none ${
                  errors.message
                    ? 'border-rose-400 bg-rose-50/40 focus:ring-2 focus:ring-rose-200'
                    : 'border-slate-300 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                }`}
              />
              {errors.message && (
                <p className="text-xs font-medium text-rose-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'optimistic_pending'}
                className="w-full py-3.5 px-5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.99] transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {status === 'optimistic_pending' ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Відправлення...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Відправити заявку на розгляд</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </ModalWrapper>
  );
};

export default ApplicationModal;
