/**
 * Imports
 */
import { useState } from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import Layout from '../components/layout/Layout';
import { IntroSection } from '../components/sections';
import { Button } from '../components/buttons/Buttons';
import { Input, TextArea } from '../components/input/Input';

/**
 * Styles
 */
const FormContainer = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  align-items: center;
  justify-content: center;
  position: relative;
  background-size: cover;
  background-position: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.dark};
  border: 5px solid ${({ theme }) => theme.colors.white};

  > * {
    flex-basis: 100%;
  }
`;

const StyledH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: center;
`;

const StyledField = styled(Field)`
  background: none;
  padding: 1rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: ${({ theme }) => theme.spacing.large} 0;
  outline: none;
`;

const StyledButton = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => theme.spacing.regular};
  cursor: pointer;
  transition: 0.2s ease all;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.dark};
  }`

/**
 * Form validation schema
 */

/**
 * Component
 */
const DonatePage = () => {
  const [amount, setAmount] = useState(1);

  // Set the amount when changing the input field
  const handleAmount = (e: any) => {
    setAmount(e.target.value);
  };

  const validationSchema = Yup.object({
    amount: Yup.number().min(1, '1 EUR is the minimum amount.').required('*'),
  });

  // Handle the form submit
  const handleDonate = (e: any) => {
    e.preventDefault();

    //change url to render url of CLIENT
    fetch(`http://localhost:3000/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [{ id: 1, quantity: amount }],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
        console.log(url);
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <Layout title="Donate">
      <IntroSection
        title="Donate"
        text="Become a hero and support your favorite charity for the 2022 edition of Music for Life aka De Warmste Week, while getting some awesome stuff in return. Win-win."
      />

      <Formik
        initialValues={{
          amount: 1,
        }}
        validationSchema={validationSchema}
        onSubmit={handleDonate}
      >
        {({ errors, touched }) => (
          <FormContainer
            style={{ backgroundImage: `url("/assets/images/image-4.jpg")` }}
          >
            <StyledForm>
              <StyledH2>How much would you like to donate?</StyledH2>

              <StyledField
                id="amount"
                name="amount"
                type="number"
                value={amount}
                onChange={handleAmount}
              />

              {touched.amount && errors.amount ? (
                <small style={{ color: 'tomato' }}>{errors.amount}</small>
              ) : null}

              {/* Temporarily added a button to submit the form, there was a problem with the SubmitButton component */}
              <StyledButton type="submit">Donate</StyledButton>
            </StyledForm>
          </FormContainer>
        )}
      </Formik>
    </Layout>
  );
};

/**
 * Export
 */
export default DonatePage;
