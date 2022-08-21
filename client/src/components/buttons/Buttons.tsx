/**
 * Imports
 */
import styled from 'styled-components';

/**
 * Styles
 */
const BtnStyles = styled.a`
  background: transparent;
  border: 2px ${({ theme }) => theme.colors.white} solid;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.regular};
  text-transform: uppercase;
  padding: ${({ theme }) => theme.spacing.small}
  ${({ theme }) => theme.spacing.large};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-decoration: none; 
  transition: all 0.2s ease;
  &:hover{ 
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.dark}
    }
  }
`;

const SubmitBtnStyles = styled.button`
  background: transparent;
  border: 2px ${({ theme }) => theme.colors.white} solid;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  padding: ${({ theme }) => theme.spacing.small}
    ${({ theme }) => theme.spacing.medium};
  text-transform: uppercase;
  cursor: pointer;
`;

const BtnSecondary = styled(BtnStyles)`
  border: 2px ${({ theme }) => theme.colors.pink} solid;
  &:hover {
    background-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.white};
  }
`;
const BtnTertiary = styled(BtnStyles)`
  border: 2px ${({ theme }) => theme.colors.green} solid;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }
`;

/**
 * Interfaces
 */
export interface ButtonLink {
  title: string;
  type?: 'primary' | 'secondary' | 'tertiary' | null; //a union is better than enums
  url?: string;
}

interface SubmitBtn {
  title: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: any;
  children: React.ReactNode;
  color: string;
}

/**
 * Components
 */
export const Button = ({ title, type, url }: ButtonLink) => {
  return (
    <>
      {type === 'primary' && (
        <div>
          <BtnStyles href={url}>{title}</BtnStyles>
        </div>
      )}

      {type === 'secondary' && (
        <div>
          <BtnSecondary href={url}>{title}</BtnSecondary>
        </div>
      )}
      {type === 'tertiary' && (
        <div>
          <BtnTertiary href={url}>{title}</BtnTertiary>
        </div>
      )}
    </>
  );
};

/**
 * This is a real button not a link element
 */
export const SubmitButton = ({ type, color, children, onClick }: SubmitBtn) => {
  return (
    <>
      <SubmitBtnStyles
        onClick={onClick}
        type={type}
        style={{
          border: `2px ${color} solid`,
          borderRadius: '3px',
          color: `${color}`,
        }}
      >
        {children}
      </SubmitBtnStyles>
    </>
  );
};

