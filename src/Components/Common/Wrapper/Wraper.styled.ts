import { Box, styled } from '@mui/material';

export const Links = styled(Box)(() => ({
  paddingTop: '80px',
  overflow: 'auto',
  gap: '10px',
  '&.MuiBox-root': {
    display: 'flex',
    flexDirection: 'column',
  },
  '& a': {
    color: '#2B3844',
    textDecoration: 'none',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '500'
  },
  '& a.active': {
    color: '#5382E7',
    borderRight: '1px solid #5382E7',
    '& svg path': {
      stroke: '#5382E7',
    }
  },
}))
export const NavBar = styled(Box)(() => ({
  width: '274px',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '30px',
}))