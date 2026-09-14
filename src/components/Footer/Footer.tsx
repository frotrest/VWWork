import type {
  FooterLinkI,
  LayoutI,
  EmployerLinkI,
  ContactItemI,
  SocialLinkI,
  LegalLinkI,
} from '@app-types';
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuExternalLink,
  LuSend,
  LuBriefcase,
} from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Footer = ({ onOpenEmployerModal }: LayoutI) => {
  const footerLinks: FooterLinkI[] = [
    { label: 'Каталог усіх вакансій', path: '/#vacancies' },
    { label: 'Робота в Польщі', path: '/partners/nordic-logistics-as' },
    { label: 'Робота в Німеччині', path: '/partners/eurobuild-group' },
    { label: 'Вакансії з житлом', path: '/partners/baltic-hospitality-group' },
    { label: 'Часті запитання (FAQ)', path: '/contacts' },
  ];

  const employerLinks: EmployerLinkI[] = [
    {
      label: 'Подати заявку на персонал',
      onClick: onOpenEmployerModal,
      isButton: true,
    },
    { label: 'Програма партнерства', path: '/#partners' },
    { label: 'Юридичний супровід', path: '/contacts' },
    { label: 'Масовий підбір працівників', path: '/contacts' },
  ];

  const contactsData: ContactItemI[] = [
    { icon: LuMapPin, text: 'Київ: вул. Велика Васильківська, 72' },
    { icon: LuMapPin, text: 'Варшава: Al. Jerozolimskie 123' },
    { icon: LuPhone, text: '+38 (044) 390-00-00', href: 'tel:+380443900000' },
    {
      icon: LuMail,
      text: 'support@vv-work.eu',
      href: 'mailto:support@vv-work.eu',
    },
  ];

  const socialLinks: SocialLinkI[] = [
    { href: 'https://t.me', icon: LuSend, label: 'Telegram' },
    { href: 'mailto:contact@vv-work.eu', icon: LuMail, label: 'Email' },
    { href: 'tel:+380443900000', icon: LuPhone, label: 'Phone' },
  ];

  const legalLinks: LegalLinkI[] = [
    { label: 'Політика конфіденційності', path: '/contacts' },
    { label: 'Умови використання платформи', path: '/contacts' },
    { label: 'Безпека кандидатів', path: '/contacts' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Main container using Flexbox */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Mission */}
          <div className="lg:w-2/5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                <LuBriefcase className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                VV <span className="text-blue-500">Work</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Провідна українсько-європейська платформа прямого
              працевлаштування. Ми об’єднуємо перевірених роботодавців ЄС із
              вмотивованими кандидатами з України.
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-400">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={
                      social.href.startsWith('http') ? '_blank' : undefined
                    }
                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Flex container for navigation and contacts columns */}
          <div className="flex flex-wrap sm:flex-nowrap justify-between gap-8 lg:w-3/5">
            {/* Col 2: Для кандидатів */}
            <div className="space-y-3 w-full sm:w-auto">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Для кандидатів
              </h4>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path || '#'}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Для роботодавців */}
            <div className="space-y-3 w-full sm:w-auto">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Для роботодавців
              </h4>
              <ul className="space-y-2.5 text-sm">
                {employerLinks.map((item, index) => (
                  <li key={index}>
                    {item.isButton ? (
                      <button
                        onClick={item.onClick}
                        className="text-blue-400 font-medium hover:text-blue-300 transition-colors cursor-pointer text-left"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.path || '#'}
                        className="hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Контакти & Офіси */}
            <div className="space-y-3 w-full sm:w-auto">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Контакти
              </h4>
              <ul className="space-y-2.5 text-sm">
                {contactsData.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-slate-400"
                    >
                      <IconComponent className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="hover:text-white transition-colors"
                        >
                          {contact.text}
                        </a>
                      ) : (
                        <span>{contact.text}</span>
                      )}
                    </li>
                  );
                })}
                <li className="pt-1">
                  <Link
                    to="/contacts"
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                  >
                    Всі контакти та офіси
                    <LuExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} VV Work EU Inc. Всі права захищено.
            Безкоштовне працевлаштування для кандидатів.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="hover:text-slate-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
