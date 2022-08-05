import React from 'react';

import {
    Box,
    TextField,
} from '@mui/material';
import {TypographyError} from './CustomTextField.styles';

import {CustomTextFieldProps} from "./CustomTextField.types";

export const CustomTextField = (
    {
        label,
        value,
        onChange,
        name,
        error,
        type,
        errorMessage,
    }: CustomTextFieldProps
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
            />
            {errorMessage ? (
                <TypographyError variant="caption">
                    {errorMessage}
                </TypographyError>
            ) : null}
        </Box>
    )
}