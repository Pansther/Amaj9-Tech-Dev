/// pages
import Home from '../../pages/home/index.js';
import Category from '../../pages/category/index.js';
import NotYetPage from '../../pages/notyet/index.js';

export const navRoute = [
  {
    id: 1,
    path: '/home',
    component: Home,
  },
  {
    id: 2,
    path: '/category',
    component: Category,
  },
  {
    id: 3,
    path: '/basket',
    component: NotYetPage,
  },
  {
    id: 4,
    path: '/login',
    component: NotYetPage,
  },
];
