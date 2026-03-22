export const languages: Record<string, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  'es-419': 'Español (Latinoamérica)',
  fr: 'Français',
  ja: '日本語',
  ko: '한국어',
  'pt-BR': 'Português (Brasil)',
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
  en: {
    // Nav / Footer
    'nav.home': 'about',
    'nav.about': 'about',
    'nav.terms': 'terms',
    'nav.privacy': 'privacy',
    'nav.contact': 'contact',
    'nav.bluesky': 'bluesky',
    'nav.community': 'community',
    // Index
    'index.title': 'orbyt - video communities',
    'index.motto': 'video communities',
    'index.ios': 'iOS',
    'index.androidWaitlist': 'Android Waitlist',
    'index.metaDescription': 'a new video app for bluesky',
    // App
    'app.title': 'Get the App - orbyt',
    'app.subtitleDesktop': 'scan to get the app',
    'app.subtitleMobile': 'get the app',
    'app.qrAlt': 'QR code to download orbyt app',
    'app.qrLabel': 'or download directly below',
    // Beta
    'beta.title': 'Join the waitlist',
    'beta.iframeTitle': 'Join the waitlist',
    // About
    'about.title': 'About - Orbyt',
    'about.metaDescription': 'Learn about Orbyt, a video social networking application for Bluesky',
    'about.questions': 'Questions',
    'about.whatMakesDifferent': 'What makes Orbyt different?',
    'about.whatMakesDifferentBody': 'Every video gets equal visibility. No ranking algorithms deciding what you see. When you subscribe to a community on Orbyt, you see everything that community shares. Discovery happens through people and communities you trust, not through what an algorithm thinks will keep you scrolling.',
    'about.howBuilt': 'How is Orbyt built?',
    'about.howBuiltBody': "Orbyt is a third-party client for Bluesky built on the AT Protocol. When you post videos through Orbyt, they're part of the broader Bluesky network. Your content isn't locked into one platform.",
    'about.whereIdea': "Where did the idea come from?",
    'about.whereIdeaBody': 'I loved Byte, a video app that shut down a few years ago. When Bluesky launched, I saw an opportunity to bring that interface to an open, decentralized network. I built Orbyt from scratch to run on the AT Protocol instead of a closed platform.',
    'about.whatsNext': "What's next?",
    'about.whatsNextBody': 'If you want to follow along or share feedback, you can find us on {bluesky} or visit our {community}. Have questions? {sayHello}.',
    'about.sayHello': 'Say hello',
    // Contact
    'contact.title': 'Contact Us - Orbyt',
    'contact.generalInquiries': 'For general inquiries',
    'contact.pressMedia': 'Press & media requests',
    'contact.bugReports': 'Bug reports',
    'contact.copyrightIssues': 'Copyright and content issues',
    'contact.copyrightBody': 'Orbyt is a third-party client for Bluesky. Content is hosted on the AT Protocol network, not by Orbyt. For copyright takedowns or content-related legal issues, please contact Bluesky Support directly.',
    // Terms
    'terms.title': 'Terms of Use - Orbyt',
    'terms.lastUpdated': 'Last Updated: February 2, 2026',
    // Privacy
    'privacy.title': 'Privacy Policy - Orbyt',
    'privacy.lastUpdated': 'Last Updated: February 2, 2026',
    // Discord / Community redirect
    'discord.title': 'Community - orbyt',
    'discord.routing': 'routing you to community...',
    // 404
    '404.title': '404 - Page Not Found | Orbyt',
    '404.errorTitle': 'No Signal',
    '404.errorMessage': "This page doesn't exist or has been moved.",
    '404.goBack': 'Go Back',
    // Profile
    'profile.getBeta': 'Get the beta',
    'profile.betaTester': 'Beta Tester',
    'profile.joinedOn': 'Joined on',
    'profile.home': 'Home',
    'profile.nothingHere': 'nothing here, yet...',
    'profile.loadMore': 'Load more',
    'profile.loading': 'Loading...',
    'profile.viewPost': 'View post',
    'profile.postBy': 'post by @{handle}',
    // Common
    'common.orbyt': 'orbyt',
    'common.orbytAlt': 'Orbyt',
  },
  de: {},
  es: {},
  'es-419': {},
  fr: {},
  ja: {},
  ko: {},
  'pt-BR': {},
} as const;

export type UITranslationKey = keyof (typeof ui)[typeof defaultLang];

export const locales = Object.keys(ui) as (keyof typeof ui)[];
export const nonDefaultLocales = locales.filter((l) => l !== defaultLang);
