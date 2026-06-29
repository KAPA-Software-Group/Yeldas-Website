export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = ["en", "ja"];

export const LANGUAGE_OPTIONS = {
  en: { shortLabel: "EN", label: "English" },
  ja: { shortLabel: "日本語", label: "Japanese" },
};

const sharedBrand = {
  name: "Anwari Law",
  phone: "(647) 704-9419",
  email: "contactus@anwarilaw.ca",
  address: {
    street: "151 Yonge Street, 11th Floor",
    city: "Toronto, Ontario M5C 2W7",
  },
  social: {
    linkedin: "#",
  },
};

const sharedServices = [
  {
    id: "inadmissibility",
    enTitle: "Inadmissibility",
    jaTitle: "入国不許可",
    enItems: ["Medical", "Criminal", "Deportation and removal"],
    jaItems: ["健康上の理由", "犯罪歴に関する問題", "国外退去・退去命令"],
  },
  {
    id: "permanent-resident",
    enTitle: "Permanent Resident Application",
    jaTitle: "永住権申請",
    enItems: [
      "Express entry",
      "Family class sponsorship",
      "Business class immigration",
      "Caregiver program",
      "Humanitarian and Compassionate Applications",
      "Provincial Nomination Programs",
    ],
    jaItems: [
      "エクスプレス・エントリー",
      "ファミリークラス・スポンサーシップ",
      "ビジネスクラス移民",
      "介護者プログラム",
      "人道的・同情的配慮に\n基づく申請",
      "州推薦プログラム",
    ],
  },
  {
    id: "temporary-resident",
    enTitle: "Temporary Resident",
    jaTitle: "一時滞在者",
    enItems: [
      "Temporary Resident Permits",
      "Work Permits",
      "LMIA exemption work permits",
      "LMIA-based work permits",
      "Spousal Sponsorships Open Work Permit",
      "Post-Graduate Work Permit",
      "Study permits",
      "Visitor visa",
      "Super visa",
    ],
    jaItems: [
      "一時滞在許可",
      "就労許可",
      "LMIA免除の就労許可",
      "LMIAに基づく就労許可",
      "配偶者スポンサーシップに伴う\nオープン就労許可",
      "卒業後就労許可",
      "就学許可",
      "訪問ビザ",
      "スーパービザ",
    ],
  },
  {
    id: "business-immigration",
    enTitle: "Business Immigration",
    jaTitle: "ビジネス移民",
    enItems: [
      "Start-Up Visas",
      "Self-Employed Programs",
      "Entrepreneur Program",
      "Intra-company transferee",
    ],
    jaItems: [
      "スタートアップ・ビザ",
      "自営業者プログラム",
      "起業家プログラム",
      "企業内転勤",
    ],
  },
  {
    id: "citizenship",
    enTitle: "Citizenship",
    jaTitle: "市民権",
    enItems: [
      "Citizenship applications",
      "Citizenship refusals",
      "Passport applications",
      "Passport refusals",
      "Citizenship revocation",
      "Citizenship resumption",
    ],
    jaItems: [
      "市民権申請",
      "市民権申請の拒否対応",
      "パスポート申請",
      "パスポート申請の拒否対応",
      "市民権取消し",
      "市民権の回復",
    ],
  },
];

