import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


interface InputTextFieldProps {
    label:string;
}

export const InputTextField = ({label}:InputTextFieldProps) => {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="text-field" label={label} variant="filled" color='primary' />
    </Box>
  );
}