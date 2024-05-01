import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anmol Varma', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
  author: 'anmol5varma'
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Anmol Varma',
  subtitle: 'I am a FullStack developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'solo_me.jpg',
  paragraphOne:
    'I’m a fullstack software developer from Bangalore, India. Currently, I work at Zoom. Before Zoom I have worked at Google, Flipkart and McKinsey & Company. I’ve been designing and developing solutions since 2018. I’ve mostly worked with JavaScript, NodeJS and JAVA.',
  paragraphTwo:
    'I have extensively worked on REST APIs and gRPCs, designing micro-service architecture and managing Front end apps. Apart from this, I also like taking sessions and coaching programs for a long-lasting impact.',
  paragraphThree:
    'Although I do have a thing for JS but I believe in using the right tool for the job. A programming language is just a tool!',
  paragraphFour:
    'Beside programming you can also hit me up to discuss football ⚽, chess ♟️, movies/tv-series 🎬 and card tricks 🃏.',
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'good-ipo.jpg',
    title: 'good-ipo',
    info:
      'A CLI tool designed to provide you with an easy and convenient way to access information about current and upcoming Initial Public Offerings (IPOs).',
    info2: '',
    url: 'https://www.npmjs.com/package/good-ipo',
    repo: 'https://github.com/anmol5varma/good-ipo',
  },
  {
    id: nanoid(),
    img: 'json.jpg',
    title: 'JSON-Mocks',
    info:
      'A CLI that creates a mock REST server. One cam simply dump the mock JSON responses with the required endpoint to get API endpoints up and running.',
    info2: '',
    url: 'https://www.npmjs.com/package/json-mocks',
    repo: 'https://github.com/anmol5varma/json-mocks',
  },
  {
    id: nanoid(),
    img: 'excel.jpg',
    title: 'Excel-cms',
    info:
      'The module works by parsing the csv and converting them to JSON files with first value in the column as section heading and all other rows as the content inside the section.',
    info2: '',
    url: '',
    repo: 'https://github.com/anmol5varma/excel-cms',
  },
  {
    id: nanoid(),
    img: 'quiz.jpg',
    title: 'Football quiz',
    info:
      'A PWA that generates a quiz from random 15 questions. It also integrates with whatsapp, telegram, and fb messenger app  to share the site link with friends.',
    info2: '',
    url: 'https://quizzzes.netlify.app/',
    repo: 'https://github.com/anmol5varma/quizzzes',
  },
  {
    id: nanoid(),
    img: 'ipl.png',
    title: 'IPL Wallpaper cli tool',
    info:
      'This npm-cli package sets the wallpaper of the system to the current IPL points table. A sample image available below. We fetch the data from www.iplt20.com/points-table/2020 .',
    info2: '',
    url: 'https://www.npmjs.com/package/ipl-wallpaper',
    repo: 'https://github.com/wallpaper-cli/ipl',
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Super impressed by my elevator pitch?",
  mailBtn: 'Let\'s Talk',
  email: 'https://topmate.io/anmol5varma'
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@anmol5varma',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anmol-varma/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/anmol5varma',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
