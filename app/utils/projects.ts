import ecommerce from "/public/images/projects/e-commerce.png"
import chatApp from "/public/images/projects/chat-app.png"
import technologies from "./technologies";

interface Technology {
    name: string;
    icon: string;
}

interface Project {
    title: string;
    description: string;
    image: string;
    repository: string;
    demo: string;
    technologies: Technology[];
}

const projects: Project[] = [
    {
        title: "E-Commerce",
        description: "A complete fullstack e-commerce website with admin panel that provides seamless online shopping experiences for users and empowers administrators with efficient control over products, orders, and site settings through an intuitive admin panel.",
        image: ecommerce.src,
        repository: "https://github.com/kaykyls/e-commerce/",
        demo: "https://e-commerce-kaykyls.vercel.app/",
        technologies: technologies.filter(tech => 
            ["Next", "React", "Sass", "Bootstrap", "Redux Toolkit", "Tailwind", "NodeJS", "MongoDB", "Express", "TypeScript"].includes(tech.name)
        )
    },
    {
        title: "Chat App",
        description: "A real-time chat application made with React and Firebase that enables seamless and instant communication, offering real-time message synchronization and a user-friendly interface for a dynamic chatting experience.",
        image: chatApp.src,
        repository: "https://github.com/kaykyls/chat-app/",
        demo: "https://chat-app-kaykyls.vercel.app/",
        technologies: technologies.filter(tech => 
            ["React", "CSS", "Firebase", "JavaScript"].includes(tech.name)
        )
    }
]

export default projects;