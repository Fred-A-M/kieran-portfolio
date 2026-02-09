export const projects = [
  {
    name: "Console",
    date: "09:2025",
    description: [
      "BIRCH PLYWOOD, ALUMINIUM, ACRYLIC",
      "This cabinet combines warmth and precision through a restrained use of materials and detail. Constructed from birch plywood panels framed in brushed aluminium, the piece celebrates its structure rather than concealing it. Exposed fixings and clean lines highlight the junctions where natural wood meets industrial metal, creating a dialogue between craft and manufacture.",
      "The acrylic doors introduce a sense of lightness and transparency, softening the cabinet’s geometric form while allowing the contents to become part of the visual composition. Balanced proportions and considered hardware give the piece a quiet, architectural presence — functional yet sculptural.",
      "Designed and made by Kieran Slater in London, the cabinet reflects his ongoing exploration of honest materials, precise construction, and the space between utility and art.",
    ],
    image: "FULL_1515_nz2se2",
    gallery: [
      {
        image: "DETAIL_1378_zlfots",
        caption: "CAPTION"
      },
      {
        image: "DETAIL_1523_neofly",
        caption: "CAPTION"
      },
    ],
    link: "/work/console0925",
  },
  {
    name: "Teaching Trestles",
    date: "06:2025",
    description: [
      "Something",
    ],
    image: "IMG_0361_qpcjgt",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/trestles0625",
  },
  {
    name: "Hooks",
    date: "03:2025",
    description: [
      "Something",
    ],
    image: "IMG_1867_ajbgi9",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/Hooks0325",
  },
  {
    name: "Rid Unit",
    date: "11:2023",
    description: [
      "Something",
    ],
    image: "IMG_1810_yz7g7z",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/RidUnit1123",
  },
  {
    name: "Mirror",
    date: "09:2023",
    description: [
      "Something",
    ],
    image: "MIRROR_w7ir21",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/Mirror0923",
  },
  {
    name: "Mudlark Chair",
    date: "08:2023",
    description: [
      "Something",
    ],
    image: "Mudlark_DETAIL__Credit_Luke_Fullalove_txyxj3",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/MudlarkChair0823",
  },
  {
    name: "Landrace Upstairs",
    date: "07:2023",
    description: [
      "Something",
    ],
    image: "DSC00903_jueimw",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/Landrace0723",
  },
  {
    name: "Westcombe Dairy Mill Doors",
    date: "05:2023",
    description: [
      "Something",
    ],
    image: "EDIT1_e92h1s",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/something",
  },
  {
    name: "Cafe Doors",
    date: "02:2023",
    description: [
      "Something",
    ],
    image: "IMG_0515_qrxxws",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/something",
  },
  {
    name: "STORE Projects",
    date: "07:2022",
    description: [
      "Something",
    ],
    image: "Store_inside_qcybl7",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/something",
  },
  {
    name: "Stool",
    date: "06:2022",
    description: [
      "Something",
    ],
    image: "IMG_0595_a5ol8j",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/something",
  },
  {
    name: "Chair",
    date: "06:2022",
    description: [
      "Something",
    ],
    image: "Chair7_b5cstj",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/something",
  },
  {
    name: "Landrace Bakery",
    date: "01:2022",
    description: [
      "Something",
    ],
    image: "B3_sftj5w",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/something",
  },
  {
    name: "Mirror",
    date: "12:2021",
    description: [
      "Something",
    ],
    image: "Mirror5_i0rjib",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/something",
  },
  {
    name: "Bed Shed",
    date: "05:2019",
    description: [
      "Something",
    ],
    image: "Openspread_copy_akaktf",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/something",
  },
  {
    name: "Corrugated Sideboard",
    date: "04:2019",
    description: [
      "Something",
    ],
    image: "Y6_kjzxb3",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/something",
  },
  {
    name: "Bench",
    date: "05:2017",
    description: [
      "Something",
    ],
    image: "Bench7_pzgyjh",
    gallery: [
      {image: "/projects/Something/1.gif"},
    ],
    link: "/work/something",
  },
];

export interface Project {
  name: string;
  date: string;
  description: string[];
  image: string,
  gallery: {
    image: string, 
    caption?: string,
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
    "Kieran Slater is a London-based furniture maker dedicated to creating timeless, handcrafted pieces that blend contemporary design with traditional craftsmanship. Each piece is built with care, usingsustainably sourced materials and time-honoured joinery techniques to ensure beauty, integrity,\u00A0and\u00A0longevity.",
    "Driven by a deep respect for natural materials and fine craftsmanship, Kieran’s work celebrates the individuality of wood — its textures, imperfections, and character. From bespoke commissions to limited collections, every design begins with an idea, a sketch, and a commitment to quality that\u00A0transcends\u00A0trends.",
    "Kieran trained in furniture design and cabinetmaking before establishing his own workshop in London. His approach balances modern aesthetics with classic techniques, producing work that feels both grounded and refined — made to be lived with, not just\u00A0looked\u00A0at.",
    "Whether creating a statement piece for a private home or fitting out a public space, Kieran works closely with clients to ensure each commission reflects their story, their space, and\u00A0their\u00A0values.",
    "Furniture should be honest — made to last, made to be used, and made to\u00A0be\u00A0loved.",
    "Workshop based in London, UK.\nServing clients across the UK and internationally.",
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