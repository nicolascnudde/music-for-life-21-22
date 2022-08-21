/**
 * Imports
 */
import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

/**
 * Styles
 */
const InputStyles = styled.span`
  input,
  textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fontFamilies.secondary};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    outline: none;
    margin-right: ${({ theme }) => theme.spacing.regular};
    padding-left: ${({ theme }) => theme.spacing.regular};
    padding-bottom: ${({ theme }) => theme.spacing.small};
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.large};
    @media (min-width: ${({ theme }) => theme.devices.tablet}) {
      margin-top: 0rem;
    }
  }

  textarea {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.small};
    margin-top: ${({ theme }) => theme.spacing.regular};
    border-top: 1px solid ${({ theme }) => theme.colors.white};
    max-width: 100%;
    line-height: 1.5;
    overflow: hidden;
    padding-bottom: 0;
    @media (min-width: ${({ theme }) => theme.devices.tablet}) {
      width: 80%;
    }
    @media (min-width: ${({ theme }) => theme.devices.desktop}) {
      width: 60%;
    }
  }
`;

/**
 * Interfaces
 */
interface InputField {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  rows?: number;
}

/**
 * Component
 */
export const Input = ({ id, name, placeholder, type }: InputField) => {
  return (
    <InputStyles>
      <Field
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
      />
    </InputStyles>
  );
};

export const TextArea = ({ id, name, rows, placeholder }: InputField) => {
  return (
    <InputStyles>
      <Field
        as="textarea"
        autoComplete="off"
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
      />
    </InputStyles>
  );
};
