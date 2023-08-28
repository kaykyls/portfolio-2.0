import next from "/public/images/technologies/next.svg";
import react from "/public/images/technologies/react.svg";
import tailwind from "/public/images/technologies/tailwind.svg";
import mongodb from "/public/images/technologies/mongodb.svg";
import nodejs from "/public/images/technologies/nodejs.svg";
import express from "/public/images/technologies/express.svg";
import reduxToolkit from "/public/images/technologies/reduxToolkit.svg";
import bootstrap from "/public/images/technologies/bootstrap.svg";
import typescript from "/public/images/technologies/typescript.svg";
import firebase from "/public/images/technologies/firebase.svg";
import mysql from "/public/images/technologies/mysql.svg";
import c from "/public/images/technologies/c.svg";
import java from "/public/images/technologies/java.svg";
import python from "/public/images/technologies/python.svg";
import git from "/public/images/technologies/git.svg";
import figma from "/public/images/technologies/figma.svg";
import vercel from "/public/images/technologies/vercel.svg";
import netlify from "/public/images/technologies/netlify.svg";
import sass from "/public/images/technologies/sass.svg";
import javascript from "/public/images/technologies/javascript.svg";
import css from "/public/images/technologies/css.svg";
import html from "/public/images/technologies/html.svg";
import jwt from "/public/images/technologies/jwt.svg";

interface Technology {
    name: string,
    icon: string
}

const technologies: Technology[] = [
   {
        name: "Next",
        icon: next
   },
   {
        name: "React",
        icon: react
   },
   {
        name: "Tailwind",
        icon: tailwind
   },
   {
        name: "MongoDB",
        icon: mongodb
   },
   {
        name: "NodeJS",
        icon: nodejs
   },
   {
        name: "Express",
        icon: express
   },
   {
        name: "Redux Toolkit",
        icon: reduxToolkit
   },
   {
        name: "Bootstrap",
        icon: bootstrap
   },
   {
        name: "TypeScript",
        icon: typescript
   },
   {
        name: "Firebase",
        icon: firebase
   },
   {
        name: "MySQL",
        icon: mysql
   },
   {
        name: "C",
        icon: c
   },
   {
        name: "Java",
        icon: java
   },
   {
        name: "Python",
        icon: python
   },
   {
        name: "Git",
        icon: git
   },
   {
        name: "Jwt",
        icon: jwt
   },
   {
        name: "Figma",
        icon: figma
   },
   {
        name: "Vercel",
        icon: vercel
   },
   {
        name: "Netlify",
        icon: netlify
   },
   {
        name: "Sass",
        icon: sass
   },
   {
        name: "JavaScript",
        icon: javascript
   },
   {
        name: "CSS",
        icon: css
   },
   {
        name: "HTML",
        icon: html
   }
];

export default technologies;
