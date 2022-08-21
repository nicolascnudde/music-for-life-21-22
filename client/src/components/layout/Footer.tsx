/**
 * Imports
 */
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { Button } from '../buttons/Buttons';

/**
 * Styles
 */
const StyledFooter = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    margin: 0;
    padding: ${({ theme }) => theme.spacing.regular} 0;
    height: 5vh;
  }

  @media (min-width: ${({ theme }) => theme.devices.desktopXL}) {
    margin: ${({ theme }) => theme.spacing.regular} 0;
  }
  
  a {
    transition: all 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.pink};
    }
    &:not(:first-child) {
      margin-left: ${({ theme }) => theme.spacing.regular};
    }
  }
`;

/**
 * Component
 */
const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>© 2022 • Artevelde University of Applied Sciences</p>
      </div>

      <div>
        <Link href="/privacy-policy">
          <a>
            <span>Privacy Policy</span>
          </a>
        </Link>

        <Link href="/cookies">
          <a>
            <span>Cookies</span>
          </a>
        </Link>
      </div>
    </StyledFooter>
  );
};

/**
 * Export
 */
export default Footer;
