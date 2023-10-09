import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Backend",
    projects: 3,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Frontend",
    projects: 4,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Full stack",
    projects: 2,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finding a solution and solve problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Audaz",
    tenure: "Sep 2022 - Oct 2022",
    role: "Data Science Intern",
    detail:
      "I applied analytical techniques to extract insights from data, aiding in business decisions and refining skills in statistics, programming, and machine learning.",
  },
  {
    place: "Procuzy",
    tenure: "Mar 2023 - Jun 2023",
    role: "Adhoc Tester Intern",
    detail:
      " I conducted unplanned testing of software applications, identifying defects and ensuring optimal performance while gaining hands-on experience in quality assurance practices.",
  },
 
];

export const comments = [
  {
    name: "Amogh",
    post: "Teamate",
    comment:
      "Working with Prasad has been an absolute pleasure. his expertise in the MERN stack is evident in the exceptional web application he delivered effort for our project. his attention to detail, clean code, and ability to troubleshoot complex issues were truly impressive.",
    img: "./people_1.png",
  },
  {
    name: " Dr.Deppu Singh",
    post: "Project Guide",
    comment:
      " Your expertise, attention to detail, and strategic thinking have been instrumental in ensuring a seamless and efficient integration. Your ability to lead the team, navigate challenges made an invalueable Project. ",
    img: "./people1.png",
  },
  {
    name: "Inchara",
    post: "Teamate",
    comment:
      " What I appreciate most is his commitment to writing maintainable code and his proactive approach to problem-solving. I look forward to the opportunity to work with Mahadeva Prasad again.",
    img: "./people_2.png",
  },
  {
    name: "Madhusudhan",
    post: "Team mate",
    comment:
      "I've had the privilege of having Prasad on our Project team for over two years. hey have consistently delivered robust and scalable solutions, and their ability to adapt to new challenges is commendable.  ",
    img: "./people_3.png",
  },
  {
    name: "Adithya",
    post: "Collegue",
    comment:
      "I've been working closely with Prasad on our latest project, and their skills as a MERN stack developer have been truly impressive. They have a deep understanding of both the frontend and backend aspects of the stack. ",
    img: "./people_1.png",
  },
  
    ``
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
