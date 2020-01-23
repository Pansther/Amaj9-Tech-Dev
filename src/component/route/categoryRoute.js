//import Home from '../../pages/home/index.js';
import NotYetPage from '../../pages/notyet/index.js';
import Mouse from '../../pages/category/mouse/index.js';
import Keyboard from '../../pages/category/keyboard/index.js';
import MousePad from '../../pages/category/mousePad/index.js';
import SSD from '../../pages/category/ssd/index.js';
import HDD from '../../pages/category/hdd/index.js';
import CPU from '../../pages/category/cpu/index.js';

export const categoryRoute = [
  {
    id: 1,
    path: '/mouse',
    component: Mouse,
  },
  {
    id: 2,
    path: '/keyboard',
    component: Keyboard,
  },
  {
    id: 3,
    path: '/mouse-pad',
    component: MousePad,
  },
  {
    id: 4,
    path: '/ssd',
    component: SSD,
  },
  {
    id: 5,
    path: '/hdd',
    component: HDD,
  },
  {
    id: 6,
    path: '/cpu',
    component: CPU,
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
