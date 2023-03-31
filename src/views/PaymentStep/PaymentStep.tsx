import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

export const PaymentStep = () => {
    return (
        <Wrapper>
            <ContentPage>
                <Title>
                    <Typography component={"span"} sx={{ color: "white" }}>
                        Payment Mthod
                    </Typography>
                </Title>
                <ContentBox>
                    <FormControl>
                        {/* <FormLabel id="demo-radio-buttons-group-label" sx={{
                            color: 'white', '&:active': {
                                color: 'white',
                            },
                        }}>Choose</FormLabel> */}
                        <RadioGroup
                            aria-labelledby="radio-buttons-group-label"
                            defaultValue="PayPal"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Paypal" control={<Radio />} label="PayPal" />
                            <FormControlLabel value="BankTransfer" control={<Radio />} label="Bank Transfer" />
                            <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
                        </RadioGroup>
                    </FormControl>
                </ContentBox>
            </ContentPage>
        </Wrapper>
    );
}


const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid white;
  margin: 20px 5px;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap:wrap;
  border-bottom: 1px solid white;
  padding: 20px;
`;