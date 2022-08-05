import React, {useState} from 'react';


import {Box, Button} from '@mui/material';
import {CustomTextField} from '../../Common/CustomTextField'
import {SteperForm} from './Form.styled';
import {TState} from "./Form.types";

interface Fields {
    name: keyof TState
    label: string
    type: string
    max_length?: number
    min_length?: number
    regex?: string
    min?: number
    max?: number
}

export const Form = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [error, setError] = useState(false);
    const [required, setRequired] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [state, setState] = useState<Record<keyof TState, string | number>>({
        name: '',
        surname: '',
        age: 0,
        email: '',
    });

    const regEmail = /\S+@\S+\.\S+/;
    const fields: Fields[] = [{
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
        if (activeStep < fields.length - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name)
        if (e.target.name === 'name' || e.target.name === 'surname') {
            setRequired(true)
            if (e.target.value.length < 3) {
                setError(true)
                setErrorMessage('Слишком короткий!')
            }
            if (e.target.value.length > 255) {
                setError(true)
                setErrorMessage('Слишком длинный!')
            }
            if (e.target.value.length > 3 && e.target.value.length < 255) {
                setError(false)
                setRequired(true)
                setErrorMessage('')
            }
            setState(prevState => {
                return {...prevState, [e.target.name]: e.target.value};
            });
        }
        if (e.target.name === 'age') {
            setRequired(true)
            if (e.target.value.length === 0) {
                setRequired(true)
            }
            if (e.target.value.length === 1) {
                setError(true)
                setErrorMessage('Слишком короткий!')
            }
            if (e.target.value.length > 100) {
                setError(true)
                setErrorMessage('Слишком длинный!')
            }
            if (e.target.value.length > 1 && e.target.value.length < 100) {
                setError(false)
                setErrorMessage('')
                setRequired(false)
            }
            setState(prevState => {
                return {...prevState, [e.target.name]: e.target.value};
            });
        }
        if (e.target.name === 'email') {
            setRequired(true)
            if (!regEmail.test(e.target.value)) {
                setError(true)
                setErrorMessage('Некоректный Email!')
            }
            if (regEmail.test(e.target.value)) {
                setError(false)
                setErrorMessage('')
                setRequired(false)
            }
            setState(prevState => {
                return {...prevState, [e.target.name]: e.target.value};
            });
        }
    }
    const handleFinish = () => {
        if (error || required) {
            console.log('Некоректные данные!')
        } else {
            console.log(state)
        }
    }

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