import styled from "styled-components";

export const StripesShape = () => {
    return (
        <StripesContener>
        <StripeOne />
        <StripeOne />
        <StripeOne />
        <StripeOne />
        <StripeOne />
        <StripeOne />
        <StripeOne />
        <StripeOne />
      </StripesContener>
    )
}

const StripesContener = styled.ul`
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 0%;
  left: -25%;
  transform: translate(0%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  li:nth-child(even) {
    width: 0%;
    transform: translate(40%, 60%) rotate(-45deg) skew(-45deg);
  }
`;

const StripeOne = styled.li`
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
  transform: translate(0%, 50%) rotate(-45deg) skew(-45deg);
`;