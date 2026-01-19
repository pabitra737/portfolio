import nirmalyaImg from '../assets/nirmalya.png';
import memoryGameImg from '../assets/card-matching.png';
import about3dImg from '../assets/about-3d.png'; // Placeholder for new project
// import rcmImg from '../assets/rcm.png';

export const projects = [
    {
        id: 1,
        name: "Memory Match Game",
        shortDesc: "A fun interactive card matching game to test memory skills.",
        description: "Memory Match Game is a fun and interactive browser game built with HTML, CSS, and JavaScript, where players flip cards to match pairs, enhancing memory and focus through a clean UI and smooth gameplay logic.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        img: memoryGameImg,
        website: "https://pabitragame.netlify.app/",
        github: "https://github.com/pabitra737/card-game",
        status: "Completed",
        duration: "Aug 2024 – Jan 2025"
    },
    {
        id: 2,
        name: "Blood Bank Management System",
        shortDesc: "Internship Project: Healthcare ERP & Front Desk.",
        description: "Internship Project: Designed and developed modules for a Healthcare ERP system, including the Front Desk Module, with barcode handling, dynamic AG Grid tables, and jQuery-based forms, integrated with a Java and Spring Boot backend.",
        tech: ["Java", "Spring Boot", "AG Grid", "jQuery", "HTML5", "CSS3"],
        img: nirmalyaImg,
        website: "https://www.nerp.in/",
        github: "", // Private project maybe?
        status: "Completed",
        duration: "Jun 2025 – Sep 2025"
    },
    {
        id: 3,
        name: "Upcoming Project",
        shortDesc: "A new web application currently in development.",
        description: "This project is currently under active development. Stay tuned for updates!",
        tech: ["React.js", "Tailwind CSS"],
        img: about3dImg,
        website: "",
        github: "",
        status: "Developing",
        duration: "In Progress"
    }
];