export const CONTENT = {
  en: {
    BRAND: {
      ...sharedBrand,
      tagline: "Canadian Immigration Law Firm",
    },
    UI: {
      languageSwitcherLabel: "Language",
      switchLanguage: {
        en: "Switch to English",
        ja: "Switch to Japanese",
      },
      skipToMain: "Skip to main content",
      mainNavigation: "Main navigation",
      footerNavigation: "Footer navigation",
      legalLinks: "Legal links",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      homeAria: "Anwari Law - Return to homepage",
      linkedInAria: "Anwari Law on LinkedIn",
    },
    NAV: {
      links: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Contact Us", href: "/contact" },
      ],
      cta: { label: "Request Consultation", href: "/contact" },
    },
    META: {
      siteName: "Anwari Law",
      locale: "en_CA",
      pages: {
        home: {
          title: "Anwari Law - Immigration & Legal Services",
          description:
            "Anwari Law is a Toronto immigration law firm helping clients with refugee claims, appeals, work permits, permanent residence, citizenship, and more.",
        },
        services: {
          title: "Immigration Services - Anwari Law",
          description:
            "Explore Anwari Law's Canadian immigration services, including inadmissibility, permanent residence, temporary residence, business immigration, and citizenship.",
        },
        about: {
          title: "About Anwari Law - Canadian Immigration Lawyers",
          description:
            "Learn about Anwari Law, a Toronto-based Canadian immigration law firm built on careful preparation, transparent communication, and client-centered advocacy.",
        },
        contact: {
          title: "Contact Anwari Law - Request a Consultation",
          description:
            "Contact Anwari Law in Toronto to request a confidential consultation with a Canadian immigration legal team.",
        },
      },
    },
    HERO: {
      ariaLabel: "Introduction",
      eyebrow: "Canadian Immigration Law Firm · Toronto, Ontario",
      headlineTop: "Canadian Immigration",
      headlineBottom: "Lawyers You Can Trust.",
      subtext:
        "Anwari Law is a Toronto-based immigration law firm representing clients across Canada and internationally - from refugee claims and Express Entry to work permits, citizenship, and appeals.",
      primaryCTA: { label: "Request Consultation", href: "/contact" },
      secondaryCTA: { label: "Explore Our Services", href: "/services" },
      imageSrc: null,
      imageAlt: "Anwari Law - Professional legal counsel in Toronto",
      scrollLabel: "Scroll",
      globeCaption: "Countries We've Served",
      globeNationsLabel: "Nations & Growing",
      globeAriaLabel: "Rotating globe showing countries served by Anwari Law",
      globeLoadingError: "Unable to load the globe.",
    },
    HOME: {
      clientsStat: {
        ariaLabel: "3000+ clients serviced",
        eyebrow: "Trusted Across Canada & Beyond",
        label: "Clients Serviced",
        line: "Every case handled with precision, dignity, and an unwavering commitment to results.",
      },
      meetTeam: {
        eyebrow: "The People Behind the Work",
        headingTop: "Meet the",
        headingEmphasis: "Team",
        body:
          "Our team brings together legal expertise, cultural fluency, and a genuine commitment to each client's outcome. We speak your language - literally and professionally - to navigate Canada's immigration system with you every step of the way.",
        secondary:
          "From refugee claims to permanent residence, our consultants combine rigorous preparation with compassionate advocacy so no detail is ever overlooked.",
        location: "Anwari Law - Toronto, Canada",
        imageAlt: "The Anwari Law team - five professional immigration consultants",
        caption: "Our Team - Toronto",
      },
    },
    PRACTICE_AREAS: {
      eyebrow: "What We Do",
      heading: "Areas of Practice",
      subtext:
        "Comprehensive immigration and legal services tailored to your situation.",
      linkLabel: "Learn More",
      areas: [
        {
          number: "01",
          title: "Refugees",
          description:
            "Refugee Protection, Permanent Residence and more. We guide clients through complex refugee claim processes with expertise and unwavering care.",
          href: "/services",
          ariaLabel: "Learn more about our refugee legal services",
        },
        {
          number: "02",
          title: "Refusal & Appeals",
          description:
            "Request for Deferral of Removal or re-apply if needed. Skilled representation for immigration refusals and administrative appeals.",
          href: "/services",
          ariaLabel: "Learn more about our refusal and appeals services",
        },
        {
          number: "03",
          title: "Other Services",
          description:
            "Criminal Inadmissibility and Rehabilitation, Notarial Services, Express Entry and more - full-spectrum legal coverage for all your needs.",
          href: "/services",
          ariaLabel: "Learn more about our other legal services",
        },
      ],
    },
    PERSONALIZED: {
      eyebrow: "Our Approach",
      heading: "Personalized Legal Services",
      body:
        "One size does not fit all when it comes to your legal needs. We craft a team and strategy specific to your desired outcome.",
      features: [
        "Strategy tailored to your unique situation",
        "Direct access to your dedicated legal team",
        "Clear, transparent communication at every step",
        "Comprehensive end-to-end case management",
      ],
      pullQuote:
        "We don't just process cases - we understand the lives behind them.",
    },
    CONSULTATION: {
      eyebrow: "Take the Next Step",
      heading: "Ready to Take the First Step?",
      subtext:
        "Speak directly with our legal team. We offer confidential consultations to understand your situation and map a clear path forward.",
      cta: { label: "Request a Consultation", href: "/contact" },
      phone: sharedBrand.phone,
      phoneLabel: "Or call us directly",
    },
    SERVICES: {
      eyebrow: "What We Offer",
      heading: "Our Services",
      subtext:
        "Every case is unique. We provide tailored counsel across the full spectrum of Canadian immigration law.",
      detail: {
        ctaLabel: "Request a Consultation",
        ctaAriaLabel: "Request a consultation about our immigration services",
        practiceAreasLabel: "Practice Areas",
        servicesOfferedLabel: "Services Offered",
        helperPrefix: "Not sure which service applies to your situation?",
        helperLink: "Contact us",
        helperSuffix: "and we will guide you.",
        categorySubtitles: {
          inadmissibility: "Medical · Criminal · Deportation & Removal",
          "permanent-resident": "Express Entry · Family Class · PNP & more",
          "temporary-resident": "Work Permits · Study Permits · Visitor Visa & more",
          "business-immigration": "Start-Up · Entrepreneur · Intra-Company Transferee",
          citizenship: "Applications · Refusals · Passport & Resumption",
        },
      },
      categories: sharedServices.map((category) => ({
        id: category.id,
        title: category.enTitle,
        items: category.enItems,
      })),
    },
    SERVICES_PAGE: {
      hero: {
        ariaLabel: "Services hero",
        eyebrow: "What We Offer",
        headingPrefix: "Our",
        headingEmphasis: "Services",
        subtext:
          "Comprehensive immigration and legal services tailored to your unique situation - from first consultation to final resolution.",
        cta: { label: "Request a Consultation", href: "/contact" },
      },
      intro: {
        eyebrow: "Full Spectrum Coverage",
        headingPrefix: "Every Service,",
        headingEmphasis: "Under One Roof",
        subtext:
          "Structured representation across the full range of Canadian immigration law - one firm, every need.",
      },
      categoryMeta: {
        inadmissibility: {
          description:
            "Navigate complex admissibility challenges with experienced legal counsel. We represent clients facing medical, criminal, and removal proceedings.",
        },
        "permanent-resident": {
          description:
            "Secure your path to permanent residence through the right stream for your profile - from Express Entry to compassionate grounds.",
        },
        "temporary-resident": {
          description:
            "Enter, work, or study in Canada with confidence. We handle the full range of temporary resident applications.",
        },
        "business-immigration": {
          description:
            "Bring your entrepreneurial vision to Canada through specialized business immigration programs designed for founders and executives.",
        },
        citizenship: {
          description:
            "Achieve Canadian citizenship or resolve citizenship-related challenges with skilled, experienced legal representation.",
        },
      },
      labels: {
        practiceArea: "Practice Area",
        serviceCount: (count) => `${count} service${count === 1 ? "" : "s"}`,
        enquire: "Enquire",
      },
      cta: {
        ariaLabel: "Get in touch",
        eyebrow: "Ready to Begin",
        heading: "Not Sure Where to Start?",
        subtext:
          "Every immigration journey is different. Contact our team for a confidential consultation and we will identify the right path for you.",
        label: "Request a Consultation",
        href: "/contact",
      },
    },
    FOOTER: {
      tagline: "Canadian immigration law firm based in Toronto, Ontario.",
      quickLinksHeading: "Quick Links",
      contactHeading: "Contact",
      quickLinks: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Contact Us", href: "/contact" },
      ],
      legalLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
      copyright: "© 2023 Anwari Law. All rights reserved.",
    },
    ABOUT: {
      hero: {
        ariaLabel: "About hero",
        eyebrow: "Who We Are",
        heading: "A Law Firm Built on Trust & Results",
        subtext:
          "Anwari Law is a Toronto-based immigration law firm dedicated to helping individuals, families, and businesses navigate the complexities of Canadian immigration law.",
      },
      story: {
        eyebrow: "Our Story",
        heading: "Rooted in Community, Driven by Purpose",
        body: [
          "Founded with a commitment to accessible, high-quality immigration legal services, Anwari Law has built a reputation for excellence across the full spectrum of Canadian immigration law.",
          "We understand that immigration is not just a legal process - it is a life-changing journey. Our team brings both legal expertise and genuine empathy to every case, ensuring our clients feel heard, supported, and confident throughout their immigration journey.",
        ],
      },
      valuesSection: {
        eyebrow: "Our Values",
        heading: "What We Stand For",
        subtext: "The principles that guide every case we take on.",
      },
      values: [
        {
          number: "01",
          title: "Client-Centered",
          description:
            "Every case is unique. We take the time to understand your situation and craft a strategy built around your specific goals and circumstances.",
        },
        {
          number: "02",
          title: "Transparent",
          description:
            "No surprises. We communicate clearly at every stage - explaining your options, setting realistic expectations, and keeping you informed.",
        },
        {
          number: "03",
          title: "Excellence",
          description:
            "We hold ourselves to the highest standard of legal practice, staying current with policy changes and applying rigorous attention to every application.",
        },
      ],
      teamSection: {
        eyebrow: "Our Team",
        heading: "The People Behind Your Case",
        subtext: "Click any card to learn more about our team.",
        photoComingSoon: "Photo Coming Soon",
        cardAria: (memberName, flipped) =>
          `${memberName} - click to ${flipped ? "see photo" : "read bio"}`,
      },
      team: [
        {
          id: "yelda",
          name: "Yelda Anwari",
          role: "Principal Lawyer & Founder",
          photo: "/team-yelda.png",
          bio: "Yelda Anwari is the Founder and Managing Lawyer of Anwari Law PC. Since being called to the Ontario Bar in 2018, she has dedicated her practice to immigration, refugee, citizenship, and administrative law.\n\nYelda obtained her Juris Doctor from Thompson Rivers University Faculty of Law in Kamloops, British Columbia. Prior to law school, she obtained a Bachelor of Arts in Law and Society from the University of Calgary.\n\nYelda completed her articling placement with Grice & Associates, where she gained valuable experience advocating on behalf of clients in complex legal matters. Since then, she has built a reputation for providing strategic, effective, and compassionate legal representation to individuals and families navigating Canada's immigration and refugee systems.\n\nThroughout her career, Yelda has represented clients before the Immigration and Refugee Board of Canada (IRB), including the Refugee Protection Division (RPD), Refugee Appeal Division (RAD), Immigration Division (ID), and Immigration Appeal Division (IAD). Her experience includes refugee hearings, RAD appeals, detention reviews, admissibility hearings, humanitarian and compassionate applications, pre-removal risk assessments, and complex immigration matters involving allegations of misrepresentation and inadmissibility.\n\nYelda also regularly represents clients before the Federal Court of Canada, including judicial review applications, motions for stays of removal, and other immigration-related litigation. Fluent in both English and Farsi, Yelda is able to serve a diverse client base and communicate directly with Farsi-speaking clients, ensuring they fully understand their legal options and feel supported throughout the legal process.\n\nAs the founder of Anwari Law PC, Yelda is dedicated to delivering high-quality legal services grounded in professionalism, integrity, and client-centered advocacy.",
        },
        {
          id: "ayaka",
          name: "Ayaka Yoshinari",
          role: "Associate Lawyer",
          photo: "/team-ayaka.jpg",
          languages: ["English", "Japanese"],
          bio: "Ayaka is originally from Japan and completed her legal education at Waseda University in Tokyo — one of Japan's top universities. She moved to Toronto in 2017 and began her legal career in Canada as a legal assistant at a Toronto immigration law firm.\n\nShe later pursued further legal studies at Osgoode Hall Law School in Toronto, earning her LL.M. in Canadian Common Law in 2020. After completing her articling term with a focus on immigration law, Ayaka was called to the Ontario Bar in June 2021.\n\nAyaka provides legal services across a wide range of immigration matters, including applications submitted to IRCC, and represents clients in refugee hearings before the Immigration and Refugee Board. She has also appeared before the Federal Court in judicial review proceedings.\n\nCommitted to supporting individuals facing difficult circumstances, Ayaka is passionate about protecting the human rights of her clients with empathy and dedication. Outside of her legal work, she enjoys exploring Toronto's diverse food scene and traveling internationally.\n\nShe offers legal services in both English and Japanese.",
        },
        {
          id: "vai",
          name: "Vaishalei Manoharan",
          role: "Associate Lawyer",
          photo: "/team-vai.webp",
          bio:
            "A University of Sussex graduate with over two years in civil litigation, Vaishalei is passionate about Refugee and Immigration law and committed to becoming a skilled advocate upon her call to the Bar.",
        },
        {
          id: "prabh",
          name: "Prabh Simran Kaur",
          role: "Associate Lawyer",
          photo: "/team-prabh.webp",
          bio: "Prabh is an Associate Lawyer at Anwari Law, dual-licensed to practice in India and Ontario. She holds an LL.M. in International Trade Law and has broad experience spanning immigration, personal injury, and commercial litigation.\n\nAt Anwari Law, Prabh's immigration practice focuses on refugee claims, PRRAs, judicial reviews, and appeals, where she combines legal insight with a client-centered approach to deliver effective outcomes.\n\nBeyond the office, Prabh is passionate about fitness and movement. She enjoys swimming, dance, and horse riding, and never passes up a good cup of coffee.",
        },
        {
          id: "zehra",
          name: "Zehra Abrar",
          role: "Law Clerk",
          photo: "/team-zehra.jpg",
          bio: "Zehra is a Law Clerk at Anwari Law, supporting clients in refugee, immigration, and humanitarian cases. She works closely with lawyers, interpreters, and clients to prepare legal documents, manage filings, and ensure each case is handled efficiently and accurately.\n\nZehra's dedication ensures legal documents are meticulously prepared and submitted on time, all procedural requirements are followed to the highest standard, and clients receive ongoing support and updates throughout their case.\n\nKnown for her exceptional organizational skills and attention to detail, Zehra provides seamless support for complex immigration matters and ensures every client's case is handled professionally and efficiently.",
        },
      ],
      approach: {
        eyebrow: "Our Approach",
        heading: "Strategy Tailored to You",
        body:
          "We don't believe in one-size-fits-all solutions. From your initial consultation, we assess your unique circumstances and build a clear, effective strategy. Our team stays with you from first filing to final resolution.",
        points: [
          "Detailed intake assessment to understand your full situation",
          "Custom strategy aligned with your immigration goals",
          "Dedicated legal team with direct access at every stage",
          "Thorough document preparation and submission management",
          "Proactive updates and transparent communication",
          "Appeals and representation when challenges arise",
        ],
      },
      cta: {
        ariaLabel: "Contact us",
        eyebrow: "Work With Us",
        heading: "Ready to Start Your Journey?",
        subtext:
          "Speak directly with our legal team. We offer confidential consultations to understand your situation and map a clear path forward.",
        label: "Request a Consultation",
        href: "/contact",
      },
    },
    CONTACT_PAGE: {
      hero: {
        ariaLabel: "Contact hero",
        eyebrow: "Get in Touch",
        heading: "Let's Talk About Your Case",
        subtext:
          "Reach out to our team for a confidential consultation. We'll review your situation and outline a clear path forward.",
      },
      form: {
        ariaLabel: "Contact form",
        heading: "Send Us a Message",
        subtext:
          "Fill out the form below and a member of our team will get back to you within one business day.",
        labels: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          subject: "Subject",
          message: "Message",
        },
        placeholders: {
          name: "Your full name",
          email: "you@example.com",
          phone: "(000) 000-0000",
          subject: "e.g. Work permit, Citizenship",
          message: "Please describe your situation briefly...",
        },
        errors: {
          name: "Please enter your name.",
          email: "Please enter your email.",
          emailInvalid: "Please enter a valid email.",
          message: "Please enter your message.",
          captcha: "Please complete the captcha.",
          submit: "Something went wrong while sending your message. Please try again or email us directly.",
        },
        mailtoLabels: {
          name: "Name",
          phone: "Phone",
          subject: "Subject",
          fallbackSubject: "Website Enquiry",
        },
        successTitle: "Message Sent",
        successBody:
          "Thank you for reaching out. A member of our team will be in touch with you within one business day.",
        submitLabel: "Send Message",
        sendingLabel: "Sending...",
        requiredNote: "* Required fields. We'll respond within one business day.",
      },
      details: {
        heading: "Contact Information",
        phoneLabel: "Phone",
        emailLabel: "Email",
        officeLabel: "Office",
        officeHours: {
          label: "Office Hours",
          value: "Monday - Friday, 9:00 AM - 5:00 PM EST",
        },
        responseTime: {
          label: "Response Time",
          value: "Within one business day",
        },
      },
    },
  },
  ja: {
    BRAND: {
      ...sharedBrand,
      tagline: "カナダ移民法に特化した法律事務所",
    },
    UI: {
      languageSwitcherLabel: "言語",
      switchLanguage: {
        en: "英語に切り替え",
        ja: "日本語に切り替え",
      },
      skipToMain: "本文へ移動",
      mainNavigation: "メインナビゲーション",
      footerNavigation: "フッターナビゲーション",
      legalLinks: "法的リンク",
      openMenu: "ナビゲーションメニューを開く",
      closeMenu: "ナビゲーションメニューを閉じる",
      homeAria: "Anwari Law - ホームページへ戻る",
      linkedInAria: "Anwari LawのLinkedIn",
    },
    NAV: {
      links: [
        { label: "ホーム", href: "/" },
        { label: "サービス", href: "/services" },
        { label: "事務所について", href: "/about" },
        { label: "お問い合わせ", href: "/contact" },
      ],
      cta: { label: "ご相談を予約", href: "/contact" },
    },
    META: {
      siteName: "Anwari Law",
      locale: "ja_JP",
      pages: {
        home: {
          title: "Anwari Law - カナダ移民法サービス",
          description:
            "Anwari Lawはトロントを拠点とする、カナダ移民法に特化した法律事務所です。難民申請、不服申立て、就労許可、永住権、市民権などをサポートします。",
        },
        services: {
          title: "移民法サービス - Anwari Law",
          description:
            "入国不許可、永住権申請、一時滞在、ビジネス移民、市民権など、Anwari Lawのカナダ移民法サービスをご覧ください。",
        },
        about: {
          title: "Anwari Lawについて - カナダ移民法弁護士",
          description:
            "Anwari Lawは、丁寧な準備、透明なコミュニケーション、依頼者中心の支援を大切にするトロントのカナダ移民法法律事務所です。",
        },
        contact: {
          title: "Anwari Lawへお問い合わせ - ご相談予約",
          description:
            "トロントのAnwari Lawへお問い合わせください。カナダ移民法の法律チームが秘密厳守でご相談を承ります。",
        },
      },
    },
    HERO: {
      ariaLabel: "イントロダクション",
      eyebrow: "カナダ移民法に特化した法律事務所\nオンタリオ州トロント",
      headlineTop: "信頼を誇る",
      headlineBottom: "カナダ移民法弁護士",
      subtext:
        "Anwari Lawはトロントを拠点とする、\n移民法に特化した法律事務所です。\n難民申請、エクスプレス・エントリー、\n就労許可、市民権、不服申立てまで、\nカナダ国内外の依頼者を支援しています。",
      primaryCTA: { label: "ご相談を予約", href: "/contact" },
      secondaryCTA: { label: "サービスを見る", href: "/services" },
      imageSrc: null,
      imageAlt: "Anwari Law - トロントの専門的な法的サポート",
      scrollLabel: "スクロール",
      globeCaption: "支援実績のある国",
      globeNationsLabel: "か国以上をサポート",
      globeAriaLabel: "Anwari Lawが支援してきた国を示す回転する地球",
      globeLoadingError: "地球表示を読み込めませんでした。",
    },
    HOME: {
      clientsStat: {
        ariaLabel: "3000件以上の依頼者をサポート",
        eyebrow: "カナダ全土と国外からの信頼",
        label: "サポートした依頼者",
        line: "すべての案件に、正確さと尊厳をもって向き合い、\n結果に向けて着実に取り組みます。",
      },
      meetTeam: {
        eyebrow: "案件を支えるチーム",
        headingTop: "チームの紹介",
        headingEmphasis: "",
        body:
          "私たちのチームは、\n法的知識と文化的理解を大切にし、\n依頼者一人ひとりの結果に真摯に向き合います。\n言語面でも専門面でも寄り添いながら、\nカナダの移民制度を一歩ずつ進めます。",
        secondary:
          "難民申請から永住権まで、\n丁寧な準備と親身な代理活動を組み合わせ、\n細部まで見落とさない支援を行います。",
        location: "Anwari Law - カナダ・トロント",
        imageAlt: "Anwari Lawの移民法チーム",
        caption: "チーム - トロント",
      },
    },
    PRACTICE_AREAS: {
      eyebrow: "取扱内容",
      heading: "主な取扱分野",
      subtext: "状況に合わせた包括的な\nカナダ移民法サービスを提供します。",
      linkLabel: "詳しく見る",
      areas: [
        {
          number: "01",
          title: "難民",
          description:
            "難民保護、永住権など。\n複雑な難民申請手続きを、\n専門知識と配慮をもって支援します。",
          href: "/services",
          ariaLabel: "難民関連の法律サービスについて詳しく見る",
        },
        {
          number: "02",
          title: "拒否・不服申立て",
          description:
            "退去延期申請や再申請にも対応します。\n移民申請の拒否や行政上の不服申立てに、\n的確な代理を提供します。",
          href: "/services",
          ariaLabel: "拒否・不服申立てサービスについて詳しく見る",
        },
        {
          number: "03",
          title: "その他のサービス",
          description:
            "犯罪による入国不許可とリハビリテーション、\n公証サービス、\nエクスプレス・エントリーなど、\n幅広い法的ニーズに対応します。",
          href: "/services",
          ariaLabel: "その他の法律サービスについて詳しく見る",
        },
      ],
    },
    PERSONALIZED: {
      eyebrow: "私たちのアプローチ",
      heading: "一人ひとりに合わせた\n法的サービス",
      body:
        "法的ニーズに万能の解決策はありません。\n目指す結果に合わせて、\nチームと戦略を組み立てます。",
      features: [
        "状況に合わせた戦略設計",
        "担当弁護士と直通で相談可能",
        "あらゆるステップにおいて、常にオープンで分かりやすい説明",
        "最初のご相談から解決まで、包括的なケースマネジメント",
      ],
      pullQuote:
        "私たちが向き合うのは「案件」ではなく、皆様の大切な人生そのものです",
    },
    CONSULTATION: {
      eyebrow: "次の一歩へ",
      heading: "最初の一歩を\n踏み出しませんか",
      subtext:
        "私たちに直接ご相談ください。\n状況を丁寧に確認し、前に進むための道筋を\n一緒に整理します。",
      cta: { label: "ご相談を予約", href: "/contact" },
      phone: sharedBrand.phone,
      phoneLabel: "お電話でのご連絡",
    },
    SERVICES: {
      eyebrow: "サービス内容",
      heading: "取扱サービス",
      subtext:
        "すべての案件は異なります。\nカナダ移民法の幅広い分野で、\n状況に合わせ法的アドバイスを提供します",
      detail: {
        ctaLabel: "ご相談を予約",
        ctaAriaLabel: "移民法サービスについて相談を予約する",
        practiceAreasLabel: "取扱分野",
        servicesOfferedLabel: "取扱サービス",
        helperPrefix: "どのサービスが該当するかわからない場合は、",
        helperLink: "お問い合わせください",
        helperSuffix: "。適切な方向性をご案内します。",
        categorySubtitles: {
          inadmissibility: "健康上の理由 · 犯罪歴 · 国外退去",
          "permanent-resident": "エクスプレス・エントリー ·\nファミリークラス 各州ノミネーションプログラム薦ほか",
          "temporary-resident": "就労許可 · 就学許可 ·\n訪問ビザほか",
          "business-immigration": "スタートアップ · 起業家 ·\n企業内転勤",
          citizenship: "申請 · 拒否対応 · パスポート · 市民権の回復",
        },
      },
      categories: sharedServices.map((category) => ({
        id: category.id,
        title: category.jaTitle,
        items: category.jaItems,
      })),
    },
    SERVICES_PAGE: {
      hero: {
        ariaLabel: "サービスページのヒーロー",
        eyebrow: "サービス内容",
        headingPrefix: "取扱",
        headingEmphasis: "サービス",
        subtext:
          "初回相談から最終解決まで、\n状況に合わせた包括的な\n移民法・法律サービスを提供します。",
        cta: { label: "ご相談を予約", href: "/contact" },
      },
      intro: {
        eyebrow: "幅広い分野をカバー",
        headingPrefix: "必要なサービスを、",
        headingEmphasis: "一つの事務所で",
        subtext:
          "カナダ移民法の幅広い分野に対応する、\n体系的な代理サービスを提供します。",
      },
      categoryMeta: {
        inadmissibility: {
          description:
            "複雑な入国不許可の問題に、\n経験ある法律サポートで対応します。\n健康上の理由、犯罪歴、\n退去手続きに直面する方を支援します。",
        },
        "permanent-resident": {
          description:
            "エクスプレス・エントリーから\n人道的配慮に基づく申請まで、\nプロフィールに合った永住権への道筋を整理します。",
        },
        "temporary-resident": {
          description:
            "カナダへの入国、就労、就学を\n安心して進められるよう、\n一時滞在者申請の幅広い分野を扱います。",
        },
        "business-immigration": {
          description:
            "創業者や経営者向けの専門的な\nビジネス移民プログラムを通じて、\nカナダでの事業構想を支援します。",
        },
        citizenship: {
          description:
            "カナダ市民権の取得や\n市民権に関する問題の解決に、\n経験ある法律代理で対応します。",
        },
      },
      labels: {
        practiceArea: "取扱分野",
        serviceCount: (count) => `${count}件のサービス`,
        enquire: "問い合わせる",
      },
      cta: {
        ariaLabel: "お問い合わせ",
        eyebrow: "始める準備",
        heading: "どこから始めるべきか\n迷っていますか",
        subtext:
          "移民の道のりは一人ひとり異なります。\n秘密厳守のご相談で、\nあなたに合った進め方を一緒に確認します。",
        label: "ご相談を予約",
        href: "/contact",
      },
    },
    FOOTER: {
      tagline: "オンタリオ州トロントを拠点とする\nカナダ移民法に特化した法律事務所です。",
      quickLinksHeading: "クイックリンク",
      contactHeading: "連絡先",
      quickLinks: [
        { label: "ホーム", href: "/" },
        { label: "サービス", href: "/services" },
        { label: "事務所について", href: "/about" },
        { label: "お問い合わせ", href: "/contact" },
      ],
      legalLinks: [
        { label: "プライバシーポリシー", href: "#" },
        { label: "利用規約", href: "#" },
      ],
      copyright: "© 2023 Anwari Law. All rights reserved.",
    },
    ABOUT: {
      hero: {
        ariaLabel: "事務所紹介ページのヒーロー",
        eyebrow: "私たちについて",
        heading: "信頼と結果を\n大切にする\n法律事務所",
        subtext:
          "Anwari Lawは、個人、ご家族、\n企業がカナダ移民法の複雑な\n手続きを進められるよう\n支援する、トロント拠点の\n移民法法律事務所です。",
      },
      story: {
        eyebrow: "私たちの歩み",
        heading: "地域に根ざし、\n目的を持って\n支援する",
        body: [
          "Anwari Lawは、質の高い\n移民法サービスを身近に提供するという\n理念のもとに設立され、\nカナダ移民法の幅広い分野で\n実績を築いてきました。",
          "移民は単なる法律手続きではなく、\n人生を大きく変える道のりです。\n私たちは法的知識と真摯な共感をもって、\n依頼者が理解され、支えられ、\n自信を持って進めるよう支援します。",
        ],
      },
      valuesSection: {
        eyebrow: "大切にしている価値",
        heading: "私たちの姿勢",
        subtext: "すべての案件で指針となる原則です。",
      },
      values: [
        {
          number: "01",
          title: "依頼者中心",
          description:
            "案件は一つひとつ異なります。\n状況を丁寧に理解し、\n目標と事情に合わせた戦略を\n組み立てます。",
        },
        {
          number: "02",
          title: "透明性",
          description:
            "不意の驚きがないよう、\n各段階で選択肢を説明し、\n現実的な見通しを共有し、\n進捗を明確にお伝えします。",
        },
        {
          number: "03",
          title: "高い専門性",
          description:
            "法務実務の高い基準を保ち、\n政策変更を把握しながら、\nすべての申請に\n細心の注意を払います。",
        },
      ],
      teamSection: {
        eyebrow: "チーム",
        heading: "あなたの案件を\n支える人々",
        subtext: "カードを選択すると、\nチームについて詳しくご覧いただけます。",
        photoComingSoon: "写真準備中",
        cardAria: (memberName, flipped) =>
          `${memberName} - ${flipped ? "写真を見る" : "経歴を読む"}`,
      },
      team: [
        {
          id: "yelda",
          name: "Yelda Anwari",
          role: "主任弁護士・創設者",
          photo: "/team-yelda.png",
          bio:
            "Anwari Lawの創設者であり\n主任弁護士。\nYeldaはカナダ移民法の\n幅広い分野に深い知見を持ち、\n丁寧な準備と真摯な姿勢で\n複雑な課題に取り組む依頼者を\n支援しています。",
        },
        {
          id: "ayaka",
          name: "Ayaka Yoshinari",
          role: "所属弁護士",
          photo: "/team-ayaka.jpg",
          languages: ["English", "Japanese"],
          bio: "早稲田大学法務研究科を卒業後、2017年よりトロントの移民法弁護士事務所にて勤務。2020年にオスグッドホール・ロースクールを卒業し、2021年にオンタリオ州弁護士登録。\n\n移民法・難民法関連法務に従事し、カナダ移民難民市民権省（IRCC）およびカナダ国境サービス庁（CBSA）に対する就労許可申請や永住権申請をはじめ、移民難民審査会（IRB）における難民申請の代理人を務め、幅広い移民・難民関連法務に携わっています。また、カナダ連邦裁判所での司法審査案件の経験も有しています。\n\n困難な状況にある方々に親身に寄り添い、基本的な権利が確実に守られるよう、丁寧なサポートを心がけています。\n\n日系企業やカナダ企業に勤務される日本人の方々の就労許可申請、Express Entryや婚姻に基づくスポンサーシップによる永住権申請など、オンタリオ州の数少ない日本語を母国語とする弁護士として、日本語でのご相談にも対応しています。移民法難民法以外の案件については、対応可能かどうか個別にお問い合わせください。\n\n【学歴】\n2008–2009年　香港中文大学留学\n2011年　早稲田大学法学部卒業\n2013年　早稲田大学大学院法務研究科修了（法務博士）\n2020年　オスグッドホールロースクール修了（LL.M. in Canadian Common Law）\n\n【資格】\nオンタリオ州弁護士（2021年登録）\n\n【言語】\n日本語（母国語）・英語",
        },
        {
          id: "vai",
          name: "Vaishalei Manoharan",
          role: "アソシエイト弁護士",
          photo: "/team-vai.webp",
          bio:
            "University of Sussex卒業後、\n民事訴訟で2年以上の\n経験を積みました。\n難民法・移民法に情熱を持ち、\n弁護士登録後に\n優れた代理人となることを\n目指しています。",
        },
        {
          id: "prabh",
          name: "Prabh Simran Kaur",
          role: "アソシエイト弁護士",
          photo: "/team-prabh.webp",
          bio:
            "インドとオンタリオ州の両方で\n資格を有し、国際貿易法の\nLL.M.を取得。\nAnwari Lawでは難民申請、\nPRRA、司法審査、\n不服申立てを中心に、\n法的洞察と依頼者中心の姿勢を\n組み合わせて支援しています。",
        },
        {
          id: "zehra",
          name: "Zehra Abrar",
          role: "法務事務員",
          photo: "/team-zehra.jpg",
          bio: "Zehraは、アンワリ法律事務所の法律事務員として、難民、移民、人道的支援に関する案件においてクライアントをサポートしています。弁護士、通訳者、クライアントと密接に連携しながら、法的書類の作成、提出手続きの管理を行い、各案件が効率的かつ正確に進められるよう努めています。\n\nZehraの献身的な姿勢により、法的書類は細部まで丁寧に作成され、期限内に提出されます。また、すべての手続き上の要件が高い基準に従って満たされ、クライアントは案件の進行中も継続的なサポートと最新情報を受けることができます。\n\n優れた整理能力と細部への注意力で知られるZehraは、複雑な移民案件において円滑なサポートを提供し、すべてのクライアントの案件が専門的かつ効率的に扱われるよう尽力しています。",
        },
      ],
      approach: {
        eyebrow: "私たちのアプローチ",
        heading: "あなたに合わせた\n戦略",
        body:
          "万能の解決策はないと考えています。\n初回相談から状況を丁寧に評価し、\n明確で効果的な戦略を構築します。\n最初の申請から最終解決まで、\nチームが継続して支援します。",
        points: [
          "状況全体を把握するための\n詳細な初回ヒアリング",
          "移民上の目標に沿った個別戦略",
          "各段階で直接相談できる\n専任法律チーム",
          "書類準備と提出管理の徹底",
          "主体的な進捗共有と\n透明なコミュニケーション",
          "問題が生じた場合の\n不服申立て・代理対応",
        ],
      },
      cta: {
        ariaLabel: "お問い合わせ",
        eyebrow: "ご相談ください",
        heading: "あなたの道のりを\n始めませんか",
        subtext:
          "法律チームに直接ご相談ください。\n状況を理解し、前に進むための\n明確な道筋を一緒に整理します。",
        label: "ご相談を予約",
        href: "/contact",
      },
    },
    CONTACT_PAGE: {
      hero: {
        ariaLabel: "お問い合わせページのヒーロー",
        eyebrow: "お問い合わせ",
        heading: "あなたのケースについて\nご相談ください",
        subtext:
          "秘密厳守のご相談をご希望の方は、お気軽にお問い合わせください。状況を確認し、前に進むための道筋をご案内します。",
      },
      form: {
        ariaLabel: "お問い合わせフォーム",
        heading: "メッセージを送る",
        subtext:
          "以下のフォームにご記入ください。担当者より1営業日以内にご連絡いたします。",
        labels: {
          name: "氏名",
          email: "メールアドレス",
          phone: "電話番号",
          subject: "件名",
          message: "メッセージ",
        },
        placeholders: {
          name: "氏名をご入力ください",
          email: "you@example.com",
          phone: "(000) 000-0000",
          subject: "例: 就労許可、市民権",
          message: "状況を簡単にご記入ください...",
        },
        errors: {
          name: "氏名を入力してください。",
          email: "メールアドレスを入力してください。",
          emailInvalid: "有効なメールアドレスを入力してください。",
          message: "メッセージを入力してください。",
          captcha: "Captchaを完了してください。",
          submit: "送信中にエラーが発生しました。もう一度お試しいただくか、直接メールでご連絡ください。",
        },
        mailtoLabels: {
          name: "氏名",
          phone: "電話番号",
          subject: "件名",
          fallbackSubject: "ウェブサイトからのお問い合わせ",
        },
        successTitle: "メッセージを送信しました",
        successBody:
          "お問い合わせありがとうございます。担当者より1営業日以内にご連絡いたします。",
        submitLabel: "送信する",
        sendingLabel: "送信中...",
        requiredNote: "* 必須項目です。1営業日以内にご返信いたします。",
      },
      details: {
        heading: "連絡先情報",
        phoneLabel: "電話",
        emailLabel: "メール",
        officeLabel: "オフィス",
        officeHours: {
          label: "営業時間",
          value: "月曜日 - 金曜日、午前9:00 - 午後5:00 EST",
        },
        responseTime: {
          label: "返信目安",
          value: "1営業日以内",
        },
      },
    },
  },
};

export const BRAND = CONTENT.en.BRAND;
export const NAV = CONTENT.en.NAV;
export const HERO = CONTENT.en.HERO;
export const HOME = CONTENT.en.HOME;
export const PRACTICE_AREAS = CONTENT.en.PRACTICE_AREAS;
export const PERSONALIZED = CONTENT.en.PERSONALIZED;
export const CONSULTATION = CONTENT.en.CONSULTATION;
export const SERVICES = CONTENT.en.SERVICES;
export const SERVICES_PAGE = CONTENT.en.SERVICES_PAGE;
export const FOOTER = CONTENT.en.FOOTER;
export const ABOUT = CONTENT.en.ABOUT;
export const CONTACT_PAGE = CONTENT.en.CONTACT_PAGE;
