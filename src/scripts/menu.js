document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
});

import Clarity from "@microsoft/clarity";

const projectId = "pinack8wwl";

Clarity.init(projectId);
Clarity.consent();

