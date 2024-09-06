import Pencil from "../../public/Pencil.svg"
import Group from "../../public/Group.svg"
import Graph from "../../public/Graph.svg"
import Rocket from "../../public/Rocket.svg"
import tempPic from "../../public/Rectangle.svg"

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
]

export const homepageData = {
    about: [
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
    details: [
        {
            title: "Why Us",
            desc: [
                "When you need advice regarding a fellowship, who is better equipped than someone who cracked it themselves?",
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
    ],
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
]

export const AlumniData = [
    {
        name: "Sagar Ranglani",
        position: "Coordinator (2007-08)",
        links: {
            linkedin: "#",
            email: "#",
            github: "#",
        },
        imageUrl: "/",
    },
    {
        name: "Sagar Ranglani",
        position: "Coordinator (2007-08)",
        imageUrl: "Sagar.jpeg",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/sagarranglani/",
            githubProfileUrl: "",
            email: "",
        },
    },
    {
        name: "Arpit Garg",
        position: "Coordinator (2015-16)",
        imageUrl: "Arpit.jpeg",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/arpitgarg96/",
            githubProfileUrl: "",
            email: "",
        },
    },
    {
        name: "Sachin Kukreja",
        position: "Co-Coordinator (2015-16)",
        imageUrl: "Sachin.jpeg",
        links: {
            linkedInProfileUrl:
                "https://www.linkedin.com/in/sachin-kukreja-12b318106/",
            githubProfileUrl: "",
            email: "",
        },
    },
    {
        name: "Saurabh Joshi",
        position: "Coordinator (2016-17)",
        imageUrl: "Saurabh.jpeg",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/apptica",
            githubProfileUrl: "https://github.com/Apptica",
            email: "",
        },
    },
    {
        name: "Adarsh Singh",
        position: "Co-Coordinator (2016-17)",
        imageUrl: "Adarsh.jpeg",
        links: {
            linkedInProfileUrl:
                "https://www.linkedin.com/in/adarsh-singh-036985126",
            githubProfileUrl: "",
            email: "",
        },
    },
    {
        name: "Anuraag Singh",
        position: "Coordinator (2017-18)",
        description2: "Co-Coordinator (2016-17)",
        imageUrl: "Anuraag.jpeg",
        links: {
            linkedInProfileUrl:
                "https://www.linkedin.com/in/anuraag-singh-231661113",
            githubProfileUrl: "https://www.github.com/anuraagheisenberg",
            email: "dbaanurag@gmail.com",
        },
    },
    {
        name: "Nakul Arya",
        position: "Coordinator (2017-18)",
        imageUrl: "Nakul.jpeg",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/aryanakul/",
            githubProfileUrl: "",
            email: "",
        },
    },
    {
        name: "Arpan Tarkas",
        position: "Coordinator (2018-19)",
        description2: "Co-Coordinator (2017-18)",
        imageUrl: "Arpan.jpeg",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/arpantarkas",
            githubProfileUrl: "https://github.com/arpantarkas",
            email: "",
        },
    },
    {
        name: "Anuj Singh",
        position: "Co-Coordinator (2018-19)",
        imageUrl: "avatar.png",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/chauhan176",
            githubProfileUrl: "",
            email: "",
        },
    },
    {
        name: "Shivansh Dhiman",
        position: "Co-Coordinator (2018-19)",
        imageUrl: "Shivansh.jpeg",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/shivansh-dhiman",
            githubProfileUrl: "https://github.com/shivansh1010",
            email: "",
        },
    },
    {
        name: "Anshuman Sharma",
        position: "Co-Coordinator (2018-19)",
        imageUrl: "Anshuman.jpeg",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/-anshuman-sharma-",
            githubProfileUrl: "",
            email: "",
        },
    },
    {
        name: "Ajwad Shaikh",
        position: "Coordinator (2019-20)",
        imageUrl: "Ajwad.jpeg",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/ajwad-shaikh",
            githubProfileUrl: "https://www.github.com/ajwad-shaikh",
            email: "",
        },
    },
    {
        name: "Pranav Khiste",
        position: "Co-Coordinator (2019-20)",
        imageUrl: "Pranav.jpeg",
        links: {
            linkedInProfileUrl:
                "https://www.linkedin.com/in/pranav-khiste-2a38a116a",
            githubProfileUrl: "",
            email: "",
        },
    },
    {
        name: "Shrey Goel",
        position: "Co-Coordinator (2019-20)",
        imageUrl: "Shrey.jpeg",
        links: {
            linkedInProfileUrl:
                "https://www.linkedin.com/in/shrey-goel-21492194",
            githubProfileUrl: "",
            email: "",
        },
    },
    {
        name: "Priyansh Garg",
        position: "Coordinator (2020-22)",
        imageUrl: "priyansh.jpeg",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/priyansh3133/",
            githubProfileUrl: "https://github.com/garg3133",
            email: "",
        },
    },
    {
        name: "Manan Jethwani",
        position: "Co-Coordinator (2020-21)",
        imageUrl: "Manan.jpeg",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/manan-jethwani",
            githubProfileUrl: "https://www.github.com/mananjethwani",
            email: "",
        },
    },
    {
        name: "Taara Sinh Aatrey",
        position: "Co-Coordinator (2020-21)",
        imageUrl: "Tara.jpeg",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/aatrey07",
            githubProfileUrl: "https://github.com/Taara-Sinh-Aatrey",
            email: "taarasinh1@gmail.com",
        },
    },
    {
        name: "Himanshu Aggarwal",
        position: "Co-Coordinator (2021-22)",
        imageUrl: "Himanshu.jpeg",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/himanshu0923/",
            githubProfileUrl: "https://www.github.com/HimanShu0923",
            email: "",
        },
    },
    {
        name: "Aksh Bansal",
        position: "Co-Coordinator (2021-22)",
        imageUrl: "Aksh.jpeg",
        links: {
            linkedInProfileUrl:
                "https://www.linkedin.com/in/aksh-bansal-0a1073200/",
            githubProfileUrl: "https://github.com/Aksh-Bansal-dev",
            email: "",
        },
    },
    {
        name: "Priyansh Mehta",
        position: "Co-Coordinator (2022-23)",
        imageUrl: "PriyanshMehta.jpeg",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/priyansh61",
            githubProfileUrl: "https://github.com/Priyansh61",
            email: "",
        },
    },
    {
        name: "Shashwat Gupta",
        position: "Coordinator (2022-23)",
        imageUrl: "shashwat.jpg",
        links: {
            linkedInProfileUrl: "https://www.linkedin.com/in/masterchief164",
            githubProfileUrl: "https://www.github.com/masterchief164",
            email: "shaswat2001.sg@gmail.com",
        },
    },
]

