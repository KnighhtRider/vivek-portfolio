/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vivek Thakur",
  title: "Hi, I'm Vivek",
  subTitle: emoji(
    "Full-Stack Developer 🚀 skilled in MERN stack, crafting scalable apps with React, Node, MongoDB & Tailwind. Focused on clean code, seamless integrations, and impactful user experiences."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1zOikv1vptMmtOdNxBVQrVVWfkmvyR3HG/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KnighhtRider",
  linkedin: "https://www.linkedin.com/in/vivekthakurr/",
  gmail: "vivekthakur7042@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Full-Stack Developer crafting scalable web apps with modern tech",
  skills: [
    emoji("⚡ Build responsive and interactive UIs with React, Redux Toolkit & Tailwind CSS"),
    emoji("⚡ Develop secure, scalable backends with Node.js, Express & MongoDB"),
    emoji("⚡ Integrate third-party CRMs, Firebase & RESTful APIs for seamless workflows"),
    emoji("⚡ Deploy and manage production-ready apps on Vercel, Netlify, GCS & Hostinger")
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Git / GitHub",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Vercel",
      fontAwesomeClassname: "fas fa-cloud-upload-alt"
    }
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Aryan Institute of Technology, Ghaziabad",
      logo: require("./assets/images/harvardLogo.png"), // using same name
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "2020 – 2023",
      desc: "Graduated with a strong foundation in computer science, software development, and modern technologies.",
      descBullets: [
        "CGPA: 7.6/10",
        "Focused on software engineering, data structures, and full-stack development"
      ]
    },
    {
      schoolName: "Jamia Millia Islamia University, New Delhi",
      logo: require("./assets/images/stanfordLogo.png"), // using same name
      subHeader: "Diploma in Computer Engineering",
      duration: "2017 – 2020",
      desc: "Completed a diploma with hands-on learning in computer engineering, programming, and systems design.",
      descBullets: [
        "CGPA: 8.0/10",
        "Hands-on training in hardware, networking, and application development"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (React, Redux Toolkit, Tailwind CSS)",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend (Node.js, Express, MongoDB, REST APIs)",
      progressPercentage: "80%"
    },
    {
      Stack: "Deployment & Cloud (Vercel, GCS, Firebase, Hostinger)",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming & Data Structures (C++, JavaScript)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full-Stack Developer",
      company: "Digital Rubix - Digital Marketing Company",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "May 2024 – Present",
      desc: "Delivering end-to-end, production-ready digital solutions optimized for scalability, performance, and lead generation.",
      descBullets: [
        "Designed and implemented full-stack applications from planning to deployment using React, Node.js, and cloud services.",
        "Built a scalable, theme-based platform to deliver customized marketing websites at speed.",
        "Integrated APIs, third-party CRMs, and automation tools to streamline lead capture and reporting pipelines.",
        "Optimized deployments across Google Cloud, Hostinger, and Vercel ensuring high availability and fast performance."
      ]
    },
    {
      role: "Full-Stack Web Development Intern",
      company: "Pepcoding Private Limited",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2022 – Nov 2022",
      desc: "Gained hands-on experience in building modern web applications through real-world projects and team collaboration.",
      descBullets: [
        "Delivered an Instagram Clone with secure authentication, CRUD operations, and real-time updates using the MERN stack.",
        "Developed reusable UI components with React and Tailwind CSS to ensure scalability and clean design.",
        "Collaborated with peers to integrate front-end and back-end systems while following best practices in Git and Agile workflows."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
 
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "End-to-end solutions and products I’ve delivered",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Instagram Clone",
      projectDesc:
        "A full-stack social media platform built with React, Node.js, and MongoDB, featuring authentication, posts, likes, and comments to replicate Instagram-like user experience.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/KnighhtRider/instagram-clone" // replace with your repo link
        }
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};