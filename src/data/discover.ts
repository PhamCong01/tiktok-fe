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

export { randomDiscover, dataDiscover };
