import { Box, styled } from '@mui/material';

export const Charts = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: 'none',
  gap: '20px',
  justifyContent: 'center',
  width: '100%'
}));
export const ChartsLeft = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '30%'
}));
export const Chart = styled(Box)(() => ({
  backgroundColor: '#FFFFFF'
}));
export const ChartsRight = styled(Box)(() => ({
  backgroundColor: '#FFFFFF',
  width: '70%'
}));