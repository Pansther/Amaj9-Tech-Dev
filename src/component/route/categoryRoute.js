//import Home from '../../pages/home/index.js';
import NotYetPage from '../../pages/notyet/index.js';
import Mouse from '../../pages/category/mouse/index.js';
import MousePad from '../../pages/category/mousePad/index.js';

export const categoryRoute = [
  {
    id: 1,
    path: '/mouse',
    component: Mouse,
  },
  {
    id: 2,
    path: '/keyboard',
    component: NotYetPage,
  },
  {
    id: 3,
    path: '/mouse-pad',
    component: MousePad,
  },
  {
    id: 4,
    path: '/ssd',
    component: NotYetPage,
  },
  {
    id: 5,
    path: '/hdd',
    component: NotYetPage,
  },
  {
    id: 6,
    path: '/cpu',
    component: NotYetPage,
  },
  {
    id: 7,
    path: '/gpu',
    component: NotYetPage,
  },
  {
    id: 8,
    path: '/ram',
    component: NotYetPage,
  },
  {
    id: 9,
    path: '/mainboard',
    component: NotYetPage,
  },
  {
    id: 10,
    path: '/sound-card',
    component: NotYetPage,
  },
];
