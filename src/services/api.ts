import type {
  Partner,
  Vacancy,
  JobCategory,
  ApplicationFormData,
  EmployerInquiryData,
  ContactMessageData,
} from '@app-types';

// mock-data

export const MOCK_PARTNERS: Partner[] = [
  {
    slug: 'nordic-logistics-as',
    name: 'Nordic Logistics AS',
    legalName: 'Nordic Logistics AS Sp. z o.o.',
    logoUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=160&auto=format&fit=crop&q=80',
    industry: 'Логістика та складське господарство',
    verified: true,
    rating: 4.9,
    reviewsCount: 142,
    country: 'Польща / Швеція',
    city: 'Варшава / Гетеборг',
    countryCode: 'PL',
    establishedYear: 2014,
    totalHired: 1240,
    activeVacanciesCount: 6,
    tagline:
      'Провідний скандинавський логістичний оператор у Центральній Європі',
    description:
      'Nordic Logistics AS — міжнародна логістична корпорація з хабами у Варшаві, Познані, Вроцлаві та Гетеборзі. Працевлаштовує водіїв категорії С/Е, операторів навантажувачів UDT та комплектувальників товарів. Надає сучасне комфортабельне житло, повний соціальний пакет та офіційні контракти згідно з законодавством ЄС.',
    highlights: [
      'Безкоштовне житло європейського стандарту',
      'Офіційне страхування ZUS та карта побиту',
      'Курси польської та англійської мов за рахунок компанії',
      'Бонуси за продуктивність до 400 € / місяць',
    ],
    contacts: {
      website: 'https://nordic-logistics.eu',
      email: 'recruiting@nordic-logistics.eu',
      phone: '+48 22 890 34 11',
    },
  },
  {
    slug: 'eurobuild-group',
    name: 'EuroBuild Construction GmbH',
    legalName: 'EuroBuild Bau & Projektmanagement GmbH',
    logoUrl:
      'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?w=160&auto=format&fit=crop&q=80',
    industry: 'Будівництво та інженерія',
    verified: true,
    rating: 4.8,
    reviewsCount: 98,
    country: 'Німеччина',
    city: 'Франкфурт / Мюнхен',
    countryCode: 'DE',
    establishedYear: 2008,
    totalHired: 890,
    activeVacanciesCount: 5,
    tagline:
      'Генеральний підрядник масштабних інфраструктурних проєктів Німеччини',
    description:
      'EuroBuild Construction GmbH — німецький будівельний холдинг, що зводить комерційні об’єкти, житлові комплекси та автодороги у Франкфурті, Мюнхені та Берліні. Підтримуємо легалізацію через німецькі візи, реєстрацію в AOK та сертифікацію фахівців.',
    highlights: [
      'Ставки від 16.50 € / год брутто',
      'Допомога у відкритті параграфа 24 або візи фахівця',
      'Спецодяг та якісний професійний інструмент Hilti / Bosch',
      'Трансфер від житла до будівельного майданчика',
    ],
    contacts: {
      website: 'https://eurobuild-construction.de',
      email: 'karriere@eurobuild.de',
      phone: '+49 69 711 90 20',
    },
  },
  {
    slug: 'polpro-manufacturing',
    name: 'PolPro Manufacturing',
    legalName: 'PolPro Precision Components Sp. z o.o.',
    logoUrl:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=160&auto=format&fit=crop&q=80',
    industry: 'Виробництво та автопромисловість',
    verified: true,
    rating: 4.7,
    reviewsCount: 167,
    country: 'Польща',
    city: 'Катовіце / Гливиці',
    countryCode: 'PL',
    establishedYear: 2011,
    totalHired: 1540,
    activeVacanciesCount: 4,
    tagline: 'Виробник компонентів для європейського автопрому',
    description:
      'Сучасне автоматизоване підприємство у промисловому серці Польщі. Виготовляє кабельні системи, пластикові елементи та компоненти для провідних автовиробників (Volkswagen, Stellantis, BMW). Чисті, кондиціоновані цехи європейського рівня.',
    highlights: [
      'Робота для чоловіків, жінок та сімейних пар',
      'Дотації на гарячі комплексні обіди в заводській їдальні',
      'Оплачувані відпустки та лікарняні з першого дня',
      'Можливість переходу на контракт безпосередньо з заводом',
    ],
    contacts: {
      website: 'https://polpro-mfg.pl',
      email: 'hr@polpro-mfg.pl',
      phone: '+48 32 440 18 90',
    },
  },
  {
    slug: 'baltic-hospitality-group',
    name: 'Baltic Hospitality Group',
    legalName: 'Baltic Resorts & Hotels Ltd',
    logoUrl:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=160&auto=format&fit=crop&q=80',
    industry: 'Готельно-ресторанна сфера',
    verified: true,
    rating: 4.9,
    reviewsCount: 84,
    country: 'Литва / Латвія',
    city: 'Вільнюс / Юрмала',
    countryCode: 'LT',
    establishedYear: 2016,
    totalHired: 470,
    activeVacanciesCount: 4,
    tagline:
      'Мережа преміальних 4* та 5* готелів на узбережжі Балтійського моря',
    description:
      'Baltic Hospitality Group об’єднує 9 готельних комплексів та ресторанів авторської кухні у країнах Балтії. Шукаємо кухарів, помічників шефа, покоївок, барменів та адміністраторів з гідною оплатою праці та комфортним проживанням.',
    highlights: [
      'Безкоштовне проживання на території готельного комплексу',
      'Триразове харчування для персоналу',
      'Частина чайових від загального фонду сервісу',
      'Дружній міжнародний колектив та мовна практика',
    ],
    contacts: {
      website: 'https://baltichospitality.eu',
      email: 'jobs@baltichospitality.eu',
      phone: '+370 5 204 88 12',
    },
  },
  {
    slug: 'trans-europe-fleet',
    name: 'TransEurope Fleet BV',
    legalName: 'TransEurope International Transport B.V.',
    logoUrl:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=160&auto=format&fit=crop&q=80',
    industry: 'Міжнародні перевезення & Водії',
    verified: true,
    rating: 4.8,
    reviewsCount: 112,
    country: 'Нідерланди / Чехія',
    city: 'Роттердам / Прага',
    countryCode: 'NL',
    establishedYear: 2012,
    totalHired: 730,
    activeVacanciesCount: 3,
    tagline: 'Парк із понад 400 тягачів Euro-6 для перевезень всією Європою',
    description:
      'TransEurope Fleet спеціалізується на тентованих та рефрижераторних перевезеннях по країнах Бенілюксу, Франції, Німеччині та Австрії. Нові тягачі Mercedes Actros, Volvo FH, DAF XG (2022-2024 років) з кондиціонерами стоянки та ретардерами.',
    highlights: [
      'Оплата 2,600 – 3,200 € / місяць чистими на картку',
      'Гнучка каденція: 6/3, 8/4 або 4/2 тижні',
      'Оформлення коду 95, картки водія та голландських/чеських документів',
      'Цілодобова україномовна диспетчерська підтримка',
    ],
    contacts: {
      website: 'https://transeurope-fleet.com',
      email: 'dispatch@transeurope-fleet.com',
      phone: '+31 10 499 78 50',
    },
  },
  {
    slug: 'tech-nord-solutions',
    name: 'TechNord Engineering',
    legalName: 'TechNord Industrial Automation s.r.o.',
    logoUrl:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=160&auto=format&fit=crop&q=80',
    industry: 'IT, Електроніка та Інженерія',
    verified: true,
    rating: 4.9,
    reviewsCount: 65,
    country: 'Чехія',
    city: 'Брно / Острава',
    countryCode: 'CZ',
    establishedYear: 2017,
    totalHired: 320,
    activeVacanciesCount: 3,
    tagline: 'Інноваційні рішення промислової автоматизації та розробка ПЗ',
    description:
      'TechNord розробляє роботизовані лінії та системи диспетчеризації для заводів Центральної Європи. Шукаємо інженерів-електронників, сервісних техніків систем АСУТП, тестувальників та розробників вбудованих систем.',
    highlights: [
      'Гідні зарплати від 2,200 € до 3,500 € нетто',
      'Релокаційний пакет: оплата оренди житла на перші 3 місяці',
      'Сучасна лабораторія та доступ до новітнього обладнання',
      'Офіційний робочий договір HPP на необмежений термін',
    ],
    contacts: {
      website: 'https://technord.cz',
      email: 'recruitment@technord.cz',
      phone: '+420 530 500 120',
    },
  },
];

