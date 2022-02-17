// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Marcus Tritant",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "À propos de moi";
const about = {
  paragraph:
    "Après une formation à la Passerelle, me voilà à la recherche d'une entreprise Parisienne afin de poursuivre mon alternance en tant que développeur fullstack à la 3WA !",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "React js",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "PHPMyAdmin / MongoDB ...",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Mes Projets";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "Chifoumi",
    name: "Chifoumi",
    skills: ["HTML, CSS, REACT-JS"],
    url: "http://chifoumi-bang.herokuapp.com/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "FitClub",
    name: "FitClub",
    skills: ["HTML, CSS"],
    url: "https://fit-club-crmswav.vercel.app/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "PiggyClicker",
    name: "PiggyClicker",
    skills: ["HTML, CSS, REACT-JS"],
    url: "https://crmswav.github.io/PiggyClicker/",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "APIMétéo",
    name: "API Météo",
    skills: ["HTML, CSS, JS"],
    url: "https://api-meteo-mu.vercel.app/",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "ToDoList",
    name: "ToDoList",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/Crmswav/ToDoList",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Mon Parcours";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #lapasserelle
    id: "misc1",
    name: "La Passerelle",
    url: "https://lapasserelle.school/formations/developpement-web-et-web-mobile/",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "La 3W Academy",
    url: "https://3wa.fr/",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Ma Formation",
    url: "https://3wa.fr/formations/formation-developpeur-informatique/concepteur-developpeur-web-2-ans-alternance/",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Contactez-moi !";
const contact = {
  pitch:
    "Contactez moi pour plus d'information, me proposer un projet, demander un devis, ou simplement me dire bonjour ! Retrouvez mon Github et LinkedIn ci-dessous et téléchargez mon CV ! À bientôt !",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/CrmsWav",
  linkedin: "https://www.linkedin.com/in/marcus-tritant/",
  resume:
    "https://drive.google.com/file/d/11xPkFgEpfJHV2AeLODYp5BrUr3YG4xlx/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
