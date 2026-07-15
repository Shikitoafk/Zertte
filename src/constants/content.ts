// Configuration and Release Controls
export const CASE_RELEASED = false; // Toggle to true to unlock the case file download button
export const CASE_FILE_URL = "https://example.com/files/zertte_case_dataset_2026.zip"; // Link to the dataset

export const LANDING_CONTENT = {
  // Navigation Links
  navLinks: [
    { label: "О чемпионате", href: "#about" },
    { label: "Пайплайн", href: "#timeline" },
    { label: "Кейс", href: "#case" },
    { label: "Треки", href: "#tracks" },
    { label: "FAQ", href: "#faq" },
  ],

  // Hero Section
  hero: {
    eyebrow: "@ZERTTE:CASE_FILE_v1.0",
    title: "Zertte Case Championship",
    titleHighlight: "по биоинформатике",
    subtitle: "Решайте реальные задачи геномики, анализируйте биологические данные и боритесь за призовой фонд вместе с лучшими студентами.",
    badges: [
      { text: "Дата будет объявлена", type: "yellow" },
      { text: "Команды 2–4 человека", type: "teal" },
      { text: "Онлайн-формат", type: "lavender" }
    ],
    primaryCta: "Зарегистрироваться",
    secondaryCta: "Смотреть кейс"
  },

  // About Section
  about: {
    title: "О кейс-чемпионате",
    subtitle: "Zertte — это возможность прикоснуться к реальной науке и индустрии биоинформатики.",
    cards: [
      {
        title: "Цель чемпионата",
        description: "Популяризация биоинформатики среди молодых исследователей и решение актуальных прикладных задач современной биологии и медицины через практический анализ.",
        color: "teal"
      },
      {
        title: "Кто может участвовать?",
        description: "Студенты бакалавриата, магистратуры и аспирантуры любых специальностей (биология, IT, математика, физика). Главное — интерес к анализу живых систем.",
        color: "coral"
      },
      {
        title: "Что получают команды?",
        description: "Уникальный опыт работы с реальными геномными данными (FASTQ/BAM), развернутый фидбек от экспертов индустрии, дипломы в портфолио и призовой фонд.",
        color: "yellow"
      }
    ]
  },

  // Timeline / Pipeline Section
  timeline: {
    title: "Пайплайн чемпионата",
    subtitle: "Основные этапы прохождения кейс-турнира — от идеи до финального питча",
    steps: [
      {
        step: "01",
        title: "Регистрация",
        date: "Дата будет объявлена",
        description: "Соберите команду от 2 до 4 человек и подайте заявку. Если команды нет, мы поможем найти её в чате."
      },
      {
        step: "02",
        title: "Публикация кейса",
        date: "День 1",
        description: "Открытие доступа к описанию задачи и сырым наборам данных секвенирования для анализа."
      },
      {
        step: "03",
        title: "Приём решений",
        date: "Дни 2–7",
        description: "Разработка биоинформатического пайплайна, фильтрация вариантов, аннотация мутаций и составление отчета."
      },
      {
        step: "04",
        title: "Защита и итоги",
        date: "Финал",
        description: "Презентация результатов перед экспертным жюри, разбор ошибок, объявление победителей и призеров."
      }
    ]
  },

  // Case Section
  caseSection: {
    eyebrow: "@ZERTTE:CASE_TASK_INFO",
    title: "Поиск редких мутаций в геноме человека",
    description: "Участникам предстоит разработать пайплайн для анализа сырых чтений секвенирования (FASTQ), произвести выравнивание на референсный геном (BWA/Bowtie2), провести детекцию вариантов (Variant Calling) и проаннотировать найденные мутации. Цель — найти мутацию, ответственную за развитие редкого наследственного синдрома у пациента.",
    features: [
      "Работа с реальными данными секвенирования",
      "Полноценный пайплайн анализа (QC -> Mapping -> Variant Calling -> Annotation)",
      "Оценка качества чтений и интерпретация клинической значимости вариантов"
    ],
    fileTitle: "Материалы кейса",
    fileName: "zertte_dataset_2026.tar.gz",
    fileSize: "148 MB",
    lockStatusSoon: "Скоро откроется",
    lockStatusOpen: "Доступно для скачивания",
    downloadBtn: "Скачать файлы кейса"
  },

  // Tracks Section
  tracks: {
    title: "Направления участия",
    subtitle: "Выберите подходящий формат взаимодействия с чемпионатом",
    list: [
      {
        title: "Основной командный",
        role: "Команда 2–4 человека",
        description: "Полное участие во всех этапах, доступ к менторам, борьба за призовые места и дипломы.",
        gradient: "from-brand-teal/20 via-brand-teal/5 to-brand-bg-alt",
        borderColor: "border-brand-teal",
        tagColor: "bg-brand-teal text-white",
        features: ["Доступ к кейсу", "Поддержка менторов", "Участие в финале", "Призовой фонд"]
      },
      {
        title: "Соло-исследователь",
        role: "Индивидуально",
        description: "Для тех, кто хочет проверить свои силы самостоятельно и пройти весь пайплайн в одиночку.",
        gradient: "from-brand-coral/20 via-brand-coral/5 to-brand-bg-alt",
        borderColor: "border-brand-coral",
        tagColor: "bg-brand-coral text-white",
        features: ["Доступ к кейсу", "Общий чат участников", "Сертификат участника", "Фидбек по решению"]
      },
      {
        title: "Наблюдатель",
        role: "Без ограничений",
        description: "Доступ к образовательным лекциям, мастер-классам и трансляции финала без сдачи проекта.",
        gradient: "from-brand-lavender/20 via-brand-lavender/5 to-brand-bg-alt",
        borderColor: "border-brand-lavender",
        tagColor: "bg-brand-lavender text-white",
        features: ["Лекции и воркшопы", "Материалы лекторов", "Трансляция финала", "Комьюнити"]
      }
    ]
  },

  // FAQ Section
  faq: {
    title: "Часто задаваемые вопросы",
    subtitle: "Ответы на популярные вопросы о чемпионате",
    questions: [
      {
        question: "Нужно ли уметь программировать для участия?",
        answer: "Базовые навыки работы в Linux/bash или знания Python будут крайне полезны для написания пайплайна. Однако в команде могут быть биологи, отвечающие за поиск литературы, функциональную аннотацию и клиническую интерпретацию мутаций."
      },
      {
        question: "Можно ли участвовать, если у меня нет команды?",
        answer: "Конечно! Вы можете зарегистрироваться на индивидуальный соло-трек или присоединиться к общему Telegram-чату участников, где мы поможем вам найти единомышленников и собрать команду."
      },
      {
        question: "Какое оборудование и софт потребуются?",
        answer: "Для биоинформатического анализа потребуется компьютер с UNIX-подобной системой (Linux или macOS) либо WSL под Windows. Вам понадобятся стандартные консольные утилиты (FastQC, BWA, Samtools). Подробные инструкции по установке и настройке мы предоставим."
      },
      {
        question: "Участие в кейс-чемпионате платное?",
        answer: "Нет, участие абсолютно бесплатное на всех этапах. Лекции, воркшопы, доступ к материалам и защита проектов не требуют никаких взносов."
      },
      {
        question: "Кто оценивает наши работы?",
        answer: "Работы проверяются независимым жюри, состоящим из ведущих биоинформатиков коммерческих лабораторий, научных сотрудников институтов и представителей биотехнологических компаний."
      }
    ]
  },

  // Footer Section
  footer: {
    copyright: "© 2026 Zertte Case Championship. Все права защищены.",
    contactEmail: "hello@zertte.org",
    socials: [
      { name: "Telegram", url: "https://t.me/zertte_case" },
      { name: "Instagram", url: "https://instagram.com/zertte" },
      { name: "VK", url: "https://vk.com/zertte" }
    ]
  }
};
