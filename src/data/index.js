import Pencil from "../../public/Pencil.svg";
import Group from "../../public/Group.svg";
import Graph from "../../public/Graph.svg";
import Rocket from "../../public/Rocket.svg";
import tempPic from "../../public/Rectangle.svg";

/* 
  Structure of teamsData: [
    teamName: "Name of the wing",
    mockCards: [ //* Array of cards to show in Container
      { //* TicketCard component props
        name: "Name of the member",
        position: "Position of the member",
        ImageSRC: "Image source of the member",
        links: {
          linkedin: "linkedin link",
          github: "github link",
          instagram: "instagram link",
        },
      },
    ],
    batches: [ //* Array of batches to show in Modal
      {
        batchName: "Name of the batch",
        batchMembers: [ //* Array of members in the batch to show in carousel
          { //* TicketCard component props
            name: "Name of the member",
            position: "Position of the member",
            ImageSRC: "Image source of the member",
            links: {
              linkedin: "linkedin link",
              github: "github link",
              instagram: "instagram link",
            },
          },
        ],
      },
    ],
  ]
*/

/*
structure of projectsData:[
  {
    titile: "Name of the project",
    image: "Image source of the project",
    description: "Description of the project",
    links: {
      github: "github link",
      website: "website link",
    },
  },
]
*/

