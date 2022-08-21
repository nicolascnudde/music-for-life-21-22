import React from 'react';
import styled from 'styled-components';
import { StyledAnswer } from './FAQStyled';
import { FaChevronCircleDown } from 'react-icons/fa';

const StyledFAQContainer = styled.div`
  div {
    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
  h4 {
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
    span {
      margin-right: ${({ theme }) => theme.spacing.small};
    }
    display: flex;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

const StyledFAQ = styled.div`
  padding: ${({ theme }) => theme.spacing.regular};
  transition: all 0.2s ease;
`;

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  question: string;
  answer: string;
  type: 'first' | 'second' | 'third' | 'fourth';
}

// const StyledFirstFAQ = styled(StyledFAQ)``;
// const StyledSecondFAQ = styled(StyledFAQ)``;
// const StyledFirstFAQ = styled(StyledFAQ)``;

const FAQ = ({ setOpen, open, question, answer, type }: Props) => {
  return (
    <StyledFAQContainer>
      <StyledFAQ onClick={() => setOpen(!open)}>
        <h4>
          <span>
            <FaChevronCircleDown />
          </span>
          <span>Question: {question}</span>
        </h4>
        <StyledAnswer open={open}>
          <p>{answer}</p>
        </StyledAnswer>
      </StyledFAQ>
    </StyledFAQContainer>
  );
};

export default FAQ;
