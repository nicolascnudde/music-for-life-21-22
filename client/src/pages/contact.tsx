/**
 * Imports
 */
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { SubmitButton } from '../components/buttons/Buttons';
import { Input, TextArea } from '../components/input/Input';
import Layout from '../components/layout/Layout';
import { IntroSection } from '../components/sections';
import FAQ from '../components/FAQ/FAQ';

/**
 * Styles
 */
const InputStyles = styled.div`
  display: block;
  width: 100%;
  margin: ${({ theme }) => theme.spacing.large} 0;

  p {
    margin-bottom: -2rem;
  }

  span {
    margin-right: ${({ theme }) => theme.spacing.regular};
  }

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    display: flex;
    margin: ${({ theme }) => theme.spacing.large} 0;
  }
`;
const FormStyles = styled.div`
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing.huge};

  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    margin: ${({ theme }) => theme.spacing.large};
    margin-bottom: ${({ theme }) => theme.spacing.huge};
  }
`;
const StyledFAQContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  h3 {
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
`;

/**
 * interface
 */

/**
 * Form Validation
 */
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short, Please Enter a minimum of 2 characters!')
    .max(50, 'Too Long, Please Enter a maximum of 50 characters!')
    .required('*'),
  lastName: Yup.string()
    .min(2, 'Too Short, Please Enter a minimum of 2 characters!')
    .max(50, 'Too Long, Please Enter a maximum of 50 characters!')
    .required('*'),
  message: Yup.string()
    .min(10, 'Too Short, Please Enter a minimum of 10 characters!')
    .required('*'),
  email: Yup.string().email('Invalid email').required('*'),
});

/**
 * Component
 */

const ContactPage = () => {
  const [open, setOpen] = React.useState(false);
  //   const showAswers = () => setOpen(!open);
  return (
    <Layout title="Contact">
      <IntroSection
        title="Contact"
        text="Become a hero and support your favorite charity for the 2022 edition of Music for Life aka De Warmste Week, while getting some awesome stuff in return. Win-win."
      />
      <FormStyles>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            message: '',
            email: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form method="POST">
              <InputStyles>
                <p>Hello! My name is </p>
                <span>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                  />
                  {touched.firstName && errors.firstName ? (
                    <small style={{ color: 'red' }}>{errors.firstName}</small>
                  ) : null}
                </span>
                <span>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                  {touched.lastName && errors.lastName ? (
                    <small style={{ color: 'red' }}>{errors.lastName}</small>
                  ) : null}
                </span>
              </InputStyles>
              <p>and I’m looking for</p>
              <TextArea
                id="message"
                name="message"
                type="message"
                rows={4}
                placeholder="Write your message here..."
              />
              {touched.message && errors.message ? (
                <small style={{ color: 'red' }}>{errors.message}</small>
              ) : null}
              <InputStyles>
                <p> Get in touch with me at</p>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                />
                {touched.email && errors.email ? (
                  <small style={{ color: 'red' }}>{errors.email}</small>
                ) : null}
              </InputStyles>
              {/* <button type="submit">Send</button> */}
              <SubmitButton color="#fff" title="send" type="submit">
                send
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </FormStyles>
      <StyledFAQContainer>
        <h3>Frequently Asked Questions</h3>
        <FAQ
          open={open}
          setOpen={setOpen}
          type="first"
          question="What is Lorem Ipsum?"
          answer="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <FAQ
          open={open}
          setOpen={setOpen}
          type="second"
          question="Where does it come from?"
          answer="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        />
        <FAQ
          open={open}
          setOpen={setOpen}
          type="third"
          question="Why do we use it?"
          answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
        />
        <FAQ
          open={open}
          setOpen={setOpen}
          type="fourth"
          question="Where can I get some?"
          answer="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        />
      </StyledFAQContainer>
    </Layout>
  );
};

/**
 * Contact
 */
export default ContactPage;
