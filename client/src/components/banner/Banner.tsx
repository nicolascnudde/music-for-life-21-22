/**
 * Imports
 */
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

/**
 * Styles
 */
const StyledItem = styled.div`
  height: 100%;

  a {
    text-decoration: none; // Remove the underline from the link (Storybook)
  }
`;

const StyledContainer = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;

  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    height: 100%;
  }

  &:hover {
    h2 {
      @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
        font-size: 8rem;
      }
    }
  }
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

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  font-size: 5rem;
  transition: all 0.2s ease;

  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    font-size: 7rem;
  }
`;

/**
 * Interface
 */
 export interface BannerProps {
   /** The background color for the banner */
  color: string;

  /** The title which appears in the middle of the banner */
  title: string;

  /** The banner's background image */
  image: string;

  /** The type of the banner, big or small grid -- won't have any effect in Storybook because it changes the grid */
  type?: 'big' | 'small';

  /** The URL which the banner will link to */
  url: string;
}

/** Creates a Banner component that has a background image with colored overlay, a title and will link to a specific page */
const Banner = ({ color, image, title, type, url }: BannerProps) => {
  return (
    <StyledItem
      style={
        // Adjust the grid item's height based on the type
        type === 'big'
          ? { gridColumn: 'span 2', gridRow: 'span 2' }
          : type === 'small'
          ? { gridColumn: 'span 1', gridRow: 'span 1' }
          : { height: '600px' }
      }
    >
      <Link href={url}>
        <a>
          <StyledContainer
            style={{ backgroundImage: `url("/assets/images/${image}")` }}
          >
            <StyledOverlay
              style={{
                background: `linear-gradient(${color}, #111)`,
              }}
            />

            <StyledTitle>{title}</StyledTitle>
          </StyledContainer>
        </a>
      </Link>
    </StyledItem>
  );
};

/**
 * Export
 */
export default Banner;
