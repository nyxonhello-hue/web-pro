/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site. Nothing here should be claimed unless it is
 * verified (live site, repository, or the owner's own statement).
 */

export const site = {
  name: "Minato",
  brand: "NYXON",
  title: "Minato — Independent Developer | NYXON",
  get description() {
    return `Minato is a Computer Science student and software developer${
      this.novelsClaim ? ` and author of ${this.novelsClaim}` : ""
    }, building web, mobile and desktop products from Ghana under the NYXON brand.`;
  },
  email: "nyxon.hello@gmail.com",
  github: "https://github.com/nyxonhello-hue",
  location: "Ghana",
  /**
   * Personal claim stated by Minato in chat on 2026-10-13. Set to "" to remove it from the About
   * section and the site description everywhere.
   */
  novelsClaim: "more than 15 novels",
};

/**
 * Windows Compatibility Analyzer repository.
 * Not supplied yet. While this is undefined, the site shows a non-clickable
 * "Source link coming soon" label instead of a button.
 */
export const WCA_REPOSITORY_URL: string | undefined = "https://github.com/nyxonhello-hue/Windows-Compatibility-Analyzer.git";

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Process", href: "/#process" },
  { label: "Lab", href: "/#lab" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  eyebrow: "INDEPENDENT DEVELOPER · BUILDING FROM GHANA",
  headline: "I build software that turns ideas into useful products.",
  description:
    "I'm Minato, a Computer Science student and software developer exploring web, mobile, desktop applications, and automation. I enjoy solving problems, learning through building, and turning concepts into working software.",
  primary: { label: "Explore My Work", href: "#work" },
  secondary: { label: "Let's Connect", href: "#contact" },
};

export const about = {
  heading: "Curious by nature. A builder by choice.",
  paragraphs: [
    "I'm a Computer Science student who enjoys exploring how software works and building practical solutions with it. My work spans application development, automation, web technologies, and databases.",
    "I learn by experimenting, building, testing, and improving. I'm especially interested in creating independent products that solve real problems and can grow beyond the initial idea.",
    "I'm continuously expanding my technical skills while working on projects that challenge me to think carefully about software design, usability, and implementation.",
    ...(site.novelsClaim ? [`Outside of code, I'm also an author, with ${site.novelsClaim} written.`] : []),
  ],
  highlights: ["Learn by building.", "Solve real problems.", "Improve through iteration."],
};

export type Status =
  | "Completed"
  | "Delivered"
  | "Launched"
  | "Deployed"
  | "In Development"
  | "Working MVP"
  | "Prototype"
  | "Concept";

export type VisualKind = "wca" | "shira" | "launcher" | "guard" | "study" | "shield" | "game";

export interface CaseStudy {
  problem: string;
  contribution: string;
  implementation: string[];
  decisions: string[];
  challenges: string[];
  lessons: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  status: Status;
  summary: string;
  tags: string[];
  visual: VisualKind;
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  /** Show the "Source link coming soon" label when no repository URL exists yet. */
  repoComingSoon?: boolean;
  /** Real screenshot of a website (file in /public/screenshots). Shown only if the file exists; otherwise a labelled sketch. */
  screenshot?: { src: string; alt: string; width: number; height: number; caption?: string };
  /** Folder of screenshots named `<prefix>-1.png`, `<prefix>-2.png`... Only files that exist are shown. */
  gallery?: { dir: string; prefix: string };
  /** Download button (e.g. an APK). Local paths are only shown if the file exists in /public. */
  download?: { href: string; label: string };
  verified: string[];
  planned?: string[];
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    slug: "windows-compatibility-analyzer",
    title: "Windows Compatibility Analyzer",
    category: "Desktop software · System utility",
    status: "Completed",
    summary:
      "A desktop application that scans a PC, scores it for Windows 11 readiness, and presents the technical detail behind the result, with an advisor for RAM and storage upgrades.",
    tags: ["C#", ".NET 9", "WPF", "SQLite", "Dapper", "QuestPDF", "MahApps.Metro"],
    visual: "wca",
    // Real app screenshots: save as public/screenshots/wca-1.png, wca-2.png, ...
    gallery: { dir: "/screenshots", prefix: "wca" },
        download: { href: "https://github.com/nyxonhello-hue/YOUR-WCA-REPO/releases/latest", label: "Download for Windows" },
    repoUrl: WCA_REPOSITORY_URL,
    repoComingSoon: WCA_REPOSITORY_URL === undefined,
    verified: [
      "Scans the machine and runs compatibility checks with weighted scoring",
      "Summary view of results",
      "Upgrade Advisor covering RAM and storage",
      "System Specs screen with full technical detail always visible",
      "Export of reports to TXT, HTML and PDF",
      "Settings tab with editable scoring weights",
      "Tested on a real laptop during development",
    ],
    caseStudy: {
      problem:
        "Checking whether a PC is ready for Windows 11 usually means piecing together results from several places. I wanted one tool that scans the machine, explains the verdict, and shows people their hardware before they decide to upgrade anything.",
      contribution:
        "I designed and built the application end to end as a solo developer: the scanning logic, scoring, interface, report exports and the installer.",
      implementation: [
        "Four-project .NET 9 solution: WCA.Core, WCA.Data, WCA.Reports and WCA.App, developed in Visual Studio 2022.",
        "WPF interface styled with MahApps.Metro.",
        "SQLite storage accessed through Dapper.",
        "PDF reports generated with QuestPDF, alongside TXT and HTML exports.",
        "Compatibility checks combine into a weighted score, with weights editable from the Settings tab.",
        "Packaged with an Inno Setup installer (Setup.exe) and published as a GitHub release.",
      ],
      decisions: [
        "Show full technical detail on the System Specs screen at all times, so users can see everything about their PC before upgrading.",
        "Limit the Upgrade Advisor to RAM and storage, leaving CPU and GPU out of scope.",
        "Ship it free, but build it with the polish of a commercial product.",
        "Package with Inno Setup after dropping an MSIX attempt.",
      ],
      challenges: [
        "Packaging: the MSIX route was abandoned in favour of a conventional Inno Setup installer.",
        "Code signing is still an open decision; a Microsoft Store listing is a possible later route.",
      ],
      lessons: [],
    },
  },
  {
    slug: "shira-import",
    title: "Shira Import",
    category: "Client website · Web development",
    status: "Delivered",
    summary:
      "A website built for a friend's import business, giving customers a clear way to browse products and place orders over WhatsApp.",
    tags: ["Web development", "Client project", "WhatsApp ordering", "Vercel"],
    visual: "shira",
    // Real screenshot of the live site; captured with scripts/capture-site-screenshots.mjs.
    screenshot: {
      src: "/screenshots/shira-import.jpg",
      alt: "The Shira Import website",
      width: 1440,
      height: 900,
      caption: "Screenshot · live website",
    },
    liveUrl: "https://shira-import.vercel.app/",
    liveLabel: "Visit Live Site",
    verified: [
      "Landing page explaining the service: importing goods from China, Turkey and Dubai (the business is based in Accra)",
      "Featured products, each with its own order button",
      "Gallery of recent imports and a product video section",
      "Order and chat buttons that open WhatsApp with a pre-filled message",
      "Navigation to Products, Gallery and Contact sections",
      "Hosted on Vercel",
    ],
    caseStudy: {
      problem:
        "A small import business needed an online presence that explains what it does and gives customers a simple way to order, over WhatsApp.",
      contribution:
        "I turned the owner's requirements into a working website and delivered it live.",
      implementation: [
        "Single-page layout with Products, Gallery and Contact sections.",
        "Order buttons open a WhatsApp chat with a prefilled message.",
        "Photo gallery of recent imports plus a section for product videos.",
        "Deployed on Vercel.",
      ],
      decisions: [
        "Use WhatsApp as the order flow instead of building an online checkout.",
        "Lead with a plain promise: what is imported, from where, and roughly how long delivery takes.",
      ],
      challenges: [],
      lessons: [],
    },
  },
  {
    slug: "nyxon-shield",
    title: "Nyxon Shield",
    category: "Mobile app · Content protection & digital wellness",
    status: "Completed",
    summary:
      "An Android app that blocks adult websites in every browser, including private and incognito modes, using an on-device VPN DNS filter. When something is blocked it offers motivation, videos and focus games instead of a bare error.",
    tags: ["Flutter", "Dart", "Kotlin", "Android VpnService", "DNS filtering", "AdMob"],
    visual: "shield",
    // Real app screenshots: save as public/screenshots/nyxon-shield-1.png, nyxon-shield-2.png, ...
    gallery: { dir: "/screenshots", prefix: "nyxon-shield" },
    download: { href: "/downloads/nyxon-shield.apk", label: "Download APK" },
    verified: [
      "Local VPN that intercepts DNS lookups on the device and answers NXDOMAIN for blocked domains, so the page never loads",
      "Works across Android browsers and in private/incognito mode, because filtering happens at DNS level",
      "Runs entirely on the device: no external VPN server, and no browsing history stored or sent anywhere",
      "Blocklist of 80+ adult domains with keyword matching as a fallback",
      "Accountability PIN set by a trusted person, with a 30-second lockout after 3 wrong attempts",
      "Support modes (Christian, Muslim, General) that tailor the motivational messages",
      "Block screen with motivational content, curated videos that open in YouTube, and five focus games",
      "Daily motivation notifications",
      "Free and ad-supported, using AdMob banner and rewarded ads",
      "Release-signed Android build produced",
       "Released on GitHub for download",
    ],
    planned: [
      "Custom blocklists and a family dashboard",
      "iOS version",
      "Additional languages (Twi, Hausa, French)",
      "Improving automatic protection restart after a device reboot",
    ],
    caseStudy: {
      problem:
        "Many content filters stop working in private browsing or as soon as someone switches browser, and most only show a blunt blocked page. I wanted a free tool that blocks at the network level and gives the person something better to do in that moment.",
      contribution:
        "I designed and built the whole app: the Flutter interface, the Kotlin VPN and DNS filtering engine, the accountability PIN flow, the motivational content, notifications and ad integration.",
      implementation: [
        "Flutter (Dart) interface with Kotlin native code connected through method channels.",
        "Android VpnService creates a local tunnel that routes only DNS traffic. A custom packet parser reads each query, checks the domain against the blocklist, and either answers NXDOMAIN or forwards it upstream.",
        "All other traffic bypasses the VPN, so normal browsing speed is unaffected.",
        "PIN, support mode and stats are stored locally with SharedPreferences.",
        "Daily notifications scheduled with flutter_local_notifications.",
        "Five mini-games on the block screen: trivia, memory match, word scramble, detective cases and logic puzzles, with rewarded-ad hints.",
      ],
      decisions: [
        "Filter at DNS level instead of inside each browser, so one filter covers every browser and private mode.",
        "Keep everything on the device: no external server and no logging.",
        "Build accountability into setup: a trusted person sets the PIN, not the user.",
        "Redirect to something positive rather than showing a bare error.",
      ],
      challenges: [
        "No filter can promise 100% coverage. Newly registered domains missing from the blocklist, and content loaded directly by IP address, can get through, so the app is positioned as a support and accountability tool rather than a sole safeguard.",
        "Restarting protection automatically after a reboot is on the roadmap for improvement.",
      ],
      lessons: [],
    },
  },
  {
    slug: "incognito-guard",
    title: "Incognito Guard",
    category: "Desktop app · Browser extension · Product",
    status: "Launched",
    summary:
      "A parental-control product that detects and closes private browsing windows, with a desktop app, a cross-browser extension, a backend for alerts and its own marketing site.",
    tags: ["Python", "Tkinter", "Browser extension (MV3)", "Node.js", "Express", "Render", "Vercel"],
    visual: "guard",
    // Real app screenshots: save as public/screenshots/incognito-guard-1.png, incognito-guard-2.png, ...
    gallery: { dir: "/screenshots", prefix: "incognito-guard" },
    // Real screenshot of the product website; captured with scripts/capture-site-screenshots.mjs.
    screenshot: {
      src: "/screenshots/incognito-guard-site.jpg",
      alt: "The Incognito Guard product website",
      width: 1440,
      height: 900,
      caption: "Screenshot · product website",
    },
    liveUrl: "https://incognito-guard.vercel.app/",
    liveLabel: "Visit Product Site",
    verified: [
      "Detects and closes private/incognito browser windows",
      "Product site lists Chrome, Edge, Brave and Firefox on Windows 10/11, Linux and macOS 11+",
      "Cross-browser extension plus a Python/Tkinter desktop app",
      "Node.js/Express backend deployed on Render",
      "Free edition and a one-time $19.99 Pro edition, sold through Lemon Squeezy",
      "Private-window attempt counter and email alerts (not available in Firefox, see challenges)",
    ],
    caseStudy: {
      problem:
        "Private browsing windows let children sidestep the controls parents set up. Incognito Guard exists to close that gap.",
      contribution:
        "I built every part of the product: the desktop app, browser extension, backend and marketing site.",
      implementation: [
        "Python and Tkinter desktop application.",
        "Cross-browser Manifest V3 extension that detects private windows.",
        "Node.js and Express backend hosted on Render.",
        "Five-page marketing site on Vercel.",
        "Two repositories, one per edition: Pro and Free.",
        "Sold through a Lemon Squeezy store as a one-time purchase.",
      ],
      decisions: [
        "One-time pricing instead of a subscription.",
        "A Free edition alongside the paid Pro edition.",
      ],
      challenges: [
        "Firefox's Manifest V3 background scripts are sandboxed from private windows, so the counter and email alerts do not trigger there. This is a documented platform limit rather than a bug to patch.",
      ],
      lessons: [
        "Browser platform rules decide what a product can promise; limits like this belong in the documentation, not just the issue tracker.",
      ],
    },
  },
  {
    slug: "nyxon-launcher",
    title: "Nyxon Launcher",
    category: "Desktop application · Productivity utilities",
    status: "Launched",
    summary:
      "A desktop launcher that brings useful utilities and everyday automation into one organised interface. Its product site lists 31 automations across four categories, a free tier and a one-time Pro upgrade.",
    tags: ["Desktop", "Automation", "GitHub Actions", "CI/CD", "Vercel"],
    visual: "launcher",
    // Real app screenshots: save as public/screenshots/nyxon-launcher-1.png, nyxon-launcher-2.png, ...
    gallery: { dir: "/screenshots", prefix: "nyxon-launcher" },
    // Real screenshot of the product website; captured with scripts/capture-site-screenshots.mjs.
    screenshot: {
      src: "/screenshots/nyxon-launcher-site.jpg",
      alt: "The Nyxon Launcher product website",
      width: 1440,
      height: 900,
      caption: "Screenshot · product website",
    },
    liveUrl: "https://nyxon-web.vercel.app/",
    liveLabel: "Visit Product Site",
    verified: [
      "Product site lists 31 automations across four categories: File Management, System, Network & Web, and Business",
      "Tools shown on the site include File Organizer, System Flush, Internet Checker and Daily Digest",
      "Free tier plus a one-time Pro upgrade, with no subscription",
      "Product site shows the app as available (v1.1.2 when last checked)",
      "Automated builds and releases through a GitHub Actions CI/CD pipeline",
      "Cross-platform native-module build failures diagnosed and resolved",
    ],
    planned: [
      "PDF to Word conversion (deferred: it needs a large compiled helper)",
      "Dual payment setup: Paystack for buyers in Ghana, Lemon Squeezy internationally",
    ],
    caseStudy: {
      problem:
        "Small desktop chores (organising files, clearing clutter, checking the connection) are scattered across separate tools. A launcher can put them behind one interface.",
      contribution:
        "I design, build, package and release the application, run its build pipeline, and maintain its product website.",
      implementation: [
        "Grew the launcher from 11 to more than 30 automations.",
        "Full GitHub Actions CI/CD pipeline producing builds for multiple platforms.",
        "Product website redesigned as four pages and deployed on Vercel.",
        "A supporting server for the product.",
      ],
      decisions: [
        "Pin CI to the windows-2022 runner rather than windows-latest, with fail-fast disabled so one platform failing does not hide the others.",
        "Defer PDF to Word conversion because it would add a roughly 190MB compiled Python helper.",
        "Plan two payment providers: Paystack for buyers in Ghana and Lemon Squeezy for international buyers.",
      ],
      challenges: [
        "Native modules failed across platforms. The root cause was developing on Linux and copying builds to a separate Windows machine to test, instead of building natively on Windows.",
        "CI traps worth remembering: releases default to Draft after an Actions build and must be published manually, and a tag must point at a commit that contains every code change.",
      ],
      lessons: [
        "Build and test on the platform you ship to; copying artifacts between operating systems hides the real failures.",
        "Release pipelines need as much care as the code they ship.",
      ],
    },
  },
  {
    slug: "studynyx",
    title: "StudyNyx",
    category: "Web platform · AI study tools",
    status: "Deployed",
    summary:
      "A full-stack AI study platform that generates flashcards and quizzes, answers questions as a tutor, transcribes audio and schedules study plans.",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB Atlas", "Vercel", "Render"],
    visual: "study",
    // Real app screenshots: save as public/screenshots/studynyx-1.png, studynyx-2.png, ...
    gallery: { dir: "/screenshots", prefix: "studynyx" },
    verified: [
      "Flashcard and quiz generation",
      "AI tutor chat",
      "Audio transcription",
      "Study plan scheduling",
      "React and Vite front end; Node.js and Express back end; MongoDB Atlas",
      "Hosted across Vercel and Render",
    ],
    caseStudy: {
      problem:
        "Studying involves many small tasks: making revision cards, testing yourself, asking questions, and planning time. StudyNyx brings them into one place.",
      contribution: "I built the whole platform from scratch: front end, back end, database and deployment.",
      implementation: [
        "React and Vite front end hosted on Vercel.",
        "Node.js and Express API hosted on Render.",
        "MongoDB Atlas for storage.",
        "AI features powered by a hosted language-model API.",
      ],
      decisions: [],
      challenges: [
        "The AI provider changed more than once because of API key problems, moving between providers before settling on Claude again.",
      ],
      lessons: [],
    },
  },
  {
    slug: "daily-detective",
    title: "Daily Detective",
    category: "Mobile game · Android",
    status: "Working MVP",
    summary:
      "A detective mystery game that trains observation, memory and logical reasoning through short interactive investigations. Players review suspects, evidence and a timeline, then make a final deduction.",
    tags: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Google Cloud Text-to-Speech", "Provider"],
    visual: "game",
    gallery: { dir: "/images/daily-detective", prefix: "daily-detective" },
    verified: [
      "Read or Listen mode for case briefings, with Google Cloud Text-to-Speech narration, a selectable narrator voice and adjustable speed",
      "Investigation screen with Suspects, Evidence, Timeline and Notes tabs",
      "Final deduction flow: pick the suspect, select the supporting evidence, then see the solution reveal",
      "Email/password accounts and a guest mode, with player profiles stored in Firebase (Auth and Firestore)",
      "Data-driven case format, so new cases can be added without changing the UI",
      "Dark, cinematic detective visual theme",
      "One fully playable case; all cases and characters are original",
    ],
    planned: [
      "More cases",
      "XP and streak progression, in the style of language-learning apps",
      "Animations",
    ],
    caseStudy: {
      problem:
        "Mystery stories are usually something you read passively. I wanted short interactive investigations that make the player observe, remember and reason their way to an answer.",
      contribution:
        "I'm building the game on my own: the Flutter app, the case format, the narration and the account system.",
      implementation: [
        "Flutter and Dart app for Android, with Provider for state management.",
        "Firebase Auth for email/password accounts and guest mode, and Cloud Firestore for player profiles.",
        "Google Cloud Text-to-Speech for case narration, with a choice of narrator voice and speed.",
        "Cases are described as data, so the investigation screens render any case in the same format.",
      ],
      decisions: [
        "Describe each case as data so new cases can be added without touching the interface.",
        "Offer both Read and Listen modes for case briefings.",
        "End every case with a deduction that needs both a suspect and the evidence that proves it.",
      ],
      challenges: [],
      lessons: [],
    },
  },
];

