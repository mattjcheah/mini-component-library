/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: "0.5rem",
    borderRadius: "4px",
  },
  medium: {
    height: "0.75rem",
    borderRadius: "4px",
  },
  large: {
    height: "1.5rem",
    borderRadius: "8px",
  },
};

const Progress = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: 23.125rem;
  height: ${({ size }) => SIZES[size].height};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: ${({ size }) => SIZES[size].borderRadius};

  ${({ size }) =>
    size === "large" &&
    css`
      padding: 4px;
    `}
`;

const BarWrapper = styled.div`
  /* Trim corners when progress is near 100% */
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${({ value }) => value}%;
  border-radius: 4px 0 0 4px;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Progress
      size={size}
      role="progressbar"
      aria-valuenow={value}
      aria-label="Progress"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper size={size}>
        <Bar value={value} />
      </BarWrapper>
    </Progress>
  );
};

export default ProgressBar;
