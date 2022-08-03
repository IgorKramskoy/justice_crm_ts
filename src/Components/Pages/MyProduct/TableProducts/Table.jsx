import React from 'react';

import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper, Typography,
} from '@mui/material';
import {
  Container,
  StyledTableCell,
  StyledTableCellHead,
  StyledTableRow
} from './Table.styles';

import { useAppSelector } from '../../../../app/hooks';


export const TableProduct = () => {
  const {beers} = useAppSelector(state => state.beer);
  console.log(beers)

  if (beers.length === 0) {
    return <Typography variant="h1">Нет пивка</Typography>
  }
  return (
    <Container component={Paper}>
      <Table sx={{minWidth: 1200,backgroundColor: 'none',}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCellHead>Name</StyledTableCellHead>
            <StyledTableCellHead align="right">Logo</StyledTableCellHead>
            <StyledTableCellHead align="center">Date</StyledTableCellHead>
            <StyledTableCellHead align="center">Yeast</StyledTableCellHead>
            <StyledTableCellHead align="center">IBU</StyledTableCellHead>
            <StyledTableCellHead align="center">EBC</StyledTableCellHead>
            <StyledTableCellHead align="center">ABV</StyledTableCellHead>
          </TableRow>
        </TableHead>
        <TableBody>
          {beers?.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell sx={{opacity: 'none',}} align="right">
                <img
                  src={row.image_url}
                  alt="logo"
                  width="50px"
                  height="150px"
                />
              </StyledTableCell>
              <StyledTableCell align="center">{row.first_brewed}</StyledTableCell>
              <StyledTableCell align="center">{row.ingredients.yeast}</StyledTableCell>
              <StyledTableCell align="center">{row.ibu}</StyledTableCell>
              <StyledTableCell align="center">{row.ebc}</StyledTableCell>
              <StyledTableCell align="center">{row.abv}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}