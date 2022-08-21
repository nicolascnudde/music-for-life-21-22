/**
 * Imports
 */
import React, { ReactNode, useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import Burger from './burger/Burger';
import useMediaQuery from '../../hooks/useMediaQuery';

/**
 * Styles
 */
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.regular};
  padding-top: ${({ theme }) => theme.spacing.regular};

  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    display: flex;
  }
`;

const StyledLogos = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding-bottom: ${({ theme }) => theme.spacing.regular};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fontFamilies.secondary};
    font-size: 1.5rem;
    font-weight: 100;
    letter-spacing: -2px;
    font-weight: 200;
  }
`;

const StyledImage = styled(Image)`
  filter: brightness(0) invert(1);
`;

const StyledContent = styled.div``;

const Main = styled.main`
  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    flex-basis: 93%;
    height: calc(100vh - 2rem);
  }
`;

/**
 * Types
 */
type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

/**
 * Component
 */
const Layout = ({
  children,
  title = 'This is the default title',
}: LayoutProps) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 80rem)');

  return (
    <>
      <Head>
        <title>{title} | Music for Life by PGM Gent - Artevelde</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="next project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Burger open={open} setOpen={setOpen} />

        <Menu open={open} />

        <Header />

        <Main>
          <StyledLogos>
            <Link href="/">
              <a>Music for Life 21-22</a>
            </Link>

            <StyledImage
              src={require('/src/assets/images/artevelde.png')}
              width={200}
              height={100}
              alt="logo"
            />
          </StyledLogos>

          {/* Check if the user is on a desktop screen and if they are on the home page */}
          {/* If yes, the height of the main page will be exactly 100 view height for a clean look */}
          <StyledContent
            style={
              isDesktop && title === 'Home'
                ? { height: '80vh' }
                : { height: 'auto' }
            }
          >
            {children}
          </StyledContent>

          <Footer />
        </Main>
      </Container>
    </>
  );
};

/**
 * Export
 */
export default Layout;
