import React from 'react';

import {
  Box,
  TextField,
} from '@mui/material';
import { TypographyError } from './CustomTextField.styles';

export const CustomTextField = (
  {
    label,
    value,
    onChange,
    name,
    error,
    type,
    errorMessage,
    disabled
  }
) => {
  return (
    <Box>
      <TextField
        fullWidth
        label={label}
        value={value}
        name={name}
        onChange={onChange}
        error={error}
        type={type}
        disabled={disabled}
      />
      {errorMessage ? (
        <TypographyError variant="caption">
          {errorMessage}
        </TypographyError>
      ) : null}
    </Box>
  )
}