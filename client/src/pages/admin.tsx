import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import { IntroSection } from '../components/sections';


const admin = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedFile, setSelectedFile] = useState(null);
  const [filesData, setFilesData] = useState(null);
  const [category, setCategory] = useState('eyes');

  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("Cookie", "connect.sid=s%3A5QIk84HlHT9o7Q4rNbc4X0Z1OIR0UaaF.79TB%2FvbjJqC%2F702in5yy9HcJz7ICep1qgdmkotDgDhk");
    
    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/files", requestOptions)
      .then(response => response.json())
      .then(result => setFilesData(result))
      .catch(error => console.log('error', error));
  }, []);
  

  const handleFileCange = (e) => {
    setSelectedFile(e.target.files[0])
  };

  const handleUpload = (e) => {
    e.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append("Cookie", "connect.sid=s%3A5QIk84HlHT9o7Q4rNbc4X0Z1OIR0UaaF.79TB%2FvbjJqC%2F702in5yy9HcJz7ICep1qgdmkotDgDhk");
    
    let formdata = new FormData();
    formdata.append("file", selectedFile, selectedFile.name);
    
    let requestOptions = {
      method: 'POST',
      // headers: myHeaders,
      credentials: 'same-origin',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/files/upload", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }



  return (
    <Layout>
      <IntroSection
        title="Admin"
        text="Become a hero and support your favorite charity for the 2022 edition of Music for Life aka De Warmste Week, while getting some awesome stuff in return. Win-win."
      />

      <form>
        <fieldset>
          <legend>What part of avatar</legend>
          <label for="category">Choose part of avatar:</label>

          <select name="category" id="category" value={category} onChange={handleCategory}>
            <option value="body">body</option>
            <option value="eyebrows">eyebrows</option>
            <option value="eyes">eyes</option>
            <option value="glasses">glasses</option>
            <option value="hair">hair</option>
            <option value="mouths">mouths</option>
            <option value="nose">nose</option>
            <option value="shirts">shirts</option>
            <option value="tops ">tops</option>
          </select> 
          <p>{category}</p>
        </fieldset>

        <fieldset>
          <legend>Add the file</legend>

          <label>
            Upload File
            <br/>
            <input type='file' name="file" onChange={handleFileCange} />
          </label>
        </fieldset>
        
        <br/>
        <button type="submit" onClick={handleUpload}>Upload File</button>
        <p>{selectedFile?.name}</p>
      </form>

      <div>
        <ul>
        {filesData && filesData.map(file => (
          <li>
            <img src={`http://localhost:3000/uploads/${file.filename}`} />
            <br/>
            <strong>name of file</strong>
            <p>{file.filename}</p>
            <br/>
            <strong>kind of avatar:</strong>
            <p>{file.filecategory}</p>
          </li>
        ))}
          
          </ul>
      </div>
    </Layout>
    );
};

export default admin;

