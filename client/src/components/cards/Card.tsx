/**
 * Imports
 */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

/**
 * Styles
 */
const SectionStyles = styled.div`
  height: 100%;
  padding: ${({ theme }) => theme.spacing.large};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  opacity: 0.75;
`;

const StyledContainer = styled.section``;

/**
 * Interface(s)
 */
export interface LandingSections {
  color: string;
  image: string;
  url: string;
  alt: string;
}

/**
 * Component
 */
const Card = ({ color, image, url, alt }: LandingSections) => {
  return (
    <StyledContainer>
      <Link href={url}>
        <a>
          <SectionStyles
            style={{ backgroundImage: `url("/assets/images/${image}")` }}
          >
            <StyledOverlay
              style={{
                background: `linear-gradient(${color}, #111)`,
              }}
            />
            <Image
              src={image}
              height={100}
              width={100}
              objectFit="contain"
              alt={alt}
            />
          </SectionStyles>
        </a>
      </Link>
    </StyledContainer>
  );
};

/**
 * Export
 */
export default Card;
