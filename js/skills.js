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

// 2. DOM Component Builder: creates a single .skill-card element
function createSkillCard(skill) {
    const card = document.createElement('article');
    card.className = 'skill-card';
    card.setAttribute('data-id', skill.id);
    card.setAttribute('data-category', skill.category);
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${skill.name} (${skill.category}), proficiency ${skill.proficiency} out of 5, ${skill.yearsExperience} years experience`);

    // Card Header: Name and Category Badge
    const header = document.createElement('div');
    header.className = 'skill-card-header';

    const title = document.createElement('h3');
    title.className = 'skill-card-title';
    title.textContent = skill.name;

    const badge = document.createElement('span');
    badge.className = 'skill-badge';
    badge.textContent = skill.category;

    header.appendChild(title);
    header.appendChild(badge);

    // Card Meta: Proficiency Dots and Years of Experience
    const meta = document.createElement('div');
    meta.className = 'skill-meta';

    const proficiencyWrapper = document.createElement('div');
    proficiencyWrapper.className = 'skill-proficiency';
    proficiencyWrapper.setAttribute('aria-label', `Proficiency level: ${skill.proficiency} out of 5`);

    const profLabel = document.createElement('span');
    profLabel.textContent = `Proficiency:`;
    profLabel.style.fontWeight = '600';
    proficiencyWrapper.appendChild(profLabel);

    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'proficiency-dots';
    dotsContainer.setAttribute('aria-hidden', 'true');

    for (let i = 1; i <= 5; i++) {
        const dot = document.createElement('span');
        dot.className = `proficiency-dot ${i <= skill.proficiency ? 'filled' : ''}`;
        dotsContainer.appendChild(dot);
    }
    proficiencyWrapper.appendChild(dotsContainer);

    const exp = document.createElement('div');
    exp.className = 'skill-experience';
    exp.textContent = `${skill.yearsExperience} ${skill.yearsExperience === 1 ? 'year' : 'years'}`;

    meta.appendChild(proficiencyWrapper);
    meta.appendChild(exp);

    // Card Description
    const desc = document.createElement('p');
    desc.className = 'skill-card-description';
    desc.textContent = skill.description;

    // Assemble Card
    card.appendChild(header);
    card.appendChild(meta);
    card.appendChild(desc);

    return card;
}

// 3. Dynamic Rendering: clears container and renders given array of skill objects
function renderSkills(skills = skillsData) {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;

    // Clear current container content
    grid.innerHTML = '';

    if (!skills || skills.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'skills-empty-state';
        emptyState.textContent = 'No skills match the selected filter criteria.';
        grid.appendChild(emptyState);
        return;
    }

    // Loop through current collection and append cards
    skills.forEach(skill => {
        const cardElement = createSkillCard(skill);
        grid.appendChild(cardElement);
    });
}

// 4. Filtering State and Controls Setup
let currentCategory = 'all';
let currentSort = 'proficiency-desc';

function filterSkillsByCategory(category) {
    if (!category || category === 'all') {
        return [...skillsData];
    }
    return skillsData.filter(skill => skill.category === category);
}

function setupFilterControls() {
    const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
    if (!filterButtons || filterButtons.length === 0) return;

    filterButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const selectedCategory = button.getAttribute('data-category');
            if (!selectedCategory) return;

            currentCategory = selectedCategory;

            // Update aria-pressed attribute and active class across buttons
            filterButtons.forEach(btn => {
                const isActive = (btn === button);
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            });

            // Run combined filter & sort pipeline
            updateSkillsDisplay();
        });

        // Accessible keyboard navigation across filter buttons
        button.addEventListener('keydown', (e) => {
            let targetButton = null;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                targetButton = filterButtons[(index + 1) % filterButtons.length];
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                targetButton = filterButtons[(index - 1 + filterButtons.length) % filterButtons.length];
            } else if (e.key === 'Home') {
                e.preventDefault();
                targetButton = filterButtons[0];
            } else if (e.key === 'End') {
                e.preventDefault();
                targetButton = filterButtons[filterButtons.length - 1];
            }

            if (targetButton) {
                targetButton.focus();
                targetButton.click();
            }
        });
    });
}

// 5. Sorting Logic: sorts a copy of the skills collection by selected criteria
function sortSkills(skills, criteria) {
    const list = [...skills];

    switch (criteria) {
        case 'proficiency-desc':
            return list.sort((a, b) => b.proficiency - a.proficiency);
        case 'experience-desc':
            return list.sort((a, b) => b.yearsExperience - a.yearsExperience);
        case 'name-asc':
            return list.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return list;
    }
}

function setupSortControls() {
    const sortSelect = document.getElementById('skill-sort');
    if (!sortSelect) return;

    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        updateSkillsDisplay();
    });
}

// 6. Combined State Pipeline: Filter -> Sort -> Counter -> Render
function updateSkillsDisplay() {
    // 1. Filter first from the source of truth data array
    const filtered = filterSkillsByCategory(currentCategory);

    // 2. Sort the filtered collection copy
    const sorted = sortSkills(filtered, currentSort);

    // 3. Update counter text feedback
    const counterElement = document.getElementById('skills-counter');
    if (counterElement) {
        counterElement.textContent = `Showing ${sorted.length} of ${skillsData.length} skills`;
    }

    // 4. Render resulting cards
    renderSkills(sorted);
}

// Initialization function called by main.js
function initSkills() {
    setupFilterControls();
    setupSortControls();
    updateSkillsDisplay();
}
