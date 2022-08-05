import React from 'react';


import {Box, Button} from '@mui/material';
import {CustomTextField} from '../../Common/CustomTextField'
import {SteperForm} from './Form.styled';

import {useFormUtils} from "./Form.utils";

export const Form = () => {
    const {
        activeStep,
        error,
        state,
        errorMessage,
        fields,
        handleFinish,
        handleChange,
        handleBack,
        handleNext
    } = useFormUtils();

    return (
        <SteperForm>
            {fields.map(({ name, label, type }, index) => {
                return (
                    <Box key={name} sx={{width: '40%'}}>
                        {activeStep === index &&
                          <CustomTextField
                            label={label}
                            type={type}
                            name={name}
                            onChange={handleChange}
                            error={error}
                            value={state[name]}
                            errorMessage={errorMessage}
                          />}
                    </Box>
                )
            })}
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px',}}>
                {activeStep !== 0 && <Button onClick={handleBack} variant="contained" size="small">
                  Back
                </Button>
                }
                {activeStep <= 2 && <Button onClick={handleNext} variant="contained" size="small">
                  Next
                </Button>
                }
                {activeStep === 3 && <Button onClick={handleFinish} variant="contained" size="small">
                  Next
                </Button>
                }
            </Box>
        </SteperForm>
    );
}