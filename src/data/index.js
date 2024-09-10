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
                        name: "Pratik Solanki",
                        position: "dev wing member",
                        batch: 2022,
                        imageSrc: "pratik.jpeg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/pratik-solanki-a140a7257/",
                        githubProfileUrl: "https://github.com/Pratik2026",
                        email: "pratiksolanki2026@gmail.com",
                    },
                    {
                        name: "Vedant Jain",
                        position: "dev wing member",
                        batch: 2022,
                        imageSrc: "vedant.jpeg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/vedant-jain-4733a4250/",
                        githubProfileUrl: "https://github.com/jainvedant392",
                        email: "jainvedant392@gmail.com",
                    },
                    {
                        name: "Eshaan Modi",
                        position: "dev wing member",
                        batch: 2022,
                        imageSrc: "eshaan.jpg",
                        links: [],
                        linkedInProfileUrl:
                            "www.linkedin.com/in/eshaan-modi-a9a602253",
                        githubProfileUrl: "https://github.com/NightFury742",
                        email: "eshaan122@gmail.com",
                    },
                    {
                        name: "Shraman Paul",
                        position: "dev wing member",
                        batch: 2022,
                        imageSrc: "ShramanPaul.jpg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/shraman-paul-15ba04257/",
                        githubProfileUrl: "https://github.com/shramanpaul",
                        email: "22bcs229@iiitdmj.ac.in",
                    },
                    {
                        name: "Neyati",
                        position: "dev wing member",
                        batch: 2022,
                        imageSrc: "neyati.jpg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/neyati-iiit/",
                        githubProfileUrl: "https://github.com/Doraemon012",
                        email: "neyati28@gmail.com",
                    },
                    {
                        name: "Aditya Ghai",
                        position: "dev wing member",
                        batch: 2022,
                        imageSrc: "Aditya.jpg",
                        links: [],
                        linkedInProfileUrl:
                            " www.linkedin.com/in/aditya-ghai-71326124a",
                        githubProfileUrl: "https://github.com/adityaghai07 ",
                        email: "22bcs011@iiitdmj.ac.in ",
                    },
                    {
                        name: "Shreyans Kataria",
                        position: "dev wing member",
                        batch: 2022,
                        imageSrc: "shreyans.jpg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/shreyans-katariya-501489260/ ",
                        githubProfileUrl: "https://github.com/Shreyans2004 ",
                        email: "22bcs231@iiitdmj.ac.in ",
                    },
                    {
                        name: "Joyee Biswas",
                        position: "dev wing member",
                        batch: 2022,
                        imageSrc: "joyee.jpg",
                        links: [],
                        linkedInProfileUrl:
                            " https://www.linkedin.com/in/joyee-biswas-807b53258",
                        githubProfileUrl: "https://github.com/Joyee2004 ",
                        email: "22bcs116@iiitdmj.ac.in ",
                    },
                    {
                        name: "Dhruv Parmar",
                        position: "dev wing member",
                        batch: 2022,
                        imageSrc: "dhruv.jpg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/dhruv-parmar-61b31226b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                        githubProfileUrl: "https://github.com/REC-1104",
                        email: "dhruvparmar110404@gmail.com",
                    },
                    {
                        name: "Shivansh Fulper",
                        position: "dev wing member",
                        batch: 2022,
                        imageSrc: "Shivansh.jpg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/shivansh-fulper-463968223",
                        githubProfileUrl: " https://github.com/Pin4sf ",
                        email: " 22bsm054@iiitdmj.ac.in ",
                    },
                    {
                        name: "Agrim Gupta",
                        position: "dev wing member",
                        batch: 2022,
                        imageSrc: "agrim.jpg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/agrim-gupta-203570265",
                        githubProfileUrl: " https://github.com/Agrim2112",
                        email: "22bcs016@iiitdmj.ac.in",
                    },
                    {
                        name: "Aditya kumar Gupta",
                        position: "dev wing member",
                        batch: 2022,
                        imageSrc: "Aditya_Gupta.jpg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/aditya-kumar-gupta-b52a9426b",
                        githubProfileUrl: "https://github.com/Adi8712",
                        email: "22bcs012@iiitdmj.ac.in",
                    },
                    {
                        name: "Akshay Behl",
                        position: "dev wing member",
                        batch: 2022,
                        imageSrc: "akshay.jpg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/akshay-behl-450661258/",
                        githubProfileUrl: "https://github.com/Captain-T2004",
                        email: "akshaybehl231@gmail.com",
                    },
                    {
                        name: "Prince Bhujethia",
                        position: "dev wing member",
                        batch: 2022,
                        imageSrc: "prince.jpg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/prince-bujethia-60850a1a0/",
                        githubProfileUrl: "https://github.com/PrinceBujethia",
                        email: "22bc200@iiitdmj.ac.in",
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
                        name: "Aryan Pandey",
                        position: "dev wing member",
                        batch: 2021,
                        imageSrc: "aryan_pandey.jpeg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/aryan1113/",
                        githubProfileUrl: "https://github.com/aryan1113",
                        email: "21bec026@iiitdmj.ac.in",
                    },
                    {
                        name: "Sambhav Gupta",
                        position: "dev wing member",
                        batch: 2021,
                        imageSrc: "sambhav.jpeg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/sambhavgupta0705/",
                        githubProfileUrl: "www.github.com/sambhavgupta0705",
                        email: "sambhavwork75@gmail.com",
                    },
                    {
                        name: "Aryan Sharma",
                        position: "dev wing member",
                        batch: 2021,
                        imageSrc: "Aryan_Sharma.jpg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/aryan-sharma-3035b7226/",
                        githubProfileUrl: "https://github.com/salted0dreams",
                        email: "@gmail.com",
                    },
                    {
                        name: "Raman Chaudhary",
                        position: "dev wing member",
                        batch: 2021,
                        imageSrc: "Raman_Chaudhary.jpg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/chinmay-r-joshi/",
                        githubProfileUrl: "https://github.com/ChaudharyRaman",
                        email: "@gmail.com",
                    },
                    {
                        name: "Chinmay Joshi",
                        position: "dev wing member",
                        batch: 2021,
                        imageSrc: "chinmay_joshi.jpg",
                        links: [],
                        linkedInProfileUrl:
                            "https://www.linkedin.com/in/raman-chaudhary-222914229/",
                        githubProfileUrl: "https://github.com/",
                        email: "@gmail.com",
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
            links: [],
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
