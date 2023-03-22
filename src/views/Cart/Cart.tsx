import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import BgCategory from "../../assets/img/categorymenu.webp";

const steps = [
  "Order Cart",
  "Data",
  "Payment",
];

export const Cart = () => {
  const [activeStep, setActiveStep] = React.useState(0);

//   const isStepOptional = (step: number) => {
//     return step === 1;
//   };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Wrapper>
      <ContentPage>
        <Title>
          <Typography variant="h4" sx={{ color: "white" }}>
            Your Cart
          </Typography>
        </Title>
        <Box sx={{ width: "100%", color: "white" }} >
          <Stepper activeStep={activeStep} sx={{ color: "white" }}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
            //   if (isStepOptional(index)) {
            //     labelProps.optional = (
            //       <Typography variant="caption" sx={{ color: "white" }}>Optional</Typography>
            //     );
            //   }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}> <Typography sx={{ color: "white" }}>{label}</Typography></StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                summary and thank U for order
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 ,color:'black'}}
                  variant="contained"
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext} variant="contained" color="primary">
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </ContentPage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background: url(${BgCategory}) no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  position: relative;
  margin:5px;
`;

const ContentPage = styled.div`
  margin: 0 auto;
  height: 100%;
  padding: 20px;
  width:1000px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  z-index: 2;
  border-left: 1px solid white;
  border-right: 1px solid white;
  background-color: rgba(48, 48, 48, 0.5);
  backdrop-filter: blur(10px);
  @media (max-width: 900px) {
    flex-wrap: wrap;
    height: auto;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid white;
  width: 100%;
  margin: 20px 5px;
`;
