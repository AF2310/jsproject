// js/skills.js
// Grade 4 Track: Interactive Skills Showcase Data Model and Behavior

// 1. Skill Data Model: JavaScript array containing at least 8 skills across at least 3 categories
const skillsData = [
    {
        id: 1,
        name: "Responsive Layouts (HTML/CSS)",
        category: "Frontend",
        proficiency: 5,
        yearsExperience: 2.0,
        description: "Creating accessible, responsive multi-column layouts using CSS Grid, Flexbox, and semantic HTML5."
    },
    {
        id: 2,
        name: "Vanilla JavaScript (DOM & ES6+)",
        category: "Frontend",
        proficiency: 4,
        yearsExperience: 1.5,
        description: "Building interactive, accessible single-page components, event pipelines, and client validation engines."
    },
    {
        id: 3,
        name: "TypeScript & React",
        category: "Frontend",
        proficiency: 3,
        yearsExperience: 1.0,
        description: "Developing component-driven web applications with robust static typing and modern Vite tooling."
    },
    {
        id: 4,
        name: "Java & JavaFX",
        category: "Core Languages",
        proficiency: 4,
        yearsExperience: 2.5,
        description: "Engineering object-oriented desktop client software with clean event-driven GUI architecture."
    },
    {
        id: 5,
        name: "C# & .NET Windows Forms",
        category: "Core Languages",
        proficiency: 3,
        yearsExperience: 1.5,
        description: "Authoring desktop automation utilities to manage .NET projects, solution builds, and CLI tasks."
    },
    {
        id: 6,
        name: "Python Scripting & Automation",
        category: "Backend",
        proficiency: 4,
        yearsExperience: 2.0,
        description: "Developing automated analysis scripts, system tools, and local LLM-assisted testing workflows."
    },
    {
        id: 7,
        name: "Relational Databases & SQL",
        category: "Backend",
        proficiency: 4,
        yearsExperience: 2.0,
        description: "Designing normalized relational database schemas, handling transactions, and writing MySQL queries."
    },
    {
        id: 8,
        name: "Git Version Control",
        category: "Tools & Security",
        proficiency: 5,
        yearsExperience: 2.5,
        description: "Maintaining structured development histories, collaborative workflows, and multi-branch repositories."
    },
    {
        id: 9,
        name: "Automated Security Assessment",
        category: "Tools & Security",
        proficiency: 3,
        yearsExperience: 1.0,
        description: "Configuring containerized scanning pipelines and testing for common web vulnerabilities."
    }
];
