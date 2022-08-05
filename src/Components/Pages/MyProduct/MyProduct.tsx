import React from 'react';

import { Box} from '@mui/material';

import { TableProduct } from './TableProducts';
import { Description, Title } from './MyProduct.styles';

export const MyProduct = () => {
  return (
    <Box>
      <Box sx={{textAlign: 'left'}}>
        <Title variant="h3" >My product</Title>
        <Description variant="subtitle1">Product table</Description>
      </Box>
      <TableProduct/>
    </Box>
  );
}