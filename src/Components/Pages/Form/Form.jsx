import React, { useState } from 'react';


import { Box, Button } from '@mui/material';
import { CustomTextField } from '../../Common/CustomTextField'
import { SteperForm } from './Form.styled';

export const Form = () => {
  const [activeStep, setActiveStep] = useState(0);

  const fields = [{
    name: 'name',
    label: 'Имя',
    type: 'text',
    max_length: 255,
    min_length: 3,
    regex: '^[a-zA-Z\s]+$'
  }, {
    name: 'surname',
    label: 'Фамилия',
    type: 'text',
    max_length: 255,
    min_length: 3,
    regex: '^[a-zA-Z\s]+$'
  }, {
    name: 'age',
    label: 'Полных лет',
    type: 'number',
    min: 1,
    max: 100
  }, {
    name: 'email',
    label: 'Email',
    type: 'email'
  }]

  const handleNext = () => {
    if (activeStep === fields.length - 1) {
      console.log('LAST STEP')
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <SteperForm>
      {fields.map(({label, name, type}, index) => (
        <Box key={name} sx={{width: '40%'}}>
          {activeStep === index && <CustomTextField
            label={label}
            type={type}
            name={name}
          />}
        </Box>

      ))}
      <Box sx={{display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px',}}>
        {activeStep !== 0 && <Button onClick={handleBack} variant="contained" size="small">
          Back
        </Button>
        }
        <Button onClick={handleNext} variant="contained" size="small">
          Next
        </Button>
      </Box>
    </SteperForm>
  );
}