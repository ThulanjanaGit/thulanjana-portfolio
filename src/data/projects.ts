import type { Project } from "../types";
import { screenshot } from "../utils/screenshots";

// Projects in the order shown, newest first. Each has a case-study page at
// /projects/<slug>; the "next project" link at its foot follows this order.
export const PROJECTS: Project[] = [
  {
    slug: "garci-lanka",
    title: "Garci Lanka Holiday",
    kind: "Travel agency website",
    summary:
      "A Next.js site for a Sri Lankan travel agency: 30 tours in seven categories, five destinations abroad and booking requests that open straight into WhatsApp.",
    year: "2025–2026",
    role: "Full-stack developer, with Rajind Pamoda",
    link: "https://garcilanka.com/",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Bootstrap",
      "Zustand",
      "Vercel",
    ],
    cover: screenshot(
      "garci-lanka/home",
      "Garci Lanka Holiday home page: the headline “Discover Relax” beside photos of a lighthouse and a leopard.",
    ),
    brief: [
      "Garci Lanka Holiday is a travel agency that plans tours of Sri Lanka and trips abroad. It needed a site that shows each package in enough detail to sell it, works on phones, can be found in search and turns interest into a conversation with an agent, since every booking is arranged with the agency rather than paid online.",
      "Rajind Pamoda and I built it together, splitting the frontend and backend work between us. My parts include the home page’s introduction to Sri Lanka, the About page, the Why choose us and Our expert team sections, and the rework of the destinations and packages sections.",
    ],
    build: [
      {
        title: "Content as data",
        description:
          "The sections I built read their text, icons and images from typed data modules, so the agency’s copy changes without touching markup, and the destinations and packages sections share one data structure for every destination abroad.",
      },
      {
        title: "Tour pages from one source",
        description:
          "Tours live in typed data files. App Router dynamic routes render a page for every category and tour, each with its own title and description, and the menu and sitemap are built from the same data.",
      },
      {
        title: "Enquiries over WhatsApp",
        description:
          "The tour, tailor-made, visa and document legalisation forms compose a structured message with dates, travellers and extras such as an airport shuttle, then open a WhatsApp chat with the agency. There is no booking backend to run.",
      },
      {
        title: "Search and sharing",
        description:
          "Pages set their own metadata, JSON-LD describes the agency (TravelAgency, WebSite and BreadcrumbList), and robots rules are generated with the sitemap. Tour pages can be shared to Facebook, X and Pinterest or copied as a link.",
      },
      {
        title: "Consent before analytics",
        description:
          "Google Analytics loads only after a visitor accepts cookies, and a privacy policy page explains what is collected.",
      },
    ],
    screens: [
      {
        image: screenshot(
          "garci-lanka/intro",
          "Home page section “Why Sri Lanka is Special”: six reasons to visit, each in a card with an icon.",
        ),
        caption:
          "The introduction to Sri Lanka on the home page, one of the sections I built.",
      },
      {
        image: screenshot(
          "garci-lanka/phone-home",
          "Garci Lanka Holiday home page on a phone.",
        ),
        caption: "The home page on a phone.",
      },
      {
        image: screenshot(
          "garci-lanka/phone-tour",
          "The “Book This Tour” form on a phone, with a date, tickets and extras.",
        ),
        caption: "Booking a tour on a phone.",
      },
      {
        image: screenshot(
          "garci-lanka/tour",
          "Yala National Park tour page with its highlights, what the tour includes and a “Book This Tour” form.",
        ),
        caption:
          "A tour page: highlights, inclusions and a booking form that opens WhatsApp.",
      },
    ],
    result: [
      "Built as Dream Ceylon Holiday and renamed Garci Lanka Holiday in January 2026, the site is live at garcilanka.com and still growing: visa services and document legalisation pages followed in October 2026.",
    ],
  },
  {
    slug: "kanneliya",
    title: "Kanneliya Travels & Camping",
    kind: "Eco-camping website",
    summary:
      "A one-page Next.js site for camping trips in Kanneliya rainforest, Sri Lanka: prerendered, described for search engines and built around one action, calling to book.",
    year: "2026",
    role: "Full-stack developer, with Rajind Pamoda",
    link: "https://kanneliya.com/",
    technologies: ["Next.js", "React", "Bootstrap", "jQuery", "Vercel"],
    cover: screenshot(
      "kanneliya/home",
      "Kanneliya Travels & Camping home page: the headline “Discover Kanneliya Rainforest” over a waterfall.",
    ),
    brief: [
      "Kanneliya Travels & Camping runs camping trips in the Kanneliya Forest Reserve, a lowland rainforest in Sri Lanka’s Galle District and part of a UNESCO biosphere reserve.",
      "The site had to explain the trip in a few screens, look right on a phone and make it easy to call the camp and book. Rajind Pamoda and I built it together, splitting the work between us.",
    ],
    build: [
      {
        title: "One page, in order",
        description:
          "A slider, what the camp offers (eco cottages, tents, guided tours and campfires), the rainforest itself, a video, the camping options with food and drinks, a photo gallery and a call to book. The camp’s phone number sits in the header, mid-page and in the footer.",
      },
      {
        title: "Next.js 16 on Vercel",
        description:
          "The App Router page is prerendered at build time and served from Vercel’s cache. The slider, lightbox gallery and scroll animations use jQuery plugins (Owl Carousel, Fancybox, Isotope and WOW.js) inside the React app.",
      },
      {
        title: "Described for search",
        description:
          "Title, description, keywords and social cards come from Next.js metadata. JSON-LD marks the camp as a TouristAttraction with its coordinates, and robots.txt and the sitemap are generated.",
      },
      {
        title: "Analytics",
        description: "Google Analytics 4 measures visits.",
      },
    ],
    screens: [
      {
        image: screenshot(
          "kanneliya/about",
          "Section “Sri Lanka’s Pristine Rainforest” with a round photo of the forest and a list of highlights.",
        ),
        caption: "The rainforest section, with what makes the place special.",
      },
      {
        image: screenshot(
          "kanneliya/phone-home",
          "Kanneliya Travels & Camping home page on a phone.",
        ),
        caption: "The first screen on a phone.",
      },
      {
        image: screenshot(
          "kanneliya/phone-camping",
          "Camping options on a phone.",
        ),
        caption: "Camping options on a phone.",
      },
      {
        image: screenshot(
          "kanneliya/camping",
          "Cards for tent camping, rainforest camping and food and drinks above a row of rainforest photos.",
        ),
        caption: "Camping options and the photo gallery.",
      },
    ],
    result: ["The site is live at kanneliya.com."],
  },
  {
    slug: "iihrm",
    title: "IIHRM",
    kind: "HR consultancy website",
    summary:
      "The website of the Intercontinental Institute of Human Resource Management, an HR consultancy in Sri Lanka: its services, consultants and partner programmes, and a page for paying online.",
    year: "2020–2022",
    role: "Full-stack developer, in a team",
    link: "https://iihrm.biz/",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
    cover: screenshot(
      "iihrm/home",
      "IIHRM home page: the headline “We are professional” over a photo of colleagues at laptops, with partner logos down the right edge.",
    ),
    brief: [
      "IIHRM is a human resource and organisational development consultancy in Colombo with regional offices in the Middle East, Africa and Pakistan. Its work covers executive coaching, CEO succession planning, family business advisory and competency assessment.",
      "It needed one place to present a long list of services and consultants to clients in several regions, take payments from clients at home and abroad, and lead to its assessment products. I built it in a team, working on both the frontend and the PHP backend.",
    ],
    build: [
      {
        title: "Services and people",
        description:
          "Pages for each service line, the chief, lead and senior consultants, the directors and advisory council, publications and partner programmes, on a responsive Bootstrap layout.",
      },
      {
        title: "Content from the database",
        description:
          "PHP renders the partner programmes from MySQL, each with its own enquiry form, and the home page loads its current offers from the same API as JSON, so they change without editing HTML.",
      },
      {
        title: "Online payments",
        description:
          "A payment page takes the client’s details and an amount in US dollars or Sri Lankan rupees, with dialling codes for every country, and hands over to a PHP payment endpoint. The redirect back shows a success or failure message.",
      },
      {
        title: "Contact and support",
        description:
          "The validated contact form posts to the same PHP endpoint as the enquiry forms, and the site was kept up to date after launch.",
      },
    ],
    screens: [
      {
        image: screenshot(
          "iihrm/services",
          "Section “Product and services”: the consultancy’s service lines, each with an icon and a short description.",
        ),
        caption: "Product and services: every service line on one page.",
      },
      {
        image: screenshot(
          "iihrm/payment",
          "IIHRM payment page “Pay With Peace Of Mind” with fields for name, email, phone, currency and amount.",
        ),
        caption: "The payment page: details, currency and amount.",
      },
    ],
    result: [
      "The site has been live since 2020 and the payment page since 2022. IIHRM’s assessments run on Test Your Worth, the next case study.",
    ],
  },
  {
    slug: "test-your-worth",
    title: "Test Your Worth",
    kind: "HR assessment platform",
    summary:
      "IIHRM’s competency assessment platform: a storefront that sells assessments in Sinhala, English and Tamil, and a member portal where organisations run them and read the reports.",
    year: "2021–2023",
    role: "Full-stack developer at IIHRM, in a team",
    link: "https://iihrmtestyourworth.com/",
    technologies: ["TypeScript", "PHP", "MySQL", "RxJS", "HTML", "CSS"],
    cover: screenshot(
      "test-your-worth/home",
      "Test Your Worth storefront: the headline “All in one HR assessment tool” over a photo of a man working at a laptop.",
    ),
    brief: [
      "Test Your Worth is IIHRM’s virtual competency assessment deck. It simulates a work setting to measure the competencies a job needs and reports each person’s strengths and development needs.",
      "IIHRM wanted to sell single tests to individuals and run full assessment programmes for organisations, so the platform has two parts: a public storefront and a member portal. I worked on both in a team, across the frontend and the PHP backend.",
    ],
    build: [
      {
        title: "Storefront",
        description:
          "A catalogue of assessments with search, sorting and a language filter for Sinhala, English and Tamil. Each assessment shows its competency code, duration and number of questions and goes into a cart; registration, sign-in and the newsletter use the same API.",
      },
      {
        title: "Competency framework",
        description:
          "In the member portal, administrators define competencies and their levels, group them into assessments and assign assessors, who enter results through a sign-in of their own.",
      },
      {
        title: "Subscriptions and public links",
        description:
          "Organisations subscribe to assessment packages and manage them in the portal, and a public link lets a candidate take an assessment without an account.",
      },
      {
        title: "Reports",
        description:
          "Results become reports that members view in the portal, save as snapshots and export to PDF and Excel.",
      },
      {
        title: "Accounts",
        description:
          "Email activation, password resets, resent links and a lock screen for idle sessions. Administrators and members land on different screens after signing in.",
      },
      {
        title: "One API",
        description:
          "Both apps call a PHP API on MySQL through a small JSON protocol of named actions such as Assessments, Competency, Reports and Subscriptions. The storefront keeps its state in a Redux-style store, and both use RxJS for requests.",
      },
    ],
    screens: [
      {
        image: screenshot(
          "test-your-worth/report",
          "Storefront section “Our Detailed Report” showing a sample development centre report, beside a photo of a climber.",
        ),
        caption: "The storefront shows the kind of report the portal produces.",
      },
      {
        image: screenshot(
          "test-your-worth/phone-portal",
          "Member portal sign-in page on a phone.",
        ),
        caption: "The member portal works on phones too.",
      },
      {
        image: screenshot(
          "test-your-worth/catalogue",
          "Assessment catalogue with a language filter and a list of tests, each with a price and an Add to cart button.",
        ),
        caption: "The catalogue, with the language filter on the left.",
      },
      {
        image: screenshot(
          "test-your-worth/portal",
          "Member portal sign-in page: “Welcome to Test Your Worth”.",
        ),
        caption: "The member portal, where organisations run assessments.",
      },
    ],
    result: [
      "Both parts are live: the storefront at iihrmtestyourworth.com and the member portal at app.iihrmtestyourworth.com.",
    ],
  },
  {
    slug: "paris-disney-shuttle",
    title: "Paris Disney Shuttle",
    kind: "Airport transfer booking site",
    summary:
      "A booking site for a private shuttle service in Paris that prices each transfer between the airports, train stations and Disneyland Paris before the customer commits.",
    year: "2020",
    role: "Full-stack developer, in a team",
    link: "https://parisdisneyshuttle.com/",
    technologies: [
      "TypeScript",
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
    cover: screenshot(
      "paris-disney-shuttle/home",
      "Paris Disney Shuttle home page: a banner of a family, a van and the Disneyland castle with a Find Fare form, above cards for prices and questions.",
    ),
    brief: [
      "Paris Disney Shuttle is a government-approved private shuttle and taxi service. Its eight-seat vans run between Charles de Gaulle, Orly and Beauvais airports, the city’s train stations and Disneyland Paris.",
      "Customers pay the driver at the end of the journey, so the site had to quote a firm price up front, collect what the driver needs (flight number, hotel, number of passengers) and pass the booking to the office. I built it in a team, working on both the booking frontend and the PHP API.",
    ],
    build: [
      {
        title: "Fare finder",
        description:
          "On the home page, choosing a pickup, a drop-off and the group size shows the fare at once, and Book now carries those choices into the booking form. Phones get the system’s own select menus.",
      },
      {
        title: "Two-step booking",
        description:
          "Journey details first: one way or round trip, passengers, pickup, drop-off, date and time. Then the customer’s details, beside a booking summary that updates as each field is filled in.",
      },
      {
        title: "Fields that follow the journey",
        description:
          "An airport or station pickup asks for the flight or train number and where it comes from; places such as Disneyland or La Défense ask for an address or hotel; a round trip adds a return leg with its own pickup and drop-off.",
      },
      {
        title: "Fares and night charges",
        description:
          "The fare for each route and group size comes from the API, as does the price list on the home page. Late-night and early-morning pickups add a €20 night charge per leg, and a round trip adds up both legs.",
      },
      {
        title: "A small JSON API in PHP",
        description:
          "One PHP endpoint answers named actions for destinations, prices, bookings and contact messages, and keeps the data in MySQL. Pickup and drop-off points come from it, grouped into airports, Paris train stations and other places, so a new location needs no code change.",
      },
    ],
    screens: [
      {
        image: screenshot(
          "paris-disney-shuttle/booking",
          "Booking form, step one: four passengers from CDG Airport with a flight number, to Disneyland with a hotel, beside the booking summary.",
        ),
        caption:
          "Step one: an airport pickup asks for the flight, a Disneyland drop-off for the hotel.",
      },
      {
        image: screenshot(
          "paris-disney-shuttle/phone-home",
          "Paris Disney Shuttle home page on a phone.",
        ),
        caption: "The home page on a phone.",
      },
      {
        image: screenshot(
          "paris-disney-shuttle/phone-price",
          "The priced booking summary on a phone.",
        ),
        caption: "The priced summary on a phone.",
      },
      {
        image: screenshot(
          "paris-disney-shuttle/price",
          "Booking form, step two: name, email, phone and notes beside a summary with the night charge and a trip cost of €80.",
        ),
        caption:
          "Step two: the customer’s details beside the priced summary, with the night charge shown on its own line.",
      },
    ],
    result: ["The site is live at parisdisneyshuttle.com."],
  },
];

// The projects on show. With none, the Projects section and its menu link are
// hidden too.
export const VISIBLE_PROJECTS = PROJECTS.filter(({ hidden }) => !hidden);

export const projectPath = (slug: string) => `/projects/${slug}`;
