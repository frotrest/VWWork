import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi';
import type { ErrorRetryBlockProps } from '@app-types';
import { motion } from 'motion/react';

const ErrorRetryBlock = ({
  title = 'Не вдалося завантажити дані',
  message = 'Сталася помилка з’єднання або сервер тимчасово недоступний (модельована помилка API 1 з 5).',
  onRetry,
  isRetrying = false,
  className = '',
}: ErrorRetryBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`rounded-2xl border border-rose-200 bg-rose-50/70 p-6 md:p-8 text-center max-w-xl mx-auto shadow-xs ${className}`}
    >
      <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 mx-auto flex items-center justify-center mb-3">
        <FiAlertTriangle className="w-6 h-6" />
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-600 mb-5 leading-relaxed">{message}</p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          type="button"
          onClick={onRetry}
          disabled={isRetrying}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm disabled:opacity-70 disabled:pointer-events-none cursor-pointer"
        >
          <FiRefreshCw
            className={`w-4 h-4 ${isRetrying ? 'animate-spin' : ''}`}
          />
          {isRetrying ? 'Оновлення...' : 'Спробувати знову'}
        </button>
      </div>
    </motion.div>
  );
};

export default ErrorRetryBlock;
