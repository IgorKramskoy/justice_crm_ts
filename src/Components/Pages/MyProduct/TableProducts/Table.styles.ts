import {
  styled,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';

export const StyledTableCell = styled(TableCell)(() => ({
  borderBottom: 'none',
  fontFamily: 'Inter',
  fontSize: '13px',
  fontWeight: '400',
  color: 'rgb(43,56,68, 0.7)',
  fontStyle: 'normal',
}));
export const StyledTableCellHead = styled(TableCell)(() => ({
  backgroundColor: '#2B3844',
  fontFamily: 'Inter',
  fontSize: '14px',
  color: '#FFFFFF',
  fontWeight: '400',
}));

export const Container = styled(TableContainer)(() => ({
  '&.MuiPaper-root.MuiTableContainer-root': {
    color: 'none',
    borderRadius: '0px',
  },
}));

export const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
