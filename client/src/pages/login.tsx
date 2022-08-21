import { Formik } from 'formik'
// import { useState } from 'react'
import * as yup from 'yup';
import styled from 'styled-components';
import { useState } from 'react';
import Layout from '../components/layout/Layout';


const FormLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    
    let raw = JSON.stringify({
      "email": email,
      "password": password
    });
    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      credentials: 'same-origin',
      body: raw,
    };
    
    fetch("http://localhost:3000/login", requestOptions)
      .then(response => {
        console.log(response.headers.get('set-cookie'))
        console.log(document.cookie);
        return response.json();
      })
      .then(result => setToken(result))
      .catch(error => console.log('error', error));
  }


  return (
    <Layout>
    <form>
      <label>
        Email: 
        <input type="text" name="email" onChange={handleChangeEmail}/>
      </label>

      <br/>
      <label>
        password: 
        <input type="password" name="password" onChange={handleChangePassword}/>
      </label>

      <br/>
      <button type="submit" onClick={handleLogin}>Login</button>
    </form>

    {token && <p>{JSON.stringify(token)}</p>}
    </Layout>
  )
}

export default FormLogin