export const teamsData = [
  {
    teamName: "Office Bearers", // Title for Container for closed Modal
    mockCards: [
      // Array of cards to show in Modal
      {
        name: "Shashwat Gupta",
        position: "Coordinator",
        ImageSRC: "Test image src",
        links: "Test links",
      },
      {
        name: "Priyansh Mehta",
        position: "Co-coordinator",
        ImageSRC: "Test image src",
        links: "Test links",
      },
    ],
    allCards: [
      {
        name: "Shashwat Gupta",
        position: "Coordinator",
        ImageSRC: "Test image src",
        links: "Test links",
      },
      {
        name: "Priyansh Mehta",
        position: "Co-coordinator",
        ImageSRC: "Test image src",
        links: "Test links",
      },
      {
        name: "Ramgopal",
        position: "Nobody",
        ImageSRC: "Test image src",
        links: "Test links",
      },
      {
        name: "Kaarti",
        position: "Nobody",
        ImageSRC: "Test image src",
        links: "Test links",
      },
    ],
  },
  {
    teamName: "Developers", // Title for Container for closed Modal
    mockCards: [
      {
        name: "Shashwat Gupta",
        position: "Coordinator",
        ImageSRC: "Test image src",
        links: "Test links",
      },
      {
        name: "Priyansh Mehta",
        position: "Co-coordinator",
        ImageSRC: "Test image src",
        links: "Test links",
      },
    ],
    batches: [
      // Array of batches to show in Modal
      {
        batchName: "2022 batch",
        batchMembers: [
          {
            name: "Rishikesh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Eeshan",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Samaksh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Parth",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Kushagra",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Akash Paloju",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Pratik Solanki",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
        ],
      },
      {
        batchName: "2021 batch",
        batchMembers: [
          {
            name: "Rishikesh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Eeshan",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Samaksh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Parth",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Kushagra",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Akash Paloju",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Pratik Solanki",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
        ],
      },
      {
        batchName: "2020 batch",
        batchMembers: [
          {
            name: "Rishikesh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Eeshan",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Samaksh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Parth",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Kushagra",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Akash Paloju",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Pratik Solanki",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
        ],
      },
    ],
  },
  {
    teamName: "Competitive Programmers", // Title for Container for closed Modal
    mockCards: [
      {
        name: "Shashwat Gupta",
        position: "Coordinator",
        ImageSRC: "Test image src",
        links: "Test links",
      },
      {
        name: "Priyansh Mehta",
        position: "Co-coordinator",
        ImageSRC: "Test image src",
        links: "Test links",
      },
    ],
    batches: [
      // Array of batches to show in Modal
      {
        batchName: "2022 batch",
        batchMembers: [
          {
            name: "Rishikesh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Eeshan",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Samaksh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Parth",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Kushagra",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Akash Paloju",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Pratik Solanki",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
        ],
      },
      {
        batchName: "2021 batch",
        batchMembers: [
          {
            name: "Rishikesh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Eeshan",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Samaksh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Parth",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Kushagra",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Akash Paloju",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Pratik Solanki",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
        ],
      },
      {
        batchName: "2020 batch",
        batchMembers: [
          {
            name: "Rishikesh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Eeshan",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Samaksh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Parth",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Kushagra",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Akash Paloju",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Pratik Solanki",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
        ],
      },
    ],
  },
  {
    teamName: "Designers", // Title for Container for closed Modal
    mockCards: [
      {
        name: "Shashwat Gupta",
        position: "Coordinator",
        ImageSRC: "Test image src",
        links: "Test links",
      },
      {
        name: "Priyansh Mehta",
        position: "Co-coordinator",
        ImageSRC: "Test image src",
        links: "Test links",
      },
    ],
    batches: [
      // Array of batches to show in Modal
      {
        batchName: "2022 batch",
        batchMembers: [
          {
            name: "Rishikesh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Eeshan",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Samaksh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Parth",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Kushagra",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Akash Paloju",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Pratik Solanki",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
        ],
      },
      {
        batchName: "2021 batch",
        batchMembers: [
          {
            name: "Rishikesh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Eeshan",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Samaksh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Parth",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Kushagra",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Akash Paloju",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Pratik Solanki",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
        ],
      },
      {
        batchName: "2020 batch",
        batchMembers: [
          {
            name: "Rishikesh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Eeshan",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Samaksh",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Parth",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Kushagra",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Akash Paloju",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
          {
            name: "Pratik Solanki",
            position: "Test position",
            ImageSRC: "Test image src",
            links: "Test links",
          },
        ],
      },
    ],
  },
];


export const homepageData = {
  about:[
    {
      title: "Design",
      ImageSRC: Pencil,
    },
    {
      title: "Develop",
      ImageSRC: Group,
    },
    {
      title: "Test",
      ImageSRC: Graph,
    },
    {
      title: "Deploy",
      ImageSRC: Rocket,
    },
  ],
  details:[
    {
      title: "Why Us",
      desc: [
        "When you need advice regarding a fellowship, who is better equipped than someone who cracked it themselves\?",
        "We are a team of skilled developers who have made it to GSoC, MLH and other prestigious programs, and top level competitive coders who have achieved ranks in ICPC, Google Hashcode, CodeJam and FaceBook HackerCup.", 
        "A strong and supportive alumni network which will help you get a career boost.",
      ],
      image: "",
    },
    {
      title: "Mission",
      desc: [
        "We, including students from freshman year to final year, aim to create a thriving coding environment for developers like you to ensure community learning.",
      ],
      image: tempPic,
    },
    {
      title: "Vision",
      desc: [
        "We focus on covering a wide spectrum of technologies to constantly expand the scope of the club so that each one of you feels included.",
      ],
      image: tempPic,
    },
  ]
}

export const projectsData = [
  {
    title: "Project 1",
    image: "Project image src",
    description:
      "Ut veniam dolore nulla officia. Veniam veniam quis commodo quis nisi Lorem. Minim tempor laborum eu velit esse qui irure pariatur mollit aliqua exercitation esse. Exercitation fugiat adipisicing excepteur laboris esse non. Nulla culpa ut laboris eiusmod non magna non in elit sint sint. Laborum pariatur proident laborum culpa ex Lorem aliquip labore magna labore. Anim ut magna minim occaecat cillum adipisicing occaecat deserunt velit labore minim laboris.",
    links: {
      github: "Project github link",
      website: "Project website link",
    },
  },
  {
    title: "Project 2",
    image: "Project image src",
    description:
      "Ut veniam dolore nulla officia. Veniam veniam quis commodo quis nisi Lorem. Minim tempor laborum eu velit esse qui irure pariatur mollit aliqua exercitation esse. Exercitation fugiat adipisicing excepteur laboris esse non. Nulla culpa ut laboris eiusmod non magna non in elit sint sint. Laborum pariatur proident laborum culpa ex Lorem aliquip labore magna labore. Anim ut magna minim occaecat cillum adipisicing occaecat deserunt velit labore minim laboris.",
    links: {
      github: "Project github link",
      website: "Project website link",
    },
  },
  {
    title: "Project 3",
    image: "Project image src",
    description:
      "Ut veniam dolore nulla officia. Veniam veniam quis commodo quis nisi Lorem. Minim tempor laborum eu velit esse qui irure pariatur mollit aliqua exercitation esse. Exercitation fugiat adipisicing excepteur laboris esse non. Nulla culpa ut laboris eiusmod non magna non in elit sint sint. Laborum pariatur proident laborum culpa ex Lorem aliquip labore magna labore. Anim ut magna minim occaecat cillum adipisicing occaecat deserunt velit labore minim laboris.",
    links: {
      github: "Project github link",
      website: "Project website link",
    },
  },
  {
    title: "Project 4",
    image: "Project image src",
    description:
      "Ut veniam dolore nulla officia. Veniam veniam quis commodo quis nisi Lorem. Minim tempor laborum eu velit esse qui irure pariatur mollit aliqua exercitation esse. Exercitation fugiat adipisicing excepteur laboris esse non. Nulla culpa ut laboris eiusmod non magna non in elit sint sint. Laborum pariatur proident laborum culpa ex Lorem aliquip labore magna labore. Anim ut magna minim occaecat cillum adipisicing occaecat deserunt velit labore minim laboris.",
    links: {
      github: "Project github link",
      website: "Project website link",
    },
  },
  {
    title: "Project 5",
    image: "Project image src",
    description:
      "Ut veniam dolore nulla officia. Veniam veniam quis commodo quis nisi Lorem. Minim tempor laborum eu velit esse qui irure pariatur mollit aliqua exercitation esse. Exercitation fugiat adipisicing excepteur laboris esse non. Nulla culpa ut laboris eiusmod non magna non in elit sint sint. Laborum pariatur proident laborum culpa ex Lorem aliquip labore magna labore. Anim ut magna minim occaecat cillum adipisicing occaecat deserunt velit labore minim laboris.",
    links: {
      github: "Project github link",
      website: "Project website link",
    },
  },
  {
    title: "Project 6",
    image: "Project image src",
    description:
      "Ut veniam dolore nulla officia. Veniam veniam quis commodo quis nisi Lorem. Minim tempor laborum eu velit esse qui irure pariatur mollit aliqua exercitation esse. Exercitation fugiat adipisicing excepteur laboris esse non. Nulla culpa ut laboris eiusmod non magna non in elit sint sint. Laborum pariatur proident laborum culpa ex Lorem aliquip labore magna labore. Anim ut magna minim occaecat cillum adipisicing occaecat deserunt velit labore minim laboris.",
    links: {
      github: "Project github link",
      website: "Project website link",
    },
  },
  {
    title: "Project 7",
    image: "Project image src",
    description:
      "Ut veniam dolore nulla officia. Veniam veniam quis commodo quis nisi Lorem. Minim tempor laborum eu velit esse qui irure pariatur mollit aliqua exercitation esse. Exercitation fugiat adipisicing excepteur laboris esse non. Nulla culpa ut laboris eiusmod non magna non in elit sint sint. Laborum pariatur proident laborum culpa ex Lorem aliquip labore magna labore. Anim ut magna minim occaecat cillum adipisicing occaecat deserunt velit labore minim laboris.",
    links: {
      github: "Project github link",
      website: "Project website link",
    },
  },
  {
    title: "Project 8",
    image: "Project image src",
    description:
      "Ut veniam dolore nulla officia. Veniam veniam quis commodo quis nisi Lorem. Minim tempor laborum eu velit esse qui irure pariatur mollit aliqua exercitation esse. Exercitation fugiat adipisicing excepteur laboris esse non. Nulla culpa ut laboris eiusmod non magna non in elit sint sint. Laborum pariatur proident laborum culpa ex Lorem aliquip labore magna labore. Anim ut magna minim occaecat cillum adipisicing occaecat deserunt velit labore minim laboris.",
    links: {
      github: "Project github link",
      website: "Project website link",
    },
  },
];

