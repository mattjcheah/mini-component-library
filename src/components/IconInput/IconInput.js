import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    bottomBorder: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    bottomBorder: 2,
    height: 36,
  },
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: ${({ size }) => size}px;
`;

const NativeInput = styled.input`
  border: 0;
  height: var(--height);
  font-size: var(--font-size);
  padding-left: var(--padding-left);
  border: none;
  border-bottom: var(--border-bottom) solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  width: var(--width);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper size={styles.iconSize}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <NativeInput
        {...delegated}
        style={{
          "--width": width + "px",
          "--height": `${styles.height / 16}rem`,
          "--padding-left": `${styles.height}px`,
          "--font-size": `${styles.fontSize / 16}rem`,
          "--border-bottom": styles.bottomBorder + "px",
        }}
      />
    </Wrapper>
  );
};

export default IconInput;
