import ecommerce from "/public/images/projects/e-commerce.png"
import chatApp from "/public/images/projects/chat-app.png"
import trivia from "/public/images/projects/trivia.png"
import recipe from "/public/images/projects/recipe.png"
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
    },
    {
        title: "Trivia",
        description: "A trivia game that tests your knowledge of general facts and statistics. It is a single-page application that uses the Open Trivia Database API to fetch questions and answers.",
        image: trivia.src,
        repository: "https://github.com/kaykyls/trivia/",
        demo: "https://trivia-kaykyls.vercel.app/",
        technologies: technologies.filter(tech =>
            ["React", "Sass", "TypeScript", "Redux Toolkit"].includes(tech.name)
        )
    },
    {
        title: "Recipe App",
        description: "A recipe app that allows users to search for recipes and save them to their favorites. It is a single-page application that uses the Spoonacular API to fetch recipes.",
        image: recipe.src,
        repository: "https://github.com/kaykyls/recipe-app/",
        demo: "https://kaykyls-recipe-app.netlify.app/",
        technologies: technologies.filter(tech =>
            ["React", "CSS", "JavaScript"].includes(tech.name)
        )
    }
]

export default projects;