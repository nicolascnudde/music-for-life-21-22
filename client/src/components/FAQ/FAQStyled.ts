import styled from 'styled-components';

interface Props {
  open: boolean;
}

export const StyledAnswer = styled.div<Props>`
  p{
    color: ${({ theme }) => theme.colors.white};
  },
  }
  width: 100%;
  padding: ${({ theme }) => theme.spacing.regular};
  margin-top: ${({ theme }) => theme.spacing.regular};
  display: ${({ open }) => (open ? 'block' : 'none')};
  transition: transform 0.3s ease-in-out;
  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    width: 60%;
  }
`;
