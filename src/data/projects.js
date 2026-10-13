export const projectsData = [
  {
    slug: "civicfix-ai-reporting",
    title: "CIVICFIX – AI CIVIC ISSUE REPORTING PLATFORM",
    category: "AI & Full-Stack Platform",
    tagline: "Intelligent Civic Issue Management with Multimodal AI Duplicate Detection",
    overview:
      "A full-stack civic issue reporting platform enabling citizens to submit image-based complaints, featuring role-based dashboards for citizens, administrators, and field workers with PyTorch-powered multimodal duplicate detection and resolution verification.",
    year: "2026",
    duration: "12 weeks",
    industry: "Civic Tech & Public Infrastructure",
    client: "Civic Open Platform & Municipal Administration",
    technologies: [
      "React",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "PyTorch",
      "Redis",
      "Celery",
      "PGvector",
    ],
    role: "Full-Stack Developer & AI Pipeline Architect",
    featured: true,
    stickyOrder: 1,
    githubUrl: "https://github.com/shaharya53",
    image: "/images/projects/civicfix-main.jpg",
    detailImages: [
      "/images/projects/civicfix-problem.jpg",
      "/images/projects/civicfix-solution1.jpg",
      "/images/projects/civicfix-solution2.jpg",
      "/images/projects/civicfix-summary.jpg",
    ],
    problem: [
      "Municipal administrations face severe complaint bottlenecks: citizens encounter cumbersome reporting forms, duplicate complaints about the same pothole or broken streetlight flood support desks, and verification requires manual human visits.",
      "Legacy municipal platforms lack geolocation clustering, semantic search, and real-time status visibility for citizens, resulting in deep public distrust and delayed field worker resolution times.",
      "Field teams frequently struggle to prove resolution authentically, leading to disputed complaints and lack of audit trails for civic repairs."
    ],
    solution: [
      "Engineered an intuitive React and Next.js interface with real-time GPS location capturing, image uploads, and interactive map interfaces for immediate complaint filing.",
      "Architected a FastAPI backend orchestrated with Celery and Redis to handle asynchronous AI inference without blocking user HTTP response cycles.",
      "Implemented multimodal duplicate detection combining geographic distance radius, text semantic similarity, and PyTorch image embeddings stored in PostgreSQL using PGvector.",
      "Developed a before/after AI verification system that analyzes photographic proof submitted by field workers before allowing a ticket to transition to resolved status."
    ],
    challenge:
      "Balancing high-precision multimodal duplicate clustering (combining spatial coordinates, NLP semantic embeddings, and convolutional visual feature vectors) with sub-second API latency during peak reporting periods.",
    summary: [
      "CivicFix dramatically reduces duplicate ticket clutter by up to 65%, giving city officials a single consolidated view of community issues.",
      "Its extensible AI pipeline allows continuous human-in-the-loop prediction auditing to fine-tune future CivicFix-specific machine learning models."
    ],
    features: [
      "Role-based authenticated dashboards for Citizens, Municipal Admins, and Field Workers",
      "Real-time ticket tracking with live status updates and notification feeds",
      "Map-based geolocation handling and interactive area clusters",
      "Multimodal AI duplicate detection using geographic radius, text embeddings, and PyTorch image similarity",
      "PGvector and PostgreSQL vector database indexing for fast similarity searches",
      "Asynchronous Celery and Redis task queue for image processing and embedding extraction",
      "Before/After photographic resolution verification to confirm authentic civic fixes",
      "Human-in-the-loop audit pipeline for continuous AI model training and verification"
    ],
  },
  {
    slug: "real-estate-web-app",
    title: "FULL-STACK REAL ESTATE PROPERTY PORTAL",
    category: "Full-Stack Web & Real Estate",
    tagline: "Scalable Property Listings Platform with Advanced Multi-Factor Filtering",
    overview:
      "A full-stack property listings platform with advanced multi-parameter filtering for price, location, and property type, featuring secure JWT-based authentication and role management, optimized MongoDB queries, and a fast, SEO-friendly Next.js frontend.",
    year: "2026",
    duration: "8 weeks",
    industry: "Real Estate & PropTech",
    client: "Property Management & Listing Services",
    technologies: ["React", "Next.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    role: "Full-Stack Developer",
    featured: true,
    stickyOrder: 2,
    githubUrl: "https://github.com/shaharya53",
    image: "/images/projects/realestate-main.jpg",
    detailImages: [
      "/images/projects/realestate-problem.jpg",
      "/images/projects/realestate-solution1.jpg",
      "/images/projects/realestate-solution2.jpg",
      "/images/projects/realestate-summary.jpg",
    ],
    problem: [
      "Traditional real estate websites suffer from sluggish database lookups, poor mobile responsiveness, and ineffective filtering options when buyers browse thousands of properties.",
      "Property owners and agents lack an accessible, secure platform to list residential and commercial units with high-resolution imagery and direct inquiry channels without paying exorbitant broker fees.",
      "Slow client-rendered single page apps frequently fail SEO indexing, hurting listing visibility on major search engines."
    ],
    solution: [
      "Developed a modern full-stack web application using Next.js for server-side rendering and search-engine discoverability, coupled with an Express.js REST API backend.",
      "Engineered advanced multi-criteria query engines supporting compound filters across pricing thresholds, geographic coordinates, bedroom count, and property classifications.",
      "Implemented secure JWT authentication with role-based access control (Admin, Agent, Buyer) to protect sensitive user contact details and property management operations.",
      "Optimized MongoDB indexing strategies to achieve sub-100ms response times across large property datasets."
    ],
    challenge:
      "Creating a flexible and performant schema in MongoDB that efficiently indexes complex geospatial location queries and multiple dynamic filtering criteria simultaneously.",
    summary: [
      "The platform delivered a 3x speed improvement in search results compared to traditional property portals, achieving high Core Web Vitals and rapid page load metrics.",
      "User inquiries and property engagements increased substantially thanks to clean UI hierarchy and frictionless search filters."
    ],
    features: [
      "Dynamic multi-attribute filter matrix (price sliders, property type, locality, bedrooms, amenities)",
      "Secure JWT-based authentication, password hashing, and role permissions",
      "Optimized MongoDB compound indexing for high-concurrency property searches",
      "SEO-friendly server-rendered pages with dynamic Open Graph metadata tags",
      "Responsive image carousels with lazy loading and optimized aspect ratios",
      "Direct agent inquiry modal with client-side form validation"
    ],
  },
  {
    slug: "news-summary-ai",
    title: "NEWS SUMMARY AI AGGREGATION PLATFORM",
    category: "AI News Aggregation & Python",
    tagline: "Automated News Scraping and AI-Driven Intelligent Summarization",
    overview:
      "An AI-powered news aggregation and summarization platform that automatically scrapes articles from multiple news sources and uses Gemini AI to generate concise, readable summaries and classify articles into topical categories.",
    year: "2026",
    duration: "6 weeks",
    industry: "AI Media & Information Retrieval",
    client: "AI News Discovery Lab",
    technologies: ["Python", "Django", "SQLite", "BeautifulSoup", "Gemini AI", "HTML5", "CSS3"],
    role: "Backend & AI Engineer",
    featured: true,
    stickyOrder: 3,
    githubUrl: "https://github.com/shaharya53",
    image: "/images/projects/newssummary-main.jpg",
    detailImages: [
      "/images/projects/newssummary-problem.jpg",
      "/images/projects/newssummary-solution1.jpg",
      "/images/projects/newssummary-solution2.jpg",
      "/images/projects/newssummary-summary.jpg",
    ],
    problem: [
      "Modern readers are inundated with hundreds of lengthy news articles daily, filled with filler copy, intrusive ads, and clickbait headlines.",
      "Consuming verified updates from multiple publications requires opening dozens of tabs, resulting in cognitive overload and massive time inefficiency.",
      "Most aggregators only display headlines and raw RSS snippets without contextual synthesis or factual distillation."
    ],
    solution: [
      "Built an automated web-scraping pipeline using Python and BeautifulSoup to extract clean headline, body text, and publication metadata from diverse online publishers.",
      "Integrated Google Gemini AI API to distill complex multi-paragraph articles into concise 3-bullet executive briefs and automatic topic tagging.",
      "Engineered an elegant Django web application with SQLite backend and responsive UI to allow users to view, search, filter, and bookmark summaries by category.",
      "Implemented automated error handling to manage scraping rate limits and malformed HTML gracefully."
    ],
    challenge:
      "Standardizing content extraction across vastly different website layouts and DOM structures while preventing AI hallucination by enforcing strict fact-based prompt templates.",
    summary: [
      "News Summary AI reduced reader consumption time by 80%, providing clear, unbiased insights across Technology, Business, and World Affairs.",
      "The platform operates autonomously with scheduled scraping pipelines and resilient Django backend caching."
    ],
    features: [
      "Multi-source web scraper built with Python BeautifulSoup and HTTP request handlers",
      "Google Gemini AI summarization pipeline generating concise key takeaways",
      "Automatic article categorization (Technology, Business, Science, World News)",
      "Interactive Django web dashboard with search, category filtering, and reading time estimation",
      "Responsive, clean typography optimized for high readability",
      "Performant Django ORM queries and relational schema in SQLite"
    ],
  },
  {
    slug: "barricade-game",
    title: "BARRICADE GAME – STRATEGY BOARD GAME",
    category: "Game Development & Logic",
    tagline: "Turn-Based Tactical Strategy Board Game with Custom Movement & Barrier Mechanics",
    overview:
      "A digital tactical strategy board game inspired by the classic Barricade (Malefiz) game, engineered with custom board state representation, piece movement validation, dynamic obstacle barrier placement, turn management algorithms, and interactive multiplayer mechanics.",
    year: "2026",
    duration: "5 weeks",
    industry: "Gaming & Interactive Systems",
    client: "Personal Engineering Project",
    technologies: ["Python", "JavaScript", "React", "HTML5 Canvas", "Algorithms", "Game Design"],
    role: "Game Developer & Algorithm Architect",
    githubUrl: "https://github.com/shaharya53/Barricade_game",
    featured: false,
    image: "/images/projects/barricade-main.jpg",
    detailImages: [
      "/images/projects/barricade-problem.jpg",
      "/images/projects/barricade-solution1.jpg",
      "/images/projects/barricade-solution2.jpg",
      "/images/projects/barricade-summary.jpg",
    ],
    problem: [
      "Physical board games like Barricade require physical setup, manual rule policing, and can be cumbersome to manage turns and track legitimate piece movements across intricate multi-path boards.",
      "Translating tactical barrier placement, blocking strategies, and dice-governed movement pathways into an intuitive digital experience demands precise state validation and collision tracking."
    ],
    solution: [
      "Engineered an algorithmic game engine modeling graph-based board nodes, legal step paths, and barrier occupancy rules.",
      "Implemented turn-based player state management, dynamic obstacle repositioning upon capture, and automated win condition detection.",
      "Crafted an interactive, responsive graphical interface allowing players to easily visualize possible moves and execute strategic blocks.",
      "Structured modular, object-oriented code architecture for easy extension to AI bot opponents and network multiplayer."
    ],
    challenge:
      "Designing an efficient path traversal and validation algorithm that verifies every possible step combination on branched paths while strictly observing barricade block rules.",
    summary: [
      "The Barricade game implementation delivers engaging tactical gameplay with zero rule ambiguity and fluid player interactions.",
      "Full source code and gameplay documentation are open-source and hosted on GitHub."
    ],
    features: [
      "Turn-based multiplayer game loop and turn indicator",
      "Graph-based board node state management and path validation",
      "Dynamic barricade placement mechanics to block opponent progress",
      "Interactive graphical interface with visual indicators for legal moves",
      "Automated win condition evaluation and score logging",
      "Clean, modular object-oriented codebase hosted on GitHub"
    ],
  },
  {
    slug: "iq-test",
    title: "IQ TEST – COGNITIVE ASSESSMENT PLATFORM",
    category: "Web Application & Analytics",
    tagline: "Comprehensive Cognitive Reasoning and Intelligence Assessment Platform",
    overview:
      "An interactive cognitive assessment and IQ testing web application featuring timed multi-domain challenges across spatial reasoning, logical deduction, and pattern recognition, backed by automated score normalization and detailed performance breakdowns.",
    year: "2026",
    duration: "4 weeks",
    industry: "EdTech & Cognitive Analytics",
    client: "Personal Engineering Project",
    technologies: ["JavaScript", "React", "HTML5", "CSS3", "Data Structures", "Statistics"],
    role: "Frontend & Logic Engineer",
    githubUrl: "https://github.com/shaharya53/IQ_test",
    featured: false,
    image: "/images/projects/iqtest-main.jpg",
    detailImages: [
      "/images/projects/iqtest-problem.jpg",
      "/images/projects/iqtest-solution1.jpg",
      "/images/projects/iqtest-solution2.jpg",
      "/images/projects/iqtest-summary.jpg",
    ],
    problem: [
      "Most online IQ quizzes suffer from ad-cluttered interfaces, inaccurate scoring metrics, arbitrary time constraints, and lack of domain-specific analytical breakdowns.",
      "Users want a sleek, distraction-free testing environment that assesses multiple intelligence dimensions (logic, spatial, numerical) with immediate, transparent feedback."
    ],
    solution: [
      "Developed a clean, focused single-page testing application with smooth question navigation and automated countdown timer.",
      "Built a standardized scoring algorithm that evaluates difficulty-weighted responses and calculates percentile brackets across cognitive categories.",
      "Implemented persistent local state tracking to prevent progress loss during accidental reloads or disconnects.",
      "Designed an end-of-test interactive analytics summary displaying strengths, domain scores, and time-per-question metrics."
    ],
    challenge:
      "Calibrating a balanced scoring algorithm that accurately reflects cognitive performance across varied problem complexities without bias toward simple speed.",
    summary: [
      "The platform provides a professional, user-friendly cognitive evaluation experience with zero distractions and instant statistical insights.",
      "Codebase is fully open-sourced on GitHub with clean component hierarchy."
    ],
    features: [
      "Interactive multi-question assessment interface with live progress bar",
      "Category-diverse challenges: spatial reasoning, pattern recognition, and logic",
      "Accurate real-time countdown timer with automated submission safeguards",
      "Algorithmic score calculation with standardized percentile benchmark",
      "Comprehensive post-test scorecard with cognitive breakdown visualization",
      "Responsive, accessible design optimized for desktop and mobile browsers"
    ],
  },
  {
    slug: "brewtopia",
    title: "BREWTOPIA – ARTISANAL CAFE & ORDERING PLATFORM",
    category: "Full-Stack Web & E-Commerce",
    tagline: "Artisanal Coffee Ordering Platform with Fluid Customization & Seamless Checkout",
    overview:
      "A full-stack artisanal coffee ordering and cafe experience web application featuring a rich dynamic menu catalog, custom beverage preference builders (roast types, sweetness, milk alternatives), fluid real-time cart state management, and a clean, responsive aesthetic.",
    year: "2026",
    duration: "6 weeks",
    industry: "Food & Beverage / E-Commerce",
    client: "Personal Engineering Project",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/shaharya53/Brewtopia",
    featured: false,
    image: "/images/projects/brewtopia-main.jpg",
    detailImages: [
      "/images/projects/brewtopia-problem.jpg",
      "/images/projects/brewtopia-solution1.jpg",
      "/images/projects/brewtopia-solution2.jpg",
      "/images/projects/brewtopia-summary.jpg",
    ],
    problem: [
      "Coffee lovers ordering specialty beverages online are often frustrated by rigid ordering templates that do not support granular drink customizations (temperature, espresso shots, oat/almond milk, flavor syrups).",
      "Cafes and coffee roasters need a warm, modern web presence that reflects artisanal craft while providing reliable cart synchronization and quick checkout flows."
    ],
    solution: [
      "Engineered an elegant storefront with high-performance product cards, category filters (Brewed Coffee, Espresso, Cold Brews, Pastries), and search.",
      "Designed an intuitive beverage customization drawer enabling patrons to tailor each drink parameter with immediate real-time price adjustment.",
      "Implemented robust cart state management with persistent storage and order review calculations.",
      "Structured clean RESTful API endpoints for menu items, category schemas, and order submissions."
    ],
    challenge:
      "Designing a fluid multi-option modifier system in React where customized drink combinations are accurately serialized into unique cart items with dynamic pricing updates.",
    summary: [
      "Brewtopia delivers a warm, sensory e-commerce experience that boosts ordering speed and customer satisfaction for specialty coffee businesses.",
      "Source code and architecture are fully available on GitHub."
    ],
    features: [
      "Interactive beverage menu with category filtering and instant keyword search",
      "Granular item customization modal (milk selection, roast levels, extra shots)",
      "Real-time cart updates with automatic tax and total calculation",
      "Persistent order state with localStorage backup and error recovery",
      "Modern, warm artisanal UI design inspired by specialty coffee culture",
      "REST API backend architecture with clean data schemas"
    ],
  },
];
