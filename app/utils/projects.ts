import ecommerce from "/public/images/projects/e-commerce.png"
import chatApp from "/public/images/projects/chat-app.png"
import trivia from "/public/images/projects/trivia.png"
import recipe from "/public/images/projects/recipe.png"
import imobiliaria from "/public/images/projects/imobiliaria.png"
import technologies from "./technologies";

interface Technology {
    name: string;
    icon: string;
}

interface Description {
    english: string;
    portuguese: string;
}

interface Project {
    title: string;
    description: Description;
    image: string;
    repository: string;
    demo: string;
    technologies: Technology[];
}

const projects: Project[] = [
    {
        title: "Imobiliária",
        description: {
            english: "A website for a real estate agency, designed specifically to cater to the needs of the agency, offers a user-friendly platform that simplifies property search, enables detailed exploration of available properties, and facilitates direct communication with the agency. Administrators enjoy the capability to effortlessly manage existing property listings and to securely add new properties to the system through a protected administrative portal.",
            portuguese: "Um site para imobiliária, projetado especificamente para atender às necessidades de uma agência de imóveis, oferece uma plataforma amigável ao usuário que simplifica a busca de propriedades, possibilita uma exploração detalhada dos imóveis disponíveis e facilita a comunicação direta com a agência. Os administradores desfrutam da capacidade de gerenciar com facilidade as listagens de propriedades existentes e de adicionar novos imóveis ao sistema de forma segura por meio de um portal administrativo protegido."
        },
        image: imobiliaria.src,
        repository: "https://github.com/kaykyls/imobiliaria",
        demo: "https://imobiliaria-production.up.railway.app/",
        technologies: technologies.filter(tech => 
            ["Laravel", "React", "Tailwind", "MySQL"].includes(tech.name)
        )
    },
    {
        title: "E-Commerce",
        description: {
            english: "(In Development) A complete Full-Stack e-commerce website with admin panel that provides seamless online shopping experiences for users and empowers administrators with efficient control over products, orders, and site settings through an intuitive admin panel.",
            portuguese: "(Em Desenvolvimento) Um e-commerce Full-Stack completo com painel de administração que fornece ótimas experiências de compra online para os usuários e capacita os administradores com controle eficiente sobre produtos, pedidos e configurações do site através de um painel de administração intuitivo."
        },
        image: ecommerce.src,
        repository: "https://github.com/kaykyls/e-commerce/",
        demo: "https://e-commerce-kaykyls.vercel.app/",
        technologies: technologies.filter(tech => 
            ["Next", "React", "Sass", "Bootstrap", "Redux Toolkit", "Tailwind", "NodeJS", "MongoDB", "Express", "TypeScript"].includes(tech.name)
        )
    },
    {
        title: "Chat App",
        description: {
            english: "A real-time chat application made with React and Firebase that enables seamless and instant communication, offering real-time message synchronization and a user-friendly interface for a dynamic chatting experience.",
            portuguese: "Um aplicativo de bate-papo em tempo real feito com React e Firebase que permite uma comunicação instantânea e sem interrupções, oferecendo sincronização de mensagens em tempo real e uma interface amigável para uma experiência de bate-papo dinâmica."
        },
        image: chatApp.src,
        repository: "https://github.com/kaykyls/chat-app/",
        demo: "https://chat-app-kaykyls.vercel.app/",
        technologies: technologies.filter(tech => 
            ["React", "CSS", "Firebase", "JavaScript"].includes(tech.name)
        )
    },
    {
        title: "Trivia",
        description: {
            english: "A trivia game that tests your knowledge of general facts and statistics. It is a single-page application that uses the Open Trivia Database API to fetch questions and answers.",
            portuguese: "Um jogo de trivia que testa seu conhecimento sobre fatos e estatísticas gerais. É uma SPA que utiliza a API do Open Trivia Database para buscar perguntas e respostas."
        },
        image: trivia.src,
        repository: "https://github.com/kaykyls/trivia/",
        demo: "https://trivia-kaykyls.vercel.app/",
        technologies: technologies.filter(tech =>
            ["React", "Sass", "TypeScript", "Redux Toolkit"].includes(tech.name)
        )
    },
    {
        title: "Recipe App",
        description: {
            english: "A recipe app that allows users to search for recipes and see ingredients and instructions. It is a single-page application that uses the Spoonacular API to fetch recipes.",
            portuguese: "Um aplicativo de receitas que permite aos usuários pesquisar receitas e ver os ingredientes e suas instruções. É uma SPA que utiliza a API do Spoonacular para buscar receitas."
        },
        image: recipe.src,
        repository: "https://github.com/kaykyls/recipe-app/",
        demo: "https://kaykyls-recipe-app.netlify.app/",
        technologies: technologies.filter(tech =>
            ["React", "CSS", "JavaScript"].includes(tech.name)
        )
    }
]

export default projects;