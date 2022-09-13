const dataDiscover = [
  {
    id: "1",
    name: "suthatla",
  },
  {
    id: "2",
    name: "mackedoi",
  },
  {
    id: "3",
    name: "sansangthaydoi",
  },
  {
    id: "4",
    name: "7749hieuung",
  },
  {
    id: "5",
    name: "genzlife",
  },
  {
    id: "6",
    name: "viettot",
  },
  {
    id: "7",
    name: "nhaccodien",
  },
  {
    id: "8",
    name: "laptrinhkhongkho",
  },
  {
    id: "9",
    name: "hocjssaochodung",
  },
  {
    id: "10",
    name: "bandangnghigi",
  },
];
const randomDiscover = () => {
  const randomIndex: any=
    dataDiscover[Math.floor(Math.random() * dataDiscover.length)].id;
    return [dataDiscover[randomIndex], dataDiscover[randomIndex]] = [
    dataDiscover[1],
    dataDiscover[1],
  ];
};


const introData = [
    {
        id: 1,
        name: "Introduce",
        link: ""
    },
    {
        id: 2,
        name: "Tiktok Browse",
        link: ""
    },
    {
        id: 3,
        name: "New",
        link: ""
    },
    {
        id: 4,
        name: "Contact",
        link: ""
    },
    {
        id: 5,
        name: "Career ByteDance",
        link: ""
    },
  
]
const tiktokDeveloperData = [
    {
        id: 1,
        name: "Tiktok for Good",
        link: ""
    },
    {
        id: 2,
        name: "Advertisement",
        link: ""
    },
    {
        id: 3,
        name: "Transparency",
        link: ""
    },
    {
        id: 4,
        name: "Developers",
        link: ""
    },
    {
        id: 5,
        name: "Developers",
        link: ""
    },
    {
        id: 6,
        name: "TikTok Rewards",
        link: ""
    },
]
const helpData = [
    {
        id: 1,
        name: "Help",
        link: ""
    },
    {
        id: 2,
        name: "Safe",
        link: ""
    },
    {
        id: 3,
        name: "Rules",
        link: ""
    },
    {
        id: 4,
        name: "Privacy",
        link: ""
    },
    {
        id: 5,
        name: "HelCreator Portalp",
        link: ""
    },
    {
        id: 6,
        name: "Community Guide",
        link: ""
    },
]

export { randomDiscover, dataDiscover, introData,tiktokDeveloperData,helpData };
