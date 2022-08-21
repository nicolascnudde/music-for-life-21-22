/**
 * Imports
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Styling
 */
const StyledSection = styled.section`
  margin: ${({ theme }) => theme.spacing.huge} 0;

  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledTitleContainer = styled.div`
  text-align: center;
`;

const StyledTitle = styled.h1`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.huge};

  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    margin-left: ${({ theme }) => theme.spacing.large};
    flex-basis: 50%;
    font-size: 8rem;
  }
`;

const StyledShape = styled.div`
  position: absolute;
  top: -65px;
  left: 50%;
  transform: translate(-50%);
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.dark} 0%,
    ${({ theme }) => theme.colors.pink} 100%
  );
  animation: morph 10s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  height: 200px;
  transition: all 1s ease-in-out;
  width: 200px;
  z-index: -1;

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    top: -50px;
  }
`;

const StyledTextContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    flex-basis: 50%;
  }
`;

const StyledText = styled.p`
  font-size: 1.2rem;
  font-weight: 200;
  margin-top: ${({ theme }) => theme.spacing.xl};
  strong {
    padding-left: ${({ theme }) => theme.spacing.small};
  }
  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    margin-top: unset;
    width: 70%;
  }
`;

/**
 * Interface(s)
 */
interface IntroSectionProps {
  text: string;
  title: string;
  extra?: string;
}

/**
 * Component
 */
const IntroSection = ({ text, title, extra }: IntroSectionProps) => {
  return (
    <StyledSection>
      <StyledTitleContainer>
        <StyledTitle>
          {title}
          <StyledShape />
        </StyledTitle>
      </StyledTitleContainer>

      <StyledTextContainer>
        <StyledText>
          {text}
          <strong>{extra}</strong>
        </StyledText>
      </StyledTextContainer>
    </StyledSection>
  );
};

/**
 * Export
 */
export default IntroSection;
