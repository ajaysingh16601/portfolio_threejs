// CORS proxy function to load external images that don't allow cross-origin requests
const corsProxy = (url) => {
  // Use images.weserv.nl as a CORS proxy - it's free, fast, and CORS-enabled
  return `https://images.weserv.nl/?url=${encodeURIComponent(url.replace(/^https?:\/\//, ''))}`;
};

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
        path: corsProxy('https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png'),
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

export const calculateSizes = (isSmall, isMobile) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
  };
};

export const workExperiences = [

  {
    id: 1,
    name: 'Cyber Infrastructure Indore',
    pos: 'Software Developer',
    duration: '05/2023 - present',
    title: `• Designed and implemented scalable system architectures for multiple projects. Developed projects using Angular, React, Node.js, Express.js, Redux, Redux-toolkit, and Material UI.`,
    titleDes: `• Worked closely with the business team to understand and fulfill client requirements. Analyzed client requirements, performed RND and provided accurate project estimates and responses.`,
    titleSubDes: `• Collaborated with cross-functional teams to deliver features and optimize performance. Facilitated clear com-munication with global clients, ensuring project success and satisfaction.`,
    icon: '/assets/cislogo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Technovation Unicorns',
    pos: 'Software Engineer Intern',
    duration: '01/2023 - 04/2023',
    title: `• Developed a full-stack Employee Management System using MERN stack.`,
    titleDes: `• Designed and implemented reusable UI components in React, improving scalability.`,
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
          {
            id: 1.3,
            name: "Python",
            image: corsProxy("https://www.python.org/static/opengraph-icon-200x200.png"),
          }
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
                {
        id: 2.4,
        name: "Redis",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        id: 2.5,
        name: "AWS",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      },
      {
        id: 2.6,
        name: "S3",
        image: corsProxy("https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"),
      },
      {
        id: 2.7,
        name: "ECS",
        image: corsProxy("https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"),
      },
      {
        id: 2.8,
        name: "EC2",
        image: corsProxy("https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"),
      },
      {
        id: 2.9,
        name: "Firebase",
        image: corsProxy("https://www.svgrepo.com/show/353735/firebase.svg"),
      }

      ]
  },
  {
      id: 3,
      title: "Libraries & Frameworks",
      skill: [
        {
          id: 3.1,
          name: "Angular",
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png',
        },
        {
          id: 3.2,
          name: "React Js",
          image: corsProxy("https://www.svgrepo.com/show/354259/react.svg"),
        },
        {
          id: 3.3,
          name: "Express Js",
          image: corsProxy("https://th.bing.com/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?pid=ImgDet&rs=1"),
        },
        {
          id: 3.4,
          name: "",
          image: corsProxy("https://nodejs.org/static/images/logo.svg"),
        },
        {
          id: 3.5,
          name: "Redux",
          image: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
        },
        {
          id: 3.6,
          name: "Next js",
          image: corsProxy("https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"),
        },
        {
          id: 3.7,
          name: "Django",
          image: corsProxy("https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg"),
        },
        {
          id: 3.8,
          name: "jQuery",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
        },
        {
          id: 3.9,
          name: "Framer Motion",
          image: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
        },
        {
          id: 3.10,
          name: "Three Js",
          image: "https://raw.githubusercontent.com/mrdoob/three.js/master/files/icon.svg",
        }
      ]
  },
  {
      id: 4,
      title: "UI",
      skill: [
        {
          id: 4.1,
          name: "HTML5",
          image: corsProxy("https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"),
        },
        {
          id: 4.2,
          name: "CSS3",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
        },
        {
          id: 4.3,
          name: "Bootstrap5",
          image: corsProxy("https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"),
        },
        {
          id: 4.4,
          name: "Material UI",
          image: 'https://avatars.githubusercontent.com/u/33663932?v=4',
        },
        {
          id: 4.5,
          name: "Tailwind CSS",
          image: corsProxy('https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp'),
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
          image: corsProxy("https://www.pngrepo.com/download/303548/git-icon-logo.png"),
        },
        {
          id: 5.2,
          name: "GitHub",
          image: corsProxy("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"),
        },
        {
          id: 5.3,
          name: "Docker",
          image: corsProxy("https://www.svgrepo.com/show/448221/docker.svg"),
        },
        {
          id: 5.4,
          name: "Nginx",
          image: corsProxy("https://www.svgrepo.com/show/354115/nginx.svg"),
        },
        { 
          id: 5.5,
          name: "Bitbucket",
          image: corsProxy("https://assets.streamlinehq.com/image/private/w_100,h_100,ar_1/f_auto/v1/icons/1/bitbucket-2xwd7qtpi4x3szcms2tjkj.png/bitbucket-fg3mcesn2ff3kxijrvhqbk.png?_a=DATAiZAAZAA0"),
        },
        { 
          id: 5.6,
          name: "CI/CD",
          image: corsProxy("https://img.icons8.com/?size=160&id=38VIWX4TT5YQ&format=png"),
        },          
        {
          id: 5.7,
          name: "Netlify",
          image: corsProxy("https://assets.streamlinehq.com/image/private/w_100,h_100,ar_1/f_auto/v1/icons/4/netlify-icon-jgktj1fibrri106wh4ay1a.png/netlify-icon-8k2xdggb0h4jh2vfigdhx.png?_a=DATAiZAAZAA0"),
        },
        {
          id: 5.8,
          name: "Vercel",
          image: "https://yt3.ggpht.com/a/AATXAJyIDBA4e3bojKFwANXtkLdQJ2E9tmAhRDJtcw=s900-c-k-c0xffffffff-no-rj-mo",
        },
        {
          id: 5.9,
          name: "Railway",
          image: corsProxy("https://railway.app/brand/logo-light.svg"),
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
          image: corsProxy("https://www.svgrepo.com/show/354202/postman-icon.svg"),
        },
        {
          id: 6.2,
          name: "Sublime Text",
          image: corsProxy("https://www.svgrepo.com/show/452109/sublime-text.svg"),
        },
        {
          id: 6.3,
          name: "VS Code",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
        {
          id: 6.4,
          name: "Jest",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        },
        {
          id: 6.5,
          name: "JWT",
          image: corsProxy("https://jwt.io/img/pic_logo.svg"),
        },
        {
          id: 6.6,
          name: "OAuth2",
          image: corsProxy("https://oauth.net/images/oauth-logo-square.png"),
        },
        {
          id: 6.7,
          name: "Cursor",
          image: corsProxy("https://www.cursor.com/favicon.ico"),
        },
        {
          id: 6.8,
          name: "Render",
          image: "",
        },
        {
          id: 6.9,
          name: "WebSockets",
          image: "",
        },
        {
          id: 6.10,
          name: "Sentry",
          image: "https://img.icons8.com/?size=160&id=kjmeS4WFp36a&format=png",
        },
      ]
  },
  {
    id: 7,
    title: "Soft/Meta Tools",
    skill: [
      {
        id: 7.1,
        name: "Figma",
        image: "https://img.icons8.com/?size=96&id=zfHRZ6i1Wg0U&format=png",
      },
      {
        id: 7.2,
        name: "Jira",
        image: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
      },
      {
        id: 7.3,
        name: "Slack",
        image: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
      },
      {
        id: 7.4,
        name: "Notion",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
      },
      {
        id: 7.5,
        name: "Trello",
        image: "https://cdn.worldvectorlogo.com/logos/trello.svg",
      }
    ]
  }
];

export const socialLinks = [
  {
    id: 1,
    name: 'GitHub',
    href: 'https://github.com/ajaysingh16601',
    icon: '/assets/github.svg',
    alt: 'github',
  },
  {
    id: 2,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ajaysinghsolanki?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: '/assets/twitter.svg',
    alt: 'linkedin',
  },
  {
    id: 3,
    name: 'Instagram',
    href: 'https://www.instagram.com/ajey.singh.__.01/profilecard/?igsh=MXhjdHVrOTc2MndqaA==',
    icon: '/assets/instagram.svg',
    alt: 'instagram',
  },
  {
    id: 4,
    name: 'Medium',
    href: 'https://medium.com/@ajaysingh16601',
    icon: '/assets/medium.svg',
    alt: 'medium',
  },
  {
    id: 5,
    name: 'X',
    href: 'https://x.com/Ajeysingh01',
    icon: '/assets/x.svg',
    alt: 'x',
  },
];