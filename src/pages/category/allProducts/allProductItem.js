import {mouseProduct} from './mouseProduct.js';
import {keyboardProduct} from './keyboardProduct.js';
import {ssdProduct} from './ssdProduct.js';
import {mousePadProduct} from './mousePadProduct.js';
import {hddProduct} from './hddProduct.js';
import {cpuProduct} from './cpuProduct.js';

export const allProductItem = [
  {
    product_data: mouseProduct,
    path: 'mouse',
  },
  {
    product_data: keyboardProduct,
    path: 'keyboard'
  },
  {
    product_data: ssdProduct,
    path: 'ssd'
  },
  {
    product_data: mousePadProduct,
    path: 'mousepad'
  },
  {
    product_data: cpuProduct,
    path: 'cpu'
  },
  {
    product_data: hddProduct,
    path: 'hdd'
  }
]
