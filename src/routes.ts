export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/projects', label: 'Projects', pageFile: 'ProjectsPage' },
  { path: '/barrio-de-salamanca-penthouse', label: 'Barrio De Salamanca Penthouse', pageFile: 'BarrioDeSalamancaPenthousePage' },
];
