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
  },
  '& a.active': {
    color: '#5382E7',
    borderRight: '1px solid #5382E7'
  },
}))
export const NavBar = styled(Box)(() => ({
  width: '274px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: '20px',
  paddingTop: '30px',
}))