import { styled,  Typography } from '@mui/material';

export const Title = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '36px',
  lineHeight: '36px',
  color: '#2B3844',
  marginBottom: '10px',
}));
export const Description = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '14px',
  color: '#2B3844',
  opacity: 0.7,
  marginBottom: '30px',
}));