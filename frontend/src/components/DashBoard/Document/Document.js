import React, { useState } from 'react';
import './Document.css';
import axios from 'axios';

const Document = () => {
  const [inputValue, setInputValue] = useState(''); // State to store the input value

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    console.log('Input Value:', inputValue);
    const response=await axios.post(process.env.REACT_APP_BASE_URL+"documents/",{
      document:JSON.parse({
        aadhar:inputValue
      })
    },{
      headers:{
        Authorization:"Token "+token
      }
    })
    console.log(response)
  };

  return (
    <div className="user-dashboard3 profile_Pad">
      <div className="row_dbProfile">
        <div>
          <div className="doc_upper_content">
            <div className="mb-3">
              <br /><br />
              <label htmlFor="formFile" className="form-label">Upload Your Document For Verification</label>
              <input
                type="text"
                className="form-control"
                placeholder="Input"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <button type="button" className="btn btn-outline-success" onClick={handleFormSubmit}>Upload</button>
          </div>
          <div className="doc_lower_content">
            <div className="status">
              <div className="col">Verification Status :</div>
              <div className="col"><h5>Verified</h5></div>
            </div>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;