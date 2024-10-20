export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },  
  {
    id: 5,
    name: 'Resume',
    href: 'assets/ajay_solanki_cv.pdf', 
  },
];

export const myProjects = [
  {
    title: 'Maal Banking System - Micro Finance Bank',
    desc: `Maal is a Bank Application mostly used in Nigeria, SA. This application is used for managing the Administration workflow related to the TAJ Bank. 
    Maal is a dynamic and innovative organization that revolutionizes the way individuals manage their financial transactions and investments. 
    With user-centric services, Maal empowers users to take control of their financial well-being by offering seamless solutions for payment management, 
    investments, mobile recharge, and loans.`,
    subdesc: 'Tecnology: Angular, Django, PostgreSQL, TypeScript, Material UI',
    href: '',
    texture: '/textures/project/maal1.mp4',
    logo: 'https://www.svgrepo.com/show/9509/bank.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Angular',
        path: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png',
      },
      {
        id: 2,
        name: 'Django',
        path: 'https://www.svgrepo.com/show/353657/django-icon.svg',
      },
      {
        id: 3,
        name: 'PostgreSQL',
        path: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
      },
      {
        id: 5,
        name: 'Material UI',
        path: 'https://avatars.githubusercontent.com/u/33663932?v=4',
      },

    ],
  },
  {
    title: 'Cowrie - Cryptocurrency Exchange',
    desc:'Cowrie is a cutting-edge cryptocurrency exchange platform based in South Africa. Designed to cater to the growing demand for digital assets, Cowrie offers a seamless experience for buying, selling, and exchanging various cryptocurrencies. With real-time transaction capabilities and a user-friendly interface, Cowrie empowers individuals and businesses to participate in the exciting world of cryptocurrency trading.',
    subdesc: 'Tecnology: React Js, Node Js, Express Js, MongoDB, BootStrap',
    href: '',
    texture: '/textures/project/cowrie.mp4',
    logo: 'https://img.icons8.com/?size=100&id=7748&format=png&color=000000',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'https://www.svgrepo.com/show/354259/react.svg',
      },
      {
        id: 2,
        name: 'Node Js',
        path: 'https://nodejs.org/static/images/logo.svg',
      },
      {
        id: 3,
        name: 'Express Js',
        path: 'https://th.bing.com/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?pid=ImgDet&rs=1',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
      },
      {
        id: 5,
        name: 'Bootstrap',
        path: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
      },
    ],
  },
  {
    title: 'Yasa Student App',
    desc: `Yasa Student App is a comprehensive platform designed to facilitate seamless connections between students and teachers for online classes. 
    The app offers a user-friendly interface for students to explore a wide range of courses, connect with qualified instructors, 
    and participate in interactive virtual classrooms. With its robust features, It empowers students to enhance their learning experience and 
    achieve their academic goals through convenient and flexible online education.`,
    subdesc:'Tecnology: React Js, Node Js, Express Js, MongoDB, BootStrap',
    href: '',
    texture: '/textures/project/yasa.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'https://www.svgrepo.com/show/354259/react.svg',
      },
      {
        id: 2,
        name: 'Node Js',
        path: 'https://nodejs.org/static/images/logo.svg',
      },
      {
        id: 3,
        name: 'Express Js',
        path: 'https://th.bing.com/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?pid=ImgDet&rs=1',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
      },
      {
        id: 5,
        name: 'Bootstrap',
        path: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [3, -6, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 8, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [

  {
    id: 1,
    name: 'Cyber Infrastructure Indore',
    pos: 'Software Developer',
    duration: '05/2023 - present',
    title: `• Designed and implemented scalable system architectures for multiple projects.`,
    titleDes: `• Collaborated with cross-functional teams, adhering to best coding practices and tight deadlines.`,
    titleSubDes: `• Utilized expertise in React, Angular, Node, Express, MongoDB developed live projects with optimizing user interfaces.`,
    icon: '/assets/cislogo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Technovation Unicorns',
    pos: 'Software Engineer Intern',
    duration: '01/2023 - 04/2023',
    title: `• Technovation Unicorns helps me keep my projects organized.`,
    titleDes: `• Developed an Employee Management System utilized design tools for the project planning.`,
    titleSubDes: `• Independently built the project using MERN and proficient in performing CRUD operations.`,
        
    icon: '/assets/techno.jpeg',
    animation: 'salute',
  },
];


export const skills = [
  {
      id: 1,
      title: "Languages",
      skill: [
          {
              id: 1.1,
              name: "JavaScript",
              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
          },

          {
              id: 1.2,
              name: "TypeScript",
              image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
          },
      ]
  },
  {
      id: 2,
      title: "Databases & Cloud",
      skill: [
          {
              id: 2.1,
              name: "MongoDB",
              image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
          },
          {
            id: 2.2,
            name: 'PostgreSQL',
            image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
          },
          {
              id: 2.3,
              name: "MySQL",
              image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
          },
      ]
  },
  {
      id: 3,
      title: "Libraries & Frameworks",
      skill: [
          {
            id:3.1,
            name:'Angular',
            image:'https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png'
          },
          {
            id: 3.2,
            name: "React Js",
            image: 'https://www.svgrepo.com/show/354259/react.svg',
          },
          {
            id: 3.4,
            name: "Express Js",
            image: 'https://th.bing.com/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?pid=ImgDet&rs=1',
          },
          {
            id: 3.5,
            name: "",
            image: "https://nodejs.org/static/images/logo.svg",
          },
          {
            id: 3.6,
            name: "Redux",
            image: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
          },
          {
            id: 3.7,
            name: "Next js",
            image: 'https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png',
          },
          {
            id: 3.3,
            name: "Three Js",
            image: 'https://global.discourse-cdn.com/flex035/uploads/threejs/optimized/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751_2_496x500.png',
          },

      ]
  },
  {
      id: 4,
      title: "UI",
      skill: [
        {
          id: 4.1,
          name: "HTML5",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          id: 4.2,
          name: "CSS3",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
        },
        {
          id: 4.3,
          name: "Bootstrap5",
          image: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
        {
            id: 4.4,
            name: "Material UI",
            image: 'https://avatars.githubusercontent.com/u/33663932?v=4',
        },
        {
          id: 4.5,
          name: "Tailwind CSS",
          image: 'https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp',
        },
        {
          id: 4.6,
          name: "XML",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
        },
      ]
  },
  {
      id: 5,
      title: "Version Control & Deployment",
      skill: [
          {
            id: 5.1,
            name: "Git",
            image: "https://www.pngrepo.com/download/303548/git-icon-logo.png",
          },
          {
            id: 5.2,
            name: "GitHub",
            image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
          },
          {
            id: 5.3,
            name: "Docker",
            image: "https://www.svgrepo.com/show/448221/docker.svg",
          },
          {
            id: 5.4,
            name: "Nginx",
            image: "https://www.svgrepo.com/show/354115/nginx.svg",
          },
          { 
            id: 5.5,
            name: "Vercel",
            image: "https://yt3.ggpht.com/a/AATXAJyIDBA4e3bojKFwANXtkLdQJ2E9tmAhRDJtcw=s900-c-k-c0xffffffff-no-rj-mo",
          },          
          {
            id: 5.6,
            name: "Netlify",
            image: "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
          },

      ]
  },
  {
      id: 6,
      title: "Other Tools",
      skill: [
          {
              id: 6.1,
              name: "Postman",
              image:
                  "https://www.svgrepo.com/show/354202/postman-icon.svg",
          },
          {
              id: 6.2,
              name: "Sublime Text",
              image: "https://www.svgrepo.com/show/452109/sublime-text.svg",
          },
          {
              id: 6.3,
              name: "VS Code",
              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
          },

      ]
  }
];