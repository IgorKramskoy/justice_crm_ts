import { MyProduct } from './Components/Pages/MyProduct';
import { Main } from './Components/Pages/Main';
import { Form } from './Components/Pages/Form';

export const routes = [
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/my_product',
    element: <MyProduct/>
  },
  {
    path: '/my_sales',
    element: <Form/>
  },
]