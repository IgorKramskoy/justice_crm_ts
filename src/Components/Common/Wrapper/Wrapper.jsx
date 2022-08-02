import React from 'react';

import { Box } from '@mui/material';
import { CustomNavLink } from '../CustomNavLink';
import { Links, NavBar } from './Wraper.styled';

import { links } from '../../../links';
import logo from '../../../assests/images/logo.svg'

export const Wrapper = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
      <NavBar>
        <img src={logo} alt="logo"/>
        <Links>
          {links.map(({path, image, text}) => (
            <CustomNavLink key={path} path={path} image={image} text={text}/>
          ))}
        </Links>
      </NavBar>
      <Box sx={{padding: '40px'}}>
        {children}
      </Box>
    </Box>
  );
}
