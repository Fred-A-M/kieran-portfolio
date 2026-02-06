export const projects = [
  {
    name: "Something",
    client: "Something",
    tagline: "Something",
    description: [
      "Something",
    ],
    image: {image: "/projects/Something/Main.gif", width: 1080, height: 1080},
    gallery: [
      {image: "/projects/Something/1.gif"},
      {image: "/projects/Something/2.jpg"},
      {image: "/projects/Something/3.jpg"},
      {image: "/projects/Something/4.jpg"},
      {image: "/projects/Something/5.jpg", mp4: "/projects/Something/5.mp4", webm: "/projects/Something/5.webm", gif: "/projects/Something/5.gif"},
      {image: "/projects/Something/6.gif"},
    ],
    link: "/work/something",
  },
];

export interface Project {
  name: string;
  client: string;
  tagline: string;
  description: string[];
  image: {
    image: string;
    width?: number;
    height?: number;
  };
  headerImage?: string;
  gallery: {
    image: string, 
    width?: number,
    height?: number,
    stylesWidth?: number,
    mp4?: string,
    webm?: string,
    gif?: string,
  }[];
  video?: string;
  link: string;
}

export const profile = {
  image: "/Something.jpg",
  background: [
    "Kieran Slater is a London-based furniture maker dedicated to creating timeless, handcrafted pieces that blend contemporary design with traditional craftsmanship. Each piece is built with care, usingsustainably sourced materials and time-honoured joinery techniques to ensure beauty, integrity, and longevity.",
    "Driven by a deep respect for natural materials and fine craftsmanship, Kieran’s work celebrates the individuality of wood — its textures, imperfections, and character. From bespoke commissions to limited collections, every design begins with an idea, a sketch, and a commitment to quality that transcends trends.",
    "Kieran trained in furniture design and cabinetmaking before establishing his own workshop in London. His approach balances modern aesthetics with classic techniques, producing work that feels both grounded and refined — made to be lived with, not just looked at.",
    "Whether creating a statement piece for a private home or fitting out a public space, Kieran works closely with clients to ensure each commission reflects their story, their space, and their values.",
    "Furniture should be honest — made to last, made to be used, and made to be loved.",
    "Workshop based in London, UK.",
    "Serving clients across the UK and internationally.",
  ],
  contact: [
    "something@something.com",
    "https://www.instagram.com/something/",
    "https://www.linkedin.com/in/something/",
  ],
  workedWith: [
    {brands: "Something, Something, Something, Something, Something, Something, Something, Something, Something, Something."},
    {charities: "Something, Something, Something, Something, Something, Something, Something, Something, Something, Something."}
  ],
  won: [
    {something: "Something - Something, Something - Something, Something - Something"},
    {something: "Something - Something, Something - Something, Something - Something"},
  ]
}

export const projectsMobile = [
  {
    name: "Something",
    client: "Something",
    tagline: "Something",
    description: [
      "Something",
      "We stepped in with the CPR Bra. The world’s first educational bra to bust the touch\u00A0taboo.",
      "Something",
      "Something",
    ],
    image: {image: "/projects/Something/Main.gif", width: 1080, height: 1080},
    gallery: [
       {image: "/projects/Something/1.gif"},
       {image: "/projects/Something/2.png"},
       {image: "/projects/Something/3.gif"},
       {image: "/projects/Something/4.gif"},
       {image: "/projects/Something/5.jpg"},
       {image: "/projects/Something/6.png"},
       {image: "/projects/Something/7.gif"},
       {image: "/projects/Something/8.gif"},
       {image: "/projects/Something/9.jpg"},
       {image: "/projects/Something/10.jpg"},
       {image: "/projects/Something/11.jpg"},
    ],
    link: "/work/something",
  },
];