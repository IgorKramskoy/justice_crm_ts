import { MyProduct } from './Components/Pages/MyProduct';
import { Main } from './Components/Pages/Main';

export const routes = [
  {
    path: '/',
    element: <Main/>,
  },
  {
    path: '/my_product',
    element: <MyProduct/>,
  },
]