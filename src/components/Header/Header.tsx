import type { NavLinkI, LayoutI } from '@app-types';
import { useNavigate, NavLink } from 'react-router-dom';
import {
  LuBriefcase,
  LuMenu,
  LuX,
  LuPhoneCall,
  LuChevronRight,
} from 'react-icons/lu';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const Header = ({ onOpenEmployerModal, onOpenQuickApplyModal }: LayoutI) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navigate = useNavigate();

  const navLinks: NavLinkI[] = [
    { label: 'Головна', path: '/' },
    { label: 'Знайти роботу', path: '/#vacancies' },
    { label: 'Партнери', path: '/#partners' },
    { label: 'Контакти', path: '/contacts' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/', { replace: true })}
              className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-hidden"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
                <LuBriefcase className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black tracking-tight text-slate-900 leading-none">
                    VV <span className="text-blue-600">Work</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/60 leading-none">
                    EU
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 tracking-tight mt-0.5">
                  Робота в Європі
                </span>
              </div>
            </button>
          </div>

          {/* Desktop навігація */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item, index) => {
              const isAnchor = item.path?.includes('#');

              if (isAnchor) {
                return (
                  <a
                    key={index}
                    href={item.path}
                    className="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <NavLink
                  to={item.path!}
                  key={index}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/70'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop праворуч CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEmployerModal}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 transition-all cursor-pointer"
            >
              Роботодавцям
            </button>

            <button
              onClick={() => {
                if (onOpenQuickApplyModal) {
                  onOpenQuickApplyModal();
                } else {
                  navigate('/#vacancies', { replace: true });
                }
              }}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-600/20 active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Подати анкету</span>
              <LuChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Кнопка мобільного меню */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-call-cta"
              onClick={() => navigate('/contacts', { replace: true })}
              className="p-2.5 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 focus:outline-hidden"
            >
              <LuPhoneCall className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 focus:outline-hidden"
            >
              {isMobileMenuOpen ? (
                <LuX className="w-6 h-6" />
              ) : (
                <LuMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Мобільне меню */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-0 w-full lg:hidden border-b border-slate-200/90 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-xl z-50"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((item, index) => {
                const isAnchor = item.path?.includes('#');

                if (isAnchor) {
                  return (
                    <a
                      key={index}
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-semibold text-left text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      <span>{item.label}</span>
                      <LuChevronRight className="w-4 h-4 text-slate-400" />
                    </a>
                  );
                }

                return (
                  <NavLink
                    to={item.path!}
                    key={index}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-semibold text-left transition-colors ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <LuChevronRight className="w-4 h-4 text-slate-400" />
                  </NavLink>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOpenQuickApplyModal) {
                    onOpenQuickApplyModal();
                  } else {
                    navigate('/#vacancies', { replace: true });
                  }
                }}
                className="w-full py-3 px-4 rounded-xl text-center font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md text-sm transition-all cursor-pointer"
              >
                Подати анкету шукача
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEmployerModal?.();
                }}
                className="w-full py-3 px-4 rounded-xl text-center font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 text-sm transition-all cursor-pointer"
              >
                Замовити підбір персоналу
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