// Rich Vacancies database tied to partners
export const MOCK_VACANCIES: Vacancy[] = [
  {
    id: 'vac-nl-01',
    partnerSlug: 'nordic-logistics-as',
    partnerName: 'Nordic Logistics AS',
    title: 'Оператор навантажувача UDT (високий склад)',
    category: 'Логістика',
    country: 'Польща',
    city: 'Варшава (Блоне)',
    countryCode: 'PL',
    salary: {
      amount: '5,500 – 6,800',
      currency: 'PLN',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: 'Безкоштовно (2 особи в кімнаті, Wi-Fi, побутова техніка)',
    experienceRequired: 'Від 1 року',
    languagesRequired: ['Українська', 'Польська (базовий рівень вітається)'],
    description:
      'Робота у сучасному логістичному комплексі класу А+. Управління навантажувачем типу Reach Truck (висота підйому до 10м), переміщення палет з готовою продукцією, робота зі сканером штрих-кодів.',
    responsibilities: [
      'Управління електронавантажувачем на складі стелажного зберігання',
      'Сканування палет та занесення даних у систему WMS',
      'Перевірка цілісності пакування перед завантаженням',
      'Дотримання правил техніки безпеки на території терміналу',
    ],
    benefits: [
      'Безкоштовне сучасне житло біля роботи',
      'Офіційне працевлаштування (Umowa o pracę)',
      'Виготовлення польських сертифікатів UDT за рахунок роботодавця',
      'Премії за відсутність рекламацій та швидкість',
    ],
    publishedAt: '2 дні тому',
    urgent: true,
  },
  {
    id: 'vac-nl-02',
    partnerSlug: 'nordic-logistics-as',
    partnerName: 'Nordic Logistics AS',
    title: 'Комплектувальник замовлень зі сканером (Pick by Voice)',
    category: 'Логістика',
    country: 'Польща',
    city: 'Познань',
    countryCode: 'PL',
    salary: {
      amount: '4,800 – 5,900',
      currency: 'PLN',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Змінний графік',
    housingProvided: true,
    housingCost: '150 PLN / міс (комунальні витрати)',
    experienceRequired: 'Без досвіду',
    languagesRequired: ['Українська'],
    description:
      'Збір інтернет-замовлень відомих європейських брендів одягу та косметики. Робота не вимагає фізичних надзусиль, підходить для чоловіків, жінок та сімейних пар.',
    responsibilities: [
      'Комплектація товарів за голосовими підказками або ТСД-терміналом',
      'Пакування та стікерування посилок',
      'Підготовка відправлень до завантаження на кур’єрські лінії',
    ],
    benefits: [
      'Навчання з нуля за 2 дні з персональним наставником',
      'Можливість брати додаткові години (надгодини +50%)',
      'Аванси щотижня протягом першого місяця',
    ],
    publishedAt: 'Сьогодні',
    urgent: true,
  },
  {
    id: 'vac-nl-03',
    partnerSlug: 'nordic-logistics-as',
    partnerName: 'Nordic Logistics AS',
    title: 'Водій-експедитор мікроавтобуса (категорія B)',
    category: 'Водії',
    country: 'Швеція / Польща',
    city: 'Гетеборг',
    countryCode: 'SE',
    salary: {
      amount: '2,200 – 2,600',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: 'Надається роботодавцем',
    experienceRequired: 'Від 2 років',
    languagesRequired: ['Українська', 'Англійська (базова)'],
    description:
      'Доставка B2B-вантажів та медикаментів між відділеннями в регіоні Західної Швеції на авто Mercedes Sprinter (2023 р.).',
    responsibilities: [
      'Керування новим бусом (до 3.5 т)',
      'Експедирування та передача вантажу за накладними',
      'Контроль технічного стану автомобіля',
    ],
    benefits: [
      'Шведський контракт A1',
      'Оплата палива та проживання в апартаментах',
      'Добові (diets)',
    ],
    publishedAt: '3 дні тому',
  },
  {
    id: 'vac-nl-04',
    partnerSlug: 'nordic-logistics-as',
    partnerName: 'Nordic Logistics AS',
    title: 'Бригадир зміни логістичного хабу',
    category: 'Логістика',
    country: 'Польща',
    city: 'Варшава',
    countryCode: 'PL',
    salary: {
      amount: '6,800 – 8,200',
      currency: 'PLN',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: false,
    experienceRequired: 'Від 2 років',
    languagesRequired: ['Українська', 'Польська (B2)'],
    description:
      'Координація роботи зміни комплектувальників (30-40 осіб), контроль виконання KPI, розподіл завдань та комунікація з менеджментом.',
    responsibilities: [
      'Організація роботи складської зміни',
      'Інструктаж нових працівників з ТБ та регламентів',
      'Звітність у системі SAP WMS',
    ],
    benefits: [
      'Службове авто або компенсація палива',
      'Медичний пакет Luxmed',
      'Кар’єрне зростання',
    ],
    publishedAt: '1 тиждень тому',
  },
  {
    id: 'vac-nl-05',
    partnerSlug: 'nordic-logistics-as',
    partnerName: 'Nordic Logistics AS',
    title: 'Диспетчер міжнародних перевезень (логіст)',
    category: 'IT',
    country: 'Польща',
    city: 'Вроцлав',
    countryCode: 'PL',
    salary: {
      amount: '6,000 – 7,500',
      currency: 'PLN',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: false,
    experienceRequired: 'Від 1 року',
    languagesRequired: ['Українська', 'Польська', 'Англійська'],
    description:
      'Планування маршрутів європейського автопарку, робота на біржах Trans.eu та TimoCom.',
    responsibilities: [
      'Планування завантажень авто',
      'Контроль часу роботи водіїв за тахографом',
    ],
    benefits: ['Гібридний графік роботи', 'Премії від прибутку рейсів'],
    publishedAt: '5 днів тому',
  },
  {
    id: 'vac-nl-06',
    partnerSlug: 'nordic-logistics-as',
    partnerName: 'Nordic Logistics AS',
    title: 'Сортувальник поштових відправлень (нічні зміни)',
    category: 'Логістика',
    country: 'Польща',
    city: 'Лодзь',
    countryCode: 'PL',
    salary: {
      amount: '4,600 – 5,400',
      currency: 'PLN',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Змінний графік',
    housingProvided: true,
    housingCost: 'Безкоштовно',
    experienceRequired: 'Без досвіду',
    languagesRequired: ['Українська'],
    description:
      'Сортування посилок на автоматизованій конвеєрній стрічці. Доплата за нічні години +20%.',
    responsibilities: [
      'Розподіл пакунків за поштовими кодами',
      'Завантаження рол-контейнерів',
    ],
    benefits: [
      'Легка робота без важких навантажень',
      'Безкоштовна форма та взуття',
    ],
    publishedAt: 'Вчора',
  },

  {
    id: 'vac-eb-01',
    partnerSlug: 'eurobuild-group',
    partnerName: 'EuroBuild Construction GmbH',
    title: 'Арматурник-бетоняр на зведення мостів та тунелів',
    category: 'Будівництво',
    country: 'Німеччина',
    city: 'Франкфурт-на-Майні',
    countryCode: 'DE',
    salary: {
      amount: '2,700 – 3,400',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: '250 € / міс (готель-пансіон із кухнею)',
    experienceRequired: 'Від 1 року',
    languagesRequired: ['Українська', 'Німецька (бажано, але не обов’язково)'],
    description:
      'Будівництво інфраструктурних транспортних розв’язок у федеральній землі Гессен. В’язка арматури за кресленнями, монтаж опалубки Peri/Doka, прийом та вібрування бетонної суміші.',
    responsibilities: [
      'В’язання арматурних каркасів гачком або пістолетом',
      'Монтаж щитової опалубки',
      'Заливання та віброущільнення бетону',
    ],
    benefits: [
      'Офіційний німецький договір, внески в SOKA-BAU',
      'Спецодяг 3-го класу захисту та взуття S3',
      'Можливість щомісячних виплат або авансів',
    ],
    publishedAt: '3 дні тому',
    urgent: true,
  },
  {
    id: 'vac-eb-02',
    partnerSlug: 'eurobuild-group',
    partnerName: 'EuroBuild Construction GmbH',
    title: 'Монтажник гіпсокартонних систем та внутрішнього оздоблення',
    category: 'Будівництво',
    country: 'Німеччина',
    city: 'Мюнхен',
    countryCode: 'DE',
    salary: {
      amount: '2,600 – 3,200',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: '300 € / міс (комфортна квартира)',
    experienceRequired: 'Від 2 років',
    languagesRequired: ['Українська'],
    description:
      'Внутрішні оздоблювальні роботи на нових житлових кварталах та офісних центрах. Монтаж профілів CW/UW, укладання мінеральної вати, обшивка гіпсокартоном Knauf.',
    responsibilities: [
      'Монтаж перегородок та підвісних стель з гіпсокартону',
      'Звукоізоляція та пароізоляція',
      'Базове шпаклювання стиків Q2/Q3',
    ],
    benefits: [
      'Повна зайнятість від 45 до 50 годин на тиждень',
      'Безкоштовний трансфер бусом до об’єкта',
      'Допомога у відкритті банківського рахунку та прописки (Anmeldung)',
    ],
    publishedAt: '4 дні тому',
  },
  {
    id: 'vac-eb-03',
    partnerSlug: 'eurobuild-group',
    partnerName: 'EuroBuild Construction GmbH',
    title: 'Електромонтажник промислових та житлових мереж',
    category: 'Будівництво',
    country: 'Німеччина',
    city: 'Штутгарт',
    countryCode: 'DE',
    salary: {
      amount: '2,900 – 3,600',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: 'Надається кімната в котеджі',
    experienceRequired: 'Від 2 років',
    languagesRequired: ['Українська', 'Німецька (базовий A2 вітається)'],
    description:
      'Прокладання кабельних трас, розведення електромереж за німецькими стандартами VDE, складання електричних щитків у новобудовах.',
    responsibilities: [
      'Штробління та укладання кабелю у гофрі',
      'Монтаж фурнітури та автоматики ABB / Schneider',
      'Читання електросхем німецького зразка',
    ],
    benefits: [
      'Преміальні за переробку',
      'Підтвердження кваліфікації IHK',
      'Повний соцпакет',
    ],
    publishedAt: 'Вчора',
    urgent: true,
  },
  {
    id: 'vac-eb-04',
    partnerSlug: 'eurobuild-group',
    partnerName: 'EuroBuild Construction GmbH',
    title: 'Фасадчик (утеплення пінопластом та мінеральною ватою)',
    category: 'Будівництво',
    country: 'Німеччина',
    city: 'Нюрнберг',
    countryCode: 'DE',
    salary: {
      amount: '2,500 – 3,100',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Сезонна робота',
    housingProvided: true,
    housingCost: '200 € / міс',
    experienceRequired: 'Від 1 року',
    languagesRequired: ['Українська'],
    description:
      'Утеплення фасадів багатоповерхових будівель, армування сіткою, нанесення декоративної штукатурки ("баранець", "короїд").',
    responsibilities: [
      'Монтаж утеплювача за системою WDVS',
      'Нанесення ґрунтовки та фінішного шару',
    ],
    benefits: ['Оплата за м² або погодинно', 'Безпечні ліси системи Layher'],
    publishedAt: '6 днів тому',
  },
  {
    id: 'vac-eb-05',
    partnerSlug: 'eurobuild-group',
    partnerName: 'EuroBuild Construction GmbH',
    title: 'Помічник будівельника / Підсобний робітник',
    category: 'Будівництво',
    country: 'Німеччина',
    city: 'Франкфурт-на-Майні',
    countryCode: 'DE',
    salary: {
      amount: '2,100 – 2,400',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: 'Надається',
    experienceRequired: 'Без досвіду',
    languagesRequired: ['Українська'],
    description:
      'Допомога майстрам на будівельному майданчику, прибирання будівельного сміття, розвантаження матеріалів.',
    responsibilities: [
      'Підсобні роботи',
      'Підготовка інструменту та матеріалів',
    ],
    benefits: [
      'Можливість навчитися професії майстра',
      'Регулярні виплати без затримок',
    ],
    publishedAt: '5 днів тому',
  },

  {
    id: 'vac-pp-01',
    partnerSlug: 'polpro-manufacturing',
    partnerName: 'PolPro Manufacturing',
    title: 'Оператор автоматизованої виробничої лінії',
    category: 'Виробництво',
    country: 'Польща',
    city: 'Гливиці',
    countryCode: 'PL',
    salary: {
      amount: '4,500 – 5,600',
      currency: 'PLN',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Змінний графік',
    housingProvided: true,
    housingCost: 'Безкоштовно для сімейних пар і працівників',
    experienceRequired: 'Без досвіду',
    languagesRequired: ['Українська'],
    description:
      'Робота на заводі з випуску автокомпонентів. Обслуговування верстатів, візуальний контроль якості готових виробів, укладання продукції в палети.',
    responsibilities: [
      'Подача сировини в автоматичний прес',
      'Контроль відповідності деталей за зразком',
      'Маркування готових партій виробів',
    ],
    benefits: [
      'Чистий теплий завод без важких запахів',
      'Обіди всього за 5 злотих (решту доплачує завод)',
      'Премія за відвідуваність 400 PLN щомісяця',
    ],
    publishedAt: '2 дні тому',
    urgent: true,
  },
  {
    id: 'vac-pp-02',
    partnerSlug: 'polpro-manufacturing',
    partnerName: 'PolPro Manufacturing',
    title: 'Контролер якості деталей (Quality Inspector)',
    category: 'Виробництво',
    country: 'Польща',
    city: 'Катовіце',
    countryCode: 'PL',
    salary: {
      amount: '4,900 – 6,000',
      currency: 'PLN',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: '100 PLN / міс',
    experienceRequired: 'Від 1 року',
    languagesRequired: ['Українська', 'Польська (базовий рівень)'],
    description:
      'Перевірка геометричних розмірів пластикових та металевих деталей штангенциркулем та мікрометром. Ведення журналів браку.',
    responsibilities: [
      'Вимірювання параметрів деталей',
      'Реєстрація невідповідностей у системі',
    ],
    benefits: ['Сидяча робота в сучасній лабораторії', 'Медична страховка'],
    publishedAt: 'Вчора',
  },
  {
    id: 'vac-pp-03',
    partnerSlug: 'polpro-manufacturing',
    partnerName: 'PolPro Manufacturing',
    title: 'Слюсар-інструментальник / Налагоджувальник прес-форм',
    category: 'Виробництво',
    country: 'Польща',
    city: 'Гливиці',
    countryCode: 'PL',
    salary: {
      amount: '6,200 – 7,800',
      currency: 'PLN',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: 'Безкоштовно',
    experienceRequired: 'Від 2 років',
    languagesRequired: ['Українська'],
    description:
      'Технічне обслуговування, чищення та ремонт прес-форм для термопластавтоматів.',
    responsibilities: [
      'Розбирання та збирання прес-форм',
      'Шліфування та полірування матриць',
    ],
    benefits: ['Висока ставка з першого місяця', 'Карта побиту на 3 роки'],
    publishedAt: '4 дні тому',
  },
  {
    id: 'vac-pp-04',
    partnerSlug: 'polpro-manufacturing',
    partnerName: 'PolPro Manufacturing',
    title: 'Пакувальник готової продукції на термозбіжну стрічку',
    category: 'Виробництво',
    country: 'Польща',
    city: 'Катовіце',
    countryCode: 'PL',
    salary: {
      amount: '4,400 – 5,200',
      currency: 'PLN',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Змінний графік',
    housingProvided: true,
    housingCost: 'Безкоштовно',
    experienceRequired: 'Без досвіду',
    languagesRequired: ['Українська'],
    description:
      'Пакування виробів у картонні коробки, стікерування та стрейчування на піддонах.',
    responsibilities: ['Укладання продукції', 'Стікерування етикеток'],
    benefits: ['Легкий старт для людей будь-якого віку', 'Щотижневі аванси'],
    publishedAt: '6 днів тому',
  },

  // Baltic Hospitality Group
  {
    id: 'vac-bh-01',
    partnerSlug: 'baltic-hospitality-group',
    partnerName: 'Baltic Hospitality Group',
    title: 'Шеф-де-парті / Кухар гарячого цеху в ресторан 4*',
    category: 'Готельно-ресторанна сфера',
    country: 'Литва',
    city: 'Вільнюс',
    countryCode: 'LT',
    salary: {
      amount: '1,800 – 2,300',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: 'Безкоштовне проживання у готельних апартаментах',
    experienceRequired: 'Від 2 років',
    languagesRequired: ['Українська', 'Англійська або Литовська (вітається)'],
    description:
      'Приготування страв європейської та скандинавської кухні за технологічними картами. Робота на сучасному обладнанні Rational. Дружня україномовна команда.',
    responsibilities: [
      'Приготування м’ясних та рибних страв відповідно до стандартів сервісу',
      'Контроль термінів зберігання продуктів за правилами HACCP',
      'Складання заявок на закупівлю продуктів',
    ],
    benefits: [
      'Безкоштовне 3-разове харчування',
      'Офіційний литовський договір',
      'Премії за бенкети',
    ],
    publishedAt: '2 дні тому',
    urgent: true,
  },
  {
    id: 'vac-bh-02',
    partnerSlug: 'baltic-hospitality-group',
    partnerName: 'Baltic Hospitality Group',
    title: 'Покоївка номерного фонду курортного SPA-готелю',
    category: 'Готельно-ресторанна сфера',
    country: 'Латвія',
    city: 'Юрмала',
    countryCode: 'LV',
    salary: {
      amount: '1,400 – 1,750',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: 'Безкоштовне проживання у курортній зоні',
    experienceRequired: 'Без досвіду',
    languagesRequired: ['Українська'],
    description:
      'Прибирання номерів VIP-готелю на березі Ризької затоки. Заміна білизни, поповнення міні-барів, комплектація косметики.',
    responsibilities: [
      'Поточне та генеральне прибирання номерів',
      'Дотримання стандартів 5-зіркового сервісу',
    ],
    benefits: [
      'Проживання за 50 метрів від моря',
      'Безкоштовне відвідування SPA-зони у вихідні',
    ],
    publishedAt: 'Вчора',
  },
  {
    id: 'vac-bh-03',
    partnerSlug: 'baltic-hospitality-group',
    partnerName: 'Baltic Hospitality Group',
    title: 'Офіціант / Бармен у лобі-ресторан',
    category: 'Готельно-ресторанна сфера',
    country: 'Литва',
    city: 'Вільнюс',
    countryCode: 'LT',
    salary: {
      amount: '1,500 – 2,100',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: 'Безкоштовно',
    experienceRequired: 'Від 1 року',
    languagesRequired: ['Українська', 'Англійська (розмовна)'],
    description:
      'Обслуговування гостей готелю, прийняття замовлень, подача напоїв та страв, розрахунок гостей.',
    responsibilities: [
      'Сервірування столів',
      'Приготування класичних коктейлів та кави',
    ],
    benefits: [
      'Високі чайові (додатково 400-700 € / міс)',
      'Безкоштовна елегантна уніформа',
    ],
    publishedAt: '4 дні тому',
  },
  {
    id: 'vac-bh-04',
    partnerSlug: 'baltic-hospitality-group',
    partnerName: 'Baltic Hospitality Group',
    title: 'Помічник на кухню / Мийник кухонного посуду',
    category: 'Готельно-ресторанна сфера',
    country: 'Литва',
    city: 'Вільнюс',
    countryCode: 'LT',
    salary: {
      amount: '1,300 – 1,550',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Змінний графік',
    housingProvided: true,
    housingCost: 'Безкоштовно',
    experienceRequired: 'Без досвіду',
    languagesRequired: ['Українська'],
    description:
      'Підтримання чистоти на кухні ресторану, миття посуду в автоматичній машині, чищення овочів.',
    responsibilities: [
      'Обслуговування посудомийної машини',
      'Допомога кухарям у заготівлі',
    ],
    benefits: ['Харчування та форма надаються', 'Дружній колектив'],
    publishedAt: '5 днів тому',
  },

  {
    id: 'vac-tf-01',
    partnerSlug: 'trans-europe-fleet',
    partnerName: 'TransEurope Fleet BV',
    title: 'Водій міжнародник СЕ (тент / реф, Euro 6)',
    category: 'Водії',
    country: 'Нідерланди / Німеччина',
    city: 'Роттердам / Франкфурт',
    countryCode: 'NL',
    salary: {
      amount: '2,700 – 3,200',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Вахта',
    housingProvided: true,
    housingCost: 'Проживання в кабіні або готелі під час пауз 45h',
    experienceRequired: 'Від 1 року',
    languagesRequired: [
      'Українська',
      'Англійська або Німецька (бажано мінімальна)',
    ],
    description:
      'Рейси країнами Західної Європи (Бельгія, Нідерланди, Німеччина, Франція). Парк автомобілів Mercedes Actros та DAF XG 2023 року. Оплата пауз 45h згідно з пакетом мобільності ЄС.',
    responsibilities: [
      'Безпечне перевезення вантажів за маршрутом',
      'Контроль кріплення вантажу та температурного режиму',
      'Оформлення CMR та супровідних документів',
    ],
    benefits: [
      'Стабільна оплата кожні 2 тижні без затримок',
      'Оплата готелів на довгі паузи за рахунок фірми',
      'Допомога з отриманням коду 95 та карти водія',
    ],
    publishedAt: 'Вчора',
    urgent: true,
  },
  {
    id: 'vac-tf-02',
    partnerSlug: 'trans-europe-fleet',
    partnerName: 'TransEurope Fleet BV',
    title: 'Водій автовоза (категорія CE, перевезення нових авто)',
    category: 'Водії',
    country: 'Чехія / Німеччина',
    city: 'Прага / Мюнхен',
    countryCode: 'CZ',
    salary: {
      amount: '3,100 – 3,700',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Вахта',
    housingProvided: true,
    housingCost: 'Надається',
    experienceRequired: 'Досвідчений фахівець',
    languagesRequired: ['Українська'],
    description:
      'Завантаження та перевезення нових легкових автомобілів автовозами Lohr / Kassbohrer.',
    responsibilities: [
      'Завантаження та фіксація автомобілів на платформах',
      'Доставка авто в дилерські центри',
    ],
    benefits: [
      'Найвища ставка в секторі перевезень',
      'Нові тягачі з найвищим рівнем комфорту',
    ],
    publishedAt: '3 дні тому',
  },
  {
    id: 'vac-tf-03',
    partnerSlug: 'trans-europe-fleet',
    partnerName: 'TransEurope Fleet BV',
    title: 'Механік-діагност вантажного автопарку TIR',
    category: 'Інші',
    country: 'Чехія',
    city: 'Пльзень',
    countryCode: 'CZ',
    salary: {
      amount: '2,200 – 2,800',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: 'Безкоштовно',
    experienceRequired: 'Від 2 років',
    languagesRequired: ['Українська'],
    description:
      'Планове технічне обслуговування тягачів та напівпричепів на власній сервісній станції.',
    responsibilities: [
      'Діагностика комп’ютерних систем тягачів',
      'Заміна мастил, гальмівних колодок та пневматики',
    ],
    benefits: [
      'Сучасний теплий бокс із підйомниками',
      'Повний набір інструментів',
    ],
    publishedAt: '1 тиждень тому',
  },

  // TechNord Solutions
  {
    id: 'vac-tn-01',
    partnerSlug: 'tech-nord-solutions',
    partnerName: 'TechNord Engineering',
    title: 'Сервісний технік промислових роботів (KUKA, ABB, Fanuc)',
    category: 'IT',
    country: 'Чехія',
    city: 'Брно',
    countryCode: 'CZ',
    salary: {
      amount: '2,500 – 3,300',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: 'Оплачується компанією на перші 6 місяців',
    experienceRequired: 'Від 1 року',
    languagesRequired: ['Українська', 'Англійська (технічна)'],
    description:
      'Пусконалагоджувальні роботи, калібрування та регулярний технічний аудит промислових маніпуляторів на автозаводах Skoda та Hyundai.',
    responsibilities: [
      'Калібрування траєкторій маніпуляторів',
      'Діагностика контролерів та приводів',
      'Усунення програмних збоїв на лінії',
    ],
    benefits: [
      'Службовий автомобіль Skoda Octavia',
      'Курси сертифікації виробників роботів',
      'Медичний пакет',
    ],
    publishedAt: '3 дні тому',
    urgent: true,
  },
  {
    id: 'vac-tn-02',
    partnerSlug: 'tech-nord-solutions',
    partnerName: 'TechNord Engineering',
    title: 'Монтажник шаф керування та кабельних систем АСУТП',
    category: 'Виробництво',
    country: 'Чехія',
    city: 'Острава',
    countryCode: 'CZ',
    salary: {
      amount: '1,900 – 2,400',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: '100 € / міс',
    experienceRequired: 'Від 1 року',
    languagesRequired: ['Українська'],
    description:
      'Збирання електричних щитів керування автоматикою за принциповими електричними схемами.',
    responsibilities: [
      'Монтаж реле, автоматів, контролерів Siemens',
      'Маркування та комутація провідників',
    ],
    benefits: ['Комфортний монтажний цех', 'Гнучкий графік роботи'],
    publishedAt: '4 дні тому',
  },
  {
    id: 'vac-tn-03',
    partnerSlug: 'tech-nord-solutions',
    partnerName: 'TechNord Engineering',
    title: 'Молодший інженер-програміст PLC (Siemens TIA Portal)',
    category: 'IT',
    country: 'Чехія',
    city: 'Брно',
    countryCode: 'CZ',
    salary: {
      amount: '2,600 – 3,400',
      currency: 'EUR',
      period: 'місяць',
      netOrGross: 'нетто',
    },
    employmentType: 'Повна зайнятість',
    housingProvided: true,
    housingCost: 'Релокаційний бонус 1,000 €',
    experienceRequired: 'Від 1 року',
    languagesRequired: ['Українська', 'Англійська (B1)'],
    description:
      'Розробка програмного забезпечення для контролерів S7-1200 / S7-1500 та SCADA-систем WinCC.',
    responsibilities: [
      'Програмування на LAD/SCL',
      'Тестування логіки на емуляторі',
    ],
    benefits: ['Офіс класу А+ у центрі Брно', '25 днів відпустки'],
    publishedAt: '5 днів тому',
  },
];

export const CATEGORIES_LIST: JobCategory[] = [
  'Всі категорії',
  'Будівництво',
  'Виробництво',
  'Логістика',
  'Готельно-ресторанна сфера',
  'IT',
  'Водії',
  'Медицина & Догляд',
  'Сільське господарство',
  'Інші',
];

// Функції для запитів

export async function simulateApiFetch<T>(
  dataFetcher: () => T,
  options?: {
    customErrorRate?: number;
    delayRange?: [number, number];
    forceSuccess?: boolean;
  }
): Promise<T> {
  const minDelay = options?.delayRange?.[0] ?? 300;
  const maxDelay = options?.delayRange?.[1] ?? 800;
  const delay =
    Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

  await new Promise((resolve) => setTimeout(resolve, delay));

  if (!options?.forceSuccess) {
    const errorRate = options?.customErrorRate ?? 0.2;
    if (Math.random() < errorRate) {
      throw new Error(
        'Помилка з’єднання з сервером. Не вдалося завантажити актуальні дані (HTTP 503 Service Unavailable).'
      );
    }
  }

  return dataFetcher();
}

// API Service functions
export async function fetchAllPartners(): Promise<Partner[]> {
  return simulateApiFetch(() => [...MOCK_PARTNERS]);
}

export async function fetchPartnerBySlug(
  slug: string
): Promise<Partner | null> {
  return simulateApiFetch(() => {
    const partner = MOCK_PARTNERS.find((p) => p.slug === slug);
    return partner ? { ...partner } : null;
  });
}

export async function fetchPartnerVacancies(slug: string): Promise<Vacancy[]> {
  return simulateApiFetch(() => {
    return MOCK_VACANCIES.filter((v) => v.partnerSlug === slug);
  });
}

export async function fetchAllVacancies(): Promise<Vacancy[]> {
  return simulateApiFetch(() => [...MOCK_VACANCIES]);
}

export async function submitApplicationApi(
  _data: ApplicationFormData,
  options?: {
    customErrorRate?: number;
    delayRange?: [number, number];
    forceSuccess?: boolean;
  }
): Promise<{ success: boolean; applicationId: string; message: string }> {
  return simulateApiFetch(() => {
    const id =
      'APP-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    return {
      success: true,
      applicationId: id,
      message: `Заявку успішно зареєстровано під номером #${id}. Наш менеджер зв’яжеться з вами протягом 2 годин!`,
    };
  }, options);
}

export async function submitEmployerInquiryApi(
  _data: EmployerInquiryData,
  options?: {
    customErrorRate?: number;
    delayRange?: [number, number];
    forceSuccess?: boolean;
  }
): Promise<{ success: boolean; inquiryId: string; message: string }> {
  return simulateApiFetch(() => {
    const id =
      'EMP-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    return {
      success: true,
      inquiryId: id,
      message: `Запит роботодавця зареєстровано (#${id}). Персональний рекрутер VV Work зв’яжеться для уточнення вимог.`,
    };
  }, options);
}

export async function submitContactMessageApi(
  _data: ContactMessageData,
  options?: {
    customErrorRate?: number;
    delayRange?: [number, number];
    forceSuccess?: boolean;
  }
): Promise<{ success: boolean; ticketId: string; message: string }> {
  return simulateApiFetch(() => {
    const id =
      'MSG-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    return {
      success: true,
      ticketId: id,
      message: `Повідомлення #${id} доставлено. Дякуємо за звернення до VV Work!`,
    };
  }, options);
}
