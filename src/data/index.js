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
    ]
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
