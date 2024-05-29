import { Mail, Home, Airplay, Circle } from "react-feather";

export default [
  {
    id: "home",
    title: "داشبورد",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "secondPage",
    title: "کاربران",
    icon: <Mail size={20} />,
    children: [
      {
        id: "userList",
        title: "لیست کاربران",
        icon: <Circle size={12} />,
        navLink: "/UsersList",
      },
      {
        id: "CreateUser",
        title: "ایجاد کاربر",
        icon: <Circle size={12} />,
        navLink: "/CreateUser",
      },      
    ],
  },
  {
    id: "smaplePage",
    title: "Sample Page",
    icon: <Airplay size={20} />,
    // navLink: "/sample",
    children: [
      {
        id: "invoiceList",
        title: "List",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
    ],
  },
];