export interface LabItem {
  title: string;
  status: Status;
  type: string;
  description: string;
  tags: string[];
}

export const lab: LabItem[] = [
  {
    title: "ViewShield",
    status: "In Development",
    type: "Mobile app · Digital wellness",
    description:
      "A Flutter digital-wellness app focused on URL and content filtering, backed by Supabase with Paystack for payments.",
    tags: ["Flutter", "Dart", "Supabase"],
  },
  {
    title: "Nyxon Morse",
    status: "Concept",
    type: "Communication tool",
    description:
      "A Morse code tool exploring text-to-Morse and Morse-to-text conversion, with multilingual support as a possible extension.",
    tags: ["Concept"],
  },
  {
    title: "Mashal Patterns",
    status: "Concept",
    type: "Fashion technology",
    description:
      "A fashion-pattern design idea covering pattern drafting, measurements and PDF export, with AI-assisted design as a planned premium capability.",
    tags: ["Concept"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Programming", items: ["Python", "C#", "C++", "SQL", "Dart", "Kotlin", "JavaScript", "HTML", "CSS"] },
  {
    group: "Frameworks",
    items: [".NET / WPF", "Flutter", "Flask", "Tkinter", "CustomTkinter", "React", "Node.js", "Express"],
  },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Supabase", "Firebase"] },
  {
    group: "Tools & environments",
    items: ["Git", "GitHub", "GitHub Actions", "VS Code", "Visual Studio", "PyCharm", "Linux", "Android tools", "Vercel"],
  },
  {
    group: "Technical areas",
    items: [
      "Python automation",
      "GUI development",
      "Web scraping",
      "Database integration",
      "Web development",
      "Mobile app development",
      "Mobile game development",
      "Android VPN / DNS filtering",
      "Desktop utility development",
      "Browser extensions",
      "CI/CD pipelines",
    ],
  },
];

export const process = [
  { n: "01", title: "Understand", text: "Identify the problem and requirements." },
  { n: "02", title: "Plan", text: "Break the problem into manageable components." },
  { n: "03", title: "Build", text: "Implement core functionality and test it." },
  {
    n: "04",
    title: "Refine",
    text: "Improve usability, resolve problems, and prepare the project for deployment when appropriate.",
  },
];

export const contact = {
  heading: "Have an idea worth building?",
  description:
    "I'm open to interesting projects, collaborations, and opportunities to create useful software. If you have an idea or would like to work together, let's connect.",
};
