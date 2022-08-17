import React from "react";

export const darkMode = true;

export const googleTag = "GTM-NB3LHGP";

export const workableURL =
  "https://ganymede.workable.com/spi/v3/jobs?state=published";

export const fromEmail = "website@ganymede.bio"
export const toEmail = "hello@ganymede.bio"
export const imageHostURL = "https://ganymede-bio.mo.cloudinary.net"

export const careerSortOrder = new Map([
  ["Software Engineer (Full Stack)", 3],
  ["Senior Software Engineer (Devices)", 4],
  ["Senior Software Engineer (Full Stack)", 4],
  ["Senior Lab Automation Engineer", 4],
  ["Senior Software Engineer (Backend/Infra)", 5],
  ["Staff Software Engineer (Full Stack)", 6],
  ["Staff Software Engineer (Backend/Infra)", 6],
  ["Forward-Deployed Software Engineer", 5],
  ["Customer Solutions Engineer", 5],
  ["Flexible Inquiry", 5],
]);

export const people = [
  {
    name: "Sami Belkadi",
    role: "Founding Engineer",
    imageUrl: "/people/headshot_sami_belkadi.png",
    linkedinUrl: "https://www.linkedin.com/in/sami-belkadi/",
    focus: "Lab Auto | Hardware",
    blurb: [
      "Sami was previously an Automation Engineer at HighRes Biosolutions, ",
      "where he deployed robotic lab automation platforms in pharmaceutical and biotech labs.  ",
      "He holds a BSE in Mechanical and Aerospace Engineering from Princeton University."]
  },
  {
    name: "Andy Caruso",
    role: "Founding Engineer",
    imageUrl: "/people/headshot_andy_caruso.png",
    linkedinUrl: "https://www.linkedin.com/in/carusoandy",
    githubUrl: "https://github.com/carusooo",
    focus: "Cloud Infra | Quality",
    blurb: [
      "Former Software Engineer at Alphabet. ",
      "Andy built infrastructure management platform at Verily, ",
      "and ran releases at YouTube, Chrome.",
    ],
  },
  {
    name: "Alan Chramiec PhD",
    role: "Founding Scientist",
    imageUrl: "/people/headshot_alan_chramiec.png",
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/alan-chramiec/",
    focus: "Sales Ops | Business | People",
    blurb: ["A scientist by training, Alan has more than a decade of biomedical research ",
      "experience leading collaborations across 10+ world-class research institutions and ",
      "medical centers.  Co-founded the Center for Epigenetics Research at Memorial Sloan Kettering ",
      "Cancer Center, as well as Nucleate NYC.  He received his PhD in biomedical engineering at ",
      "Columbia University, training under Dr. Gordana Vunjak-Novakovic."],
    bulletPoints: [
      "Led the successful launch of the NYC branch of Nucleate, an international organization that facilitates the formation of pioneering life sciences companies",
      "Received PhD training in intersection of biomedical engineering and cancer under Dr. Gordana Vunjak-Novakovic at Columbia University",
      "Co-founded the Center for Epigenetics Research at Memorial Sloan Kettering Cancer Center"]
  },
  {
    name: "Nathan Clark",
    role: "Founder",
    imageUrl: "/people/headshot_nathan_clark.png",
    linkedinUrl: "https://www.linkedin.com/in/nathan-clark-4b850134",
    githubUrl: "https://github.com/nathanwjclark",
    focus: "Product | Design | Engineering",
    blurb: [
      "Former product manager at Benchling and Affirm, ",
      "focused on data and machine learning. Launched ",
      // eslint-disable-next-line react/jsx-key
      <div className="text-regal-purple-light inline">
        <a href="https://www.affirm.com/savings">
          affirm.com/savings
        </a>
      </div>,
    ],
  },
  {
    name: "Danielle Kuhn",
    role: "Founding Engineer",
    imageUrl: "/people/headshot_danielle_kuhn.png",
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/danielle-kuhn/",
    focus: "Full Stack | Software",
    blurb: ["Danielle has spent the past seven years in the software industry, the last three ",
      "as a software engineer focusing on full stack development at early stage companies.  ",
      "Danielle also co-founded a global payments company where she scaled the company from zero to billions ",
      "in total payment volume. Prior to entering the software industry, she worked on analytics as a ",
      "credentialed Actuary for over six years."],
  },
  {
    name: "John La",
    role: "Founding Engineer",
    imageUrl: "/people/headshot_john_la.png",
    linkedinUrl: "https://www.linkedin.com/in/johnla1/",
    focus: "Backend Eng | Systems",
    blurb: [
      "Software Engineer with a degree in Electrical Engineering ",
      "and Computer Science from MIT.  Prior to Ganymede, John was part of Oculus for 4 years, ",
      "developing systems software for the Oculus Go (first standalone VR headset on the market) ",
      "and the Oculus Quest line of devices."]
  },
  {
    name: "Benson Lee",
    role: "Founder",
    imageUrl: "/people/headshot_benson_lee.png",
    linkedinUrl: "https://www.linkedin.com/in/benson-lee-69980745",
    githubUrl: "https://github.com/bensonlee5",
    focus: "Science | Eng | Hardware",
    blurb: [
      "Before founding Ganymede, Benson was Head of Quantitative Markets at Affirm, ",
      "where he built and oversaw quantitative research, deal structuring, and model ",
      "risk management.  He received BS and MEng degrees in Computer Science from Cornell.",
    ],
  },
  {
    name: "Josh Sharpe",
    role: "Founding Engineer",
    imageUrl: "/people/headshot_josh_sharpe.png",
    linkedinUrl: "https://www.linkedin.com/in/joshasharpe/",
    githubUrl: "https://github.com/",
    focus: "Full Stack | Software",
    blurb: [
      "Josh started off his career as a software engineer for IBM Watson where he worked ",
      "on virtual assistant technologies.He then moved into the space industry, working ",
      "on software and systems design for technologies that included lunar landers, radio ",
      "interferometry telescopes, and small electric propulsion vehicles.He graduated from ",
      "the University of Alabama with a BS in Computer Science and an MBA."
    ],
  },
];

export const corporatePrinciples = [
  {
    name: "Improving lives through better medicine",
    description:
      "we’re intensely driven by our mission to improve software infrastructure in life sciences, and believe that commercial success is a powerful lever for coordinating talents to build for society.",
  },
  {
    name: "Transparency",
    description:
      "we are one team, and hold that openness is foundational to ensuring fairness, and that our actions tie to our shared mission.",
  },
  {
    name: "Kindness",
    description:
      "we come from a future where all human beings are treated with dignity, inclusivity, and active empathy, so we apply that to ourselves first in how we hire and treat each other.",
  },
  {
    name: "Accountability",
    description:
      "we believe that trust is the basis for building anything substantial, and stems from our being accountable to ourselves and each other.",
  },
];
