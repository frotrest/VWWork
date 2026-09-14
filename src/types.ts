import type { IconType } from 'react-icons';

export type JobCategory =
  | 'Всі категорії'
  | 'Будівництво'
  | 'Виробництво'
  | 'Логістика'
  | 'Готельно-ресторанна сфера'
  | 'IT'
  | 'Водії'
  | 'Медицина & Догляд'
  | 'Сільське господарство'
  | 'Інші';

export interface Vacancy {
  id: string;
  partnerSlug: string;
  partnerName: string;
  title: string;
  category: JobCategory;
  country: string;
  city: string;
  countryCode: string;
  salary: {
    amount: string;
    currency: 'EUR' | 'PLN' | 'CZK' | 'USD';
    period: 'місяць' | 'година';
    netOrGross: 'нетто' | 'брутто';
  };
  employmentType:
    'Повна зайнятість' | 'Змінний графік' | 'Сезонна робота' | 'Вахта';
  housingProvided: boolean;
  housingCost?: string;
  experienceRequired:
    'Без досвіду' | 'Від 1 року' | 'Від 2 років' | 'Досвідчений фахівець';
  languagesRequired: string[];
  description: string;
  responsibilities: string[];
  benefits: string[];
  publishedAt: string;
  urgent?: boolean;
}

export interface VacancyCardProps {
  vacancy: Vacancy;
  onApply: (vacancy: Vacancy) => void;
}

export interface Partner {
  slug: string;
  name: string;
  legalName: string;
  logoUrl: string;
  industry: string;
  verified: boolean;
  rating: number;
  reviewsCount: number;
  country: string;
  city: string;
  countryCode: string;
  establishedYear: number;
  totalHired: number;
  activeVacanciesCount: number;
  tagline: string;
  description: string;
  highlights: string[];
  contacts: {
    website?: string;
    email?: string;
    phone?: string;
  };
}

export interface EmployeeProfileHeaderProps {
  partner: Partner;
}

export interface ApplicationFormData {
  vacancyId?: string;
  vacancyTitle?: string;
  partnerSlug?: string;
  partnerName?: string;
  name: string;
  contact: string;
  message?: string;
}

export interface EmployerInquiryData {
  companyName: string;
  contactPerson: string;
  contact: string;
  positionsNeeded: string;
  workerCount: number;
  country: string;
  notes?: string;
}

export interface ContactMessageData {
  name: string;
  contact: string;
  subject: string;
  message: string;
}

export interface LayoutI {
  onOpenEmployerModal?: () => void;
  onOpenQuickApplyModal?: () => void;
}

export interface NavLinkI {
  label: string;
  path?: string;
  action?: () => void;
}

export type FooterLinkI = Omit<NavLinkI, 'action' | 'path'> & {
  path: string;
};

export interface EmployerLinkI {
  label: string;
  path?: string;
  onClick?: () => void;
  isButton?: boolean;
}

export interface ContactItemI {
  icon: IconType;
  text: string;
  href?: string;
}

export interface SocialLinkI {
  href: string;
  icon: IconType;
  label: string;
}

export interface LegalLinkI {
  label: string;
  path: string;
}

export interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  vacancy: Vacancy | null;
  defaultCategory?: string;
}

export type EmployerInquiryModalProps = Pick<
  ApplicationModalProps,
  'isOpen' | 'onClose'
>;

export interface HeroSectionProps {
  heroSearchQuery: string;
  setHeroSearchQuery: (query: string) => void;
  setSelectedCategory: (category: JobCategory) => void;
  onSearchClick: () => void;
}

export interface CategoriesSectionProps {
  selectedCategory: JobCategory;
  onSelectCategory: (category: JobCategory) => void;
}

export interface EmployerPromoSectionProps {
  onOpenEmployerModal: () => void;
}

export interface ErrorRetryBlockProps {
  title?: string;
  message?: string;
  onRetry: () => void;
  isRetrying?: boolean;
  className?: string;
}

export interface VacanciesSectionProps {
  vacancies: Vacancy[];
  isLoading: boolean;
  error: string | null;
  isRetrying: boolean;
  selectedCategory: JobCategory;
  onRetry: () => void;
  onResetFilters: () => void;
  onSelectVacancyForApply: (vacancy: Vacancy) => void;
}

export interface Office {
  city: string;
  role: string;
  address: string;
  phone: string;
  mobile: string;
  email: string;
  workingHours: string;
  badge: string;
}

export interface OfficeCardProps {
  office: Office;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PartnersSectionProps {
  partners: Partner[];
  isLoading: boolean;
  error: string | null;
  isRetrying: boolean;
  onRetry: () => void;
  onOpenEmployerModal: () => void;
}

export interface PartnerPageProps {
  slug: string;
  onSelectVacancyForApply: (vacancy: Vacancy) => void;
}

export interface VacancyFiltersBarProps {
  searchInput: string;
  setSearchInput: (val: string) => void;
  selectedCategory: JobCategory;
  setSelectedCategory: (cat: JobCategory) => void;
  partnerCategories: JobCategory[];
}

export type ModifyType<
  T extends object,
  K extends keyof T,
  Mode extends 'optional' | 'readonly' | 'required',
> = Mode extends 'optional'
  ? Omit<T, K> & Partial<Pick<T, K>>
  : Mode extends 'readonly'
    ? Omit<T, K> & Readonly<Pick<T, K>>
    : Omit<T, K> & Required<Pick<T, K>>;
