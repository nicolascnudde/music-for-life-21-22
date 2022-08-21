/**
 * Imports
 */
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { BurgerStyles } from './Burger.styled';

/**
 * Styles
 */
const NavStyles = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.devices.desktopL }) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

/**
 * Interface
 */
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

/**
 * Component
 */
const Burger = ({ setOpen, open }: Props) => {
  return (
    <NavStyles>
      <Link href="/">
        <a>
          <Image
            src={require('/src/assets/images/flame.png')}
            height={100}
            width={100}
            alt="flame logo"
          />
        </a>
      </Link>

      <BurgerStyles open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyles>
    </NavStyles>
  );
};

/**
 * Export
 */
export default Burger;
