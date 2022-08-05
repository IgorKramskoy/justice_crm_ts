import React from "react";

export interface CustomTextFieldProps {
    label: string
    value?: number | string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    name: string
    error: boolean
    type: string
    errorMessage: string
}