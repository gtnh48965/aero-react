import Main from "./pages/main";
import Roadmap from "./pages/Roadmap";
import ServicePage from "./pages/ServicePage";
import CasesPage from "./pages/CasesPage";
import ContactsPage from "./pages/СontactsPage";
import ServicesDetailed from "./pages/servDetailed";

export const publicRoutes = [
    {
        path: '/main',
        Component: Main
    },
    {
        path: '/roadmap',
        Component: Roadmap
    },
    {
        path: '/contacts',
        Component: ContactsPage
    },
    {
        path: '/cases',
        Component: CasesPage
    },
    {
        path: '/services',
        Component: ServicePage
    },
    {
        path: '/detailed',
        Component: ServicesDetailed
    }
]