export const darkMode: boolean = true;

export const googleTag: string = "GTM-NB3LHGP";

export const workableURL: string =
  "https://ganymede.workable.com/spi/v3/jobs?state=published";

export const careerSortOrder = new Map([
  ["Software Engineer (Full Stack)", 3],
  ["Senior Software Engineer (Devices)", 4],
  ["Senior Software Engineer (Full Stack)", 4],
  ["Senior Lab Automation Engineer", 4],
  ["Senior Software Engineer (Backend/Infra)", 5],
  ["Staff Software Engineer (Full Stack)", 6],
  ["Staff Software Engineer (Backend/Infra)", 6],
  ["Forward-Deployed Software Engineer", 5],
  ["Flexible Inquiry", 5],
]);

export const people = [
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
      <span className="inline">
        <p className="text-regal-purple-light inline">
          <a href="https://www.affirm.com/savings">affirm.com/savings</a>
        </p>
      </span>,
    ],
  },
  {
    name: "Benson Lee",
    role: "Founder",
    imageUrl: "/people/headshot_benson_lee.png",
    linkedinUrl: "https://www.linkedin.com/in/benson-lee-69980745",
    githubUrl: "https://github.com/bensonlee5",
    focus: "Science | Eng | Hardware",
    blurb: [
      "Former Head of Quant at Affirm and Trader at Citigroup, ",
      "built and ran quantitative research & deal structuring at Affirm",
    ],
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
      "Built infrastructure management platform at Verily,",
      "ran releases at YouTube, Chrome.",
    ],
  },
  {
    name: "John La",
    role: "Founding Engineer",
    imageUrl: "/people/headshot_john_la.png",
    linkedinUrl: "https://www.linkedin.com/in/johnla1/",
    githubUrl: "",
    focus: "Backend Eng | Systems",
    blurb: [""]
  },
  {
    name: "Sami Belkadi",
    role: "Founding Engineer",
    imageUrl: "/people/headshot_sami_belkadi.png",
    linkedinUrl: "https://www.linkedin.com/in/sami-belkadi/",
    githubUrl: "",
    focus: "Lab Auto | Hardware",
    blurb: [""]
  },
  {
    name: "Alan Chramiec",
    role: "Founding Scientist",
    imageUrl: "/people/headshot_alan_chramiec.png",
    linkedinUrl: "https://www.linkedin.com/in/alan-chramiec/",
    githubUrl: "",
    focus: "Sales Ops | Business | People",
    blurb: [""]
  }
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