export const ourEvents = [
    {
        title: "HackByte",
        subtitle: "The Premiere Annual Hackathon !",
        thumb: "hbimage1.jpg",
        web: "https://hackbyte23.live/",
        date: "7th april to 9th april 2023",
        images: [
            "hbimage1.jpg",
            "hbimage3.jpg",
            "hbimage4.jpg",
            "hbimage5.jpg",
            "hbimage6.jpg",
            "hbimage8.jpg",
            "hbimage9.jpg",
        ],
        description:
            "A 3-day global hackathon in hybrid mode, aimed to bring together tech enthusiasts, make them explore the latest trends, share knowledge, and collaborate on innovative projects.",

        priority: true,
    },
    {
        title: "CodeRumble",
        subtitle: "IIIT Jabalpur's flagship team programming contest!",
        thumb: "crlogo.jpg",
        date: "9th September 2023",
        web: "https://coderumble.vercel.app/",
        images: ["crimage2.jpg", "crimage3.jpg", "crimage4.jpg", "crlogo.jpg"],
        description:
            "A 5-hour coding contest and speaker session to create awareness about Competitive Programming Competitions while teaming up with their peers.",
        priority: true,
    },
    {
        title: "BSOC",
        subtitle: "The annual open-source program",
        thumb: "bsoclogo.jpg",
        web: "https://bitbytesummerofcode.netlify.app/",
        date: "May to July 2023",
        description:
            "A 10-week program where participants contribute to open-source projects, learn from mentors, and collaborate with like-minded people.",
        priority: true,
    },
]

export const pastEvents = [
    {
        title: "Touch Type Turbo",
        thumb: "tttlogo.jpg",
        priority: false,
    },
    {
        title: "Blind code FrontEnd",
        thumb: "blindcodefrontendlogo.jpg",
        priority: false,
    },
    {
        title: "ICPC Style Team Contest",
        thumb: "icpcstylecontestlogo.jpg",
        priority: false,
    },
    {
        title: "Esports Event",
        thumb: "esportslogo.jpg",
        priority: false,
    },
    {
        title: "ML Hackathon",
        thumb: "mlhackathonlogo.jpg",

        priority: false,
    },
    {
        title: "Apreta Fons",
        thumb: "apretafonslogo.jpg",
        web: "anjhkj",
        priority: false,
    },
    {
        title: "LockOut",
        thumb: "lockout.jpg",
        priority: false,
    },
    {
        title: "BlindCode",
        thumb: "blindCode.jpg",
        priority: false,
    },
]
