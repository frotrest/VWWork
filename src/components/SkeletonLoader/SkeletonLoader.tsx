import { motion } from 'motion/react';

export const VacancyCardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs animate-pulse space-y-4 w-full"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-2 flex-1 min-w-[200px]">
          <div className="h-6 bg-slate-200 rounded-md w-3/4"></div>
          <div className="h-4 bg-slate-100 rounded-md w-1/2"></div>
        </div>
        <div className="h-8 bg-slate-200 rounded-lg w-32 shrink-0"></div>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        <div className="h-6 bg-slate-100 rounded-full w-24"></div>
        <div className="h-6 bg-slate-100 rounded-full w-28"></div>
        <div className="h-6 bg-slate-100 rounded-full w-36"></div>
      </div>

      <div className="h-12 bg-slate-100/70 rounded-lg w-full"></div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <div className="h-4 bg-slate-100 rounded w-28"></div>
        <div className="h-10 bg-slate-200 rounded-xl w-36"></div>
      </div>
    </motion.div>
  );
};

export const PartnerHeaderSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm animate-pulse w-full"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-slate-200 shrink-0"></div>
        <div className="flex-1 space-y-3 w-full">
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-8 bg-slate-200 rounded-lg w-full sm:w-64"></div>
            <div className="h-6 bg-slate-100 rounded-full w-24"></div>
          </div>
          <div className="h-5 bg-slate-100 rounded-md w-3/4"></div>
          <div className="flex flex-wrap gap-4 pt-1">
            <div className="h-4 bg-slate-200 rounded w-32"></div>
            <div className="h-4 bg-slate-200 rounded w-28"></div>
            <div className="h-4 bg-slate-200 rounded w-36"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const PartnerCardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs animate-pulse flex flex-col justify-between h-full min-h-[280px] w-full"
    >
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-slate-200 rounded-xl shrink-0"></div>
          <div className="space-y-2 flex-1 min-w-0">
            <div className="h-5 bg-slate-200 rounded-md w-3/4"></div>
            <div className="h-3.5 bg-slate-100 rounded-md w-1/2"></div>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="h-3.5 bg-slate-100 rounded w-full"></div>
          <div className="h-3.5 bg-slate-100 rounded w-5/6"></div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="h-5 bg-slate-200 rounded-md w-24"></div>
        <div className="h-9 bg-slate-200 rounded-lg w-28"></div>
      </div>
    </motion.div>
  );
};
