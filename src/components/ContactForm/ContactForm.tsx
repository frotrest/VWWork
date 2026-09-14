import React, { useState } from 'react';
import {
  FaCommentDots,
  FaCheckCircle,
  FaExclamationCircle,
  FaSyncAlt,
  FaPaperPlane,
} from 'react-icons/fa';
import type { ContactMessageData } from '@app-types';
import { submitContactMessageApi } from '../../services/api';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [subject, setSubject] = useState<string>(
    'Консультація щодо працевлаштування'
  );
  const [message, setMessage] = useState<string>('');

  const [errors, setErrors] = useState<{
    name?: string;
    contact?: string;
    message?: string;
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
    const newErrors: { name?: string; contact?: string; message?: string } = {};

    const trimmedName = name.trim();
    if (!trimmedName || trimmedName.length < 2) {
      newErrors.name = 'Вкажіть ваше ім’я (мінімум 2 символи)';
    }

    const trimmedContact = contact.trim();
    const phoneRegex = /^(\+?[0-9\s\-()]{9,20})$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telegramRegex = /^@?[a-zA-Z0-9_]{4,32}$/;

    if (!trimmedContact) {
      newErrors.contact = 'Вкажіть телефон, Telegram або email';
    } else if (
      !phoneRegex.test(trimmedContact) &&
      !emailRegex.test(trimmedContact) &&
      !telegramRegex.test(trimmedContact)
    ) {
      newErrors.contact =
        'Некоректний формат контакту (+380..., @telegram або email)';
    }

    if (message.length > 500) {
      newErrors.message = `Повідомлення задовге (${message.length}/500)`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    const payload: ContactMessageData = {
      name: name.trim(),
      contact: contact.trim(),
      subject,
      message: message.trim() || 'Запит на консультацію',
    };

    setStatus('optimistic_pending');
    setErrorMessage(null);

    try {
      const result = await submitContactMessageApi(payload);
      setSuccessInfo({
        id: result.ticketId,
        message: result.message,
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Помилка надсилання звернення. Ваші дані збережені.'
      );
    }
  };

  const handleResetForm = () => {
    setName('');
    setContact('');
    setMessage('');
    setStatus('idle');
    setSuccessInfo(null);
    setErrorMessage(null);
    setErrors({});
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm space-y-6">
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
          <FaCommentDots className="w-4 h-4" />
          <span>Форма зворотного зв’язку</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
          Напишіть нам повідомлення
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Маєте питання щодо виїзду, документів або умов вакансій? Залиште
          контакти — куратор зв’яжеться з вами.
        </p>
      </div>

      {status === 'success' && successInfo ? (
        <div className="p-8 text-center space-y-4 bg-emerald-50/50 rounded-2xl border border-emerald-200">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
            <FaCheckCircle className="w-9 h-9" />
          </div>
          <h3 className="text-xl font-black text-slate-900">
            Повідомлення надіслано!
          </h3>
          <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full inline-block">
            Номер запиту: {successInfo.id}
          </span>
          <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            {successInfo.message}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={handleResetForm}
              className="px-6 py-2.5 rounded-xl font-bold text-xs bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Надіслати ще одне повідомлення
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {status === 'error' && errorMessage && (
            <div
              className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-3"
              role="alert"
            >
              <FaExclamationCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="flex-1 space-y-1.5">
                <p className="font-bold text-rose-900">{errorMessage}</p>
                <button
                  type="button"
                  onClick={() => handleSubmit()}
                  className="inline-flex items-center gap-1 font-bold text-rose-700 underline hover:text-rose-900 cursor-pointer"
                >
                  <FaSyncAlt className="w-3 h-3" />
                  Повторити відправлення форми
                </button>
              </div>
            </div>
          )}

          {status === 'optimistic_pending' && (
            <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-800 text-xs flex items-center gap-2.5 animate-pulse">
              <FaSyncAlt className="w-4 h-4 animate-spin text-blue-600 shrink-0" />
              <span>Відправка запиту на сервер... Ваші дані обробляються.</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 space-y-1.5">
              <label
                htmlFor="contact-name"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
              >
                Ваше ім'я <span className="text-rose-500">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name)
                    setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                placeholder="Сергій Мельник"
                disabled={status === 'optimistic_pending'}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-hidden ${
                  errors.name
                    ? 'border-rose-400 bg-rose-50/40 text-rose-950'
                    : 'border-slate-300 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                }`}
              />
              {errors.name && (
                <p className="text-xs font-medium text-rose-600 flex items-center gap-1">
                  <FaExclamationCircle className="w-3 h-3" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="flex-1 space-y-1.5">
              <label
                htmlFor="contact-info"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
              >
                Телефон або Telegram <span className="text-rose-500">*</span>
              </label>
              <input
                id="contact-info"
                type="text"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  if (errors.contact)
                    setErrors((prev) => ({ ...prev, contact: undefined }));
                }}
                placeholder="+380... або @username"
                disabled={status === 'optimistic_pending'}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-hidden ${
                  errors.contact
                    ? 'border-rose-400 bg-rose-50/40 text-rose-950'
                    : 'border-slate-300 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                }`}
              />
              {errors.contact && (
                <p className="text-xs font-medium text-rose-600 flex items-center gap-1">
                  <FaExclamationCircle className="w-3 h-3" />
                  {errors.contact}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contact-subject"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
            >
              Тема звернення
            </label>
            <select
              id="contact-subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-blue-600 bg-white"
            >
              <option value="Консультація щодо працевлаштування">
                Консультація щодо працевлаштування
              </option>
              <option value="Питання щодо візи та легалізації в ЄС">
                Питання щодо візи та легалізації в ЄС
              </option>
              <option value="Співпраця для роботодавців (B2B)">
                Співпраця для роботодавців (B2B)
              </option>
              <option value="Умови проживання та трансфер">
                Умови проживання та трансфер
              </option>
              <option value="Інше запитання">Інше запитання</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="contact-message"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
              >
                Повідомлення{' '}
                <span className="text-slate-400 font-normal lowercase">
                  (опційно)
                </span>
              </label>
              <span
                className={`text-xs font-mono ${message.length > 500 ? 'text-rose-600 font-bold' : 'text-slate-400'}`}
              >
                {message.length} / 500
              </span>
            </div>
            <textarea
              id="contact-message"
              rows={3}
              maxLength={550}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message && e.target.value.length <= 500) {
                  setErrors((prev) => ({ ...prev, message: undefined }));
                }
              }}
              disabled={status === 'optimistic_pending'}
              placeholder="Опишіть ваше питання або бажані умови роботи..."
              className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-hidden resize-none ${
                errors.message
                  ? 'border-rose-400 bg-rose-50/40'
                  : 'border-slate-300 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
              }`}
            />
            {errors.message && (
              <p className="text-xs font-medium text-rose-600 flex items-center gap-1">
                <FaExclamationCircle className="w-3 h-3" />
                {errors.message}
              </p>
            )}
          </div>

          <button
            id="contact-submit-btn"
            type="submit"
            disabled={status === 'optimistic_pending'}
            className="w-full py-3.5 px-5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
          >
            {status === 'optimistic_pending' ? (
              <>
                <FaSyncAlt className="w-4 h-4 animate-spin" />
                <span>Відправлення звернення...</span>
              </>
            ) : (
              <>
                <FaPaperPlane className="w-4 h-4" />
                <span>Надіслати повідомлення</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
