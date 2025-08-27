import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Code2Icon } from "lucide-react";

export const DATA = {
    name: "Suryakant Yadav",
    initials: "DV",
    url: "https://myth.site",
    location: "Noida, India",
    locationLink: "https://www.google.com/maps/place/Noida",
    description: "Software Engineer. I love building things.",
    summary:
        "Creative and technically skilled Front End Developer with project-based experience crafting high-performing, responsive web applications using React and Next.js. Proficient in translating UI designs into scalable, optimised code and collaborating in team environments to deliver exceptional user experiences",
    avatarUrl: "/me.jpg",
    skills: [
        "React",
        "Next.js",
        "Javascript",
        "Java",
        "Redux",
        "Git",
        "GitHub",
        "Node.js",
        "TypeScript",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        // { href: "/blog", icon: NotebookIcon, label: "Blog" },
        { href: "/projects", icon: Code2Icon, label: "Blog" },
    ],
    contact: {
        email: "suryakant160502@gmail.com",
        tel: "9076996573",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/Suryakant01",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/suryakant-yadav-6192a224a/",
                icon: Icons.linkedin,

                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/_iamsatyam_",
                icon: Icons.x,

                navbar: true,
            },
            Leetcode: {
                name: "Leetcode",
                url: "https://leetcode.com/u/suryakant160502/",
                icon: Icons.leetcode,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: Icons.email,

                navbar: false,
            },
        },
    },

    work: [
        {
            company: "WarelineTech",
            href: "https://warelinetech.com",
            badges: [],
            location: "Freelance",
            title: "Freelance Web Dev",
            logoUrl:
                "https://warelinetech.com/wp-content/uploads/2025/02/WarelineLightLogo.png",
            start: "Dec 2024",
            end: "Jan 2025",
            description:
                "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
        },
    ],
    education: [
        {
            school: "Galgotias University",
            href: "https://buildspace.so",
            degree: "B.Tech CSE",
            logoUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5EsY5wrVIj_u0bFoOAgQl1pfjMMLQucUxg&s",
            start: "2022",
            end: "2026",
        },
    ],
    projects: [
        {
            title: "Safarnama",
            href: "https://safarnama.themyth.site",
            dates: "July 2024 - Aug 2024",
            active: true,
            description:
                "Tired of the same old boring top-10 travel lists? Me too. I built Safarnama for real travelers to share authentic stories and inspire your next actually amazing adventure.",
            technologies: [
                "React.js",
                "Javascript",
                "Firebase",
                "Bootstrap",
                "React Bootstrap",
                "Material-UI (MUI)",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://safarnama.themyth.site",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video: "https://firebasestorage.googleapis.com/v0/b/safarnama-c075f.appspot.com/o/Assets%2FEntire%20screen%208-24-2025%2003-53-31.mp4?alt=media&token=e8f04f55-b541-4540-9233-4dd0ab8a7455",
        },
        {
            title: "WarelineTech",
            href: "https://warelinetech.com",
            dates: "Dec 2024 - Jan 2025",
            active: true,
            description:
                "Built a full-stack Next.js site for Wareline Tech to showcase services and capture leads, featuring a modern UI, case studies, and a complete careers portal.",
            technologies: [
                "Next.js",
                "Javascript",
                "Cloudinary",
                "Emailjs",
                "TailwindCSS",
                "ShadCN/UI",
                "Framer Motion",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://warelinetech.com",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Suryakant01/WareLineTech",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://firebasestorage.googleapis.com/v0/b/safarnama-c075f.appspot.com/o/Assets%2FEntire%20screen%208-25-2025%2001-48-47.mp4?alt=media&token=d6383ea3-61b0-4322-9a36-71b78a3f0167",
        },
        {
            title: "Grow My Therapy",
            href: "https://grow-mt.themyth.site",
            dates: "July 2025",
            active: true,
            description:
                "A modern, responsive website for a mental health consultancy, detailing services and areas of focus, and providing an easy way for clients to schedule a consultation.",
            technologies: [
                "Next.js",
                "Typescript",
                "TailwindCSS",
                "Vercel"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://grow-mt.themyth.site/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Suryakant01/growMT",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://firebasestorage.googleapis.com/v0/b/safarnama-c075f.appspot.com/o/Assets%2Fgrowmt.mp4?alt=media&token=f87cfb27-05e2-4a31-b8c8-9ef0e941c645",
        },
        {
            title: "Shoporia",
            href: "https://shoporia.themyth.site",
            dates: "Aug 2025",
            active: true,
            description:
                "A modern, full-stack e-commerce application built with React and Go, featuring product browsing, a dynamic shopping cart, secure user authentication, and a complete order management system.",
            technologies: [
                "React.js",
                "Javascript",
                "TailwindCSS",
                "React Hot Toast",
                "GO",
                "Gin",
                "Gorm",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://shoporia.themyth.site",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Suryakant01/Shoporia",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://firebasestorage.googleapis.com/v0/b/safarnama-c075f.appspot.com/o/Assets%2Fshoporia.mp4?alt=media&token=a9df65d9-0759-4e8e-8c28-11600ea2288c",
        },
    ],
    hackathons: [
        {
            title: "Innohacks",
            dates: "April 21th, 2024",
            location: "Ghaziabad, Uttar Pradesh",
            description:
                "Developed a parking solution app for over crowded places inside the city.",
            image: "https://github.com/Suryakant01/ParkIt/blob/main/assets/Images/logo.png?raw=true",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/Suryakant01/ParkIt",
                },
            ],
        },
        {
            title: "Fork It (RIISE)",
            dates: "March 8, 2024",
            location: "IIITD, Delhi",
            description:
                "Built a cool website that helps you discover new recipes and learn all about their nutritional content.",
            image: "https://github.com/Suryakant01/vyay-Engine/blob/main/img/fotor-20240308233642.png?raw=true",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/Suryakant01/vyay-Engine",
                },
            ],
        },
    ],
} as const;
