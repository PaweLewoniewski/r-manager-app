import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import BgCategory from "../../assets/img/categorymenu.webp";
import styled from "styled-components";
import { CartStep } from "../CartStep/CartStep";
import { DataStep } from "../DataStep/DataStep";
import { PaymentStep } from "../PaymentStep/PaymentStep";

function getSteps() {
  return ["Your Cart", "Data", "Payment method"];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <CartStep />;
    case 1:
      return <DataStep />;
    case 2:
      return <PaymentStep />;
    default:
      return "Unknown step";
  }
}

export const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

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
            Checkout
          </Typography>
        </Title>
        <Box sx={{ width: "100%", color: "white" }}>
          <Stepper activeStep={activeStep} sx={{ color: "white" }}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: { optional?: React.ReactNode } = {};
              // if (isStepOptional(index)) {
              //   labelProps.optional = <Typography variant="caption">Optional</Typography>;
              // }
              return (
                <Step
                  key={label}
                  {...stepProps}
                  sx={{
                    "& .MuiStepLabel-root .Mui-completed": {
                      color: "white", // circle color (COMPLETED)
                    },
                    "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                      {
                        color: "grey.500", // Just text label (COMPLETED)
                      },
                    "& .MuiStepLabel-root .Mui-active": {
                      color: "#8df700", // circle color (ACTIVE)
                    },
                    "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                      {
                        color: "common.white", // Just text label (ACTIVE)
                      },
                    "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                      fill: "black", // circle's number (ACTIVE)
                    },
                  }}
                >
                  <StepLabel {...labelProps}>
                    <Typography sx={{ color: "white" }}>{label}</Typography>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Box>
            {activeStep === steps.length ? (
              <Box>
                <Typography>Summary, Thank U for shopping</Typography>
                <Button variant="contained" onClick={handleReset}>
                  Reset
                </Button>
              </Box>
            ) : (
              <Box>
                <Typography>{getStepContent(activeStep)}</Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Box sx={{ padding: "10px" }}>
                    <Button
                      variant="contained"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  </Box>
                  <Box sx={{ padding: "10px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
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
  margin: 5px;
`;

const ContentPage = styled.div`
  margin: 0 auto;
  height: 100%;
  padding: 20px;
  width: 1000px;
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
