import HomePage from "../pages/HomePage/HomePage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import ExperiencePage from "../pages/ExperiencePage/ExperiencePage";
import ProjectDisplay from "../pages/ProjectDisplay/ProjectDisplay";

export const routes = [
    { path: '/', element: HomePage },
    { path: '/projects', element: ProjectsPage },
    { path: '/project/:id', element: ProjectDisplay },
    { path: '/experience', element: ExperiencePage },
]

