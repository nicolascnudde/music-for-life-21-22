/**
 * Imports
 */
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { Button } from '../buttons/Buttons';
import { useRouter } from 'next/router';

/**
 * Styles
 */
const PrimaryNav = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    display: flex;
  }
`;

const StyledImage = styled(Image)`
  transform: scale(1);
  transition: all 0.2s ease;
  animation: heartbeat 2s infinite;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavStyles = styled.nav`
  margin-top: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  writing-mode: vertical-lr;
  flex-direction: row-reverse;
  align-items: baseline;
  transform: rotate(-180deg);
  gap: ${({ theme }) => theme.spacing.medium};

  a {
    border-left: 2px solid transparent;
    padding: ${({ theme }) => theme.spacing.regular};
    transition: all 0.2s ease;

    &:first-child {
      border-left: 2px solid white;

      &:hover {
        border: 2px solid pink;
      }
    }

    &:hover {
      border-left: 2px solid pink;
    }
  }

  div {
    writing-mode: vertical-lr;
    display: inline;
  }

  .active {
    border-left: 2px solid pink;
  }
`;

/**
 * Component
 */
const Nav = () => {
  const router = useRouter();
  return (
    <PrimaryNav>
      <div>
        <Link href="/">
          <a>
            <StyledImage
              src={require('/src/assets/images/flame.png')}
              height={80}
              width={80}
              alt="flame logo"
            />
          </a>
        </Link>
      </div>
      <NavStyles>
        <Button title="Donate" type="primary" url="/donate" />

        <Link href="/services">
          <a className={router.pathname == '/services' ? 'active' : ''}>
            Services
          </a>
        </Link>

        <Link href="/about">
          <a className={router.pathname == '/about' ? 'active' : ''}>About</a>
        </Link>

        <Link href="/contact">
          <a className={router.pathname == '/contact' ? 'active' : ''}>
            Contact
          </a>
        </Link>
      </NavStyles>
    </PrimaryNav>
  );
};

/**
 * Export
 */
export default Nav;
